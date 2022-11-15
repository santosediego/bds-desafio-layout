import React from 'react';
import Search from 'components/Search';
import './styles.css';
import ProductCard from 'components/ProductCard';

function Catalog() {
    return (
        <div className="container my-3" >
            <Search />
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default Catalog;
