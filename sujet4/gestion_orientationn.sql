-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 30 avr. 2024 à 00:06
-- Version du serveur : 10.4.8-MariaDB
-- Version de PHP : 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestion_orientationn`
--

-- --------------------------------------------------------

--
-- Structure de la table `candidat`
--

CREATE TABLE `candidat` (
  `ncin` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
  `nom_prenom` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `score_base` decimal(6,3) NOT NULL,
  `code_etat` enum('R','N') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `candidat`
--

INSERT INTO `candidat` (`ncin`, `nom_prenom`, `score_base`, `code_etat`) VALUES
('00112233', 'Ali Abidi', '135.000', 'R'),
('00112236', 'Haifa tounsi', '100.000', 'N'),
('00112243', 'Adel Gharbi', '125.000', 'N'),
('00112280', 'Kamel ayadi', '118.000', 'N');

-- --------------------------------------------------------

--
-- Structure de la table `choix`
--

CREATE TABLE `choix` (
  `ncin` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
  `code_inst` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `rang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `choix`
--

INSERT INTO `choix` (`ncin`, `code_inst`, `rang`) VALUES
('00112233', 'I1', 4),
('00112233', 'I2', 2),
('00112236', 'I2', 15),
('00112236', 'I3', 5),
('00112243', 'I3', 3);

-- --------------------------------------------------------

--
-- Structure de la table `etat`
--

CREATE TABLE `etat` (
  `code_etat` enum('R','N') COLLATE utf8_unicode_ci NOT NULL,
  `lib_etat` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `bonus` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `etat`
--

INSERT INTO `etat` (`code_etat`, `lib_etat`, `bonus`) VALUES
('R', 'Redoublant', '1.00'),
('N', 'Nouveaux', '1.05');

-- --------------------------------------------------------

--
-- Structure de la table `institut`
--

CREATE TABLE `institut` (
  `code_inst` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `nom_inst` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `score_inst` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `institut`
--

INSERT INTO `institut` (`code_inst`, `nom_inst`, `score_inst`) VALUES
('I1', 'IHEC', 150),
('I2', 'ISG', 130),
('I3', 'ESSEC', 115);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `candidat`
--
ALTER TABLE `candidat`
  ADD PRIMARY KEY (`ncin`),
  ADD KEY `code_etat` (`code_etat`);

--
-- Index pour la table `choix`
--
ALTER TABLE `choix`
  ADD PRIMARY KEY (`ncin`,`code_inst`),
  ADD KEY `ncin` (`ncin`,`code_inst`),
  ADD KEY `code_inst` (`code_inst`);

--
-- Index pour la table `etat`
--
ALTER TABLE `etat`
  ADD PRIMARY KEY (`code_etat`);

--
-- Index pour la table `institut`
--
ALTER TABLE `institut`
  ADD PRIMARY KEY (`code_inst`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `candidat`
--
ALTER TABLE `candidat`
  ADD CONSTRAINT `candidat_ibfk_1` FOREIGN KEY (`code_etat`) REFERENCES `etat` (`code_etat`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `choix`
--
ALTER TABLE `choix`
  ADD CONSTRAINT `choix_ibfk_1` FOREIGN KEY (`ncin`) REFERENCES `candidat` (`ncin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `choix_ibfk_2` FOREIGN KEY (`code_inst`) REFERENCES `institut` (`code_inst`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
