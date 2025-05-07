create database PrimeiroExercício
go

use PrimeiroExercício
go

create table Aluno(
	matricula int primary key,
	nome varchar(20),
	escola varchar(20)
)
go

create table Disciplina(
	codigo char(5) primary key,
	nome varchar(20),
	registro char(5),
	escola varchar(20)
)
go

create table Historico(
	matricula int primary key,
	codigo char(5),
	nota float
)
go

create table Professor(
	registro char(5) primary key,
	nome varchar(20),
	admissao date
)
go

alter table Aluno
add telefone char(8)
go

alter table Aluno
drop column telefone
go

alter table Professor
add formacao varchar(15)
go

alter table Aluno 
add email varchar(35)
go

alter table Disciplina 
drop column registro 
go

alter table Historico
add bimestre int
go

alter table Aluno
drop column escola
go

drop table Historico
go

drop table Aluno
go

drop table Disciplina
go

drop table Professor
go

drop database PrimeiroExercício
go