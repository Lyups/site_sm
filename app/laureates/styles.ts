import { css } from '@emotion/react';

export const starsStyles = css`
  @keyframes twinkle {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
  }

  .stars {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
  }

  .star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    animation: twinkle 3s infinite;
    z-index: 1;
  }

  .static-star {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    z-index: 1;
  }

  /* Большие звёзды */
  .star:nth-of-type(3n) { width: 3px; height: 3px; }
  .star:nth-of-type(5n) { width: 2px; height: 2px; }
  .star:nth-of-type(7n) { width: 1px; height: 1px; }

  /* Статичные звёзды разных размеров */
  .static-star:nth-of-type(2n) { width: 1px; height: 1px; }
  .static-star:nth-of-type(3n) { width: 1.5px; height: 1.5px; }
  .static-star:nth-of-type(5n) { width: 2px; height: 2px; }
  .static-star:nth-of-type(7n) { width: 1px; height: 1px; }

  /* Разная прозрачность для статичных звёзд */
  .static-star:nth-of-type(3n) { opacity: 0.2; }
  .static-star:nth-of-type(5n) { opacity: 0.3; }
  .static-star:nth-of-type(7n) { opacity: 0.4; }
  .static-star:nth-of-type(11n) { opacity: 0.5; }

  /* Позиции звёзд */
  .star:nth-of-type(1) { top: 5%; left: 10%; animation-delay: 0s; }
  .star:nth-of-type(2) { top: 15%; left: 20%; animation-delay: 0.2s; }
  .star:nth-of-type(3) { top: 25%; left: 30%; animation-delay: 0.4s; }
  .star:nth-of-type(4) { top: 35%; left: 40%; animation-delay: 0.6s; }
  .star:nth-of-type(5) { top: 45%; left: 50%; animation-delay: 0.8s; }
  .star:nth-of-type(6) { top: 55%; left: 60%; animation-delay: 1s; }
  .star:nth-of-type(7) { top: 65%; left: 70%; animation-delay: 1.2s; }
  .star:nth-of-type(8) { top: 75%; left: 80%; animation-delay: 1.4s; }
  .star:nth-of-type(9) { top: 85%; left: 90%; animation-delay: 1.6s; }
  .star:nth-of-type(10) { top: 10%; left: 15%; animation-delay: 1.8s; }
  .star:nth-of-type(11) { top: 20%; left: 25%; animation-delay: 2s; }
  .star:nth-of-type(12) { top: 30%; left: 35%; animation-delay: 2.2s; }
  .star:nth-of-type(13) { top: 40%; left: 45%; animation-delay: 2.4s; }
  .star:nth-of-type(14) { top: 50%; left: 55%; animation-delay: 2.6s; }
  .star:nth-of-type(15) { top: 60%; left: 65%; animation-delay: 2.8s; }
  .star:nth-of-type(16) { top: 70%; left: 75%; animation-delay: 0.1s; }
  .star:nth-of-type(17) { top: 80%; left: 85%; animation-delay: 0.3s; }
  .star:nth-of-type(18) { top: 90%; left: 95%; animation-delay: 0.5s; }
  .star:nth-of-type(19) { top: 15%; left: 5%; animation-delay: 0.7s; }
  .star:nth-of-type(20) { top: 25%; left: 15%; animation-delay: 0.9s; }
  .star:nth-of-type(21) { top: 35%; left: 25%; animation-delay: 1.1s; }
  .star:nth-of-type(22) { top: 45%; left: 35%; animation-delay: 1.3s; }
  .star:nth-of-type(23) { top: 55%; left: 45%; animation-delay: 1.5s; }
  .star:nth-of-type(24) { top: 65%; left: 55%; animation-delay: 1.7s; }
  .star:nth-of-type(25) { top: 75%; left: 65%; animation-delay: 1.9s; }
  .star:nth-of-type(26) { top: 85%; left: 75%; animation-delay: 2.1s; }
  .star:nth-of-type(27) { top: 95%; left: 85%; animation-delay: 2.3s; }
  .star:nth-of-type(28) { top: 5%; left: 95%; animation-delay: 2.5s; }
  .star:nth-of-type(29) { top: 15%; left: 85%; animation-delay: 2.7s; }
  .star:nth-of-type(30) { top: 25%; left: 75%; animation-delay: 2.9s; }
  .star:nth-of-type(31) { top: 35%; left: 65%; animation-delay: 0.2s; }
  .star:nth-of-type(32) { top: 45%; left: 55%; animation-delay: 0.4s; }
  .star:nth-of-type(33) { top: 55%; left: 45%; animation-delay: 0.6s; }
  .star:nth-of-type(34) { top: 65%; left: 35%; animation-delay: 0.8s; }
  .star:nth-of-type(35) { top: 75%; left: 25%; animation-delay: 1s; }
  .star:nth-of-type(36) { top: 85%; left: 15%; animation-delay: 1.2s; }
  .star:nth-of-type(37) { top: 95%; left: 5%; animation-delay: 1.4s; }
  .star:nth-of-type(38) { top: 5%; left: 25%; animation-delay: 1.6s; }
  .star:nth-of-type(39) { top: 15%; left: 35%; animation-delay: 1.8s; }
  .star:nth-of-type(40) { top: 25%; left: 45%; animation-delay: 2s; }
  .star:nth-of-type(41) { top: 35%; left: 55%; animation-delay: 2.2s; }
  .star:nth-of-type(42) { top: 45%; left: 65%; animation-delay: 2.4s; }
  .star:nth-of-type(43) { top: 55%; left: 75%; animation-delay: 2.6s; }
  .star:nth-of-type(44) { top: 65%; left: 85%; animation-delay: 2.8s; }
  .star:nth-of-type(45) { top: 75%; left: 95%; animation-delay: 0.1s; }
  .star:nth-of-type(46) { top: 85%; left: 5%; animation-delay: 0.3s; }
  .star:nth-of-type(47) { top: 95%; left: 15%; animation-delay: 0.5s; }
  .star:nth-of-type(48) { top: 5%; left: 35%; animation-delay: 0.7s; }
  .star:nth-of-type(49) { top: 15%; left: 45%; animation-delay: 0.9s; }
  .star:nth-of-type(50) { top: 25%; left: 55%; animation-delay: 1.1s; }

  /* Хаотичные позиции статичных звёзд */
  .static-star:nth-of-type(1) { top: 7%; left: 13%; }
  .static-star:nth-of-type(2) { top: 23%; left: 47%; }
  .static-star:nth-of-type(3) { top: 41%; left: 82%; }
  .static-star:nth-of-type(4) { top: 67%; left: 29%; }
  .static-star:nth-of-type(5) { top: 89%; left: 63%; }
  .static-star:nth-of-type(6) { top: 12%; left: 91%; }
  .static-star:nth-of-type(7) { top: 34%; left: 17%; }
  .static-star:nth-of-type(8) { top: 56%; left: 74%; }
  .static-star:nth-of-type(9) { top: 78%; left: 38%; }
  .static-star:nth-of-type(10) { top: 92%; left: 85%; }
  .static-star:nth-of-type(11) { top: 15%; left: 26%; }
  .static-star:nth-of-type(12) { top: 37%; left: 59%; }
  .static-star:nth-of-type(13) { top: 49%; left: 93%; }
  .static-star:nth-of-type(14) { top: 71%; left: 42%; }
  .static-star:nth-of-type(15) { top: 83%; left: 76%; }
  .static-star:nth-of-type(16) { top: 19%; left: 8%; }
  .static-star:nth-of-type(17) { top: 45%; left: 31%; }
  .static-star:nth-of-type(18) { top: 62%; left: 67%; }
  .static-star:nth-of-type(19) { top: 88%; left: 19%; }
  .static-star:nth-of-type(20) { top: 97%; left: 54%; }
  .static-star:nth-of-type(21) { top: 3%; left: 88%; }
  .static-star:nth-of-type(22) { top: 27%; left: 35%; }
  .static-star:nth-of-type(23) { top: 53%; left: 79%; }
  .static-star:nth-of-type(24) { top: 75%; left: 23%; }
  .static-star:nth-of-type(25) { top: 91%; left: 61%; }
  .static-star:nth-of-type(26) { top: 8%; left: 97%; }
  .static-star:nth-of-type(27) { top: 31%; left: 43%; }
  .static-star:nth-of-type(28) { top: 59%; left: 86%; }
  .static-star:nth-of-type(29) { top: 81%; left: 29%; }
  .static-star:nth-of-type(30) { top: 94%; left: 72%; }
  .static-star:nth-of-type(31) { top: 17%; left: 15%; }
  .static-star:nth-of-type(32) { top: 39%; left: 51%; }
  .static-star:nth-of-type(33) { top: 65%; left: 94%; }
  .static-star:nth-of-type(34) { top: 87%; left: 37%; }
  .static-star:nth-of-type(35) { top: 99%; left: 69%; }
  .static-star:nth-of-type(36) { top: 11%; left: 4%; }
  .static-star:nth-of-type(37) { top: 33%; left: 39%; }
  .static-star:nth-of-type(38) { top: 57%; left: 73%; }
  .static-star:nth-of-type(39) { top: 79%; left: 16%; }
  .static-star:nth-of-type(40) { top: 93%; left: 58%; }
  .static-star:nth-of-type(41) { top: 6%; left: 92%; }
  .static-star:nth-of-type(42) { top: 29%; left: 27%; }
  .static-star:nth-of-type(43) { top: 51%; left: 64%; }
  .static-star:nth-of-type(44) { top: 73%; left: 8%; }
  .static-star:nth-of-type(45) { top: 89%; left: 45%; }
  .static-star:nth-of-type(46) { top: 98%; left: 81%; }
  .static-star:nth-of-type(47) { top: 21%; left: 22%; }
  .static-star:nth-of-type(48) { top: 43%; left: 57%; }
  .static-star:nth-of-type(49) { top: 69%; left: 91%; }
  .static-star:nth-of-type(50) { top: 85%; left: 33%; }
  .static-star:nth-of-type(51) { top: 96%; left: 67%; }
  .static-star:nth-of-type(52) { top: 14%; left: 2%; }
  .static-star:nth-of-type(53) { top: 36%; left: 46%; }
  .static-star:nth-of-type(54) { top: 58%; left: 83%; }
  .static-star:nth-of-type(55) { top: 82%; left: 25%; }
  .static-star:nth-of-type(56) { top: 95%; left: 61%; }
  .static-star:nth-of-type(57) { top: 9%; left: 96%; }
  .static-star:nth-of-type(58) { top: 25%; left: 32%; }
  .static-star:nth-of-type(59) { top: 47%; left: 68%; }
  .static-star:nth-of-type(60) { top: 63%; left: 3%; }
  .static-star:nth-of-type(61) { top: 87%; left: 41%; }
  .static-star:nth-of-type(62) { top: 99%; left: 77%; }
  .static-star:nth-of-type(63) { top: 13%; left: 11%; }
  .static-star:nth-of-type(64) { top: 35%; left: 49%; }
  .static-star:nth-of-type(65) { top: 61%; left: 87%; }
  .static-star:nth-of-type(66) { top: 77%; left: 21%; }
  .static-star:nth-of-type(67) { top: 91%; left: 55%; }
  .static-star:nth-of-type(68) { top: 4%; left: 89%; }
  .static-star:nth-of-type(69) { top: 28%; left: 24%; }
  .static-star:nth-of-type(70) { top: 52%; left: 62%; }
  .static-star:nth-of-type(71) { top: 74%; left: 97%; }
  .static-star:nth-of-type(72) { top: 86%; left: 35%; }
  .static-star:nth-of-type(73) { top: 98%; left: 71%; }
  .static-star:nth-of-type(74) { top: 16%; left: 7%; }
  .static-star:nth-of-type(75) { top: 38%; left: 44%; }
  .static-star:nth-of-type(76) { top: 64%; left: 79%; }
  .static-star:nth-of-type(77) { top: 80%; left: 18%; }
  .static-star:nth-of-type(78) { top: 94%; left: 53%; }
  .static-star:nth-of-type(79) { top: 2%; left: 87%; }
  .static-star:nth-of-type(80) { top: 24%; left: 29%; }
  .static-star:nth-of-type(81) { top: 46%; left: 65%; }
  .static-star:nth-of-type(82) { top: 68%; left: 1%; }
  .static-star:nth-of-type(83) { top: 84%; left: 39%; }
  .static-star:nth-of-type(84) { top: 97%; left: 75%; }
  .static-star:nth-of-type(85) { top: 10%; left: 9%; }
  .static-star:nth-of-type(86) { top: 32%; left: 47%; }
  .static-star:nth-of-type(87) { top: 54%; left: 84%; }
  .static-star:nth-of-type(88) { top: 76%; left: 26%; }
  .static-star:nth-of-type(89) { top: 90%; left: 63%; }
  .static-star:nth-of-type(90) { top: 5%; left: 98%; }
  .static-star:nth-of-type(91) { top: 30%; left: 34%; }
  .static-star:nth-of-type(92) { top: 48%; left: 69%; }
  .static-star:nth-of-type(93) { top: 70%; left: 4%; }
  .static-star:nth-of-type(94) { top: 88%; left: 42%; }
  .static-star:nth-of-type(95) { top: 99%; left: 78%; }
  .static-star:nth-of-type(96) { top: 18%; left: 14%; }
  .static-star:nth-of-type(97) { top: 40%; left: 52%; }
  .static-star:nth-of-type(98) { top: 66%; left: 88%; }
  .static-star:nth-of-type(99) { top: 78%; left: 31%; }
  .static-star:nth-of-type(100) { top: 92%; left: 66%; }
  .static-star:nth-of-type(101) { top: 1%; left: 99%; }
  .static-star:nth-of-type(102) { top: 22%; left: 36%; }
  .static-star:nth-of-type(103) { top: 44%; left: 72%; }
  .static-star:nth-of-type(104) { top: 72%; left: 7%; }
  .static-star:nth-of-type(105) { top: 83%; left: 45%; }
  .static-star:nth-of-type(106) { top: 96%; left: 82%; }
  .static-star:nth-of-type(107) { top: 7%; left: 16%; }
  .static-star:nth-of-type(108) { top: 34%; left: 54%; }
  .static-star:nth-of-type(109) { top: 60%; left: 90%; }
  .static-star:nth-of-type(110) { top: 75%; left: 28%; }
  .static-star:nth-of-type(111) { top: 89%; left: 64%; }
  .static-star:nth-of-type(112) { top: 3%; left: 99%; }
  .static-star:nth-of-type(113) { top: 26%; left: 38%; }
  .static-star:nth-of-type(114) { top: 50%; left: 75%; }
  .static-star:nth-of-type(115) { top: 74%; left: 11%; }
  .static-star:nth-of-type(116) { top: 86%; left: 48%; }
  .static-star:nth-of-type(117) { top: 98%; left: 84%; }
  .static-star:nth-of-type(118) { top: 20%; left: 19%; }
  .static-star:nth-of-type(119) { top: 42%; left: 56%; }
  .static-star:nth-of-type(120) { top: 68%; left: 93%; }
  .static-star:nth-of-type(121) { top: 80%; left: 34%; }
  .static-star:nth-of-type(122) { top: 93%; left: 71%; }
  .static-star:nth-of-type(123) { top: 5%; left: 6%; }
  .static-star:nth-of-type(124) { top: 28%; left: 43%; }
  .static-star:nth-of-type(125) { top: 56%; left: 80%; }
  .static-star:nth-of-type(126) { top: 72%; left: 22%; }
  .static-star:nth-of-type(127) { top: 88%; left: 59%; }
  .static-star:nth-of-type(128) { top: 99%; left: 95%; }
  .static-star:nth-of-type(129) { top: 15%; left: 30%; }
  .static-star:nth-of-type(130) { top: 37%; left: 67%; }
  .static-star:nth-of-type(131) { top: 63%; left: 2%; }
  .static-star:nth-of-type(132) { top: 77%; left: 39%; }
  .static-star:nth-of-type(133) { top: 91%; left: 76%; }
  .static-star:nth-of-type(134) { top: 8%; left: 12%; }
  .static-star:nth-of-type(135) { top: 30%; left: 49%; }
  .static-star:nth-of-type(136) { top: 58%; left: 86%; }
  .static-star:nth-of-type(137) { top: 70%; left: 24%; }
  .static-star:nth-of-type(138) { top: 84%; left: 61%; }
  .static-star:nth-of-type(139) { top: 97%; left: 97%; }
  .static-star:nth-of-type(140) { top: 12%; left: 33%; }
  .static-star:nth-of-type(141) { top: 46%; left: 70%; }
  .static-star:nth-of-type(142) { top: 62%; left: 6%; }
  .static-star:nth-of-type(143) { top: 78%; left: 43%; }
  .static-star:nth-of-type(144) { top: 90%; left: 80%; }
  .static-star:nth-of-type(145) { top: 4%; left: 17%; }
  .static-star:nth-of-type(146) { top: 32%; left: 54%; }
  .static-star:nth-of-type(147) { top: 54%; left: 91%; }
  .static-star:nth-of-type(148) { top: 76%; left: 27%; }
  .static-star:nth-of-type(149) { top: 86%; left: 64%; }
  .static-star:nth-of-type(150) { top: 98%; left: 1%; }
  .static-star:nth-of-type(151) { top: 17%; left: 37%; }
  .static-star:nth-of-type(152) { top: 39%; left: 74%; }
  .static-star:nth-of-type(153) { top: 65%; left: 10%; }
  .static-star:nth-of-type(154) { top: 79%; left: 47%; }
  .static-star:nth-of-type(155) { top: 93%; left: 84%; }
  .static-star:nth-of-type(156) { top: 6%; left: 20%; }
  .static-star:nth-of-type(157) { top: 34%; left: 57%; }
  .static-star:nth-of-type(158) { top: 60%; left: 94%; }
  .static-star:nth-of-type(159) { top: 74%; left: 31%; }
  .static-star:nth-of-type(160) { top: 88%; left: 68%; }
  .static-star:nth-of-type(161) { top: 99%; left: 5%; }
  .static-star:nth-of-type(162) { top: 19%; left: 41%; }
  .static-star:nth-of-type(163) { top: 43%; left: 78%; }
  .static-star:nth-of-type(164) { top: 67%; left: 14%; }
  .static-star:nth-of-type(165) { top: 81%; left: 51%; }
  .static-star:nth-of-type(166) { top: 95%; left: 88%; }
  .static-star:nth-of-type(167) { top: 9%; left: 24%; }
  .static-star:nth-of-type(168) { top: 36%; left: 61%; }
  .static-star:nth-of-type(169) { top: 62%; left: 98%; }
  .static-star:nth-of-type(170) { top: 72%; left: 35%; }
  .static-star:nth-of-type(171) { top: 90%; left: 72%; }
  .static-star:nth-of-type(172) { top: 2%; left: 8%; }
  .static-star:nth-of-type(173) { top: 24%; left: 45%; }
  .static-star:nth-of-type(174) { top: 48%; left: 82%; }
  .static-star:nth-of-type(175) { top: 70%; left: 18%; }
  .static-star:nth-of-type(176) { top: 84%; left: 55%; }
  .static-star:nth-of-type(177) { top: 96%; left: 92%; }
  .static-star:nth-of-type(178) { top: 14%; left: 28%; }
  .static-star:nth-of-type(179) { top: 40%; left: 65%; }
  .static-star:nth-of-type(180) { top: 64%; left: 2%; }
  .static-star:nth-of-type(181) { top: 78%; left: 39%; }
  .static-star:nth-of-type(182) { top: 92%; left: 76%; }
  .static-star:nth-of-type(183) { top: 4%; left: 12%; }
  .static-star:nth-of-type(184) { top: 28%; left: 49%; }
  .static-star:nth-of-type(185) { top: 52%; left: 86%; }
  .static-star:nth-of-type(186) { top: 74%; left: 22%; }
  .static-star:nth-of-type(187) { top: 86%; left: 59%; }
  .static-star:nth-of-type(188) { top: 98%; left: 96%; }
  .static-star:nth-of-type(189) { top: 16%; left: 32%; }
  .static-star:nth-of-type(190) { top: 38%; left: 69%; }
  .static-star:nth-of-type(191) { top: 66%; left: 6%; }
  .static-star:nth-of-type(192) { top: 80%; left: 43%; }
  .static-star:nth-of-type(193) { top: 94%; left: 80%; }
  .static-star:nth-of-type(194) { top: 6%; left: 16%; }
  .static-star:nth-of-type(195) { top: 30%; left: 53%; }
  .static-star:nth-of-type(196) { top: 56%; left: 90%; }
  .static-star:nth-of-type(197) { top: 72%; left: 26%; }
  .static-star:nth-of-type(198) { top: 88%; left: 63%; }
  .static-star:nth-of-type(199) { top: 99%; left: 99%; }
  .static-star:nth-of-type(200) { top: 18%; left: 36%; }
`; 