-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           12.3.2-MariaDB - MariaDB Server
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.17.0.7270
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para sm_guardiam
CREATE DATABASE IF NOT EXISTS `sm_guardiam` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `sm_guardiam`;

-- Copiando estrutura para tabela sm_guardiam.cartao
CREATE TABLE IF NOT EXISTS `cartao` (
  `ID_CARTAO` int(11) NOT NULL AUTO_INCREMENT,
  `NUMERO` varchar(12) DEFAULT NULL,
  `TIPO` enum('CREDITO','DEBITO') DEFAULT NULL,
  `ID_CLIENTE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_CARTAO`),
  KEY `FK_CARTAO` (`ID_CLIENTE`),
  CONSTRAINT `FK_CARTAO` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `clientes` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela sm_guardiam.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(100) NOT NULL,
  `CPF` char(11) NOT NULL,
  `EMAIL` varchar(100) DEFAULT NULL,
  `SENHA` varchar(100) DEFAULT NULL,
  `ENDERECO` varchar(250) DEFAULT NULL,
  `PLANO` enum('ESSENCIAL','PROFISSIONAL','PREMIUM') DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `CPF` (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela sm_guardiam.moveis
CREATE TABLE IF NOT EXISTS `moveis` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NOME_MOVEL` varchar(100) NOT NULL,
  `TIPO` enum('TELEVISAO','COMPUTADOR','REFRIGERACAO','LUZ','HIGIENE PESSOAL','OUTROS') DEFAULT NULL,
  `CONSUMO_ENERGIA` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela sm_guardiam.telefone
CREATE TABLE IF NOT EXISTS `telefone` (
  `ID_TELEFONE` int(11) NOT NULL AUTO_INCREMENT,
  `FONE` varchar(11) DEFAULT NULL,
  `ID_CLIENTE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_TELEFONE`),
  KEY `FK_FONE` (`ID_CLIENTE`),
  CONSTRAINT `FK_FONE` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `clientes` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Exportação de dados foi desmarcado.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
