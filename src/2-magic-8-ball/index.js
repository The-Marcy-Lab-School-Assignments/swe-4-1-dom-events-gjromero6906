// Feel free to use this array of fortunes or come up with your own!
const fortunes = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes ",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again ",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
]

/* 
TODO:
- [ ] Add an event listener to the ask button that:
  - [ ] hides the eight ball (hint: adjust the style.display property)
  - [ ] generates a random fortune from the fortunes array
  - [ ] shows the fortune in the answer element
*/
const ask = document.querySelector('#ask-btn');
const answer = document.querySelector('#answer');
const eight = document.querySelector('#eight');
ask.addEventListener('click', ()=>{
  eight.style.display = 'none';
  let num = Math.floor(Math.random() * fortunes.length);
  const randomFortune = fortunes[num];
  answer.textContent = randomFortune;
  answer.style.display = 'block';
})
