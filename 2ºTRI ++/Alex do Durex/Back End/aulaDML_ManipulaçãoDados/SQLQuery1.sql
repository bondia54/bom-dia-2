create database aulaDML
go

use aulaDML
go

create table produtos (
	id int primary key,
	nomeProduto varchar(30) not null,
	descri��oProduto varchar(100) not null,
	dataValidade date,
	tipo varchar(15) not null,
	precoCompra float not null,
	precoVenda float
)
go

/*1- inserindo dados*/
insert into produtos
(id, nomeProduto, descri��oProduto, dataValidade, tipo, precoCompra, precoVenda)
values (1, 'Bom Bril', 'Palha de a�o de uso dom�stico', null, 'Palha de a�o', 5, 7.5)
go

insert into produtos
(id, nomeProduto, descri��oProduto, dataValidade, tipo, precoCompra, precoVenda)
values (3, 'Mouse gamer sem fio', 'Maior precis�o ara seus Jogos', null, 'inform�tica',
72.8, 101.36)
go

insert into produtos
(id, nomeProduto, descri��oProduto, dataValidade, tipo, precoCompra, precoVenda)
values (2, 'Smart TV LG', 'Ultra HD 4k 60pol.', null, 'Eletr�nico', 2500, null)
go

insert into produtos
(id, nomeProduto, descri��oProduto, dataValidade, tipo, precoCompra, precoVenda)
values (4, 'Leite Longa Vida', 'Embalagem 1 Litro', '2025-7-30', 'latic�neo', 2.36,
null)
go

select * from produtos
go

drop database aulaDML