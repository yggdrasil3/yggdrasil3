CREATE TABLE Aluno (
    nusp INT PRIMARY KEY,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE Materia (
    codigo VARCHAR(9) PRIMARY KEY,
    tipo VARCHAR(50),
    creditoAula INT,
    creditoTrabalho INT,
    nome VARCHAR(100) NOT NULL
);