import React from 'react'
import { Route } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import Search from "./Search"
import ListBooks from "./ListBooks"
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

// get data right after page is loaded
	componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

// take the clicked book and and the clicked shelf as a parameter and update the book to that shelf
	changeShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response =>{

      // set shelf for new books
      newBook.shelf = newShelf

      // get list of books without new book
      var updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

      // add book to array and set new state
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }
render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks books={this.state.books} changeShelf={ this.changeShelf } />} />
        <Route
          path="/search"
          render={() =>
            <Search changeShelf={this.changeShelf} books={this.state.books} />}
        />
      </div>
    );
  }
}

export default BooksApp