const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];
//original code I made with ai as a side along
// // Add your code here...
// const playlistsGrid = document.querySelector("#playlists-grid");
// //for the now playing
// const nowPlayingTitle = document.querySelector("#now-playing-title");

// playlists.forEach((song)=>{
//  ///creates the html properties
//   const li = document.createElement('li');
//   const img = document.createElement('img');
//   const p = document.createElement('p');
// ///adds the class so css can be added to properties
//   li.classList.add("playlist-card");
//   ///sets the properties to those in the playlist array
//   img.src = song.image;
//   img.alt = song.title;
//   p.textContent =song.description
// ///adds(shows) the items
//   li.append(img,p);
//   playlistsGrid.append(li);
// ///to update now playing
//   li.addEventListener("click", () => {
//   // remove selected from all cards
//   document.querySelectorAll(".playlist-card").forEach(card => {
//     card.classList.remove("selected");
//   });

//   // add selected to the clicked card
//   li.classList.add("selected");

//   // update Now Playing text
//   nowPlayingTitle.textContent = song.title;
// });
// })
//"corrected code"
const playlistsGrid = document.querySelector("#playlists-grid");
const nowPlayingTitle = document.querySelector("#now-playing-title");

// 1️⃣ Create playlist cards
playlists.forEach((playlist) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");

  li.classList.add("playlist-card");
  li.dataset.title = playlist.title;

  img.src = playlist.image;
  img.alt = `${playlist.title} playlist cover`;

  p.textContent = playlist.title;

  li.append(img, p);
  playlistsGrid.append(li);
});

// 2️⃣ Event delegation for clicks
playlistsGrid.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".playlist-card");
  if (!clickedCard) return;

  // remove selected from previous
  document.querySelectorAll(".playlist-card").forEach(card => {
    card.classList.remove("selected");
  });

  // add selected to current
  clickedCard.classList.add("selected");

  // update now playing
  nowPlayingTitle.textContent = clickedCard.dataset.title;
});
//this is why the second one is more correct 
//dynamically creating <li>, <img>, and <p>
// I was missing:
// data-title attribute
// <p> should be title, not description
// alt text format
// Click behavior
// On click:
// ✅ Add "selected" class to clicked card
// ✅ Remove "selected" from previous card
// ✅ Update #now-playing-title
// logic was correct, but…
// was adding click listeners to every card, which violates the next requirement.
//Event delegation (IMPORTANT)
// “Use event delegation rather than adding an event listener to every single card.”
// ❌ previous code did not meet this
// ✅ We must attach one listener to #playlists-grid
//Take away
// ✔ Event delegation
// One listener on #playlists-grid
// Handles clicks on any playlist card (even future ones)
// ✔ Uses dataset properly
// li.dataset.title = playlist.title;
// Then later:
// clickedCard.dataset.title
// ✔ Clean DOM separation
// Data → playlists
// UI → DOM creation
// Interaction → one event listener
// This is exactly how real-world frontend apps are structured.