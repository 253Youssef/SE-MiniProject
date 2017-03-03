let user = require('../models/user');
let link = require('../models/link');
let image = require('../models/image');
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/'});
global.usernameGlobal;
global.userGlobal;
let projectController =
{
  HomePage: function(req,res)
  {
    res.render('index');
  },

  LoginPage: function(req,res)
  {
    res.render('../views/login');
  },

  RegisterPage: function(req,res)
  {
    res.render('../views/register');
  },

  ProfilePage: function(req,res)
  {
    res.render('../views/profile');
  },

  PortfolioPage: function(req,res)
  {
    res.render('../views/createPortfolio');
  },

  WorksPage: function(req,res)
  {
    res.render('../views/works');
  },

  Register: function(req,res)
  {
      var portfolio = false;
      let User = new user({hasPortfolio: portfolio,username: req.body.username, password: req.body.password});
      console.log(req.body.username);

      User.save(function(err, savedUser)
      {
        if(err)
        {
          console.log(err);
          return res.status(500).send();
        }
        return res.status(200).send();
      })
      res.render('../views/login');
  },

  Login: function(req, res)
  {
    var username =  req.body.username;
    var password =  req.body.password;
    var portfolio = false;
    user.findOne({username: req.body.username, password: req.body.password}, function(err, user)
    {
      if(err)
      {
        console.log(err);
      }

      if(!user)
      {
        console.log(err);
      }
      else
      {
        userGlobal = user;
        usernameGlobal = username;
        portfolio = user.hasPortfolio;
        console.log('works ' +portfolio);
        if(portfolio)
        {
          res.render('../views/hasPortfolioTrue', {username, password});
        }
        else
        {
          res.render('../views/hasPortfolioFalse', {username, password});
        }
      }
    })
  },

  Portfolio: function(req, res)
  {
    var username = usernameGlobal;
    let newLink =
    {
        username: usernameGlobal,
        URL: req.body.link
    }
    user.update({username: username},
    {
      username: username,
      password: userGlobal.password,
      hasPortfolio: 'true'
    }, function(err, numberAffected, rawResponse)
    {
    })
    //
    link.collection.insert(newLink);
    res.render('../views/hasPortfolioTrue', {username});
  },

  AddLink: function(req, res)
  {
    var username = usernameGlobal;
    let newLink =
    {
        username: usernameGlobal,
        URL: req.body.link
    }
    link.collection.insert(newLink);
    res.render('../views/hasPortfolioTrue', {username, link});

  },

  AddImage: function(req, res)
  {
    var username = usernameGlobal;
    let newImage =
    {
        username: username,
        path: req.file
    }
    image.collection.insert(newImage);
    res.render('../views/hasPortfolioTrue', {username});
    res.send(req.files);
  }

}

module.exports = projectController;
