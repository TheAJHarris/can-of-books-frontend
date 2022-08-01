import React from 'react';
import axios from 'axios';
import bookImg from './book.jpeg';

import BookFormModal from './BookFormModal.js';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

let herokuURL = 'https://can-of-books-ajh-hc.herokuapp.com/books';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modalStatus: false
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

  createBooks = (newBook) => {
    axios.post(herokuURL, newBook).then(response => {
      this.setState({books: [...this.state.books, response.data]
      });
    })
  }

  deleteBooks = (e) => {
    console.log(e.target.id);
    axios.delete(herokuURL + `/${e.target.id}`).then(() => {
      this.setState({books: this.state.books.filter(el => el._id !== e.target.id)});
      });
    this.getBooks();
  }
  

  handleModal = (e) => {
      this.setState({modalStatus: true});
  }

  componentDidMount = () => {
    this.getBooks();
  }

  render() {


    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button onClick={this.handleModal}>Add Book</Button>
        <BookFormModal 
          showModal = {this.state.modalStatus} 
          closeModal ={(e) => this.setState({modalStatus:false})}
          createBooks = {this.createBooks}
          />
        {this.state.books.length ? (
        <Carousel>
          {this.state.books.map(element => 
            <Carousel.Item key={element._id}>
              <img src={bookImg} alt={element.title}/>
              <Carousel.Caption style={{margin: "20px"}}><h4>{element.title}</h4></Carousel.Caption>
              <Carousel.Caption>{element.description}</Carousel.Caption>
              <Button id= {element._id} onClick={this.deleteBooks} style={{marginLeft: "200px"}}>Delete Book</Button>

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

