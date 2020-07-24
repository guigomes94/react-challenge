CREATE TABLE livro (
	codlivro SERIAL NOT NULL,
	titulo VARCHAR(100) NOT NULL,
	codautor INT NOT NULL,
	disponivel BOOL DEFAULT true,
	CONSTRAINT PK_livro PRIMARY KEY(codlivro),
	CONSTRAINT FK_autor FOREIGN KEY(codautor) REFERENCES autor
);

INSERT INTO livro(titulo, codautor) VALUES ('Código Limpo: Habilidades Práticas do Agile Software', 1);
INSERT INTO livro(titulo, codautor) VALUES ('Refactoring: Improving the Design of Existing Code', 2);
INSERT INTO livro(titulo, codautor) VALUES ('Scrum: a arte de fazer o dobro do trabalho na metade do tempo', 3);
INSERT INTO livro(titulo, codautor) VALUES ('Introduction To Algorithms', 4);
INSERT INTO livro(titulo, codautor) VALUES ('Inferno', 5);
INSERT INTO livro(titulo, codautor) VALUES ('O Poder do Hábito', 6);
INSERT INTO livro(titulo, codautor) VALUES ('Sistemas Operacionais Modernos', 7);
INSERT INTO livro(titulo, codautor) VALUES ('Projeto de Banco de Dados', 8);
INSERT INTO livro(titulo, codautor) VALUES ('Sistemas Digitais - Princípios e Aplicações', 9);
INSERT INTO livro(titulo, codautor) VALUES ('Engenharia de Software', 10);
