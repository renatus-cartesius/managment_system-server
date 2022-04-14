// Tasks router important requiries
const express = require("express"), 
    db = require("../controllers/db"),
    bodyParser = require("body-parser"),
    router = express.Router();


router.get("/get_tasks", async (req, res)=>{
    try {
        console.log(req.url);
        const result = await db.pool.query("select * from Tasks");
        res.send(result);
    }
    catch(err){
        throw err;
    }
});

router.get("/create_task", async(req, res)=>{
    let description = req.body.description;
    let eid = req.body.eid;
    try {
        res.send(`${description} + ${eid}`);
        console.log(`asdf asdf sd${description} + ${eid}`);
    } catch (error) {
        throw error;
    }
});

module.exports = router;