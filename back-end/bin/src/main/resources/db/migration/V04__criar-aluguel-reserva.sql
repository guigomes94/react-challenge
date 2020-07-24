CREATE TABLE aluguel (
	codaluguel SERIAL NOT NULL,
	codcliente INT NOT NULL,
	codlivro INT NOT NULL,
	dataAluguel DATE NOT NULL,
	dataDevolucao DATE NOT NULL,
	valor DECIMAL(10,2) NOT NULL,
	CONSTRAINT PK_aluguel PRIMARY KEY(codaluguel),
	CONSTRAINT FK_cliente_aluguel FOREIGN KEY(codcliente) REFERENCES cliente,
	CONSTRAINT FK_livro_aluguel FOREIGN KEY(codlivro) REFERENCES livro
);

CREATE TABLE reserva (
	codreserva SERIAL NOT NULL,
	codcliente INT NOT NULL,
	codlivro INT NOT NULL,
	dataAluguel DATE NOT NULL,
	CONSTRAINT PK_reserva PRIMARY KEY(codreserva),
	CONSTRAINT FK_cliente_aluguel FOREIGN KEY(codcliente) REFERENCES cliente,
	CONSTRAINT FK_livro_aluguel FOREIGN KEY(codlivro) REFERENCES livro
);
