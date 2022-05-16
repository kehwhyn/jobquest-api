-- job_quest.areas definition

CREATE TABLE areas (
  id_area int unsigned NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  PRIMARY KEY (id_area)
);

-- job_quest.habilidades definition

CREATE TABLE habilidades (
  id_habilidade int unsigned NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  PRIMARY KEY (id_habilidade)
);

-- job_quest.usuarios definition

CREATE TABLE usuarios (
  id_usuario int unsigned NOT NULL AUTO_INCREMENT,
  tipo_usuario varchar(255) NOT NULL,
  mail varchar(255) NOT NULL,
  senha varchar(255) NOT NULL,
  nome varchar(255) NOT NULL,
  cpf_cnpj varchar(255) DEFAULT NULL,
  uf varchar(255) DEFAULT NULL,
  rua varchar(255) DEFAULT NULL,
  bairro varchar(255) DEFAULT NULL,
  cidade varchar(255) DEFAULT NULL,
  complemento varchar(255) DEFAULT NULL,
  numero varchar(255) DEFAULT NULL,
  cep varchar(255) DEFAULT NULL,
  url_foto varchar(255) DEFAULT NULL,
  PRIMARY KEY (id_usuario),
  UNIQUE KEY usuarios_mail_unique (mail),
  UNIQUE KEY usuarios_cpf_cnpj_unique (cpf_cnpj)
);

-- job_quest.area_habilidade definition

CREATE TABLE area_habilidade (
  id int unsigned NOT NULL AUTO_INCREMENT,
  id_area int unsigned DEFAULT NULL,
  id_habilidade int unsigned DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY area_habilidade_id_area_id_habilidade_unique (id_area,id_habilidade),
  KEY area_habilidade_id_habilidade_foreign (id_habilidade),
  CONSTRAINT area_habilidade_id_area_foreign FOREIGN KEY (id_area) REFERENCES areas (id_area),
  CONSTRAINT area_habilidade_id_habilidade_foreign FOREIGN KEY (id_habilidade) REFERENCES habilidades (id_habilidade)
);

-- job_quest.empresas definition

CREATE TABLE empresas (
  id_empresa int unsigned NOT NULL AUTO_INCREMENT,
  razao_social varchar(255) DEFAULT NULL,
  logo_url varchar(255) DEFAULT NULL,
  id_usuario int unsigned DEFAULT NULL,
  PRIMARY KEY (id_empresa),
  KEY empresas_id_usuario_foreign (id_usuario),
  CONSTRAINT empresas_id_usuario_foreign FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
);

-- job_quest.usuario_area definition

CREATE TABLE usuario_area (
  id int unsigned NOT NULL AUTO_INCREMENT,
  id_usuario int unsigned DEFAULT NULL,
  id_area int unsigned DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY usuario_area_id_usuario_id_area_unique (id_usuario,id_area),
  KEY usuario_area_id_area_foreign (id_area),
  CONSTRAINT usuario_area_id_area_foreign FOREIGN KEY (id_area) REFERENCES areas (id_area),
  CONSTRAINT usuario_area_id_usuario_foreign FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
);

-- job_quest.usuario_habilidade definition

CREATE TABLE usuario_habilidade (
  id int unsigned NOT NULL AUTO_INCREMENT,
  id_usuario int unsigned DEFAULT NULL,
  id_habilidade int unsigned DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY usuario_habilidade_id_usuario_id_habilidade_unique (id_usuario,id_habilidade),
  KEY usuario_habilidade_id_habilidade_foreign (id_habilidade),
  CONSTRAINT usuario_habilidade_id_habilidade_foreign FOREIGN KEY (id_habilidade) REFERENCES habilidades (id_habilidade),
  CONSTRAINT usuario_habilidade_id_usuario_foreign FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
);

-- job_quest.vagas definition

CREATE TABLE vagas (
  id_vaga int unsigned NOT NULL AUTO_INCREMENT,
  id_empresa int unsigned NOT NULL,
  id_area int unsigned DEFAULT NULL,
  nome varchar(255) NOT NULL,
  quantidade int NOT NULL,
  descricao text NOT NULL,
  PRIMARY KEY (id_vaga),
  KEY vagas_id_empresa_foreign (id_empresa),
  KEY vagas_id_area_foreign (id_area),
  CONSTRAINT vagas_id_area_foreign FOREIGN KEY (id_area) REFERENCES areas (id_area),
  CONSTRAINT vagas_id_empresa_foreign FOREIGN KEY (id_empresa) REFERENCES empresas (id_empresa)
);

-- job_quest.match_usuario_vaga definition

CREATE TABLE match_usuario_vaga (
  id_match int unsigned NOT NULL AUTO_INCREMENT,
  id_area int unsigned DEFAULT NULL,
  id_vaga int unsigned DEFAULT NULL,
  id_usuario int unsigned DEFAULT NULL,
  PRIMARY KEY (id_match),
  UNIQUE KEY match_usuario_vaga_id_vaga_id_usuario_unique (id_vaga,id_usuario),
  KEY match_usuario_vaga_id_area_foreign (id_area),
  KEY match_usuario_vaga_id_usuario_foreign (id_usuario),
  CONSTRAINT match_usuario_vaga_id_area_foreign FOREIGN KEY (id_area) REFERENCES areas (id_area),
  CONSTRAINT match_usuario_vaga_id_usuario_foreign FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario),
  CONSTRAINT match_usuario_vaga_id_vaga_foreign FOREIGN KEY (id_vaga) REFERENCES vagas (id_vaga)
);

-- job_quest.vaga_habilidade definition

CREATE TABLE vaga_habilidade (
  id int unsigned NOT NULL AUTO_INCREMENT,
  id_vaga int unsigned DEFAULT NULL,
  id_habilidade int unsigned DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY vaga_habilidade_id_vaga_id_habilidade_unique (id_vaga,id_habilidade),
  KEY vaga_habilidade_id_habilidade_foreign (id_habilidade),
  CONSTRAINT vaga_habilidade_id_habilidade_foreign FOREIGN KEY (id_habilidade) REFERENCES habilidades (id_habilidade),
  CONSTRAINT vaga_habilidade_id_vaga_foreign FOREIGN KEY (id_vaga) REFERENCES vagas (id_vaga)
);

-- INSERTS

INSERT INTO usuarios
(id_usuario, tipo_usuario, mail, senha, nome, cpf_cnpj, uf, rua, bairro, cidade, complemento, numero, cep, url_foto)
VALUES(1, 'admin', 'admin@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO usuarios
(id_usuario, tipo_usuario, mail, senha, nome, cpf_cnpj, uf, rua, bairro, cidade, complemento, numero, cep, url_foto)
VALUES(2, 'user', 'joao@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'Joao Silva', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO usuarios
(id_usuario, tipo_usuario, mail, senha, nome, cpf_cnpj, uf, rua, bairro, cidade, complemento, numero, cep, url_foto)
VALUES(3, 'user', 'maria@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'Maria Flores', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO usuarios
(id_usuario, tipo_usuario, mail, senha, nome, cpf_cnpj, uf, rua, bairro, cidade, complemento, numero, cep, url_foto)
VALUES(4, 'user', 'paulo@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'Paulo Neves', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO usuarios
(id_usuario, tipo_usuario, mail, senha, nome, cpf_cnpj, uf, rua, bairro, cidade, complemento, numero, cep, url_foto)
VALUES(5, 'company', 'empresa1@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'Marco Castro', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO usuarios
(id_usuario, tipo_usuario, mail, senha, nome, cpf_cnpj, uf, rua, bairro, cidade, complemento, numero, cep, url_foto)
VALUES(6, 'company', 'empresa2@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'Gilberto Costa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO usuarios
(id_usuario, tipo_usuario, mail, senha, nome, cpf_cnpj, uf, rua, bairro, cidade, complemento, numero, cep, url_foto)
VALUES(7, 'company', 'empresa3@gmail.com', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'Carlos Lopes', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO empresas
(id_empresa, razao_social, logo_url, id_usuario)
VALUES(1, 'empresa 1 ltda', '', 5);
INSERT INTO empresas
(id_empresa, razao_social, logo_url, id_usuario)
VALUES(2, 'empresa 2 ltda', '', 6);
INSERT INTO empresas
(id_empresa, razao_social, logo_url, id_usuario)
VALUES(3, 'empresa 3 ltda', '', 7);

INSERT INTO areas
(id_area, nome)
VALUES(1, 'Tecnologia da Informação');
INSERT INTO areas
(id_area, nome)
VALUES(2, 'Engenharia Civil');
INSERT INTO areas
(id_area, nome)
VALUES(3, 'Direito');
INSERT INTO areas
(id_area, nome)
VALUES(4, 'Medicina');

INSERT INTO vagas
(id_vaga, id_empresa, id_area, nome, quantidade, descricao)
VALUES(1, 1, 1, 'Desenvolvedor Java', '5', 'Vaga para desenvolvedor junior Java');
INSERT INTO vagas
(id_vaga, id_empresa, id_area, nome, quantidade, descricao)
VALUES(2, 1, 1, 'Desenvolvedor Java', '3', 'Vaga para desenvolvedor pleno Java');
INSERT INTO vagas
(id_vaga, id_empresa, id_area, nome, quantidade, descricao)
VALUES(3, 2, 2, 'Consultor de obras', '2', 'Vaga para engenheiro civil');
INSERT INTO vagas
(id_vaga, id_empresa, id_area, nome, quantidade, descricao)
VALUES(4, 3, 3, 'Estagiario de Direito', '2', 'Vaga para estagiario de direito');

INSERT INTO habilidades
(id_habilidade, nome)
VALUES(1, 'PL/SQL');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(2, 'JPA/ Hibernate');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(3, 'Spring Boot');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(4, 'Scrum');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(5, 'Excel');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(6, 'AWS');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(7, 'Docker');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(8, 'Windows');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(9, 'Pacote Office');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(10, 'Linux');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(11, 'Swift');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(12, 'Mac OS');
INSERT INTO habilidades
(id_habilidade, nome)
VALUES(13, 'Mobile');

