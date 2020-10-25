create database stock;

create table stock.users(
  id serial,
  name varchar(100) not null,
  email varchar(100) not null,
  password varchar(100) not null,
  active CHAR(1) default 'S'
);

