const require = Node

/*const quoteText = document.querySelector("#quote-text"),
      getNewQuote = document.querySelector("button"),
      quoteAuthor = document.querySelector("quote-author"),
      quoteTags = document.querySelector("quote-tags");

function randomQuote() {
   fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        getnewquote.innerText = "New Quote";
    });
}*/

/*document.addEventListener('DOMContentLoaded', () => {const quoteText = document.getElementById('quote-text'),
quoteTags = document.getElementById('quote-tags'),
quoteAuthor = document.getElementById('quote-author'),
getNewQuote = document.getElementById('getNewQuote');

fetch("https://api.quotable.io")
.then(Response => Response.json())
.then(data => {
   quoteText.textContent = data.content;
   quoteTags.textContent = data.tags;
   quoteAuthor.textContent = `${data.author}`;
})});*/

/*function getQoute() {
   fetch("https://api.quotable.io/random")
   .then(Response => Response.json())
   .then(data => {
      const quoteText = data.content;
      const quoteTags = data.tags;
      const quoteAuthor = data.author;
      console.log(`${quoteText} - ${quoteTags} - ${quoteAuthor}`);
   })
   .catch(error => {
      console.log("An error occured while fetching the quote:",error);
   })
}

getQoute();*/

/*function getQuote() {
   fetch("https://api.quotable.io/random")
     .then(response => response.json())
     .then(data => {
       const quoteText = data.content;
       const quoteAuthor = data.author;
       console.log(`${quoteText} - ${quoteAuthor}`);
     })
     .catch(error => {
       console.log("An error occurred while fetching the quote:", error);
     });
 }
 
 getQuote();*/

/*const quoteText = document.getElementById('quote-text'),
      quoteTags = document.getElementById('quote-tags'),
      quoteAuthor = document.getElementById('quote-author'),
      getNewQuote = document.getElementById('getnewquote');

function randomQuote(){
   fetch("https://api.quotable.io")
   .then(response => response.json())
   .then(data => {
      quoteText.textContent = data.content;
      quoteTags.textContent = data.tags;
      quoteAuthor.textContent = `-- ${data.author}`;
   })
   .catch(error => {
      console.log("An error occured while fetching the quote",error);
   })
}

randomQuote();
getNewQuote.addEventListener('click', () => {randomQuote();});*/


/*const quotetext = document.querySelector("#quote-text");
const quotetags = document.querySelector("#quote-tags");
const quoteauthor = document.querySelector("#quote-author");
const getnewquote = document.querySelector("#getnewquote");

getnewquote.addEventListener("click", button);

function button() {
   fetch("https://quotable.io/random")
   .then(res => res.json())
   .then(data => {
      quotetext.innerHTML = `"${data.content}"`;
      quoteauthor.innerHTML = data.author;
   })
}*/


let wrapper = document.querySelector(".wrapper");
let text = document.querySelector("#quote-text");
let author = document.querySelector("#quote-author");
let btn = document.querySelector("button");

function getQoute() {
   fetch("https://type.fit/api/quotes")
   .then((res) => res.json())
   .then((data) => {
      let index = Math.round(Math.random()*1643);
      text.innerHTML = data[index].text;
      author.innerHTML = "- " + data[index].author;
   });

   setTimeout(() => {
      btn.classList.add("active");
   }, 1500);
}

function newQuote(e) {
   if (!e.target.matches("button.active")) return;
   getQoute();
   btn.classList.remove("active");
}

window.addEventListener("load", getQoute);
wrapper.addEventListener("click", newQuote);