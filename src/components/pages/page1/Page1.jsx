import NavPage1 from "./nav/NavPage1";
import Product from "./product/Product";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from '../../../services/api';

const Page1 = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    console.log(product)
    useEffect(() => {
        api
            .get("")
            .then((response) => {
                setProduct(response.data[id])
            })
    }, [id])
    return (
        <>
            <NavPage1 />
            {product.titulo && <Product product={product} />}
        </>
    )
}

export default Page1;