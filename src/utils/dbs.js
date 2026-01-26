// src/utils/dbs.js
import { ref } from 'vue';

const dbs = [
// {
//   label: 'Demo',
//   value:
//   `
// CREATE TABLE employees (
//       id INTEGER PRIMARY KEY,
//       name TEXT,
//       department TEXT,
//       salary INTEGER
//     );

//     INSERT INTO employees (name, department, salary) VALUES
//       ('Alice', 'Engineeringx', 70000),
//       ('Bob', 'Sales', 50000),
//       ('Charlie', 'HR', 45000),
//       ('Diana', 'Engineering', 80000),
//       ('Evan', 'Sales', 55000);

// CREATE TABLE employees2 (
//       id INTEGER PRIMARY KEY,
//       name TEXT,
//       department TEXT,
//       salary INTEGER
//     );

//     INSERT INTO employees2 (name, department, salary) VALUES
//       ('Alice', 'Engineeringx', 70000),
//       ('Bob', 'Sales', 50000),
//       ('Charlie', 'HR', 45000),
//       ('Diana', 'Engineering', 80000),
//       ('Evan', 'Sales', 55000);

//   `
// },

{
label: 'Exercice 0 - Supermarché',
value:
`
DROP TABLE IF EXISTS Produit;
CREATE TABLE Produit (
	Numéro int NOT NULL,
	Libellé varchar(255) COLLATE NOCASE,
	Catégorie varchar(255) COLLATE NOCASE,
	Prix float,
	QuantitéDisponible int,
	PRIMARY KEY (Numéro)
);

INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (1, 'Kaffi Haaki', 'Café', 3.7500, 45);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (2, 'La vache triste', 'Fromage', 16.0000, 120);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (3, 'Plash', 'Détergent', 18.4400, 35);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (4, 'Fanti', 'Boisson sans alcool', 11.7000, 208);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (5, 'Toblemit', 'Chocolat', 19.0000, 300);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (6, 'Juxlait', 'Lait', 1.2000, 180);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (7, '2-KB', 'Lait', 0.9500, 220);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (8, 'Schmiri', 'Fromage', 1.4800, 116);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (9, 'Jack OB''s Café', '44', 44.0000, 200);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (10, 'Coli Light', 'Boisson sans alcool', 10.2000, 122);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (11, 'Lagnase', 'Miel', 27.5000, 19);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (12, 'Källochs Dröhnis', 'Müsli', 25.2500, 2);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (13, 'Danke', 'Chocolat', 32.0000, 6);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (14, 'Coli', 'Boisson sans alcool', 11.6500, 176);
INSERT INTO Produit (Numéro, Libellé, Catégorie, Prix, QuantitéDisponible) VALUES (15, 'Knichers', 'Chocolat', 13.0000, 290);
`
},

{
  label: 'Exercice 1 - Gestion de livres',
  value:
`
DROP TABLE IF EXISTS Livre ;
CREATE TABLE Livre (
	Numéro int NOT NULL,                 -- Numéro du livre (clé primaire)
	Titre varchar(50) COLLATE NOCASE,    -- Titre du livre
	Auteur varchar(50) COLLATE NOCASE,   -- Auteur du livre
	Langue varchar(50) COLLATE NOCASE,   -- Langue du livre  (FRA, ANG, ALL)
	Genre varchar(50) COLLATE NOCASE,    -- Genre du livre (Technique, Roman, Histoire, ...)
	Prix float,                          -- Prix de vente du livre
	EnStock int,                         -- Quantité d'exemplaires en stock
	PRIMARY KEY (Numéro)
);

INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (1, 'Teach yourself Java in 21 days', 'Albert Schmitt', 'ANG', 'Technique', 16, 55);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (2, 'MS-Access 2.0', 'Bob Sebuilder', 'ANG', 'Technique', 33, 200);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (3, 'MS-Access 2019', 'Bob Sebuilder', 'ANG', 'Technique', 33, 56);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (4, 'New Windows 11', 'Camille Kamel', 'FRA', 'Technique', 16, 97);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (5, 'Die Prüfung', 'Bill Kill', 'ALL', 'Roman', 21, 51);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (6, 'Le micro … comment ça marche ?', 'Simon Scotch', 'FRA', 'Technique', 60, 12);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (7, 'L''homme juste', 'Justa Klein', 'FRA', 'Roman', 20, 33);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (8, 'Der letzte Zar', 'Vladimir Lenin', 'ALL', 'Histoire', 15, 3);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (9, 'Novell Netware', 'Neon Tube', 'ANG', 'Technique', 28, 100);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (10, 'Roter Drache', 'Sponge Bob', 'ALL', 'Roman', 17, 0);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (11, 'Der Zerfall', 'Vladimir Lenin', 'ALL', 'Histoire', 37, 23);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (12, 'Dracula', 'Vlad Tepes', 'FRA', 'Roman', 20, 50);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (13, 'Schieb den …', 'Caroline Hoffmann', 'ALL', 'Roman', 15, 34);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (14, '… zurück ins Meer', 'Jennifer Mattelet', 'ALL', 'Roman', 15, 34);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (15, 'Windows 95', 'Pierre Godefroid', 'FRA', 'Technique', 50, 0);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (16, 'Merry Christmas', 'Santa Claus', 'ANG', 'Roman', 75, 5);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (17, 'Enter the Matrix', 'Trinity Nebu', 'ANG', 'Roman', 0, 0);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (18, 'Windows 98 For Dummies', 'Andy Rathbone', 'ANG', 'Technique', 25, 15);
`
},

{
  label: 'Exercice 2 - Gestion des clients',
  value:
  `
DROP TABLE IF EXISTS Client;
CREATE TABLE Client (
	Numéro int NOT NULL,				    -- Numéro du client
	Nom varchar(50) COLLATE NOCASE,         -- Nom du client
	Prénom varchar(50) COLLATE NOCASE,      -- Prénom du Client
	Sexe varchar(50) COLLATE NOCASE,        -- Sexe du client (F/M)
	Adresse varchar(50) COLLATE NOCASE,     -- Rue et numéro
	CP varchar(50) COLLATE NOCASE,          -- Code postal
	Localité varchar(50) COLLATE NOCASE,	-- Localité du client
	NoTel varchar(50) COLLATE NOCASE,       -- Numéro de téléphone du client
	NoFax varchar(50) COLLATE NOCASE,       -- Numéro du fax du client
	DateNaiss datetime,                     -- Date de naissance du client
	BonClient boolean,          			-- Valeurs possibles: YES/NO
	PRIMARY KEY (Numéro)
);

INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (1, 'Hoffmann', 'Paule', 'F', '17, rue Joseph Lentz', 'L-5342', 'Esch/Alzette', '26522020', null, '1986-04-13', 0);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (2, 'Mattelet', 'Caroline', 'F', '6, rue Arthur Herchen', 'L-1727', 'Luxembourg', '26481757', null, '1986-08-19', 1);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (3, 'Schreiner', 'Claude', 'F', '5, rue du Bois', 'L-3453', 'Diekirch', '58476215', '58476217', '1950-01-26', 0);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (4, 'Flor', 'Magaly', 'F', '1, rue Principale', 'L-1832', 'Mersch', '458936', '458932', '1985-12-23', 1);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (5, 'Schreiner', 'Jean', 'M', '5, rue du Lac', 'L-3472', 'Mersch', '546897', null, '1969-09-15', 1);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (6, 'Brad', 'Pit', 'M', '2, rue de la Gare', 'L-9090', 'Ettelbruck', '707171', '707172', '2015-05-15', 0);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (7, 'Jemming', 'Martine', 'F', '13, rue du Pré', 'L-3336', 'Esch/Alzette', '596314', null, '1990-09-01', 1);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (8, 'Shark', 'Metti', 'M', null, 'L-6664', 'Esch/Alzette', null, null, '1955-05-19', 1);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (9, 'Super', 'Jemp', 'M', '7, Cité Patton', 'L-8897', 'Ettelbruck', '485739', null, '1980-12-31', 0);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (10, 'Rheude', 'Johanna', 'F', '9, Cité Patton', 'L-8897', 'Ettelbruck', '485720', '485721', '1975-02-18', 1);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (11, 'Susanj', 'Jeanne', 'F', '1, Cité Patton', 'F-348912', 'Metz', '25894769', null, '1980-07-12', 1);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (12, 'Sebuilder', 'Bob', 'M', '74, um Knopp', 'L-6512', 'Luxembourg', '547801', null, '1975-01-24', 0);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (13, 'Fischer', 'Antoine', 'M', '56, rue Gabriel Lippmann', 'L-1945', 'Luxembourg', '264815', '224824', '1964-12-03', 1);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (14, 'Tube', 'Neon', 'M', '4, rue du Château', 'L-4845', 'Luxembourg', '989898', '121212', '1965-12-12', 0);
INSERT INTO Client (Numéro, Nom, Prénom, Sexe, Adresse, CP, Localité, NoTel, NoFax, DateNaiss, BonClient) VALUES (15, 'Messenger', 'Cameron', 'F', '5, rue Niel Armstrong', 'L-8228', 'Luxembourg', '666666', '666665', '1966-06-06', 1);
  `
},

{
  label: 'Exercice 3 - Gestion de concerts',
  value:
  `
DROP TABLE IF EXISTS Concert ;
CREATE TABLE Concert (
	Numéro int NOT NULL,                    -- Numéro d'identification (clé primaire)
	Artiste varchar(50) COLLATE NOCASE,     -- Artiste ou Groupe qui donne le concert
	Date datetime,                          -- Date du concert
	Début datetime,                         -- Début du concert (Heure)
	Localité varchar(50) COLLATE NOCASE,    -- Localité du concert
	Lieu varchar(50) COLLATE NOCASE,        -- Lieu du concert
	TypeLieu varchar(50) COLLATE NOCASE,    -- (Centre Culturel, Hall Sportif, Club etc.)
	PrixTicket float,                       -- Prix d'un ticket
	Places int,                             -- Total des places disponibles pour le concert
	TicketsVendus int,                      -- Nombre de tickets déjà vendus pour le concert
	PRIMARY KEY (Numéro)
);

INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (103, 'Kelly Family', '2022-07-13', '19:00:00', 'Hupperdange', 'D''Scheier', 'Club', 15, 450, 449);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (104, 'Simply Red', '2022-07-15', '21:00:00', 'Mondorf', 'Casino 500', 'Autre', 30, 700, 700);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (106, 'Marylin Manson', '2022-07-20', '20:00:00', 'Dudelange', 'Centre Sportif', 'Hall Sportif', 25, 1900, 1900);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (108, 'Deep Purple', '2022-08-02', '20:00:00', 'Bascharage', 'Hall 75', 'Centre Culturel', 25, 1400, 1097);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (109, 'Life of Agony / Tiamat', '2022-08-05', '20:30:00', 'Luxembourg', 'Den Atelier', 'Club', 15, 1100, 360);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (110, 'Joe Cocker', '2022-08-12', '20:00:00', 'Pétange', 'Centre Sportif', 'Hall Sportif', 45, 2200, 2200);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (111, 'Pulp', '2022-08-20', '21:00:00', 'Luxembourg', 'Den Atelier', 'Club', 20, 1100, 470);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (101, 'Genesis', '2022-04-20', '20:00:00', 'Luxembourg', 'Stade Josy Weber', 'Terrain de Football', 35, 9500, 6765);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (102, 'Bon Jovi', '2022-06-02', '21:00:00', 'Luxembourg', 'Den Atelier', 'Club', 20, 1100, 1100);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (105, 'Indochine', '2022-07-16', '21:30:00', 'Pétange', 'Centre Sportif', 'Hall Sportif', 20, 2200, 1290);
INSERT INTO Concert (Numéro, Artiste, Date, Début, Localité, Lieu, TypeLieu, PrixTicket, Places, TicketsVendus) VALUES (107, 'U2', '2022-07-22', '21:30:00', 'Diekirch', 'Fête sous tente', 'Autre', 8, 1800, 280);
  `
},

{
  label: 'Exercice 4 - Assurance bagages',
  value:
  `
DROP TABLE IF EXISTS Agent ;
CREATE TABLE Agent (
	NumAgent int NOT NULL,
	Nom varchar(50) COLLATE NOCASE,
	Prénom varchar(50) COLLATE NOCASE,
	Adresse varchar(50) COLLATE NOCASE,
	CP varchar(50) COLLATE NOCASE,
	Localité varchar(50) COLLATE NOCASE,
	NoTel varchar(50) COLLATE NOCASE,
	AgentGénéral boolean,
	PRIMARY KEY (NumAgent)
);

INSERT INTO Agent (NumAgent, Nom, Prénom, Adresse, CP, Localité, NoTel, AgentGénéral) VALUES (1, 'Pezzotto', 'Alfredo', '23, rue de Mamer', '6555', 'Capellen', '238987', 0);
INSERT INTO Agent (NumAgent, Nom, Prénom, Adresse, CP, Localité, NoTel, AgentGénéral) VALUES (2, 'Kremer', 'Pierre', '2, bvd de la Liberté', '9980', 'Luxembourg', '228890', 1);

DROP TABLE IF EXISTS Client ;
CREATE TABLE Client (
	NumClient int NOT NULL,
	Nom varchar(50) COLLATE NOCASE,
	Prénom varchar(50) COLLATE NOCASE,
	Adresse varchar(50) COLLATE NOCASE,
	CP varchar(50) COLLATE NOCASE,
	Localité varchar(50) COLLATE NOCASE,
	NoTel varchar(50) COLLATE NOCASE,
	PRIMARY KEY (NumClient)
);

INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité, NoTel) VALUES (10, 'Weber', 'Jos', '23, rue Principale', '2289', 'Luxembourg', '102987');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité, NoTel) VALUES (11, 'Muller', 'Ketty', '2, av. G. Diederich', '8909', 'Luxembourg', '908077');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité, NoTel) VALUES (12, 'Kremer', 'Raymond', '108, bvd Hubert Clement', '6678', 'Esch-s-Alzette', '889977');

DROP TABLE IF EXISTS Contrat ;
CREATE TABLE Contrat (
	NumContrat int NOT NULL,
	Début datetime,
	Fin datetime,
	Prime int,
	Pays varchar(50) COLLATE NOCASE,
	NumAgent int,
	NumClient int,
	PRIMARY KEY (NumContrat),
  CONSTRAINT AgentContrat FOREIGN KEY (NumAgent) REFERENCES Agent (NumAgent),
  CONSTRAINT ClientContrat FOREIGN KEY (NumClient) REFERENCES Client (NumClient)
);

INSERT INTO Contrat (NumContrat, Début, Fin, Prime, Pays, NumAgent, NumClient) VALUES (1000, '2022-07-22', '2022-08-03', 2300, 'France', 2, 10);
INSERT INTO Contrat (NumContrat, Début, Fin, Prime, Pays, NumAgent, NumClient) VALUES (1001, '2022-07-12', '2022-07-22', 1750, 'Italie', 1, 11);
INSERT INTO Contrat (NumContrat, Début, Fin, Prime, Pays, NumAgent, NumClient) VALUES (1002, '2022-07-19', '2022-08-18', 4500, 'Belgique', 1, 11);
INSERT INTO Contrat (NumContrat, Début, Fin, Prime, Pays, NumAgent, NumClient) VALUES (1003, '2022-07-19', '2022-08-18', 3500, 'Italie', 2, 12);
INSERT INTO Contrat (NumContrat, Début, Fin, Prime, Pays, NumAgent, NumClient) VALUES (1004, '2022-07-30', '2022-09-30', 1950, 'Italie', 2, 11);

-- original mysql commands (not workling in sqlite)
-- ALTER TABLE Contrat ADD CONSTRAINT AgentContrat FOREIGN KEY (NumAgent) REFERENCES Agent (NumAgent) ON UPDATE SET NULL ON DELETE SET NULL;
--ALTER TABLE Contrat ADD CONSTRAINT ClientContrat FOREIGN KEY (NumClient) REFERENCES Client (NumClient) ON UPDATE SET NULL ON DELETE SET NULL;
  `
},

{
  label: 'Exercice 5 - Commandes',
  value:
  `
DROP TABLE IF EXISTS Article ;
CREATE TABLE Article (
	NumArticle int NOT NULL,  -- Numéro de l'article (clé primaire)
	Libellé varchar(50) COLLATE NOCASE,
	PrixUnitaire int,
	PRIMARY KEY (NumArticle)
);

INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (1, 'Freezer 2002', 2230);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (2, 'Grille Pain FIFO', 120);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (3, 'Micro Wave 12', 369);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (4, 'Fridge L-2345', 650);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (5, 'Fridge Cool Maker', 750);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (6, 'Oven G-23', 500);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (7, 'Coffee Take-Alive', 25);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (8, 'Aspirtout', 170);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (9, 'Repasse-Facile', 69);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (10, 'Oven D-2', 800);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (11, 'Mixer Power 7', 99);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (12, 'Juice Easy-Press', 51);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (13, 'Machine à Laver', 300);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (14, 'Lave Vaisselle', 610);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (15, 'Télévision Pony L-234', 1100);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (16, 'Télévision Toshiho', 875);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (17, 'DVD-Player 45', 110);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (18, 'DVD-Player 67', 125);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (19, 'Video-Recorder', 60);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (20, 'Freez-457395', 2100);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (21, 'Freez SuperCold', 2400);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (22, 'Dryer-912', 568);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (23, 'Espresso-Power', 945);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (24, 'Aspire LIFO', 250);
INSERT INTO Article (NumArticle, Libellé, PrixUnitaire) VALUES (25, 'Coffee-Senseo LILO', 650);


DROP TABLE IF EXISTS Client ;
CREATE TABLE Client (
	NumClient int NOT NULL,   -- Numéro du client (clé primaire)
	Nom varchar(50) COLLATE NOCASE,
	Prénom varchar(50) COLLATE NOCASE,
	Adresse varchar(50) COLLATE NOCASE,
	CP varchar(50) COLLATE NOCASE,
	Localité varchar(50) COLLATE NOCASE,
	PRIMARY KEY (NumClient)
);

INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (1, 'Van Röll Döch de Böd', 'Slödne', '6, rue de Röde', '2584', 'Klötemötte');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (2, 'Neon', 'Tube', '8, rue de la Lumière', '4895', 'Luxembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (3, 'Sebuilder', 'Bob', '56, rue Constructor', '5841', 'Luxembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (4, 'Sponge', 'Bob', '65, rue de l''Océan', '1547', 'Bettembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (5, 'Alli', 'Gator', '25, rue du Crocodile', '1265', 'Wilwerwolz');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (6, 'Salabim', 'Sim', '14, rue des Prés', '4856', 'Bertrange');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (7, 'Steak', 'Beef', '6, ave. Foch', '8531', 'Luxembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (8, 'Philips', 'Sony', '15, ave. Kennedy', '4268', 'Bettembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (9, 'Zweistein', 'Albert', '45, rue de l''Orbite', '4175', 'Esch');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (10, 'Schmitt', 'Jeannot', '3, rue du Bois', '9348', 'Esch-s-Alzette');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (11, 'Guddebuer', 'Jacques', '8, rue du SGBD', '5842', 'Luxembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (12, 'Zweemille', 'Emile', '17, rue Bankomaat', '4920', 'Livange');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (13, 'Bo', 'Harry', '9, um Bockel', '1002', 'Wecker');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (14, 'Tirol', 'Anton', '9, um Bierg', '4025', 'Bettembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (15, 'Newton', 'Isaac', '4, rue du Pommier', '7426', 'Wilwerwolz');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (16, 'Yland', 'Jupp', '1, rue Feider', '3201', 'Hesperange');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (17, 'Bley', 'Jean-Jacques', '17, rue Joseph Lentz', '1152', 'Livange');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (18, 'DeKoub', 'Jacques', '9, am Nascht', '9032', 'Pétange');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (19, 'Schong', 'Jérôme', '2, rue Klopp', '3025', 'Rodange');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (20, 'Flor', 'Magaly', '2, rue de Bonnevoie', '2548', 'Luxembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (21, 'Rheude', 'Johanna', '17, rue du Cimetière', '1958', 'Luxembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (22, 'Hoffmann', 'Caroline', '17, rue Joseph Lentz', '1152', 'Livange');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (23, 'Fonseca', 'Patricia', '8, rue de la Liberté', '9027', 'Bettembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (24, 'Mattelet', 'Jennifer', '56, rue Arthur Herchen', '1727', 'Luxembourg');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (25, 'Mattelet', 'Audrey', '2, rue Klopp', '3025', 'Rodange');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (26, 'Schreiner', 'Cynthia', '8, rue Saint Sébastien', '3254', 'Esch');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (27, 'Tomas', 'Vanessa', '9, rue Ford', '2002', 'Remich');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (28, 'Jemming', 'Martine', '5, rue des Prés', '3336', 'Hellenge');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (29, 'Moto', 'Otto', '4, rue de Vélo', '4026', 'Remich');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (30, 'Matechovic', 'Jacob', '8, rue du Chateau', '9134', 'Wilwerwolz');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (31, 'Messer', 'Mecky', '66, an der Keck', '9898', 'Luxembourg');


DROP TABLE IF EXISTS Commande ;
CREATE TABLE Commande (
	NumCommande int NOT NULL,   -- Numéro de la commande (clé primaire)
	NumClient int,              -- Numéro du client (clé étrangère)
	DateCommande datetime,
	PRIMARY KEY (NumCommande),
  CONSTRAINT ClientCommande FOREIGN KEY (NumClient) REFERENCES Client (NumClient)
);

INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (1, 25, '2022-01-12');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (2, 15, '2022-01-15');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (3, 15, '2022-01-16');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (4, 17, '2022-01-16');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (5, 16, '2022-02-01');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (6, 15, '2022-02-01');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (7, 30, '2022-02-08');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (8, 24, '2022-02-20');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (9, 9, '2022-02-22');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (10, 6, '2022-02-28');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (11, 20, '2022-03-01');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (12, 2, '2022-03-03');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (13, 29, '2022-03-15');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (14, 6, '2022-03-23');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (15, 13, '2022-03-25');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (16, 3, '2022-03-30');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (17, 3, '2022-04-02');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (18, 5, '2022-04-05');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (19, 8, '2022-04-13');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (20, 21, '2022-04-20');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (21, 14, '2022-04-25');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (22, 27, '2022-04-26');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (23, 23, '2022-05-03');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (24, 25, '2022-05-17');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (25, 12, '2022-05-20');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (26, 15, '2022-05-25');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (27, 6, '2022-05-30');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (28, 29, '2022-06-01');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (29, 10, '2022-06-05');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (30, 30, '2022-06-10');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (31, 3, '2022-06-15');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (32, 9, '2022-06-20');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (33, 7, '2022-06-30');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (34, 16, '2022-07-15');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (35, 3, '2022-07-15');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (36, 28, '2022-07-20');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (37, 27, '2022-07-22');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (38, 5, '2022-08-01');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (39, 24, '2022-08-03');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (40, 19, '2022-08-03');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (41, 22, '2022-08-08');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (42, 18, '2022-08-10');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (43, 15, '2022-08-19');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (44, 12, '2022-08-23');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (45, 6, '2022-08-27');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (46, 18, '2022-09-30');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (47, 5, '2022-09-30');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (48, 9, '2022-09-30');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (49, 16, '2022-10-15');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (50, 23, '2022-10-18');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (51, 15, '2022-10-20');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (52, 3, '2022-10-30');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (53, 2, '2022-11-05');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (54, 13, '2022-11-10');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (55, 24, '2022-11-20');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (56, 9, '2022-11-25');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (57, 22, '2022-11-30');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (58, 30, '2022-12-15');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (59, 6, '2022-12-24');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (60, 29, '2022-12-24');
INSERT INTO Commande (NumCommande, NumClient, DateCommande) VALUES (61, 31, '2022-08-08');


DROP TABLE IF EXISTS Concerner ;
CREATE TABLE Concerner (
	NumCommande int NOT NULL,   -- Numéro de la commande (clé primaire)
	NumArticle int NOT NULL,    -- Numéro de l'article (clé étrangère)
	Quantité int COMMENT,       -- Quantité commandée
	PRIMARY KEY (NumCommande, NumArticle),
  CONSTRAINT ArticleConcerner FOREIGN KEY (NumArticle) REFERENCES Article (NumArticle),
  CONSTRAINT CommandeConcerner FOREIGN KEY (NumCommande) REFERENCES Commande (NumCommande)
);

INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (1, 25, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (2, 16, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (3, 3, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (4, 7, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (5, 20, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (6, 25, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (7, 15, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (8, 2, 5);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (9, 1, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (10, 6, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (11, 14, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (12, 23, 4);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (13, 9, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (14, 4, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (15, 2, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (16, 16, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (17, 17, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (18, 19, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (19, 20, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (20, 1, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (21, 1, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (22, 1, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (23, 6, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (24, 5, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (25, 18, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (26, 25, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (27, 5, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (28, 9, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (29, 2, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (30, 7, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (31, 8, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (32, 3, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (33, 6, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (34, 4, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (35, 11, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (36, 10, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (37, 12, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (38, 20, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (39, 22, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (40, 24, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (41, 23, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (42, 13, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (43, 22, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (44, 24, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (45, 12, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (46, 16, 4);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (47, 19, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (48, 18, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (49, 12, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (50, 11, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (51, 10, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (52, 23, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (53, 5, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (54, 6, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (55, 7, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (56, 8, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (57, 9, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (58, 1, 3);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (59, 10, 2);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (60, 18, 1);
INSERT INTO Concerner (NumCommande, NumArticle, Quantité) VALUES (61, 11, 10);

-- original mysql commands (not workling in sqlite)
-- ALTER TABLE Concerner ADD CONSTRAINT ArticleConcerner FOREIGN KEY (NumArticle) REFERENCES Article (NumArticle) ON UPDATE SET NULL ON DELETE SET NULL;
-- ALTER TABLE Commande ADD CONSTRAINT ClientCommande FOREIGN KEY (NumClient) REFERENCES Client (NumClient) ON UPDATE SET NULL ON DELETE SET NULL;
-- ALTER TABLE Concerner ADD CONSTRAINT CommandeConcerner FOREIGN KEY (NumCommande) REFERENCES Commande (NumCommande) ON UPDATE SET NULL ON DELETE SET NULL;
  `
},

{
label: 'Exercice 6 - Bibliothèque',
value:
`
DROP TABLE IF EXISTS Auteur ;
CREATE TABLE Auteur (
	NumAuteur int NOT NULL,   -- Numéro de l'auteur (clé primaire)
	Nom varchar(50) COLLATE NOCASE,
	Prénom varchar(50) COLLATE NOCASE,
	Nationalité varchar(50) COLLATE NOCASE,
	PRIMARY KEY (NumAuteur)
);

INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (1, 'Guddebuer', 'Jacques', 'LUX');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (2, 'Zweistein', 'Albert', 'ALL');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (3, 'Dumas', 'Alexandre', 'FRA');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (4, 'Van Kerckhoven', 'Nico', 'BEL');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (5, 'Moto', 'Yama', 'JAP');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (6, 'Brown', 'Dan', 'AME');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (7, 'Gibson', 'Margaret', 'ANG');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (8, 'Susanj', 'Jeanne', 'FRA');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (9, 'Kohl', 'Helmut', 'ALL');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (10, 'Klinsmann', 'Jürgen', 'ALL');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (11, 'Köpke', 'Andreas', 'ALL');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (12, 'Armstrong', 'Lance', 'AME');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (13, 'Masson', 'Luc', 'BEL');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (14, 'Bley', 'Jean-Jacques', 'LUX');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (15, 'Poe', 'Edgar Allan', 'ANG');
INSERT INTO Auteur (NumAuteur, Nom, Prénom, Nationalité) VALUES (16, 'Firgau', 'Amadeus', 'ALL');


DROP TABLE IF EXISTS Livre ;
CREATE TABLE Livre (
	NumLivre int NOT NULL,                 -- Numéro du livre (clé primaire)
	Titre varchar(50) COLLATE NOCASE,      -- Titre du livre
	Genre varchar(50) COLLATE NOCASE,      -- Roman, Policier, Action, ...
	Langue varchar(50) COLLATE NOCASE,     -- ALL, ANG, FRA, AUT, ...
	PRIMARY KEY (NumLivre)
);

INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (1, 'Da Vinci Code', 'Policier', 'ANG');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (2, 'Mein Leben', 'Biographie', 'ALL');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (3, 'The Day after tomorrow', 'Action', 'ANG');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (4, 'Le Restaurant de la Peur', 'Horreur', 'FRA');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (5, 'Windows 2099', 'Informatique', 'ANG');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (6, 'Camille where is Jeanny', 'Roman', 'ANG');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (7, 'Fussball', 'Biographie', 'ALL');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (8, 'Bayern München', 'Technique', 'ALL');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (9, 'Le passage de la Lune', 'Technique', 'FRA');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (10, 'Wonderland Avenue', 'Policier', 'FRA');
INSERT INTO Livre (NumLivre, Titre, Genre, Langue) VALUES (11, 'Das Schlangenei', 'Roman', 'ALL');


DROP TABLE IF EXISTS Exemplaire ;
CREATE TABLE Exemplaire (
	NumExemplaire int NOT NULL,   -- Numéro de l'exemplaire (clé primaire)
	NumLivre int,                 -- Numéro du livre (clé étrangère)
	DateAchat datetime,           -- Date d'achat de l'exemplaire'
	PRIMARY KEY (NumExemplaire),
  CONSTRAINT LivreExemplaire FOREIGN KEY (NumLivre) REFERENCES Livre (NumLivre)
);

INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (1, 1, '1998-02-13');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (2, 6, '1998-06-06');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (3, 3, '1998-03-19');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (4, 8, '1998-03-19');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (5, 9, '1998-02-02');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (6, 4, '1998-01-01');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (7, 2, '1998-06-06');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (8, 5, '1998-09-02');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (9, 3, '1998-08-19');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (10, 7, '1998-01-01');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (11, 9, '1998-10-19');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (12, 1, '1998-02-13');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (13, 2, '1998-09-02');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (14, 4, '1998-08-19');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (15, 5, '1998-10-11');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (16, 6, '1998-03-24');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (17, 7, '1998-02-13');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (18, 6, '1998-06-06');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (19, 5, '1998-12-24');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (20, 4, '1998-08-19');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (21, 6, '1998-02-10');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (22, 11, '1998-01-26');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (23, 11, '1998-02-28');
INSERT INTO Exemplaire (NumExemplaire, NumLivre, DateAchat) VALUES (24, 9, '1998-12-19');


DROP TABLE IF EXISTS AuteurLivre ;
CREATE TABLE AuteurLivre (
	NumAuteur int NOT NULL,   -- Numéro de l'auteur (clé étrangère)
	NumLivre int NOT NULL,    -- Numéro du livre (clé étrangère)
	PRIMARY KEY (NumAuteur, NumLivre),
  CONSTRAINT AuteurAuteurLivre FOREIGN KEY (NumAuteur) REFERENCES Auteur (NumAuteur),
  CONSTRAINT LivreAuteurLivre FOREIGN KEY (NumLivre) REFERENCES Livre (NumLivre)
);

INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (1, 2);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (2, 9);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (3, 4);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (8, 4);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (4, 7);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (4, 8);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (5, 5);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (6, 1);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (7, 10);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (10, 7);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (10, 8);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (11, 8);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (12, 3);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (9, 6);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (15, 4);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (13, 10);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (14, 6);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (3, 6);
INSERT INTO AuteurLivre (NumAuteur, NumLivre) VALUES (16, 11);


DROP TABLE IF EXISTS Membre ;
CREATE TABLE Membre (
	NumMembre int NOT NULL,   -- Numéro du membre (clé primaire)
	Nom varchar(50) COLLATE NOCASE,
	Prénom varchar(50) COLLATE NOCASE,
	Adresse varchar(50) COLLATE NOCASE,
	CP varchar(50) COLLATE NOCASE,
	Localité varchar(50) COLLATE NOCASE,
	PRIMARY KEY (NumMembre)
);

INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (1, 'Hoffmann', 'Caroline', '17, rue Joseph Lentz', '1528', 'Livange');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (2, 'Mattelet', 'Audrey', '5, rue Klopp', '6954', 'Rodange');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (3, 'Ries', 'Jeannot', '12, bvd. Royale', '8941', 'Luxembourg');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (4, 'Tube', 'Neon', '7, ave. Foch', '2057', 'Luxembourg');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (5, 'Fonseca', 'Patricia', '8, rue Morais', '5214', 'Bettembourg');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (6, 'Jemming', 'Martine', '1, rue des Prés', '3336', 'Hellange');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (7, 'Flor', 'Magaly', '2, rue de Bonnevoie', '1945', 'Luxembourg');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (8, 'Schong', 'Jérôme', '5, bvd. Saint Michel', '6954', 'Rodange');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (9, 'Mattelet', 'Jennifer', '6, rue Arthur Herchen', '1727', 'Luxembourg');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (10, 'Dengler', 'Alex', '1, am Waasser', '5484', 'Wasserbillig');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (11, 'Thill', 'Nicole', '22, rue Lila', '5474', 'Luxembourg');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (12, 'Claude', 'Pauly', '43, montée du Temps', '1212', 'Esch-s-Alzette');
INSERT INTO Membre (NumMembre, Nom, Prénom, Adresse, CP, Localité) VALUES (13, 'Lang', 'Lee', '32, chemin sans fin', '5445', 'Luxembourg');


DROP TABLE IF EXISTS Prêt ;
CREATE TABLE Prêt (
	NumPrêt int NOT NULL,   -- Numéro du prêt (clé primaire)
	NumExemplaire int,      -- Numéro de l'exemplaire (clé étrangère)
	NumMembre int,          -- Numéro du membre (clé étrangère)
	DatePrêt datetime,      -- Date du prêt
	DateRetour datetime,    -- Date du retour (livre non retourné: NULL)
	PRIMARY KEY (NumPrêt),
  CONSTRAINT ExemplairePrêt FOREIGN KEY (NumExemplaire) REFERENCES Exemplaire (NumExemplaire),
  CONSTRAINT MembrePrêt FOREIGN KEY (NumMembre) REFERENCES Membre (NumMembre)
);

INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (1, 1, 9, '1998-02-19', '1998-02-26');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (2, 6, 8, '1998-01-10', '1998-01-12');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (3, 8, 7, '1998-09-02', '1998-09-09');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (4, 4, 1, '1998-03-03', '1998-03-10');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (5, 20, 2, '1998-10-16', '1998-10-17');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (6, 13, 3, '1998-09-20', '1998-10-01');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (7, 5, 6, '2005-03-06', '2005-03-08');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (8, 10, 5, '1998-01-10', '1998-01-15');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (9, 1, 4, '1998-02-01', '1998-02-10');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (10, 14, 9, '1998-08-19', '1998-08-28');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (11, 3, 8, '1998-03-24', '1998-03-31');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (12, 7, 7, '1998-06-07', '1998-07-14');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (13, 11, 1, '1998-10-20', '1998-10-22');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (14, 16, 2, '1998-06-06', '1998-06-13');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (15, 12, 3, '2005-03-04', '2005-03-09');
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (16, 22, 12, '1998-11-11', null);
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (17, 5, 3, '1998-05-03', null);
INSERT INTO Prêt (NumPrêt, NumExemplaire, NumMembre, DatePrêt, DateRetour) VALUES (18, 19, 13, '1998-06-01', '1998-07-15');


-- original mysql commands (not workling in sqlite)
-- ALTER TABLE AuteurLivre ADD CONSTRAINT AuteurAuteurLivre FOREIGN KEY (NumAuteur) REFERENCES Auteur (NumAuteur) ON UPDATE SET NULL ON DELETE SET NULL;
-- ALTER TABLE AuteurLivre ADD CONSTRAINT LivreAuteurLivre FOREIGN KEY (NumLivre) REFERENCES Livre (NumLivre) ON UPDATE SET NULL ON DELETE SET NULL;
-- ALTER TABLE Exemplaire ADD CONSTRAINT LivreExemplaire FOREIGN KEY (NumLivre) REFERENCES Livre (NumLivre) ON UPDATE SET NULL ON DELETE SET NULL;
-- ALTER TABLE Prêt ADD CONSTRAINT MembrePrêt FOREIGN KEY (NumMembre) REFERENCES Membre (NumMembre) ON UPDATE SET NULL ON DELETE SET NULL;
-- ALTER TABLE Prêt ADD CONSTRAINT ExemplairePrêt FOREIGN KEY (NumExemplaire) REFERENCES Exemplaire (NumExemplaire) ON UPDATE SET NULL ON DELETE SET NULL;
`
},
  
{
label: 'Cours p. 80 ... 95 - Employé',
value:
`
DROP TABLE IF EXISTS Employé ;
CREATE TABLE Employé (
	Numéro float,				                -- Numéro de l'employé (clé primaire)
	Nom varchar(255) COLLATE NOCASE,			-- Nom de l'employé'
	Prénom varchar(255) COLLATE NOCASE,	        -- Prénom de l'employé
	Nationalité varchar(255) COLLATE NOCASE, 	-- Nationalité de l'employé
	Age float,					                -- Age de l'employé
	Sexe varchar(255) COLLATE NOCASE,			-- Sexe de l'employé (M/F)
	Service varchar(255) COLLATE NOCASE,		-- Service auquel l'employé est affecté
	EntréeService datetime		                -- Date d'entrée en service
);

INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (1, 'Wengler', 'Guy', 'LUX', 24, 'M', 'Comptabiltité', '2020-09-21');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (2, 'Jurcevic', 'Alain', 'LUX', 28, 'M', 'Comptabiltité', '2016-09-02');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (3, 'Ribeiro', 'Jean-Marie', 'PRT', 23, 'M', 'Facturation', '2020-06-26');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (4, 'Georges', 'Florent', 'LUX', 42, 'M', 'Facturation', '2001-02-14');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (5, 'Muller', 'Patricia', 'ALL', 35, 'F', 'Informatique', '2011-05-14');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (6, 'Cunha Teixeira', 'Cindy', 'PRT', 33, 'F', 'Secrétariat', '2016-06-09');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (7, 'Kirsch', 'Claudine', 'ALL', 49, 'F', 'Direction', '1997-12-28');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (8, 'Cunha', 'Carlos', 'PRT', 45, 'M', 'Facturation', '2015-09-07');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (9, 'Torres', 'John', 'FRA', 32, 'M', 'Informatique', '2014-11-29');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (10, 'Medina', 'Vincenzo', 'ESP', 28, 'M', 'Secrétariat', '2019-04-20');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (11, 'Cloos', 'Edmond', 'LUX', 23, 'M', 'Achat', '2020-08-29');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (12, 'Silva Machado', 'Eugène', 'PRT', 29, 'M', 'Direction', '2014-01-15');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (13, 'Ipavec', 'Elsa', 'ESP', 55, 'F', 'Vente', '1991-06-24');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (14, 'Reinert', 'Charles', 'ALL', 43, 'M', 'Marketing', '1997-03-21');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (15, 'Weber', 'Jos', 'LUX', 32, 'M', 'Vente', '2018-03-06');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (16, 'Tempels', 'Manuel', 'ALL', 26, 'M', null, '2016-10-19');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (17, 'Muller', 'Henri', 'LUX', 43, 'M', 'Informatique', '2012-09-14');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (18, 'Bruyn', 'Tessy', 'NED', 23, 'F', 'Marketing', '2020-05-05');
INSERT INTO Employé (Numéro, Nom, Prénom, Nationalité, Age, Sexe, Service, EntréeService) VALUES (19, 'Flammang', 'Camille', 'LUX', 22, 'F', 'Technique', '2019-06-04');
`
},

{
label: 'Cours p. 96 ... 109 - Livre',
value:
`
DROP TABLE IF EXISTS Livre ;
CREATE TABLE Livre (
	Numéro int NOT NULL, 	            -- Numéro du livre (clé primaire)
	Titre varchar(50) COLLATE NOCASE,	-- Titre du livre
	Auteur varchar(50) COLLATE NOCASE,	-- Auteur du livre
	Langue varchar(50) COLLATE NOCASE,	-- Langue (ALL, FRA, ANG)
	Genre varchar(50) COLLATE NOCASE,   -- Genre du livre (Roman, Technique, Histoire, ...)
	Prix int, 				            -- Prix de vente du livre
	EnStock int,			            -- Quantité d'exemplaires en stock
	PRIMARY KEY (Numéro)
);

INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (1, 'Teach yourself Java in 21 days', 'Albert Schmitt', 'ANG', 'Technique', 16, 55);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (2, 'MS-Access 2.0', 'Bob Sebuilder', 'ANG', 'Technique', 33, 200);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (3, 'MS-Access 2019', 'Bob Sebuilder', 'ANG', 'Technique', 33, 56);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (4, 'New Windows 11', 'Camille Kamel', 'FRA', 'Technique', 16, 97);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (5, 'Die Prüfung', 'Bill Kill', 'ALL', 'Roman', 21, 51);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (6, 'Le micro … comment ça marche ?', 'Simon Scotch', 'FRA', 'Technique', 60, 12);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (7, 'L''homme juste', 'Justa Klein', 'FRA', 'Roman', 20, 33);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (8, 'Der letzte Zar', 'Vladimir Lenin', 'ALL', 'Histoire', 15, 3);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (9, 'Novell Netware', 'Neon Tube', 'ANG', 'Technique', 28, 100);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (10, 'Roter Drache', 'Sponge Bob', 'ALL', 'Roman', 17, 0);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (11, 'Der Zerfall', 'Vladimir Lenin', 'ALL', 'Histoire', 37, 23);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (12, 'Dracula', 'Vlad Tepes', 'FRA', 'Roman', 20, 50);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (13, 'Schieb den …', 'Caroline Hoffmann', 'ALL', 'Roman', 15, 34);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (14, '… zurück ins Meer', 'Jennifer Mattelet', 'ALL', 'Roman', 15, 34);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (15, 'Windows 95', 'Pierre Godefroid', 'FRA', 'Technique', 50, 0);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (16, 'Merry Christmas', 'Santa Claus', 'ANG', 'Roman', 75, 5);
INSERT INTO Livre (Numéro, Titre, Auteur, Langue, Genre, Prix, EnStock) VALUES (17, 'Enter the Matrix', 'Trinity Nebu', 'ANG', 'Roman', 0, 0);	
`
},

{
label: 'Cours p. 131 ... 135 - Compte Banque',
value:
`
DROP TABLE IF EXISTS Client ;
CREATE TABLE Client (
	NumClient int NOT NULL,
	Nom varchar(255) COLLATE NOCASE,
	Prénom varchar(255) COLLATE NOCASE,
	PRIMARY KEY (NumClient)
);

INSERT INTO Client (NumClient, Nom, Prénom) VALUES (1, 'Pegaso', 'Emilio');
INSERT INTO Client (NumClient, Nom, Prénom) VALUES (2, 'Weber', 'Jos');
INSERT INTO Client (NumClient, Nom, Prénom) VALUES (3, 'Muller', 'Ketty');

DROP TABLE IF EXISTS Compte ;
CREATE TABLE Compte (
	NumCompte int NOT NULL,
	Valeur int,
	NumClient int,
	PRIMARY KEY (NumCompte),
	CONSTRAINT ClientCompte FOREIGN KEY (NumClient) REFERENCES Client
);

INSERT INTO Compte (NumCompte, Valeur, NumClient) VALUES (101, 20000, 3);
INSERT INTO Compte (NumCompte, Valeur, NumClient) VALUES (106, 48000, 2);
INSERT INTO Compte (NumCompte, Valeur, NumClient) VALUES (112, 9000, 3);
INSERT INTO Compte (NumCompte, Valeur, NumClient) VALUES (125, 5000, 1);


-- original mysql commands (not workling in sqlite)
-- ALTER TABLE Compte ADD CONSTRAINT ClientCompte FOREIGN KEY (NumClient) REFERENCES Client (NumClient) ON UPDATE SET NULL ON DELETE SET NULL;	
`
},

{
label: 'Cours p. 136 ... 149 - Agence',
value:
`
DROP TABLE IF EXISTS Agence ;
CREATE TABLE Agence (
	NumAgence int NOT NULL,
	Adresse varchar(255) COLLATE NOCASE,
	CP varchar(255) COLLATE NOCASE,
	Localité varchar(255) COLLATE NOCASE,
	PRIMARY KEY (NumAgence)
);

INSERT INTO Agence (NumAgence, Adresse, CP, Localité) VALUES (12, '15, bvd Royal', '5377', 'Luxembourg');
INSERT INTO Agence (NumAgence, Adresse, CP, Localité) VALUES (24, '67, rue de l''Alzette', '8765', 'Esch-s-Alzette');
INSERT INTO Agence (NumAgence, Adresse, CP, Localité) VALUES (30, '2, Grand Rue', '6678', 'Ettelbruck');

DROP TABLE IF EXISTS Client ;
CREATE TABLE Client (
	NumClient int NOT NULL,
	Nom varchar(255) COLLATE NOCASE,
	Prénom varchar(255) COLLATE NOCASE,
	Adresse varchar(255) COLLATE NOCASE,
	CP varchar(255) COLLATE NOCASE,
	Localité varchar(255) COLLATE NOCASE,
	PRIMARY KEY (NumClient)
);

INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (1, 'Pegaso', 'Emilio', '25, rue de la Gare', '2278', 'Diekirch');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (2, 'Weber', 'Jos', '66a, Cité Paerchen', '1234', 'Schifflange');
INSERT INTO Client (NumClient, Nom, Prénom, Adresse, CP, Localité) VALUES (3, 'Muller', 'Ketty', '102, av G. Diederich', '6690', 'Luxembourg');

DROP TABLE IF EXISTS Compte ;
CREATE TABLE Compte (
	NumCompte int NOT NULL,
	Valeur int,
	NumAgence int,
	NumClient int,
	PRIMARY KEY (NumCompte),
	CONSTRAINT AgenceCompte FOREIGN KEY (NumAgence) REFERENCES Agence (NumAgence),
	CONSTRAINT ClientCompte FOREIGN KEY (NumClient) REFERENCES Client (NumClient)
);

INSERT INTO Compte (NumCompte, Valeur, NumAgence, NumClient) VALUES (101, 20000, 12, 3);
INSERT INTO Compte (NumCompte, Valeur, NumAgence, NumClient) VALUES (106, 48000, 24, 2);
INSERT INTO Compte (NumCompte, Valeur, NumAgence, NumClient) VALUES (112, 9000, 12, 3);
INSERT INTO Compte (NumCompte, Valeur, NumAgence, NumClient) VALUES (125, 5000, 30, 1);

-- original mysql commands (not workling in sqlite)
-- ALTER TABLE Compte ADD CONSTRAINT AgenceCompte FOREIGN KEY (NumAgence) REFERENCES Agence (NumAgence) ON UPDATE SET NULL ON DELETE SET NULL;
-- ALTER TABLE Compte ADD CONSTRAINT ClientCompte FOREIGN KEY (NumClient) REFERENCES Client (NumClient) ON UPDATE SET NULL ON DELETE SET NULL;
`
},

// {
// label: 'Exercice 0 - Supermarché',
// value:
// `
		
// `
// },

// {
// label: 'Exercice 0 - Supermarché',
// value:
// `
	
// `
// },

// {
// label: 'Exercice 0 - Supermarché',
// value:
// `
		
// `
// },


];

export default dbs;