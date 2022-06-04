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

router.get("/employee", async (req, res)=>{
	try{
		const result = await db.pool.query(`select * from Employees where ID=${req.query.eid}`);
		console.log("[?] Giving information about concrete Employee: ");
		res.send(result);
	}catch(err){	
		throw err;
	}
});

module.exports = router;
