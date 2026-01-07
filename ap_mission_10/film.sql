-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 09 déc. 2025 à 14:49
-- Version du serveur : 8.0.39
-- Version de PHP : 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cinema`
--

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE `film` (
  `ident_film` int NOT NULL,
  `titre` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `genre1` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `genre2` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `date_sortie` date NOT NULL,
  `pays` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `ident_realisateur` int NOT NULL,
  `distributeur` text COLLATE utf8mb4_general_ci NOT NULL,
  `duree` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `film`
--

INSERT INTO `film` (`ident_film`, `titre`, `genre1`, `genre2`, `date_sortie`, `pays`, `ident_realisateur`, `distributeur`, `duree`) VALUES
(1, 'SUBWAY', 'POLICIER', 'DRAME', '1965-04-10', '1', 1, 'GAUMONT', 104),
(2, 'NIKOTA', 'DRAME', 'ROMANTIQUE', '1990-02-21', '1', 1, 'GAUMONT', 118),
(3, 'STAR WARS ET LE RETOUR DU JEDO', 'ACTION', 'SF', '1963-10-19', '2', 2, '20th Century Fax', 133),
(4, 'AVATAR', 'ACTION', 'SF', '2009-10-16', '2', 3, '20th Century Fax', 170),
(7, 'Bienvenue chez les Chtis', 'Comédie', '', '2008-02-27', 'France', 4, 'Gaumont', 100);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`ident_film`),
  ADD KEY `ident_realisateur` (`ident_realisateur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `film`
--
ALTER TABLE `film`
  MODIFY `ident_film` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `film`
--
ALTER TABLE `film`
  ADD CONSTRAINT `film_ibfk_1` FOREIGN KEY (`ident_realisateur`) REFERENCES `realisateur` (`ident_realisateur`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
