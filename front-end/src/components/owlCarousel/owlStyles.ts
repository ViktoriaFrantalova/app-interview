// Owl Carousel v2.2.0
// Copyright 2013-2016 David Deutsch
// Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
// Default theme - Owl Carousel CSS File
// Owl Carousel - Core

export const owlStyles = `
  .owl-theme .owl-nav {
    margin-top: 10px;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
  }
  .owl-theme .owl-nav [class*='owl-'] {
    color: #fff;
    font-size: 14px;
    margin: 5px;
    padding: 4px 7px;
    background: #d6d6d6;
    display: inline-block;
    cursor: pointer;
    border-radius: 3px;
  }
  .owl-theme .owl-nav [class*='owl-']:hover {
    background: #869791;
    color: #fff;
    text-decoration: none;
  }
  .owl-theme .owl-nav .disabled {
    opacity: 0.5;
    cursor: default;
  }

  .owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: 10px;
  }

  .owl-theme .owl-dots {
    text-align: center;
    -webkit-tap-highlight-color: transparent;
  }
  .owl-theme .owl-dots .owl-dot {
    display: inline-block;
    zoom: 1;
    *display: inline;
  }
  .owl-theme .owl-dots .owl-dot span {
    width: 10px;
    height: 10px;
    margin: 5px 7px;
    background: #d6d6d6;
    display: block;
    -webkit-backface-visibility: visible;
    transition: opacity 200ms ease;
    border-radius: 30px;
  }
  .owl-theme .owl-dots .owl-dot.active span,
  .owl-theme .owl-dots .owl-dot:hover span {
    background: #869791;
  }
  .owl-carousel {
    display: none;
    width: 100%;
    z-index: 0;
    -webkit-tap-highlight-color: transparent;
    position: relative;
  }
  .owl-carousel .owl-stage {
    position: relative;
    -ms-touch-action: pan-Y;
  }
  .owl-carousel .owl-stage:after {
    content: '.';
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
  .owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    /* fix for flashing background */
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
  .owl-carousel .owl-item {
    position: relative;
    min-height: 1px;
    float: left;
    -webkit-backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
  .owl-carousel .owl-item img {
    display: block;
    width: 100%;
    -webkit-transform-style: preserve-3d;
  }
  .owl-carousel .owl-nav.disabled,
  .owl-carousel .owl-dots.disabled {
    display: none;
  }
  .owl-carousel .owl-nav .owl-prev,
  .owl-carousel .owl-nav .owl-next,
  .owl-carousel .owl-dot {
    cursor: pointer;
    cursor: hand;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .owl-carousel.owl-loaded {
    display: block;
  }
  .owl-carousel.owl-loading {
    opacity: 0;
    display: block;
  }
  .owl-carousel.owl-hidden {
    opacity: 0;
  }
  .owl-carousel.owl-refresh .owl-item {
    visibility: hidden;
  }
  .owl-carousel.owl-drag .owl-item {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .owl-carousel.owl-grab {
    cursor: move;
    cursor: grab;
  }
  .owl-carousel.owl-rtl {
    direction: rtl;
  }
  .owl-carousel.owl-rtl .owl-item {
    float: right;
  }
  .no-js .owl-carousel {
    display: block;
  }
  .owl-carousel .animated {
    -webkit-animation-duration: 1000ms;
    animation-duration: 1000ms;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .owl-carousel .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }
  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .owl-height {
    transition: height 500ms ease-in-out;
  }
  .owl-carousel .owl-item .owl-lazy {
    opacity: 0;
    transition: opacity 400ms ease;
  }
  .owl-carousel .owl-item img.owl-lazy {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .owl-carousel .owl-video-wrapper {
    position: relative;
    height: 100%;
    background: #000;
  }
  .owl-carousel .owl-video-play-icon {
    position: absolute;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    background: url('owl.video.play.png') no-repeat;
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    transition: -webkit-transform 100ms ease;
    transition: transform 100ms ease;
  }
  .owl-carousel .owl-video-play-icon:hover {
    -webkit-transform: scale(1.3, 1.3);
    -ms-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3);
  }
  .owl-carousel .owl-video-playing .owl-video-tn,
  .owl-carousel .owl-video-playing .owl-video-play-icon {
    display: none;
  }
  .owl-carousel .owl-video-tn {
    opacity: 0;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: opacity 400ms ease;
  }
  .owl-carousel .owl-video-frame {
    position: relative;
    height: 100%;
    width: 100%;
  }
`
