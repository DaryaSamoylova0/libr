import React, {Component} from 'react';
import {Card, Container, CardGroup, Button, Form} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <>
                <Container>
                    <CardGroup className="mt-4 mb-4">
                        <Card border="success" text="dark">
                            <Card.Img
                                variant="top"
                                src="https://invicta-shop.ru/assets/images/contact-us-icon12.jpg"
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
                                    <Form.Control type="email" placeholder="Введите email" />
                                    <p></p>
                                </Form.Group>

                                <Form.Group controlld="formBasicPassword">
                                    <Form.Label>Напишите, что вас интересует.</Form.Label>
                                    <Form.Control as="textarea" rows="7" />
                                </Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit" >Отправить</Button>
                            </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        );
    }
}

export default Contacts;