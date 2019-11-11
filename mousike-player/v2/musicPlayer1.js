/*

* Icons by:
 * Font Awesome – http://fontawesome.io/
 * Those Icons – https://www.flaticon.com/authors/those-icons
 * EpicCoders – https://www.flaticon.com/authors/epiccoders
 * Smashicons – https://www.flaticon.com/authors/smashicons

*/

$(document).ready(() => {
  const songs = [
    {
      title: 'rockstar',
      artist: 'Post Malone, 21 Savage',
      cover: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/rockstar-album-cover.jpg',
      audioFile: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3',
      color: '#c3af50',
    },
    {
      title: 'Let You Down',
      artist: 'NF',
      cover: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/perception-album-cover.png',
      audioFile: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3',
      color: '#25323b',
    },
    {
      title: 'Silence',
      artist: 'Marshmello, Khalid',
      cover: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/silence-album-cover.jpg',
      audioFile: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Marshmello%20-%20Silence%20ft.%20Khalid.mp3',
      color: '#c1c1c1',
    },
    {
      title: 'I Fall Apart',
      artist: 'Post Malone',
      cover: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/stoney-cover-album.jpg',
      audioFile: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20I%20Fall%20Apart.mp3',
      color: '#cd4829',
    },
    {
      title: 'Fireproof',
      artist: 'VAX, Teddy Sky',
      cover: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/fireproof-album-cover.jpeg',
      audioFile: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/VAX%20-%20Fireproof%20Feat%20Teddy%20Sky.mp3',
      color: '#5d0126',
    },
  ];

  for (const song of songs) {
    $('#songs').append(`<li class="song" data-audio="${song.audioFile}" data-color="${song.color}">` +
			`<img src="${song.cover}">` +
			`<p class="song-title">${song.title}</p>` +
			`<p class="song-artist">${song.artist}</p>` +
			'</li>');
  }

  $('.jcarousel').jcarousel({
    wrap: 'circular',
  });
});

/*
 * Replace all SVG images with inline SVG
 */
jQuery('img[src$=".svg"]').each(function () {
  const $img = jQuery(this);
  const imgID = $img.attr('id');
  const imgClass = $img.attr('class');
  const imgURL = $img.attr('src');

  jQuery.get(imgURL, (data) => {
    // Get the SVG tag, ignore the rest
    let $svg = jQuery(data).find('svg');

    // Add replaced image's ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', `${imgClass} replaced-svg`);
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, 'xml');

});

// Current slide
$('.jcarousel').on('jcarousel:visiblein', 'li', function (event, carousel) {
  const cover = $(this).find('img').attr('src');
  const songTitle = $(this).find('p.song-title').html();
  const songArtist = $(this).find('p.song-artist').html();
  const audioSrc = $(this).attr('data-audio');
  const backgroundColor = $(this).attr('data-color');
  $('body').css('background', backgroundColor);
  $('#background').css('background-image', `url(${cover})`);
  $('audio').find('source').attr('src', `${audioSrc}`);
  player.load();
  player.currentTime = 0;
  $('#song-info').find('img').attr('src', cover);
  $('#song-info .artist-wrap p').find('span.title').html(songTitle);
  $('#song-info .artist-wrap p').find('span.artist').html(songArtist);
});

// Previous slide
$('#previous-btn').click(() => {
  $('.jcarousel').jcarousel('scroll', '-=1');
  $('#play-btn i').removeClass('fa-pause');
  player.pause();
});

// Next slide
$('#next-btn').click(() => {
  if ($('.fa-random').hasClass('active')) {
    const songs = $('#songs li').length - 1;
    const randomSong = Math.floor(Math.random() * songs) + 1;
    $('.jcarousel').jcarousel('scroll', `+=${randomSong}`);
  } else {
    $('.jcarousel').jcarousel('scroll', '+=1');
  }
  $('#play-btn i').removeClass('fa-pause');
  player.pause();
});

// Play Icon Switcher
$('#play-btn').click(function () {
  $(this).find('i').toggleClass('fa-pause');
});

// Menu
$('#menu-btn').click(() => {
  $('#content-wrap').addClass('inactive');
  $('#sidemenu').addClass('active');
});

// Home Button
$('#home-btn').click(() => {
  $('#home-screen').addClass('active');
  $('.menu').removeClass('active');
  $('#content-wrap').addClass('minimized');
});

// App
$('.app-icon').click(() => {
  $('#content-wrap').removeClass('minimized');
  setTimeout(() => { $('#home-screen').removeClass('active'); }, 300);
});

// Overlay
$('#overlay').click(() => {
  $('#content-wrap').removeClass('inactive');
  $('#sidemenu').removeClass('active');
});

// Options
$('#options-btn').click(() => {
  $('#song-options').addClass('active');
});

// Bluetooth
$('#bluetooth-btn').click(() => {
  $('#bluetooth-devices').addClass('active');
});

// Bluetooth Menu
$('#bluetooth-devices ul li').click(function () {
  $(this).toggleClass('connected');
  $(this).siblings().removeClass('connected');

  if ($('#bluetooth-devices ul li').hasClass('connected')) {
    $('#sub-controls i.fa-bluetooth-b').addClass('active');
  } else {
    $('#sub-controls i.fa-bluetooth-b').removeClass('active');
  }
});

// Close Menu
$('.close-btn').click(() => {
  $('.menu').removeClass('active');
});

$('#sub-controls i').click(function () {
  if (!$(this).hasClass('fa-bluetooth-b')) {
    $(this).toggleClass('active');
  }

  if ($('#heart-icon').hasClass('active')) {
    $('#heart-icon').removeClass('fa-heart-o');
    $('#heart-icon').addClass('fa-heart');
  } else {
    $('#heart-icon').removeClass('fa-heart');
    $('#heart-icon').addClass('fa-heart-o');
  }
});

/*
 * Music Player
 * By Greg Hovanesyan
 * https://codepen.io/gregh/pen/NdVvbm
 */

const audioPlayer = document.querySelector('#content');
const playpauseBtn = audioPlayer.querySelector('#play-btn');
const progress = audioPlayer.querySelector('.progress');
const sliders = audioPlayer.querySelectorAll('.slider');
var player = audioPlayer.querySelector('audio');
const currentTime = audioPlayer.querySelector('#current-time');
const totalTime = audioPlayer.querySelector('#total-time');

const draggableClasses = ['pin'];
let currentlyDragged = null;

window.addEventListener('mousedown', function (event) {

  if (!isDraggable(event.target)) return false;

  currentlyDragged = event.target;
  const handleMethod = currentlyDragged.dataset.method;

  this.addEventListener('mousemove', window[handleMethod], false);

  window.addEventListener('mouseup', () => {
    currentlyDragged = false;
    window.removeEventListener('mousemove', window[handleMethod], false);
  }, false);
});

playpauseBtn.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', updateProgress);
player.addEventListener('loadedmetadata', () => {
  totalTime.textContent = formatTime(player.duration);
});
player.addEventListener('ended', () => {
  player.currentTime = 0;

  if ($('.fa-refresh').hasClass('active')) {
    togglePlay();
  } else {
    if ($('.fa-random').hasClass('active')) {
      const songs = $('#songs li').length - 1;
      const randomSong = Math.floor(Math.random() * songs) + 1;
      $('.jcarousel').jcarousel('scroll', `+=${randomSong}`);
    } else {
      $('.jcarousel').jcarousel('scroll', '+=1');
    }
    togglePlay();
  }
});

sliders.forEach((slider) => {
  const pin = slider.querySelector('.pin');
  slider.addEventListener('click', window[pin.dataset.method]);
});

function isDraggable(el) {
  let canDrag = false;
  const classes = Array.from(el.classList);
  draggableClasses.forEach((draggable) => {
    if (classes.indexOf(draggable) !== -1) { canDrag = true; }
  });
  return canDrag;
}

function inRange(event) {
  const rangeBox = getRangeBox(event);
  const { direction } = rangeBox.dataset;
  const screenOffset = document.querySelector('#screen').offsetLeft + 26;
  const min = screenOffset - rangeBox.offsetLeft;
  const max = min + rangeBox.offsetWidth;
  if (event.clientX < min || event.clientX > max) { return false; };
  return true;
}

function updateProgress() {
  const current = player.currentTime;
  const percent = (current / player.duration) * 100;
  progress.style.width = `${percent}%`;

  currentTime.textContent = formatTime(current);
}

function getRangeBox(event) {
  let rangeBox = event.target;
  const el = currentlyDragged;
  if (event.type == 'click' && isDraggable(event.target)) {
    rangeBox = event.target.parentElement.parentElement;
  }
  if (event.type == 'mousemove') {
    rangeBox = el.parentElement.parentElement;
  }
  return rangeBox;
}

function getCoefficient(event) {
  const slider = getRangeBox(event);
  const screenOffset = document.querySelector('#screen').offsetLeft + 26;
  let K = 0;
  const offsetX = event.clientX - screenOffset;
  const width = slider.clientWidth;
  K = offsetX / width;
  return K;
}

function rewind(event) {
  if (inRange(event)) {
    player.currentTime = player.duration * getCoefficient(event);
  }
}

function formatTime(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min}:${(sec < 10) ? (`0${sec}`) : sec}`;
}

function togglePlay() {
  player.volume = 0.5;

  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}
