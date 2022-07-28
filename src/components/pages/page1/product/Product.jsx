import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import '../../../../style/sectionProducts/product/product.css';

const Product = ({ product }) => {
    return (
        <>
            <div id="product-container">
                <div id="photos">
                    <Row xs={1} md={2} className="g-2">
                        {product.fotos.map((foto, key) => (
                            <Col key={key}>
                                <Card>
                                    <Card.Img variant="top" src={foto.url} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div id="product-options">
                    <div id="product-description">
                        <h2>{product.titulo}</h2>
                        <h3>{product.valor}</h3>
                        <p>{product.descricao} </p>
                    </div>
                    <div id="product-color">
                        <h4>Color</h4>
                        <ul>
                            {product.cores.map((cor, key) => (
                                <li key={key}>
                                    <button style={{ backgroundColor: cor.codigo }}></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div id="product-size">
                        <h4>Size</h4>
                        <ul>
                            {product.tamanhos.map((size, key) => (
                                <li key={key}>
                                    <button>{size}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="btn-back">
                        <Link to="/">
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;