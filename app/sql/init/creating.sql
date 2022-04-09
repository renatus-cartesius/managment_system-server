-- Creating Employees table
use man_sys_db;
create  table Employees(
	EID int primary key not null, -- Employee id
	Name varchar(255),
	Surname varchar(255),
	Phone varchar(255),
	Email varchar(255),
	DID int, -- Department ID
	Position varchar(255) -- Position in linked department
);
-- Creating Tasks table
create table Tasks(
	TID int, -- Task ID
	Description varchar(255),
	Time_Stamp varchar(100),
	Status varchar(50),
	EID int,
);
