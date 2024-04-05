// const { response } = require("express");

const url =  "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('search-btn');

btn.addEventListener("click",() =>{
    let word = document.getElementById("type-word").value;
    console.log(word);
    fetch(`${url}${word}`)
    .then((response) => response.json())
    .then((data) => {
         console.log(data);
        result.innerHTML = ` <div class="word">
        <h3>${word}</h3>
       
        <button  onClick="playSound()"><img src="Images/sound.png" alt="" class="soundimg"></button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
       <p>/${data[0].phonetics[0].text}/</p>
    </div>
    <p class="word-meaning">
       ${data[0].meanings[2].definitions[0].definition}
    </p>
    <p class="word-example">${data[0].meanings[2].definitions[0].example}
    </p>`;
    sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
     // console.log(sound)
    })
   

    result.style.display  = 'block';
    

});
function playSound(){
    sound.play();
}