import {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookFormModal extends Component{
    constructor(props){
        super(props);
        this.state = {

            title: '',
            description: '',
            status: ''
        }
    }
    handleSubmit = (e) => {
        let newBook = {
            title: this.state.title,
            description: this.state.description,
            status: this.state.status
          };
          this.props.createBooks(newBook);
    }
    handleTitle = (e) => {
        this.setState({title: e.target.value});
    }

    handleDescription = (e) => {
        this.setState({description: e.target.value});
    }

    handleStatus = (e) => {
        this.setState({status: e.target.value});
    }

    render(){
        return(
            <Modal
                show = {this.props.showModal}
                onHide = {this.props.closeModal}
                size = "lg">
                <Modal.Header closeButton>
                    <Modal.Title>Create Book</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control 
                                name ="title" 
                                type ='input' 
                                onChange = {this.handleTitle}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                name ="description" 
                                type ='input'
                                onChange = {this.handleDescription}>   
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control 
                                name ="status" 
                                type ='input'
                                onChange = {this.handleStatus}>  
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = "primary" onClick = {this.handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default BookFormModal;