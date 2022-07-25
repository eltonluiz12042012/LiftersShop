import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../../style/sectionProducts/cards.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/thiagossampaio/060e82b4801b0841fc683b0ce5efa06d/raw/e3cc555d9c71fd1b1160e20d7b10c083b5abcd61/desafio_front_end")
            .then((response) => {
                setProducts(response.data)
            })
    }, [])
    
    return (
        <div id="cards-container">
            <Row xs={1} md={4} className="g-2" >
                {products.map((product, key) => (
                    <Col key={key}>
                        <Link 
                            id="link"
                            to="/product"
                        >
                            <Card>
                                <Card.Img variant="top" src={product.fotos.find(foto => foto.capa === true)?.url} />
                                <Card.Body id="description">
                                    <Card.Title id="title-description">{product.titulo}</Card.Title>
                                    <Card.Text id="text-description">M</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Cards;