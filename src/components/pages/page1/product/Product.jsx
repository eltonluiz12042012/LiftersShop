import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import '../../../../style/sectionProducts/product/product.css';

const Product = () => {
    return (
        <>
            <div id="product-container">
                <div id="photos">
                    <Row xs={1} md={2} className="g-2">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div id="product-options">
                    <div id="product-description">
                        <h2>Men&apos;s winter jacket 0</h2>
                        <h3>$99</h3>
                        <p>Revamp your style with the latest designer trends in men&apos;s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. </p>
                    </div>
                    <div id="product-color">
                        <h4>Color</h4>
                        <ul>
                            <li><button></button></li>
                            <li><button></button></li>
                        </ul>
                    </div>
                    <div id="product-size">
                        <h4>Size</h4>
                        <ul>
                            <li><button>XS</button></li>
                            <li><button>S</button></li>
                        </ul>
                    </div>
                    <div id="btn-back">
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