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
	precoCompra money not null,
	precoVenda money
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

/*2- excluir dados*/
/*delete from produtos
where id=1
/*use "!=" para diferente*/
go*/

/*3- atualizar dados*/
update produtos set nomeProduto='Leite Tipo A'
where id=4
go

update produtos set descriçãoProduto='Garrafa de 1 Litro', dataValidade='2025-06-25', 
precoCompra=3.14
where id=4
go

/*preço da venda é sempre 30% superior ao valor original*/
update produtos set precoVenda=precoCompra*1.3
go

/*10% de desconto aos produtos que custem mais de 100*/
update produtos set precoVenda=precoVenda-(precoVenda*0.1)
where precoVenda=100
go

update produtos set precoVenda=precoVenda*0.03
where precoVenda>=5 AND precoVenda<=10
go

update produtos set precoVenda=precoVenda-(precoVenda*0.02)
where tipo='Eletrônico' and precoVenda<3000
go

select * from produtos
go