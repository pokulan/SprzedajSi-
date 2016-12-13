-- phpMyAdmin SQL Dump
-- version 4.7.0-dev
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.30.23
-- Czas generowania: 12 Gru 2016, 07:40
-- Wersja serwera: 5.5.52-0+deb8u1
-- Wersja PHP: 5.6.27-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE OGLOSZENIOWA;
USE OGLOSZENIOWA;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `OGLOSZENIOWA`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ogloszenie`
--

CREATE TABLE `ogloszenie` (
  `id` int(11) NOT NULL,
  `name` varchar(511) COLLATE utf8_polish_ci NOT NULL,
  `descr` text COLLATE utf8_polish_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `kat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `ogloszenie`
--

INSERT INTO `ogloszenie` (`id`, `name`, `descr`, `user_id`, `kat_id`) VALUES
(1, 'Lutowanie', 'Przytlutuję, że aż się zesrasz. Możliwość przylutowanie innej osobie za opłatą.', 5214, 501),
(202, 'Piłowanie', 'Piłujemy golfa na ręcznym aż się kurzy. Jeśli nie umiesz driftować to ta oferta jest dla Ciebie', 5214, 502);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `ogloszenie`
--
ALTER TABLE `ogloszenie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
