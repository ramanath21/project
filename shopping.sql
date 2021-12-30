-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2021 at 05:55 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `cost` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `headphone`
--

CREATE TABLE `headphone` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `cost` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `headphone`
--

INSERT INTO `headphone` (`id`, `name`, `description`, `cost`) VALUES
('01', 'boat', 'bsgss shs', '8999'),
('03', 'jbl', 'siijs', '40000'),
('23', 'jbl', 'awsome', '2999'),
('40', 'honor 9n', 'gud ', '9999');

-- --------------------------------------------------------

--
-- Table structure for table `laptop`
--

CREATE TABLE `laptop` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `cost` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `laptop`
--

INSERT INTO `laptop` (`id`, `name`, `description`, `cost`) VALUES
('01', 'dell', 'dhdd dhjd', '200'),
('02', 'hp', 'shhw uihw', '40000'),
('32', 'lenovo', 'think pad', '92000'),
('33', 'dell', 'de', '33'),
('56', 'hp', 'hp', '60000');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `name` varchar(50) NOT NULL,
  `id` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`name`, `id`, `password`) VALUES
('', '', ''),
('thanu', '20', '1234'),
('rama', 'rama@aris', '4321'),
('rup', 'rup@gmail.com', '1234'),
('saha', 'saha@aris', '987'),
('surj', 'sura@aris', '1234'),
('Teresa', 'ter@aris', '123'),
('teres', 'ter@gmail.com', '819');

-- --------------------------------------------------------

--
-- Table structure for table `ordertable`
--

CREATE TABLE `ordertable` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `cost` varchar(30) NOT NULL,
  `uname` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `mode` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ordertable`
--

INSERT INTO `ordertable` (`id`, `name`, `description`, `cost`, `uname`, `address`, `phone`, `mode`) VALUES
('01', 'dell', 'dhdd dhjd', '200', 'saha', 'banglore', '674577', 'cc'),
('02', 'hp', 'shhw uihw', '40000', 'teresa nancy', 'banglore', '987668967', 'cc'),
('03', 'APPLE', 'APPLE iPhone 11 Pro', 'Cost:₹11,289', 'honor 9n', 'udupi', '8150900432', 'cc');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `cost` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `cost`) VALUES
('01', 'SAMSUNG ', 'SAMSUNG  Galaxy M12 (Blue, 64 GB) (4 GB RAM)', 'Cost:₹11,289'),
('02', 'Realme', 'Realme 8 Pro (Infinite Black, 128 GB) (8 GB', 'Cost:₹11,289'),
('03', 'APPLE', 'APPLE iPhone 11 Pro', 'Cost:₹11,289'),
('04', 'Mi ', ' 11X Pro 5G (Lunar White, 128 GB) (8 GB RAM)', 'Cost:₹11,289'),
('05', 'POCO', ' C31 (Royal Blue, 64 GB) (4 GB RAM)', 'Cost:₹11,289'),
('06', 'MOTOROLA', 'MOTOROLA e40 (Carbon Gray, 64 GB) (4 GB RAM)', 'Cost:₹11,289');

-- --------------------------------------------------------

--
-- Table structure for table `t_admin`
--

CREATE TABLE `t_admin` (
  `id` varchar(50) NOT NULL,
  `aname` varchar(50) NOT NULL,
  `eml` varchar(50) NOT NULL,
  `pswd` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_admin`
--

INSERT INTO `t_admin` (`id`, `aname`, `eml`, `pswd`) VALUES
('40', 'ramanath', 'ram@gmail.com', 'password');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `headphone`
--
ALTER TABLE `headphone`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laptop`
--
ALTER TABLE `laptop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ordertable`
--
ALTER TABLE `ordertable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_admin`
--
ALTER TABLE `t_admin`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
