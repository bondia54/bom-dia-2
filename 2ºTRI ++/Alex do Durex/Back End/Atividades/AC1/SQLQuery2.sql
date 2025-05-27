create database AC1/*0*/
go

use AC1/*0*/
go

create table Clientes( /*1*/
	Id_Cliente int,
	Nome varchar(20) not null,
	Email varchar(25),
	Idade int
)
go

alter table Clientes /*2*/
add Endereço varchar(100)
go

create table Produtos( /*3*/
	Id_Produto int,
	Nome varchar(20),
	Preço float
)
go

alter table Produtos /*4*/
add Descrição varchar(255)
go

create table Ordem( /*5*/
	Id_Ordem int,
	Id_cliente int,
	Id_Produto int,
	Quantidade int
)
go

alter table Ordem /*6*/
add Data_pedido date
go

alter table Clientes /*7*/
drop column Idade
go

create table Categoria( /*8*/
	Id_Categoria int,
	Nome varchar
)
go

alter table Produtos /*9*/
add Id_Categoria int
go

create table Estoque( /*10*/
	Id_Produto int,
	Quantidade int
)
go

alter table Clientes /*11*/
add Data_Cadastro datetime
go

create table Fornecedores( /*12*/
	Id_fornecedor int,
	Nome varchar(25),
	Telefone char(9)
)
go

alter table Produtos /*13*/
add id_Fornecedor int
go

create table Detalhes_Pedido( /*14*/
	Id_Detalhe int,
	Id_Pedido int,
	Id_Produto int,
	Quantidade int
)

alter table Detalhes_Pedido /*15*/
drop column Id_Produto 
go

alter table Produtos /*16*/
alter column Preço money
go

drop table Categoria /*17*/
go