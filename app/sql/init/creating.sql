-- Creating Employees table

use man_sys_db;

create or replace table  Employees(
	EID int primary key not null, -- Employee id
	Name varchar(255),
	Surname varchar(255),
	Phone varchar(255),
	Email varchar(255),
	DID int, -- Department ID
	Position varchar(255) -- Position in linked department
);

create or replace table  Tasks(
	TID int primary key not null default(1), -- Task identificator
	About varchar(500),
	EID int,
	Creation_time varchar(500),
	Task_status varchar(50) default("In progress")
);

create or replace table Departments(
	DID int primary key not null,
	Title varchar(100)
	Size int
)