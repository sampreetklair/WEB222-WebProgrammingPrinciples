/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Sampreet Klair
 *      Student ID: 145031225
 *      Date:       26 November, 2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

document.addEventListener("DOMContentLoaded", function () {
  loadArtists();

  function loadArtists() {
    const menu = document.getElementById("menu");

    artists.forEach((artist) => {
      const button = document.createElement("button");
      button.textContent = artist.name;
      button.addEventListener("click", () => loadSongs(artist.artistId));
      menu.appendChild(button);
    });
  }

  function loadSongs(artistId) {
    const selectedArtist = artists.find((artist) => artist.artistId === artistId);
    const selectedArtistTitle = document.getElementById("selected-artist");
    const artistInfo = document.getElementById("artist-info");
    const cardsContainer = document.getElementById("cards-container");

    selectedArtistTitle.textContent = selectedArtist.name;

    artistInfo.innerHTML = "";
    cardsContainer.innerHTML = "";

    artistInfo.innerHTML = `
        <h2>${selectedArtist.name}</h2>
        <ul>
          ${selectedArtist.urls
            .map((url) => `<li><a href="${url.url}" target="_blank">${url.name}</a></li>`)
            .join("")}
        </ul>
      `;

    const filteredSongs = songs.filter((song) => song.artistId === artistId && !song.explicit);

    filteredSongs.forEach((song) => {
      const card = createSongCard(song);
      cardsContainer.appendChild(card);
    });
  }

  function createSongCard(song) {
    const card = document.createElement("div");
    card.classList.add("card");

    const songImg = document.createElement("img");
    songImg.src = song.imageUrl;
    songImg.classList.add("card-image");
    songImg.alt = song.title;

    const songDetails = document.createElement("div");
    songDetails.classList.add("card-details");

    const songTitle = document.createElement("h3");
    songTitle.textContent = song.title;

    const year = document.createElement("time");
    year.textContent = song.year;

    const duration = document.createElement("div");
    duration.textContent = secondsToMinutes(song.duration);

    const divider = document.createElement("br");

    card.appendChild(songImg);
    songDetails.appendChild(songTitle);
    songDetails.appendChild(year);
    songDetails.appendChild(duration);
    card.appendChild(songDetails);
    card.appendChild(divider);
    card.appendChild(divider);
    card.appendChild(divider);

    card.addEventListener("click", () => window.open(song.url, "_blank"));

    return card;
  }

  function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }
});
