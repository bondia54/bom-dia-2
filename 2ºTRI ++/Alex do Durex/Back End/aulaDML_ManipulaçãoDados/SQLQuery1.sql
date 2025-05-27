create database aulaDML
go

use aulaDML
go

create table produtos (
	id int primary key,
	nomeProduto varchar(30) not null,
	descriçãoProduto varchar(100) not null,
	dataValidade date,
	tipo varchar(15) not null,
	precoCompra float not null,
	precoVenda float
)
go

/*1- inserindo dados*/
insert into produtos
(id, nomeProduto, descriçãoProduto, dataValidade, tipo, precoCompra, precoVenda)
values (1, 'Bom Bril', 'Palha de aço de uso doméstico', null, 'Palha de aço', 5, 7.5)
go

insert into produtos
(id, nomeProduto, descriçãoProduto, dataValidade, tipo, precoCompra, precoVenda)
values (3, 'Mouse gamer sem fio', 'Maior precisão ara seus Jogos', null, 'informática',
72.8, 101.36)
go

insert into produtos
(id, nomeProduto, descriçãoProduto, dataValidade, tipo, precoCompra, precoVenda)
values (2, 'Smart TV LG', 'Ultra HD 4k 60pol.', null, 'Eletrônico', 2500, null)
go

insert into produtos
(id, nomeProduto, descriçãoProduto, dataValidade, tipo, precoCompra, precoVenda)
values (4, 'Leite Longa Vida', 'Embalagem 1 Litro', '2025-7-30', 'laticíneo', 2.36,
null)
go

select * from produtos
go

drop database aulaDML