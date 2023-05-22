import React, {Component} from 'react';
import {Card, Container, CardGroup, Button, Form} from "react-bootstrap";
import Img14 from "../assets/cont.jpg"
import { useState } from 'react';

function Contacts() {
    const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // Create an object with the email and message data
    const data = {
      email: email,
      message: message
    };

    // Send the data to the server
    fetch('/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully!');
          // Perform any additional actions (e.g., show a success message)
        } else {
          console.log('Error sending email.');
          // Handle the error (e.g., show an error message)
        }
      })
      .catch(error => {
        console.log('Error sending email:', error);
        // Handle the error (e.g., show an error message)
      });
  };


        return (
            <>
                <Container style={{ marginTop: '90px', marginBottom: '90px'}}>
                    <CardGroup className="mt-4 mb-4">
                        <Card border="success" text="dark">
                            <Card.Img
                                variant="top"
                                src={Img14}
                            />
                            <Card.Body>
                                <Card.Title>Адреса</Card.Title>
                                <Card.Text>
                                    <p>улица Первомайская 22, "Библиотека имени Константика Симонова", 2 этаж</p>
                                    <p>улица Широтная 121, "Библиотека имени Константика Симонова", 1 этаж</p>
                                </Card.Text>
                                <Card.Title>Телефон</Card.Title>
                                <Card.Text>
                                    <p>8(917)-837-28-48</p>
                                </Card.Text>
                                <Card.Title>Почта</Card.Title>
                                <Card.Text>
                                    <p>library@mail.ru</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card border="success" text="dark" >
                            <Card.Body>
                            <Card.Title>Обратная связь</Card.Title>
                            <Form>
                                <Form.Group controlld="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Введите email" value={email}
          onChange={handleEmailChange} />
                                    <p></p>
                                </Form.Group>

                                <Form.Group controlld="formBasicPassword">
                                    <Form.Label>Напишите, что вас интересует.</Form.Label>
                                    <Form.Control as="textarea" rows="7" value={message}
          onChange={handleMessageChange}/>
                                </Form.Group>
                                <p></p>
                                <Button variant="dark" style={{backgroundColor: '#643c34'}} type="submit" onClick={handleSubmit}>Отправить</Button>
                            </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        );
    
}

export default Contacts;