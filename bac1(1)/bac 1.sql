-- xampp-lite https://sourceforge.net/projects/xampplite/
--
-- mysqldump-php https://github.com/ifsnop/mysqldump-php
--
-- Host: localhost	Database: bac 1
-- ------------------------------------------------------
-- Server version 	5.5.5-10.4.8-MariaDB
-- Date: Wed, 08 Jan 2025 17:18:50 +0100

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `commentaire`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commentaire` (
  `numcom` int(11) NOT NULL AUTO_INCREMENT,
  `contenu` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `datecom` datetime NOT NULL,
  `pseudo` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `numsujet` int(11) NOT NULL,
  PRIMARY KEY (`numcom`),
  KEY `numsujet` (`numsujet`),
  KEY `pseudo` (`pseudo`),
  CONSTRAINT `commentaire_ibfk_1` FOREIGN KEY (`numsujet`) REFERENCES `sujet` (`Numsujet`),
  CONSTRAINT `commentaire_ibfk_2` FOREIGN KEY (`pseudo`) REFERENCES `membre` (`Pseudo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentaire`
--


-- Dumped table `commentaire` with 0 row(s)
--

--
-- Table structure for table `membre`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `membre` (
  `Pseudo` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `nom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Pseudo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membre`
--

INSERT INTO `membre` (`Pseudo`, `nom`, `prenom`, `email`) VALUES ('Alia123','Sahbani','Alia','Sahbani.Alia@edunet.tn');
INSERT INTO `membre` (`Pseudo`, `nom`, `prenom`, `email`) VALUES ('Bahmed','Bahri','Imed','Bahri.Imed@gmail.com');
INSERT INTO `membre` (`Pseudo`, `nom`, `prenom`, `email`) VALUES ('Besgabt','Gabtni','Besma','Besma.gabtni@yahoo.fr');
INSERT INTO `membre` (`Pseudo`, `nom`, `prenom`, `email`) VALUES ('Hamrounif','Hamrouni','Fethi','Hamrouni@gmail.com');

-- Dumped table `membre` with 4 row(s)
--

--
-- Table structure for table `sujet`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sujet` (
  `numsujet` int(11) NOT NULL,
  `theme` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `datesujet` date NOT NULL,
  PRIMARY KEY (`numsujet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sujet`
--

INSERT INTO `sujet` (`numsujet`, `theme`, `datesujet`) VALUES (1,'Les enregistrements et les fichiers','2011-10-05');
INSERT INTO `sujet` (`numsujet`, `theme`, `datesujet`) VALUES (2,'La récursivité','2011-11-11');
INSERT INTO `sujet` (`numsujet`, `theme`, `datesujet`) VALUES (3,'Les algorithmes de tri ','2012-01-15');
INSERT INTO `sujet` (`numsujet`, `theme`, `datesujet`) VALUES (4,'Les algortihmes arithmetiques','2012-03-02');

-- Dumped table `sujet` with 4 row(s)
--

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on: Wed, 08 Jan 2025 17:18:50 +0100
