function validate(){

    const artistName = document.getElementById('artistName').value.trim();
    const musicGenre = document.getElementById('musicGenre').value.trim();
    const socialMediaUrls = document.getElementById('socialMediaUrls').value.trim();
    const songVideoLinks = document.getElementsByName('songVideoLink');
    const explicitLyricsCheckbox = document.getElementById('explicitLyrics');
    const artistDescription = document.getElementById('artistDescription').value.trim();

    if (artistName === '' || musicGenre === '' || socialMediaUrls === '') {
      alert('Please fill out all required fields.');
      return false;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(artistName)) {
      alert('Please enter a valid artist name (only alphabets and spaces).');
      return false;
    }

    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    if (!urlRegex.test(socialMediaUrls)) {
      alert('Please enter a valid URL for Social Media.');
      return false;
    }

    let isValidSongVideoLink = false;
    for (const link of songVideoLinks) {
      if (link.value.trim() !== '') {
        isValidSongVideoLink = true;
        break;
      }
    }

    if (!isValidSongVideoLink) {
      alert('Please enter at least one Song/Video link.');
      return false;
    }

    if (explicitLyricsCheckbox.checked && artistDescription === '') {
      alert('Please provide a description if the artist\'s music includes explicit lyrics.');
      return false;
    }

    if (artistDescription.length > 500) {
      alert('Artist description should not exceed 500 characters.');
      return false;
    }

    return true;
  }