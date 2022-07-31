import React from 'react';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';

let herokuURL = 'https://can-of-books-ajh-hc.herokuapp.com/books';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = () => {
      axios.get(herokuURL).then(response => {
        this.setState({
                books: response.data
              })
      })
      .catch(e => {
        let message = `${e.response.data.error}. ${e.message} ${e.code}.`;
        console.log(message);
      })
      
  }

  componentDidMount = () => {
    this.getBooks();
  }
  render() {


    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        
        {this.state.books.length ? (
        <Carousel>
          {this.state.books.map(element => 
            <Carousel.Item key={element._id}>
              <img src="https://place-hold.it/2000x400/White/Black.jpeg" alt={element.title}/>
              <Carousel.Caption style={{margin: "20px"}}><h4>{element.title}</h4></Carousel.Caption>
              <Carousel.Caption>{element.description}</Carousel.Caption>

            </Carousel.Item>
          )}
        </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        
      </>
    )
  }
}

export default BestBooks;

