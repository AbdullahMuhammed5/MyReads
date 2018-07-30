import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = { shelfChange: false }

  render() {
    const { books, changeShelf } = this.props
// the main three section of the home page
    const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
                        { type: 'wantToRead',  title: 'Want to Read' },
                        { type: 'read', title: 'Read'}]

    return (
      <div className="list-books-content">
      <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {shelfTypes.map((shelf, index) =>  { // map over shelfTypes array and assign it to its books 
          const shelfBooks = books.filter( book => book.shelf === shelf.type)
          return  (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{ shelf.title }</h2>
              <div className="bookshelf-books">
                <BookShelf
                  books={ shelfBooks }
                  changeShelf={ changeShelf }
                />
              </div>
            </div> )
        })}
		<div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
