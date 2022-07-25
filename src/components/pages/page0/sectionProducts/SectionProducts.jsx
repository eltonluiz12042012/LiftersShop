import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../../style/sectionProducts/sectionProducts.css';
import Cards from './Cards';

const SectionProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/thiagossampaio/060e82b4801b0841fc683b0ce5efa06d/raw/e3cc555d9c71fd1b1160e20d7b10c083b5abcd61/desafio_front_end")
        .then((response) => {
            setProducts(response.data)
        })
    }, [])

    return (
        <div id='sectionContainer'>
            <div id="filter-container">
                <h3>Filters</h3>
                <button>Clear Filters</button>
            </div>
            <div id="categories-container">
                <h4>Categories</h4>
                <h5>Showing <span>{products.length}</span> Products</h5>
            </div>
            <div id='grid'>
                <div id='list1-container'>
                    <ul>
                        <li><input type="checkbox" name="" id="" />Jackets</li>
                        <li><input type="checkbox" name="" id="" />Fleece</li>
                        <li><input type="checkbox" name="" id="" />Sweatshirts &amp; Hoodies</li>
                        <li><input type="checkbox" name="" id="" />Sweaters</li>
                        <li><input type="checkbox" name="" id="" />Shirts</li>
                        <li><input type="checkbox" name="" id="" />T-Shirts</li>
                        <li><input type="checkbox" name="" id="" />Pants &amp; Jeans</li>
                    </ul>
                </div>
                <div id='list2-container'>
                    <h4>Colors</h4>
                    <ul>
                        <li><button id='btn-1'></button></li>
                        <li><button id='btn-2'></button></li>
                        <li><button id='btn-3'></button></li>
                        <li><button id='btn-4'></button></li>
                        <li><button id='btn-5'></button></li>
                        <li><button id='btn-6'></button></li>
                        <li><button id='btn-7'></button></li>
                        <li><button id='btn-8'></button></li>
                        <li><button id='btn-9'></button></li>
                        <li><button id='btn-10'></button></li>
                    </ul>
                </div>
                <div id="section-products-container">
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default SectionProducts;