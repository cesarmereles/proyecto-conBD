-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-09-2023 a las 15:22:09
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebabd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones2`
--

CREATE TABLE `publicaciones2` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `detalle` varchar(255) NOT NULL,
  `url_imagen` varchar(255) NOT NULL,
  `fecha_publicacion` date NOT NULL,
  `autor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `publicaciones2`
--

INSERT INTO `publicaciones2` (`id`, `titulo`, `detalle`, `url_imagen`, `fecha_publicacion`, `autor`) VALUES
(1, 'Disco sólido interno Crucial CT1000BX500SSD1 1TB', '\n\nCon tecnología 3D NAND.\nÚtil para guardar programas y documentos con su capacidad de 1 TB.', 'https://http2.mlstatic.com/D_658081-MLA48675436704_122021-F.jpg', '2023-09-26', 'Cesar'),
(2, 'Memoria DRR4', 'Memoria RAM ValueRAM color verde 4GB 1 Kingston KVR1333D3N9/4G', 'https://www.fullh4rd.com.ar/img/productos/4/memoria-8gb-ddr4-3200-kingston-value-0.jpg', '2023-09-26', 'Maria'),
(3, 'Teclado gamer inalámbrico Redragon', 'Es inálambrico. | Consolas compatibles: ps4 y xbox. | Ergonómico y apto para diversos usos. | Resiste a salpicaduras.', 'https://www.migos.com.ar/wp-content/uploads/2021/06/Diseno-sin-titulo-2023-09-11T143422.279-600x600.png', '2023-09-26', 'Ignacio');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `publicaciones2`
--
ALTER TABLE `publicaciones2`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `publicaciones2`
--
ALTER TABLE `publicaciones2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
