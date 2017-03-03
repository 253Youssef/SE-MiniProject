var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/'});

var projectController = require('./controllers/projectController');

//Index Route
router.get('/', projectController.HomePage);
router.get('/index.ejs',projectController.HomePage);

// Register Route
router.get('/register.ejs', projectController.RegisterPage);

// Login Route
router.get('/login.ejs', projectController.LoginPage);

// Profile Route
router.get('/profile.ejs', projectController.ProfilePage);

// Portfolio Route
router.get('/createPortfolio.ejs', projectController.PortfolioPage);

// Works Route
router.get('/works.ejs', projectController.WorksPage);

// Register Operation
router.post('/register',projectController.Register);

// Login Operation
router.post('/login',projectController.Login);

// Add link
router.post('/link', projectController.AddLink);

// Add link
router.post('/image', upload.any(), projectController.AddImage);

// Create Portfolio
router.post('/createPortfolio', projectController.Portfolio);

// export router

module.exports = router;
