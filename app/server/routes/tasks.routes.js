// Tasks router important requiries
const express = require("express"), 
    db = require("../controllers/db"),
    bodyParser = require("body-parser"),
    router = express.Router();


router.get("/get_tasks", async (req, res)=>{
    try {
        console.log("[?] Giving list of all tasks");
        const result = await db.pool.query(`
        select About, Task_status, Creation_time, Employees.Name, Employees.Surname 
        from Tasks inner join Employees
            on Tasks.EID = Employees.ID
        `);
        res.send(result);
    }
    catch(err){
        throw err;
    }
});

router.post("/create_task", async(req, res)=>{
    let about = req.body.description;
    let eid = req.body.eid;
    try {
        console.log(`[+]Adding new tasks: About: \"${about}\", Employee_ID: ${eid}`);
        const result = await db.pool.query(`insert into Tasks (About, EID) values (\"${about}\", ${eid})`);
        res.send({status: "Succesfull added", about, eid});
    } catch (error) {
        throw error;
    }
});

router.post("/complete_task", async(req, res)=>{
    let tid = req.body.tid;
    try {
        console.log(`[-] Completing tasks with Task_ID: ${tid}`);
        const result = await db.pool.query(`update Tasks set Task_status = "Complete" where ID = ${tid}`);
        res.send({status: "Succesfull delete tasks", tid})
    } catch (error) {
        throw error;
    }
});

router.get("/holder_employee", async(req, res)=>{
    let tid = req.body.tid;
    try{
        console.log(`[?] Giving employee `)
        // const EID = await db.pool.query(`select `);
        res.send({status: "OK"});
    }
    catch(err){
        throw err;
    }
});

module.exports = router;