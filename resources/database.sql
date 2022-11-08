create database if not exists productsdb;

use productsdb;

create table if not exists products(
  id int zerofill auto_increment,
  description varchar(50) not null,
  price decimal(5,2) zerofill not null,
  primary key(id)
);
