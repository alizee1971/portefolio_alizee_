-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 21 nov. 2025 à 11:06
-- Version du serveur : 8.0.31
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `location_de_voiture`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id_client` int NOT NULL,
  `nom` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `telephone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `adresse` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id_client`, `nom`, `prenom`, `telephone`, `email`, `adresse`) VALUES
(1, 'Dupont', 'Marie', '0601020304', 'marie.dupont@example.com', 'Nouvelle adresse, Paris'),
(2, 'Martin', 'Lucas', '0678493021', 'lucas.martin@example.com', '45 avenue de Lyon, Lyon'),
(3, 'Bernard', 'Sophie', '0612233445', 'sophie.bernard@example.com', '78 rue Nationale, Lille'),
(4, 'Petit', 'Hugo', '0699887766', 'hugo.petit@example.com', '10 chemin Vert, Marseille'),
(5, 'Lefevre', 'Claire', '0611458799', 'claire.lefevre@example.com', '50 rue du Centre, Toulouse'),
(6, 'Roux', 'Antoine', '0677889911', 'antoine.roux@example.com', '8 impasse Soleil, Bordeaux'),
(7, 'Fontaine', 'Laura', '0644221133', 'laura.fontaine@example.com', '21 allée Verte, Nantes'),
(8, 'Garnier', 'Thomas', '0622334455', 'thomas.garnier@example.com', '3 rue du Port, Nice'),
(9, 'Chevalier', 'Emma', '0655443322', 'emma.chevalier@example.com', '17 avenue Sud, Strasbourg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
