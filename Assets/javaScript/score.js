var highScoreButton = document.querySelector(".highscore-button")

function showHigh (){
    //gets score/initials from local storage
    var scores = JSON.parse(window.localStorage.getItem("topScores")) || [];

     // sort highscores by score property in descending order
  scores.sort(function(a, b) {
    return b.score - a.score;
  });

    //for each highscore creates a space for initals and score to be listed
    scores.forEach(function (score) {
       //creates container, rows, and score/initial areas
       var liTag = document.createElement("li");
       liTag.textContent = score.initials + " - " + score.score;
   
         // display on page
    var olEl = document.getElementById("topScores");
    olEl.appendChild(liTag);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("topScores");
  window.location.reload();
}

// document.getElementById("clear").onclick = clearHighscores;

//calls function to show highscores
showHigh();