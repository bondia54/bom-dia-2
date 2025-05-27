create database AC1
go
use AC1
go
create table clientes (
    id_cliente INT,
    nome varchar(100) not null,
    email varchar(100),
    idade int
)
go
alter table clientes
add endereco varchar(100)
create table produtos (
    id_produto INT,
    nome varchar(100) not null,
    preco money
)
go
alter table produtos
add descricao varchar(255)
go
create table ordens (
    id_ordem INT,
    id_cliente INT,
    id_produto INT,
    quantidade INT
)
go
alter table ordens
add data_pedido date
go
alter table clientes
drop column idade
go


create table categorias (
    id_categoria INT,
    nome varchar(100) not null
)
go

alter table produtos
add id_categoria INT
go

create table estoque (
    id_produto INT,
    quantidade INT
)
go
alter table clientes
add data_cadastro datetime
go
create table fornecedores (
    id_fornecedor INT,
    nome varchar(100) not null,
    telefone varchar(20)
)
alter table produtos
add id_fornecedor INT
go
create table detalhes_pedido (
    id_detalhe INT,
    id_pedido INT,
    id_produto INT,
    quantidade INT not null
)
alter table detalhes_pedido
drop column id_produto
go
alter table produtos
alter column preco money
go
drop table categorias
go
