/**
 * WEB222 – Assignment 04
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
 *      Date:       11 November, 2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

document.addEventListener("DOMContentLoaded", function () {
  loadArtists();
  loadSongs(artists[0].artistId);

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
    const songsTableBody = document.getElementById("songs");

    selectedArtistTitle.textContent = selectedArtist.name;

    artistInfo.innerHTML = `
      <h2>${selectedArtist.name}</h2>
      <ul>
        ${selectedArtist.urls
          .map((url) => `<li><a href="${url.url}" target="_blank">${url.name}</a></li>`)
          .join("")}
      </ul>
    `;

    songsTableBody.innerHTML = "";

    const filteredSongs = songs.filter((song) => song.artistId === artistId && !song.explicit);

    filteredSongs.forEach((song) => {
      const row = document.createElement("tr");
      row.addEventListener("click", () => console.log(song));

      const nameCell = document.createElement("td");
      const yearCell = document.createElement("td");
      const durationCell = document.createElement("td");

      nameCell.innerHTML = `<a href="${song.url}" target="_blank">${song.title}</a>`;
      yearCell.textContent = song.year;
      durationCell.textContent = secondsToMinutes(song.duration);

      row.appendChild(nameCell);
      row.appendChild(yearCell);
      row.appendChild(durationCell);

      songsTableBody.appendChild(row);
    });
  }

  function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }
});
