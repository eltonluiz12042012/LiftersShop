import Card from './Card';
import api from '../../../../services/api';
import React, { useEffect, useState } from 'react';
import '../../../../style/sectionProducts/sectionProducts.css';

const SectionProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api
            .get("")
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
                        {products.map((product, key) => (
                            <li key={key}>
                                <input type="checkbox" />{product.categoria}
                            </li>
                        ))}
                    </ul>
                </div>
                <div id='list2-container'>
                    <h4>Colors</h4>
                    <ul>
                        {products[0]?.cores.map((cor, key) => (
                        <li key={key}>
                            <button style={{backgroundColor: cor.codigo}}></button>
                        </li>
                        ))}
                    </ul>
                </div>
                <div id="section-products-container">
                    {products.map((product, index) => {
                        return <Card index={index} product={product} key={index}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default SectionProducts;