import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'
import noCover from './icons/no-cover-image.png'

class Book extends Component {

  // Set props types and make it strict and required
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  } 

  render() {
    const { book, books, changeShelf } = this.props

    // assign book cover and title to variables, to use it in book component
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover
    const title = book.title ? book.title : "No title available"

    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                      width: 130,
                      height: 190,
                      backgroundImage: `url(${coverImg}})`
                    }}>
                </div>
                <ShelfChanger
                  book={ book }
                  books={ books }
                  changeShelf={changeShelf }
                />
              </div>
              <div className="book-title">{ title }</div>
              { /* Check for authors and render each on separate line if exist*/
                book.authors && book.authors.map((author, index) => (
                  <div className="book-authors" key={index}>{author}</div>
              ))}
            </div>
          </li>
    )
  }

}

export default Book
