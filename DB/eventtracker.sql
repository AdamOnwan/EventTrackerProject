-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventdb` ;

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventdb` DEFAULT CHARACTER SET utf8 ;
USE `eventdb` ;

-- -----------------------------------------------------
-- Table `Volunteer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Volunteer` ;

CREATE TABLE IF NOT EXISTS `Volunteer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NULL,
  `status` VARCHAR(100) NULL,
  `skills` VARCHAR(100) NULL,
  `availability` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Volunteer`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `Volunteer` (`id`, `first_name`, `last_name`, `phone`, `email`, `status`, `skills`, `availability`) VALUES (1, 'Adam', 'Onwan', '(701) 111-1111', 'adamonwan@volunteer.com', 'active', 'Computer Usage', 'Weekly');
INSERT INTO `Volunteer` (`id`, `first_name`, `last_name`, `phone`, `email`, `status`, `skills`, `availability`) VALUES (2, 'Ryan', 'Seacrest', '(619) 111-1111', 'ryanseacrest@volunteer.com', 'inactive', 'Event Planning', NULL);
INSERT INTO `Volunteer` (`id`, `first_name`, `last_name`, `phone`, `email`, `status`, `skills`, `availability`) VALUES (3, 'Bill', 'Gates', '(206) 111-1111', 'billgates@volunteer.com', 'active', 'Computer Usage', 'Afternoon');
INSERT INTO `Volunteer` (`id`, `first_name`, `last_name`, `phone`, `email`, `status`, `skills`, `availability`) VALUES (4, 'Kim', 'Kardashian', '(424) 111-1111', 'kimkardashian@volunteer.com', 'active', 'Fundraising', 'Weekdays');
INSERT INTO `Volunteer` (`id`, `first_name`, `last_name`, `phone`, `email`, `status`, `skills`, `availability`) VALUES (5, 'Carson', 'Wentz', '(701) 222-2222', 'carsonwentz@volunteer.com', 'active', 'Manual Labor', 'Morning');
INSERT INTO `Volunteer` (`id`, `first_name`, `last_name`, `phone`, `email`, `status`, `skills`, `availability`) VALUES (6, 'Mark', 'Henry', '(409) 111-1111', 'markhenry@volunteer.com', 'active', 'Manual Labor', 'Afternoon');
INSERT INTO `Volunteer` (`id`, `first_name`, `last_name`, `phone`, `email`, `status`, `skills`, `availability`) VALUES (7, 'Gary', 'Vaynerchuk', '(212) 111-1111', 'garyvaynerchuk@volunteer.com', 'active', 'Event Planning', 'Weekends');
INSERT INTO `Volunteer` (`id`, `first_name`, `last_name`, `phone`, `email`, `status`, `skills`, `availability`) VALUES (8, 'Larry', 'Ellison', '(718) 111-1111', 'larryellison@volunteer.com', 'active', 'Computer Usage', 'Afternoon');
INSERT INTO `Volunteer` (`id`, `first_name`, `last_name`, `phone`, `email`, `status`, `skills`, `availability`) VALUES (9, 'Brock', 'Lesnar', '(605) 111-1111', 'brocklesnar@volunteer.com', 'active', 'Manual Labor', 'Weekly');

COMMIT;

