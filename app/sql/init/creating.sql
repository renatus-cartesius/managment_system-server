
-- Creating user and grant him some privileges
create or replace user 'mansys'@'%' identified by 'pass';
grant all privileges on man_sys_db.* to 'mansys'@'%';
flush privileges;


-- Creating or replacing database
create or replace database man_sys_db;
use man_sys_db;

-- Creating Employees table
create or replace table  Employees(
	ID int not null auto_increment , -- Employee identificator
	Employee_Name varchar(255),
	Employee_Surname varchar(255),
	Phone varchar(255),
	Email varchar(255),
	DID int, -- Department ID
	Position varchar(255), -- Position in linked department

	primary key(ID)
) ENGINE=INNODB; 

-- Creating Tasks table
create or replace table Tasks(
	ID int primary key not null auto_increment , -- Task identificator
	About varchar(500),
	EID int,
	

	Creation_time datetime default CURRENT_TIMESTAMP,
	Task_status varchar(50) default("Created"),
	
	index E_ID (EID),
	foreign key (EID)
		references Employees(ID)
		on delete cascade
) ENGINE=INNODB;

-- Creating Departments table
create or replace table Departments(
	ID int unsigned  primary key not null auto_increment , -- Department identificator
	Title varchar(100),
	Size int
) ENGINE=INNODB;

-- Insert some employees and tasks
insert into Employees 
(Employee_Name, Employee_Surname, Phone, Email)
values
("Vasya", "Pupkin", "81123123", "vasya@corp"),
("Petya", "Kryakov", "4114122", "petya@corp"),
("Masha", "Seltcina", "123123", "masha@corp"),
("Lyda", "Maryana", "31312213", "lyda@corp"),
("Ivan", "Shpakov", "981414", "ivan@corp");

insert into Tasks
(About, EID)
values
("Planning tasks", 1),
("Developing routes", 3),
("Researhing", 2),
("Managing graduates", 5);