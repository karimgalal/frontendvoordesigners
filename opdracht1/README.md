# Frontend voor designers - Opdracht 1
De opdracht is om een user interface te ontwerpen voor de één van de vier aangeboden Use cases. Ik heb voor de volgende Use case gekozen: "Als ik een lijst films heb gevonden, wil ik leuke films kunnen opslaan om ze thuis te ....". Het ontwerp moet uitgewerkt worden in HTML, CSS en JavaScript.

--

## Netflix

Ik heb ervoor gekozen om een user interface te ontwerpen die dezelfde style heeft als Netflix zodat ik mezelf kan uitdagen met CSS. Op deze webpagina kunnen gebruikers een aantal films zien en deze toevoegen aan een lijst zodat ze deze films later makkelijk terug kunnen vinden. In de eerste versie van het ontwerp heb ik het voor elkaar gekregen om met JavaScript de img src te veranderen wanneer een gebruiker op de + icoon klikt. Daarnaast heb ik ook een teller toegevoegd naast het menu item "My list" zodat de gebruikers feedback krijgen na het toevoegen van een film.


[Demo 1 voor opdracht 1](https://karimgalal.github.io/frontendvoordesigners/opdracht1/v1/)


Het probleem bij de eerste demo/versie is dat de teller niet gereset wordt wanneer de gebruikers ervoor kiezen om toch geen films op te slaan. Gebruikers kregen dan het nummertje 0 te zien naast het menu item "My list" en dat is niet de bedoeling.
Bij de tweede demo/versie heb ik dat probleem opgelost door een if statement te gebruiken zodat de teller alleen tevoorschijn komt wanneer er films zijn opgeslagen.

[Demo 2 voor opdracht 1](https://karimgalal.github.io/frontendvoordesigners/opdracht1/v2/)

## Toegepaste Principles of User Interface Design

> 04. Keep users in control
Humans are most comfortable when they feel in control of themselves and their environment. Thoughtless software takes away that comfort by forcing people into unplanned interactions, confusing pathways, and surprising outcomes. Keep users in control by regularly surfacing system status, by describing causation (if you do this that will happen) and by giving insight into what to expect at every turn. Don't worry about stating the obvious…the obvious almost never is

De gebruikers hebben zelf controle over de toevoeg knoppen en krijgen door middel van een nummer naast het menu-item "My List" te zien wanneer er een film wordt opgeslagen of verwijderd uit de lijst. Door die Lijst status valt het op wanneer je perongeluk een film toevoegt of verwijdert.

> 11. Strong visual hierarchies work best
A strong visual hierarchy is achieved when there is a clear viewing order to the visual elements on a screen. That is, when users view the same items in the same order every time. Weak visual hierarchies give little clue about where to rest one's gaze and end up feeling cluttered and confusing. In environments of great change it is hard to maintain a strong visual hierarchy because visual weight is relative: when everything is bold, nothing is bold. Should a single visually heavy element be added to a screen, the designer may need to reset the visual weight of all elements to once again achieve a strong hierarchy. Most people don't notice visual hierarchy but it is one of the easiest ways to strengthen (or weaken) a design.

Alle toevoeg en verwijder knoppen zijn op dezelfde locatie te vinden onder elke film en hebben dezelfde styling. Dat zorgt voor structuur en hierarchie.
