# Frontend voor Designers - Opdracht 3

Voor opdracht 3 heb ik een website die informatie over films weergeeft gemaakt met JSON data die met een REST API van een externe bron wordt ingeladen met Javascript. Gebruikers krijgen 6 films op de website te zien en door middel van UI events kunnen zij meer informatie over deze films opvragen en wisselen tussen light- en dark-mode.

## Versie 1
[Versie 1](https://karimgalal.github.io/frontendvoordesigners/opdracht3/v1/)

In versie 1 heb ik eerst geleerd om data op te halen vanuit de API. Vervolgens heb ik geleerd om html elementen te maken door middel van JavaScript en die te vullen met de API data.

## Versie 2
[Versie 2](https://karimgalal.github.io/frontendvoordesigners/opdracht3/v2/)

In versie 2 heb ik de data ik in de HTML gebruik vorm gegeven met css en heb ik mijn eerste UI event toegevoegd, namelijk het clicken op een film section om meer informatie te laten zien over de film. Dit doe ik door middel van een verborgen section waar de extra informatie in staat die tevoorschijn komt wanneer de gebruiker op de film section clickt.

## Testen tijdens de les + Feedback van docent Koop Reynders (Firefox)

Tijdens het testen bleek dat het niet duidelijk was voor de gebruikers dat je op een film section kon clicken omdat dat nergens werd aangegeven. Er werd door de docent en medestudenten voorgesteld om gebruik te maken van een 'more info' knop die dezelfde kleur heeft als de verborgen section met meer informatie om het duidelijk te maken voor de gebruikers dat zij meer informatie kunnen opvragen over de films. De plaatsing en kleur van de knop zorgt voor duidelijkheid, discoverability en consistentie. Verder werd ik ook geadviseerd om verschillende UI states in de website te verwerken omdat ik daar nog niet aan had gedacht.

## Versie 3
[Versie 3](https://karimgalal.github.io/frontendvoordesigners/opdracht3/v3/)

In versie 3 heb ik de voorgestelde 'more info' knop (zie bovenstaande test resultaten) toegevoegd en daaraan mijn Click UI event gekoppeld om de section met meer informatie te laten zien. Vervolgens heb ik ook een tweede UI event toegevoegd met behulp van een vriend die meer ervaren is in javascript dan ik die ervoor zorgt dat gebruikers kunnen wisselen tussen light- en dark-mode door het scherm lang te 'pressen' (0.7 seconde). Daarnaast heb ik ook een zero state, loading state en error state toegevoegd.


## UI Stack states
### Zero state
Wanneer de gebruiker voor het eerst op de website komt dan krijgt hij/zij de zero state te zien. De films zijn dan nog niet geladen totdat hij op de "Generate films" knop klikt. 

### loading state
Door op de "Generate films" knop te klikken krijgt de gebruiker een loading animatie te zien van een mais korrel die gekookt wordt tot een popcorn. Hierdoor krijgt de gebruiker te zien dat de films aan het laden zijn.

### Ideal state
Na de loading state komen alle 6 films in beeld en kan de gebruiker op de "more info" knoppen klikken om meer informatie op te vragen. Dit is hoe de website daadwerkelijk hoort te werken.

### error state
Bij de tweede film heb ik er express voor gezorg dat je dan een verborgen error section te zien krijgt om een beeld te geven van hoe een error state eruit kan zien.



## Interface design principles 04, 09 en 11.
### 04. Keep users in control
Ik heb ervoor gezorgd dat gebruikers altijd instructies te zien krijgen over de mogelijke UI events. Bovenaan de website is bijvoorbeeld aangegeven dat je door middel van een long press kan switchen tussen light- en dark-mode. De more info knoppen laten duidelijk weten wat je te wachten staat als je op zo'n knop klikt. Verder krijgen gebruikers ook de optie om terug te gaan bij onverwachte paginas zoals de error state.

### 09. Appearance follows behavior
Ik heb ervoor gezorgd dat knoppen daadwerkelijk op knoppen lijken zodat de gebruikers kunnen voorspellen wat de buttons doen zonder er eerst op te klikken.

### 11. Strong visual hierarchies work best
Ik heb de films in een grid gezet zodat de website gestructureerd is. De knoppen zijn allemaal rechts onder elke film te vinden, dat zorgt voor een consistente hierachie. Daarnaast slide de section met meer informatie ook van de rechter kant omdat de knoppen op de rechter kant staan.



## UI Events

#### Click
```
request.addEventListener("load", function () {
```

```
moreInfoButton.addEventListener("click", function () {
}
```

#### Touchstart & Touchend
```
document.addEventListener("touchstart", function () {
}
```

```
document.addEventListener("touchend", function () {
}
```
