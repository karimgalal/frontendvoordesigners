// Selecteer de main van de pagina
var container = document.querySelector("main").querySelector("section");

// Laad de json file vanuit de API
var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
var data;
var request = new XMLHttpRequest();
request.open("get", uri);
request.responseType = "json";
request.send();

// Voer code uit nadat de json is geladen
request.addEventListener("load", function () {
    // Log de data naar de console en sla het op in een variabele
    console.log("JSON data: ", request.response);
    data = request.response;

    // Herhaal code voor elke film
    for (var i = 0; i < data.length; i++) {
        var film = data[i];

        // Maak een nieuwe section voor elke film
        var filmSection = document.createElement("section");
        filmSection.classList.add("film");

        // Maak de cover foto en voeg het toe aan de film section
        var coverFoto = document.createElement("img");
        coverFoto.src = film.cover;
        filmSection.appendChild(coverFoto);

        // Maak de info section
        var detailsSection = document.createElement("section");
        detailsSection.classList.add("info");

        // Maak de titel heading en voeg het toe aan de info section
        var titel = document.createElement("h2");
        titel.classList.add("titel");
        titel.textContent = film.title;
        detailsSection.appendChild(titel);

        // Maak de genres tag en voeg het toe aan de info section
        var genres = document.createElement("p");
        genres.classList.add("genres");
        genres.textContent = film.genres.join(", ");
        detailsSection.appendChild(genres);

        // Maak de expanded info section en voeg het toe aan de film section
        var expandedInfo = document.createElement("section");
        expandedInfo.id = film.id;
        expandedInfo.classList.add("expandedInfo");

        // Maak de titel heading voor de expanded info en voeg het toe aan de info section
        var expandedTitel = document.createElement("h2");
        expandedTitel.classList.add("titel");
        expandedTitel.classList.add("expanded");
        expandedTitel.textContent = film.title;
        expandedInfo.appendChild(expandedTitel);

        // Maak de genres tag voor de expanded info en voeg het toe aan de info section
        var expandedGenres = document.createElement("p");
        expandedGenres.classList.add("genres");
        expandedGenres.classList.add("expanded");
        expandedGenres.textContent = film.genres.join(", ");
        expandedInfo.appendChild(expandedGenres);

        // Maak de plot tag voor de expanded info en voeg het toe aan de info section
        var expandedPlot = document.createElement("p");
        expandedPlot.classList.add("expanded");
        expandedPlot.textContent = film.plot;
        expandedInfo.appendChild(expandedPlot);

        // Maak de acteur tag voor de expanded info en voeg het toe aan de info section
        var expandedActors = document.createElement("p");
        expandedActors.classList.add("expanded");
        expandedActors.textContent = "Actors: ";

        for (var j = 0; j < film.actors.length; j++) {
            if (j != 0) {
                expandedActors.textContent += ", ";
            }

            expandedActors.textContent += film.actors[j].actor_name;
        }

        expandedInfo.appendChild(expandedActors);

        // Maak de release date tag voor de expanded info en voeg het toe aan de info section
        var expandedReleaseDate = document.createElement("p");
        expandedReleaseDate.classList.add("expanded");
        expandedReleaseDate.textContent = film.release_date;
        expandedInfo.appendChild(expandedReleaseDate);

        (function (id) {
            filmSection.addEventListener("click", function () {
                let current = document.getElementById(id);

                if (current.classList.contains("show")) {
                    current.classList.remove("show");
                } else {
                    document.getElementById(id).classList.add("show");
                }
            });
        })(film.id);

        // Voeg expanded info toe aan film section
        filmSection.appendChild(expandedInfo);

        // Voeg details section aan de film section toe en de film section aan de container section
        filmSection.appendChild(detailsSection);
        container.appendChild(filmSection);
    }
});

// if(film.title == "Evil Dead"){
//   section.setAttribute("class", "red");
// }