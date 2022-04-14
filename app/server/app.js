// Express requiries
const express = require("express"),
    app = express(),
    routes = require("./routes/index"),
    port = 8080,
    bodyParser = require("body-parser");

// Using body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Using routes
app.use('/api', routes)

// +----------------------+
// | Tables_in_man_sys_db |
// +----------------------+
// | Departments          |
// | Employees            |
// | Tasks                |
// +----------------------+

app.listen(port, ()=>{console.log(`Listening on ${port}`)})