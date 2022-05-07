const express = require("express");
	db = require("../controllers/db");
	bodyParser = require("body-parser"),
	router = express.Router();

router.get("/employees", async (req, res)=>{
	try{
		console.log("[?] Giving list of all employees");
		const result = await db.pool.query(`select * from Employees;`);
		res.send(result);
	}
	catch (err){
		throw err;
	}
});

module.exports = router;
