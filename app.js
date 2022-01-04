const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const LocalStrategy = require('passport-local').Strategy


// setting up app
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(session({
  secret:"Our little secret.",
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());


// connection to mongodb using mongoose
mongoose.connect("mongodb://localhost:27017/pixelpaste", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


// creating collection
const postSchema = new mongoose.Schema({
  url: {
    type:String,
    required:true
  },
  title: {
    type: String,
    required: true
  },
  postCont: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  feature: {
    type: Number,
    required:true
  }
});
const Post = mongoose.model("Post", postSchema);


const userSchema = new mongoose.Schema ({
  email:String,
  password:String,
  author:{
    type:String,
    unique:true
  }
});
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User",userSchema)

passport.use(new LocalStrategy({
    usernameField: 'email',
  },User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.get("/", function(req, res) {
  Post.find(function(err, results) {
    if (err) {
      console.log(err)
    } else {
      res.render("home", {
        posts: results
      });

    }
  })
});

app.get("/contact-us", function(req, res) {
  res.render("contact")
});

app.get("/logout",function(req, res){
  req.logout()
  res.redirect("/login")
});

app.get("/privacy-policy", function(req, res) {
  res.render("privacy-policy")
});

app.get("/register",function(req,res){
  res.render("register", {
    error: ""
  })
});

app.get("/login",function(req,res){

  if (req.get('referer') === "http://localhost:3000/login") {
    res.render("login",{
      error:"Invalid Email Or Password"
    })
  } else {
    res.render("login", {
      error:""
    })
  }

});

app.get("/dashboard",function(req,res){
  if (req.isAuthenticated()){
    res.render("dashboard")
  } else {
    res.redirect("/login")
  }
});


app.post("/register",function(req,res){
  if (req.body.password != req.body.cpassword) {
    res.render("register", {
      error:"Password Don't Match"
    })
  } else {
    User.register({username:req.body.email,author:req.body.author},req.body.password,function(err,user){
      if (err) {
        if (err.name == "UserExistsError") {
          res.render("register", {
            error:"Email Already Exist"
          })
        } else if (err.name == "MongoError") {
          res.render("register", {
            error:"Pick Different Author Name"
          })
        }
      } else {
        passport.authenticate("local")(req,res,function(){
          res.redirect("/dashboard");
        });
      }
    });
  };
});

app.post("/login",function(req,res){

  const user = new User({
    username:req.body.email,
    password:req.body.password
  });

  req.login(user,function(err){
    if (err) {
      console.log(err)
      res.redirect("/login", {
        error:"not ok"
      })
    } else {
      passport.authenticate("local",{failureRedirect:'/login'})(req,res,function(){
        res.redirect("/dashboard")
      });
    }
  });
});


// load post
app.get("/stories/:title", function(req, res) {
  const titles = _.lowerCase(req.params.title)
  Post.find({
    url: titles
  }, function(err, results) {
    if (err) {
      console.log(err)
    } else if (results.length > 0) {

      res.render("post", {
        title: results[0].title,
        story: results[0].postCont,
        author: results[0].author,
      })

    } else {
      console.log(results)
      res.render("404")
    }
  })
});


// compose post
app.get("/compose", function(req, res) {
  res.render("compose", {
    title: "",
    story: "",
    author: ""
  })
});

app.post("/compose", function(req, res) {
  if (req.isAuthenticated()){
    var Author = req.user.author
  } else {
    var Author = "Anonymous"
  }
  const titleH = _.lowerCase(req.body.title)
  Post.find({
    url:titleH
  }, function(err , results){
    if (err) {
      console.log(err)
    } else if (results.length > 0) {
      var rnd = Math.floor(Math.random() * 1000);
      var addUrl = titleH + " " + rnd
      const story = {
        url:addUrl.toString(),
        title: req.body.title.toString(),
        author: Author,
        postCont: req.body.story.toString(),
        feature:req.body.feature
      };
      var add = new Post(story);
      add.save()
      res.redirect("/stories/" + addUrl.replace(/\s/g, "-"))
    } else {
      var addUrl = _.lowerCase(req.body.title)
      console.log(req.body.author)
      const story = {
        url:addUrl.toString(),
        title: req.body.title.toString(),
        author: Author,
        postCont: req.body.story.toString(),
        feature:req.body.feature
      };
      var add = new Post(story);
      add.save()
      res.redirect("/stories/" + addUrl.replace(/\s/g, "-"))
    }
  })
});


// delete post
app.get("/:id", function(req,res) {
  Post.findOneAndDelete ({
    _id:req.params.id
  }, function(err, post) {
    if (!err && post) {
      console.log("deleted")
    } else {
      console.log(err)
    }
  }
  )
  res.redirect("/")
});


// update post
app.get("/compose/:id", function(req,res) {
  Post.find({
    _id: req.params.id
  }, function(err, results) {
    if (err) {
      console.log(err)
    } else if (results.length > 0) {
      res.render("compose", {
        title: results[0].title,
        story: results[0].postCont,
        author: results[0].author,
        id:results[0]._id
      })
    }
  })
});

app.post("/compose/:id", function(req,res) {
  Post.findOneAndUpdate({
    _id: req.params.id.toString()
  },{postCont: req.body.story.toString(),title:req.body.title.toString()},null, function(err, results) {
    if (err) {
      console.log(err)
    }
  })
  Post.find({
    _id:req.params.id.toString()
  },function(err,results){
    if (err) {
      console.log(err)
    } else {
      res.redirect("/stories/" + results[0]["url"].replace(/\s/g, "-"))
    }
  })
});


// unknown urls
app.get('*', function(req, res) {
  res.status(404).render('404');
});

app.use((err, req, res, next) => {
  if (!err) return next();
  return res.status(400).json({
    status: 400,
    error: 'OOps! Bad request',
  });

});

app.listen("3000", function() {
  console.log("server started at port 3000");
});
