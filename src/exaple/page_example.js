import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const ProductList = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
    const products = [
        { id: 1, name: 'Product 1', price: '$100', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '$200', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: '$300', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div style={styles.productList}>
            <h2>Product List</h2>
            <div style={styles.grid}>
                {products.map(product => (
                    <div key={product.id} style={styles.productCard}>
                        <img src={product.image} alt={product.name} style={styles.productImage} />
                        <h3 style={styles.productName}>{product.name}</h3>
                        <p style={styles.productPrice}>{product.price}</p>
                        <FontAwesomeIcon
                    icon={faHeart}
                    onClick={handleLikeClick}
                    style={{
                        color: isLiked ? 'red' : 'grey',
                        cursor: 'pointer',
                        fontSize: '24px'
                    }}
                />
                    </div>
                    
                ))}
                
            </div>
        </div>
    );
};

const styles = {
    productList: {
        marginLeft: '220px',
        padding: '10px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
    },
    productCard: {
       // border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    productImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '15px',
    },
    productName: {
        fontSize: '18px',
        margin: '0 0 10px 0',
    },
    productPrice: {
        fontSize: '16px',
        color: '#888',
    },
    likeText: {
        marginLeft: '10px',
        fontSize: '18px',
    },
};

export default ProductList;
