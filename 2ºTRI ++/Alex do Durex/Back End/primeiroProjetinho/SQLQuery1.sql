create database Alex
go

use Alex
go

create table produtos(
	Id int primary key,
	NomeProduto varchar(15) not null,
	DataValidade date, 
	precoProduto float not null
)
go

alter table produtos
add Fornecedor varchar(25)
go

alter table produtos
alter column NomeProduto varchar(20)
go 

alter table produtos
drop column DataValidade
go

drop table produtos
go

drop database Alex
go