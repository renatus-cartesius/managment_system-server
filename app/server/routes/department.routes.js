// Tasks router important requiries
const express = require("express"), 
    db = require("../controllers/db"),
    bodyParser = require("body-parser"),
    router = express.Router();


router.get("/departments", async (req, res)=>{
    try {
        console.log("[?] Giving list of all departments");
        const result = await db.pool.query(`
        select Departments.ID, Title, Employees.Position, Employees.Name, Employees.Surname from Departments inner join Employees
        on Departments.Head_ID = Employees.ID;
        `);
        res.send(result);
    }
    catch(err){
        throw err;
    }
});

module.exports = router;
