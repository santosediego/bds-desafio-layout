import React from 'react';
import './styles.css';

import { ReactComponent as BannerImage } from 'assets/images/banner-image.svg';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            <div className="banner">
                <div className="banner-description">
                    <h1>O carro perfeito para você</h1>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                </div>
                <div className="banner-image">
                    <BannerImage />
                </div>
            </div>
            <div className="cta-container">
                <Link to={'/catalog'}>
                    <Button text='Ver catálogo' />
                </Link>
                <div className='text-cta'>
                    <p>Comece agora a navegar</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
