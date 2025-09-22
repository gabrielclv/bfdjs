-- ex 1:  Insira 3 novos alunos na tabela.
create database alunos;

use database alunos;

create table students (
    id int primary key auto_increment,
    nome varchar(50),
    idade int,
    turma varchar(10)
);

insert into students(nome, idade, turma)
VALUES
    ('laura',9,'3º ano'),
    ('bruno',14,'7º ano'),
    ('kaká',20,'9º ano');

-- ex 2: Selecione todos os alunos.
select * from students;

-- ex 3: Selecione apenas o nome dos alunos com mais de 16 anos.
select nome from students where idade>=16;

-- ex 4: Atualize a turma de um aluno.
update students
set turma = '3º E.M'
where nome = 'kaká';

-- ex 5 : Exclua um dos alunos que você inseriu.
delete from students where nome = 'kaká';