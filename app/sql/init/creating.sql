-- Initialization SQL script that build default bases and tables

-- Creating user and grant him some privileges
create or replace user 'mansys'@'%' identified by 'pass';
grant all privileges on man_sys_db.* to 'mansys'@'%';
flush privileges;

drop database if exists man_sys_db;
-- Creating or replacing database
create database man_sys_db;
use man_sys_db;

drop table if exists Employees;
drop table if exists Tasks;
drop table if exists Departments;

set names utf8;

-- Creating Employees table
create table  Employees(
	ID int not null auto_increment , -- Employee identificator
	Name varchar(255),
	Surname varchar(255),
	Phone varchar(255),
	Email varchar(255),
	DID int, -- Department ID
	Position varchar(255), -- Position in linked department

	primary key(ID)
) ENGINE=INNODB; 

-- Creating Tasks table
create table Tasks(
	ID int primary key not null auto_increment , -- Task identificator
	About varchar(1500),
	EID int,
	

	Creation_time datetime default CURRENT_TIMESTAMP,
	Task_status varchar(50) default("Created"),
	
	index E_ID (EID),
	foreign key (EID)
		references Employees(ID)
		on delete cascade
) ENGINE=INNODB;

-- Creating Departments table
create table Departments(
	ID int unsigned  primary key not null auto_increment , -- Department identificator
	Title varchar(100),
	Head_ID int
) ENGINE=INNODB;

insert into Departments
(Title, Head_ID)
values
("Отдел разработок", 3),
("Отдел проектирования", 12);

-- Insert some employees and tasks
insert into Employees 
(Name, Surname, Phone, Email, DID, Position)
values

("Вася", "Пупкин", "81123123", "vasya@corp", 2, "Старший разработчик"),
("Петя", "Кряков", "4114122", "petya@corp" ,1, "Менеджер"),
("Маша", "Сельцина", "123123", "masha@corp", 2, "Глава отдела разработки"),
("Люда", "Марьина", "31312213", "lyda@corp", 2, "Системный администратор"),
("Иван", "Шпаков", "981414", "ivan@corp", 2, "Младший Разработчик"),
("Глеб", "Матийшин", "228337", "gleb228338332455@mail.ru", 2, "Помощник старшего разработчика"),
("Артём", "Мирный", "12869736", "Artom@com",1, "Администратор планов"),
("Ольга", "Марковна", "4189150", "pat4276@yopmail.com",2, "Разработчик"),
("Михаил", "Филиппович", "9528040", "xe6500@yopmail.com",2, "Тестировщик"),
("Макар ", "Киселев ", "975318", "veu7465@yopmail.com",2, "Разработчик"),
("Полина ", "Калинина", "5001427", "gaun3812@yopmail.com",1, "Менеджер"),
("Дарья ", "Егорова", "4027955", "h2884@yopmail.com",1, "Глава отдела проектирования"),
("Ева ", "Захарова", "5076084", "brafi6340@yopmail.com",2, "Младший Разработчик"),
("Кирилл ", "Федотов", "3391389", "cu1870@yopmail.com",2, "Разработчик");

insert into Tasks
(About, EID)
values
("Разработка системных модулей", 1),
("Управление персоналом", 3),
("Мониторинг качества работы", 2),
("Разработка элементов пользовательского интерфейса", 5),
("Межмодульное тестирование", 9),
("Проектировани планов работ", 12);

-- ---------------------------------
-- | Strings for mechanics testing |
-- ---------------------------------

-- drop table if exists parent;
-- drop table if exists child;

-- CREATE TABLE parent (
--     id INT NOT NULL,
--     PRIMARY KEY (id)
-- ) ENGINE=INNODB;

-- CREATE TABLE child (
--     id INT,
--     parent_id INT,
--     INDEX par_ind (parent_id),
--     FOREIGN KEY (parent_id)
--         REFERENCES parent(id)
--         ON DELETE set null
-- ) ENGINE=INNODB;

-- insert into parent values (234), (238);
-- insert into child values (1, 234), (2, 234), (3, 238);
-- select * from parent;
-- select * from child;
