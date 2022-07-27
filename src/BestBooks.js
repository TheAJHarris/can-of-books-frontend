import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

let bookData ='https://can-of-books-ajh-hc.herokuapp.com/books';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount () {  
    axios.get(bookData)

    .then(response=>{
      this.setState({
        books: response.data,
      })
    })
  }
  
 
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  

  render() {

    

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
