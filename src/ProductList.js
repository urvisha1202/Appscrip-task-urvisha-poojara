import React, { useState } from 'react';
import Product from './Product';
const ProductList = () => {
    const [likedProducts, setLikedProducts] = useState({});

    const handleLikeClick = (productId) => {
        setLikedProducts((prevState) => ({
            ...prevState,
            [productId]: !prevState[productId],
        }));
    };
    const products = [
        { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$100', image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$150', image: 'https://via.placeholder.com/300' },
        { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$200', image: 'https://via.placeholder.com/300' },
        { id: 4, name: 'Product 4', description: 'Description for product 4', price: '$300', image: 'https://via.placeholder.com/300' },
        { id: 5, name: 'Product 5', description: 'Description for product 5', price: '$500', image: 'https://via.placeholder.com/300' },
        { id: 6, name: 'Product 6', description: 'Description for product 6', price: '$400', image: 'https://via.placeholder.com/300' },

    ];

    return (
        
        <div style={styles.productList}>
            {products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    isLiked={!!likedProducts[product.id]}
                    onLikeClick={() => handleLikeClick(product.id)}
                />
            ))}
        </div>
    );
};

const styles = {
    productList: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '20',
    },
};

export default ProductList;
