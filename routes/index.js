var express = require('express');
var router = express.Router();

// Messages to be displayed
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

// POST new
router.post('/new', function(req, res, next) {
  const {messageText, messageUser} = req.body;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
})

module.exports = router;
