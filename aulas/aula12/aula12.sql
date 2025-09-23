CREATE DATABASE empresa;

use empresa;

-- criar tabela pai (departamento) e tabela filho (funcionários)

create table departamentos (
id_departamento int not null auto_increment,
nome_departamento varchar(50) not null,
primary key (id_departamento)
);

create table funcionarios (
id_funcionario int not null auto_increment,
nome varchar(50) not null,
cargo varchar(25) not null,
id_departamento int not null,
primary key(id_funcionario),
foreign key(id_departamento) references departamentos(id_departamento)
);
