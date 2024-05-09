CREATE TABLE IF NOT EXISTS aluno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    emailUSP VARCHAR(200) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    trilhasConcluidas INT
);

CREATE TABLE IF NOT EXISTS materia (
    codigo CHAR(7) PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    creditoAula INT NOT NULL,
    creditoTrabalho INT NOT NULL,
    tipo ENUM('obrigatoria', 'eletiva', 'livre') NOT NULL,
    requisitos INT[]
);

CREATE TABLE IF NOT EXISTS aluno_materia (
    aluno_id INT,
    materia_codigo CHAR(7),
    PRIMARY KEY (aluno_id, materia_codigo),
    FOREIGN KEY (aluno_id) REFERENCES aluno(id),
    FOREIGN KEY (materia_codigo) REFERENCES materia(codigo)
);

CREATE TABLE IF NOT EXISTS trilha {
    nome ENUM('sistemas_de_software', 'inteligencia_artificial', 'ciencia_de_dados', 'teoria_da_computacao') NOT NULL,
    materia_codigo CHAR(7)
    PRIMARY KEY (nome, materia_codigo)
    FOREIGN KEY (materia_codigo) REFERENCES materia(codigo)
 }