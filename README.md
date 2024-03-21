# SBA 320
## Project
SBA 320 is a major project showcasing my skills regarding utilizing React.js/React to create a front end application that retrieves data from an API.

## Project Overview
This app was created to allow a user to search up food products from an API and add them to a favorites list. A user can keep track of foods they'd like to try or purchase later.

## Requirements
- Built with HTML, CSS, JavaScript, REACT, and Redux Toolkit.
- Frequent commits to GitHub.
- A README.md file in your GitHub repository with:
    - Explanations of the technologies used.
    - Explanations of the approach taken.
    - Usage instructions, if relevant.
    - Unsolved problems.
    - etc.
- Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.
- Utilize useEffect and useState React Hooks.
- Must Make use of React-Router-Dom and have 2 (or more pages)
- Stylized CSS
- Effort displayed

## Tools Used
VSCode, React, axios, spoonacular API

## Coding Languages used
HTML, CSS, Javascript (vanilla) 

## Food Data
All food data was taken from the spoonacular API. The data is formatted in the following way,

*Grocery Products* - Whole or Processed food items you can purchase at a store.

```
{
  "id": Number - Unique Item ID from the database
  "title": String - Unique name of the product
}
```

*Restaraunt Menu Products* - Dishes that can be purchased from a restaraunt.

```
{
    "imageURL": String - A link to the image of the dish provided by the API.
    "id": Number - Unique Item ID from the database
    "title": String - Unique name of the product
    "restaraunt": String - The name of the restaraunt that serves this dish.
}
```

## Usage Instructions
To search for items in the database, you must utilize a String. The database can search for partial words (Chick will bring up Chicken dishes/products).
Each card comes with a favorites button, which will save data from the database and store it to a state that shows all of your favorites in the Favorites page.
