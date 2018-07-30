# MyReads Project


MyReads is a my project for Udacity's front-end Nanodegree part 5 (React). This is a bookshelf app that lets you to organize books that you have read or you want to read or you are currently reading it.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Create your owen App](#Create your owen App)  
- [Important Note](#Important Note)

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    Search.js
    ShelfChanger.js
    BooksAPI.js
    ListBooks.js
    Books.js
    index.css
    index.js
    icons/
    	add.svg
        arrow-back.svg
        arrow-drop-down.svg
        no-cover-image.png
```
## Available Scripts

In the project directory, you can run:

### `npm start` To Open the project on Udacity server.

Runs the app in the development mode.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

## Create your owen App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

To get started developing right away:

* Download the starter repository [here](https://github.com/udacity/reactnd-project-myreads-starter).
* Open the downloaded directory and install all project dependencies with `npm install`
* start the development server with `npm start`

## Important Note
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

