var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
var main = document.querySelector("main"); //Dit is de main van de HTML

var request = new XMLHttpRequest();
request.open('get', uri);
request.responseType = 'json';
request.send();

request.addEventListener("load", function(){
  console.log("request is geladen: ",request.response);

  var data = request.response;
  for(var i = 0; i < data.length; i++)
  {
    var film = data[i];

    var section = document.createElement("section"); // Voor elke film is er een eigen section waar data in komt

    var titel = document.createElement("h2");
    titel.textContent = film.title;
    section.appendChild(titel);

    // if(film.title == "Evil Dead"){
    //   section.setAttribute("class", "red");
    // }

    var simplePlot = document.createElement("p");
    simplePlot.textContent = film.simple_plot;
    section.appendChild(simplePlot);

    var cover = document.createElement("img")
    // cover.src = film.cover;
    cover.setAttribute("src", film.cover);
    section.appendChild(cover);


    // section.classList.add("test");

    main.appendChild(section);
  }
});
