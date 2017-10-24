// Dependencies
// =============================================================
const express    = require("express"),
      bodyParser = require("body-parser"),
      path       = require("path"),
      request    = require('request'),
      exphbs     = require('express-handlebars');
// Sets up the Express App
// =============================================================
const app = express(),
      PORT = 3333;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/assets", express.static(path.join(__dirname + '/assets')));



//Handlebars
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


//Starting server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`====🌎 🚈 🖥️ 📡===> App listening on PORT ${port} ✅`);
});
