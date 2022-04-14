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

// --------------------- Department ---------------------
// -------+------------------+------+-----+---------+----------------+
// | Field | Type             | Null | Key | Default | Extra          |
// +-------+------------------+------+-----+---------+----------------+
// | DID   | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
// | Title | varchar(100)     | YES  |     | NULL    |                |
// | Size  | int(11)          | YES  |     | NULL    |                |
// +-------+------------------+------+-----+---------+----------------+


// --------------------- Employees ---------------------
// +------------------+------------------+------+-----+---------+----------------+
// | Field            | Type             | Null | Key | Default | Extra          |
// +------------------+------------------+------+-----+---------+----------------+
// | EID              | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
// | Employee_Name    | varchar(255)     | YES  |     | NULL    |                |
// | Employee_Surname | varchar(255)     | YES  |     | NULL    |                |
// | Phone            | varchar(255)     | YES  |     | NULL    |                |
// | Email            | varchar(255)     | YES  |     | NULL    |                |
// | DID              | int(11)          | YES  |     | NULL    |                |
// | Position         | varchar(255)     | YES  |     | NULL    |                |
// +------------------+------------------+------+-----+---------+----------------+


// --------------------- Tasks ---------------------
// +---------------+------------------+------+-----+---------------------+----------------+
// | Field         | Type             | Null | Key | Default             | Extra          |
// +---------------+------------------+------+-----+---------------------+----------------+
// | TID           | int(10) unsigned | NO   | PRI | NULL                | auto_increment |
// | About         | varchar(500)     | YES  |     | NULL                |                |
// | EID           | int(11)          | YES  |     | NULL                |                |
// | Creation_time | datetime         | YES  |     | current_timestamp() |                |
// | Task_status   | varchar(50)      | YES  |     | Created             |                |
// +---------------+------------------+------+-----+---------------------+----------------+

app.listen(port, ()=>{console.log(`Listening on ${port}`)})