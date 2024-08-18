import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import img from './asset/1img.png'
import img2 from './asset/2img.png'
import img3 from './asset/3img.png'
import img4 from './asset/4img.png'
import img5 from './asset/5img.png'
import img6 from './asset/6img.png'

const Product = ({ product, isLiked, onLikeClick }) => {
    return (
        <div style={styles.productCard}>
            <img src={img} alt={product.name} style={styles.productImage} />
            
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p style={styles.price}>{product.price}</p>
            <div style={styles.likeContainer}>
                <FontAwesomeIcon
                    icon={faHeart}
                    onClick={onLikeClick}
                    style={{
                        color: isLiked ? 'Red' : 'grey',
                        cursor: 'pointer',
                        fontSize: '24px',
                                        }}
                />
            </div>
        </div>
    );
};

const styles = {
    productCard: {
        width: '400px',
        padding: '0px',
        textAlign: 'center',
        marginTop: '-2px',
    },
    productImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '-55px',
    },
    price: {
        fontSize: '18px',
        color: '#333',
        marginBottom: '20px',
    },
    likeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
};

export default Product;
