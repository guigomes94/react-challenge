CREATE TABLE autor (
	codautor SERIAL NOT NULL,
	nome VARCHAR(50) NOT NULL,
	CONSTRAINT PK_autor PRIMARY KEY(codautor)
);

INSERT INTO autor(nome) VALUES ('Robert C. Martin');
INSERT INTO autor(nome) VALUES ('Martin Fowler');
INSERT INTO autor(nome) VALUES ('Jeff Sutherland');
INSERT INTO autor(nome) VALUES ('Thomas H. Cormen');
INSERT INTO autor(nome) VALUES ('Dan Brown');
INSERT INTO autor(nome) VALUES ('Charles Duhigg');
INSERT INTO autor(nome) VALUES ('Andrew S. Tanenbaum');
INSERT INTO autor(nome) VALUES ('Carlos Alberto Heuser');
INSERT INTO autor(nome) VALUES ('Ronald J. Tocci');
INSERT INTO autor(nome) VALUES ('Ian Sommerville');
