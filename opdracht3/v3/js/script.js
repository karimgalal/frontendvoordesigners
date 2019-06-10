// Selecteer de main van de pagina
var container = document.querySelector("main").querySelector("section");

// Laad de json file vanuit de API
var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
var data;
var request = new XMLHttpRequest();
request.open("get", uri);
request.responseType = "json";
request.send();

function setupDarkMode() {
    var darkmodeTimeout;

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event
    document.addEventListener("touchstart", function () {
        // over 700 millisecondes toggle de class darkmode op elke film
        var movies = document.querySelectorAll(".film");
        darkmodeTimeout = setTimeout(function () {
            for (var j = 0; j < movies.length; j++) {
                movies[j].classList.toggle("darkmode");
            }
        }, 700);
    });

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event
    document.addEventListener("touchend", function () {
        // haal deze timeout weg, want het is dan geen long press
        clearTimeout(darkmodeTimeout);
    });
}

// Voer code uit nadat de json is geladen
request.addEventListener("load", function () {
    // Log de data naar de console en sla het op in een variabele
    console.log("JSON data: ", request.response);
    data = request.response;

    var loadingButton = document.querySelector(".generate");
    loadingButton.addEventListener("click", function () {
        var loadingGif = document.querySelector("header img");
        loadingGif.src = "img/loading.gif";
        loadingGif.classList.remove("hidden");

        setTimeout(function () {
            loadingGif.classList.add("hidden");
            loadingButton.classList.add("hidden");

            // Herhaal code voor elke film
            for (var i = 0; i < data.length; i++) {
                var film = data[i];

                // Maak een nieuwe section voor elke film
                var filmSection = document.createElement("section");
                filmSection.classList.add("film");

                // Maak de cover foto en voeg het toe aan de film section
                var coverImage = document.createElement("img");
                coverImage.src = film.cover;
                filmSection.appendChild(coverImage);

                // Maak de info section
                var moreInfoSection = document.createElement("section");
                moreInfoSection.classList.add("info");

                // Maak de titel heading en voeg het toe aan de info section
                var titel = document.createElement("h2");
                titel.classList.add("titel");
                titel.textContent = film.title;
                moreInfoSection.appendChild(titel);

                // Maak de genres tag en voeg het toe aan de info section
                var genres = document.createElement("p");
                genres.classList.add("genres");
                genres.textContent = film.genres.join(", ");
                moreInfoSection.appendChild(genres);

                // Maak de more info button en voeg het toe aan de info section
                var moreInfoButton = document.createElement("button");
                moreInfoButton.classList.add("more-info");
                moreInfoButton.textContent = "More Info";
                moreInfoSection.appendChild(moreInfoButton);

                // Maak de expanded info section en voeg het toe aan de film section
                // let ipv var omdat expandedInfo wordt gebruikt voor de more info knop, expandedInfo als var
                // wordt elke loop veranderd en is uiteindelijk de expandedInfo van de laatste film
                // zodat elke more info knop zijn eigen expandedInfo gebruik maak ik er een let var van
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
                let expandedInfo = document.createElement("section");
                expandedInfo.id = film.id;
                expandedInfo.classList.add("expandedInfo");
                expandedInfo.classList.add("hidden");

                if (i == 1) {
                    expandedInfo.classList.add("broken");

                    var errorImage = document.createElement("img");
                    errorImage.src = "img/movie.png";
                    expandedInfo.appendChild(errorImage);

                    var errorHeading = document.createElement("h2");
                    errorHeading.textContent = "404";
                    expandedInfo.appendChild(errorHeading);

                    var errorMessage = document.createElement("p");
                    errorMessage.textContent = "Oops, there's no information available for this movie.";
                    expandedInfo.appendChild(errorMessage);
                } else {
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

                    // Maak de release date tag voor de expanded info en voeg het toe aan de info section
                    var expandedReleaseDate = document.createElement("p");
                    expandedReleaseDate.classList.add("expanded");
                    expandedReleaseDate.textContent = film.release_date;
                    expandedInfo.appendChild(expandedReleaseDate);

                    // Maak de plot tag voor de expanded info en voeg het toe aan de info section
                    var expandedPlot = document.createElement("p");
                    expandedPlot.classList.add("expanded");
                    expandedPlot.textContent = film.simple_plot;
                    expandedInfo.appendChild(expandedPlot);

                    // Maak de acteur tag voor de expanded info en voeg het toe aan de info section
                    var expandedActors = document.createElement("p");
                    expandedActors.classList.add("expanded");
                    expandedActors.textContent = "Actors: ";

                    // Loop over alle acteurs
                    for (var j = 0; j < film.actors.length; j++) {
                        // Voeg een komma toe vóór de naam van elke acteur, behalve de eerste acteur, wanneer j = 0
                        if (j != 0) {
                            expandedActors.textContent += ", ";
                        }

                        // voeg de naam van de acteur toe aan de text in de expandedActors p
                        expandedActors.textContent += film.actors[j].actor_name;
                    }

                    expandedInfo.appendChild(expandedActors);
                }

                moreInfoButton.addEventListener("click", function () {
                    // var currentExpandedDetails = document.querySelector("#" + film.id);
                    var moreInfoButton = expandedInfo.parentNode.querySelector(".more-info");

                    if (expandedInfo.classList.contains("hidden")) {
                        expandedInfo.classList.remove("hidden");

                        if (expandedInfo.id == 2) {
                            moreInfoButton.classList.add("broken");

                            setTimeout(function () {
                                moreInfoButton.textContent = "Return";
                            }, 650);
                        } else {
                            setTimeout(function () {
                                moreInfoButton.textContent = "Hide Info";
                            }, 650);
                        }

                    } else {
                        expandedInfo.classList.add("hidden");
                        moreInfoButton.classList.remove("broken");

                        setTimeout(function () {
                            moreInfoButton.textContent = "More Info";
                        }, 300);
                    }
                });

                // Voeg expanded info toe aan film section
                filmSection.appendChild(expandedInfo);

                // Voeg details section aan de film section toe en de film section aan de container section
                filmSection.appendChild(moreInfoSection);
                container.appendChild(filmSection);
            }

            setupDarkMode();
        }, 3000);
    });

});