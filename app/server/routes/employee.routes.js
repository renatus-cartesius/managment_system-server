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

router.post("/create_employee", async (req, res)=>{
	let name = req.body.name;
	let surname = req.body.surname;
	let phone = req.body.phone;
	let email = req.body.email;
	let did = req.body.did;
	let position = req.body.position;
	try{
		const result = await db.pool.query(`insert into Employees (Name, Surname, Phone, Email, DID, Position) values (\"${name}\", \"${surname}\", \"${phone}\", \"${email}\", \"${did}\", \"${position}\")`);
		res.send(result.status);
	}catch(err){
		throw err;
	}
});

router.post("/delete_employee", async (req, res)=>{
	try{
		console.log(`[-] Deleting Employee with ID: ${req.body.eid}`);
		const result = await db.pool.query(`delete from Employees where ID=\"${req.body.eid}\"`);
		res.send(result.status);
	}catch(err){
		throw err;
	}
});

module.exports = router;
