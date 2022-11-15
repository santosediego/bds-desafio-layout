import React from 'react';
import './styles.css';

import ProductImg from 'assets/images/product-image.svg';
import Button from 'components/Button';

function ProductCard() {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={ProductImg} alt="Audi Supra TT" />
            </div>
            <div className="product-description">
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <div className='product-button'>
                <Button text='Comprar' />
            </div>
        </div>
    );
}

export default ProductCard;
