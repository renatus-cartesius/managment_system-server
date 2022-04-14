// Express config
const express = require("expres"),
    router = express.router(),
    employessRoutes = require("./employee.routes"),
    tasksRoutes = require("./tasks.routes");

// Database controller
const db = require("./controllers/db"),
    bodyParser = require("body-parser");

// Using body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/get_tasks", async (req, res)=>{
    try {
        console.log(req.url);
        const result = await db.pool.query("select * from Tasks");
        res.send(result);
    }
    catch(err){
        throw err;
    }
});

app.post("/create_task", async(req, res)=>{
    try {
        let task = req.body;
    } catch (error) {
        
    }
});
