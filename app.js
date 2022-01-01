const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
const mongoose = require("mongoose");
const rewrite = require("express-urlrewrite")

// connection to mongodb using mongoose
mongoose.connect("mongodb://localhost:27017/pixelpaste", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);


// setting up app
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



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
  }
})
const Post = mongoose.model("Post", postSchema)


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

app.get("/privacy-policy", function(req, res) {
  res.render("privacy-policy")
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
        author: req.body.author.toString(),
        postCont: req.body.story.toString()
      };
      var add = new Post(story);
      add.save()
      res.redirect("/stories/" + addUrl.replace(/\s/g, "-"))
    } else {
      var addUrl = _.lowerCase(req.body.title)
      const story = {
        url:addUrl.toString(),
        title: req.body.title.toString(),
        author: req.body.author.toString(),
        postCont: req.body.story.toString()
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
})


// update post
app.get("/compose/:id", function(req,res) {
  Post.find({
    _id: req.params.id
  }, function(err, results) {
    if (err) {
      console.log(err)
    } else if (results.length > 0) {
      console.log(results[0].title)
      res.render("compose", {
        title: results[0].title,
        story: results[0].postCont,
        author: results[0].author,
        id:results[0]._id
      })
    }
  })
})

app.post("/compose/:id", function(req,res) {
  Post.findOneAndUpdate({
    _id: req.params.id.toString()
  },{postCont: req.body.story.toString()},null, function(err, results) {
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
})

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
