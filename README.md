# Apex Lab Frontend Test Vol 1.

## Task Description

Write a purely front-end (react) JavaScript application to help you find movies!

## Technical requirements:

- Outlined, readable, clean code (not 1 file), generated HTML code is structured, non-inline CSS
- English language (both UI and code)
- You can use external libraries (react, ramda, moment, jquery, apollo, lodash etc.), but not the libraries that specifically hide Wikipedia requests and their processing.
- Design should be secondary, minimal (layout, margins, title highlighting, etc.)

## Functional requirements:

- Have a movie title search box on the UI, on enter/click of a button it requests the search results from our graphql sandbox for TMDB:
- It displays the results and some of their data (name, category, score) in a list, titles can be clicked
- By clicking on an address, the app tries to find the related English wikipedia page (with a REST request) and then displays a summary of it in a detail panel (e.g. first paragraph), along with a clickable link that opens in a new window in IMDB and wikipedia
- Bonus: Dual state search engine; a “related” button next to the two links in the movie: this switches the movie list from search results to a list of related movies related to the selected movie

## Levels:

1. A working web page
2. Spinner while loading data from TMDBW or wikipedia
3. Search for related movies
4. Bonus # 1: Use Material-UI library, Material-UI look
5. Bonus # 2: Tests

# Own Solution

## Live Demo https://gracious-pare-3f5c26.netlify.app/

## First thoughts:

- I was thinking, I will use **Redux** for this project, but I have canceled it, because the data flows through only 3 different levels.
- The task says we need to create a search button. Instead of the search button, the data fetching starts after 0.6 seconds when the user stopped the typing. Not ideal on mobile devices.
- The task says the design is absolutely secondary, but I have tried to do my best.
- Usually i am using Semantic UI, but in this project has been made with the mentioned Material UI.

## Structure:

- MainApp

  - SearchBar
  - ResultList
    - Modal With the detailed data
      - Wikipedia popup window
  - Spinner
  - Modal window for unsuccessful data fetching

 </br>
<img src="https://referenceprojects-abkno.run-eu-central1.goorm.io/src/github/testdocuments/apexfrontendtest2.jpg" height="400px" >

## Tests

<img src="https://referenceprojects-abkno.run-eu-central1.goorm.io/src/github/testdocuments/apexfrontendtest1.jpg" height="150px">

## Unit tests

Four different unit tests have been made for the following components

- Movie Card
- Modal Window for detailed movie data
- Cast List for the Modal Window
- Wikipedia Search result

## Manual Tests:

Tested screen Ratios:

- 1920x1080
- 2560x1440
- 3440x1440
