DROP TABLE IF EXISTS ESTUDIANTES;

CREATE TABLE ESTUDIANTES (
	NOMBRE VARCHAR(50),
	RUT VARCHAR(10) PRIMARY KEY,
	CURSO VARCHAR(30),
	NIVEL INT
);

INSERT INTO ESTUDIANTES
VALUES 
('ESTUDIANTE1','1','CURSO1', 1),
('ESTUDIANTE2','2','CURSO2', 2),
('ESTUDIANTE3','3','CURSO3', 3),
('ESTUDIANTE4','4','CURSO4', 4),
('ESTUDIANTE5','5','CURSO5', 5);

SELECT * FROM ESTUDIANTES;