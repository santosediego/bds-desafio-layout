import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

function Button({ text }: Props) {
    return (
        <div className="default-button">
            <button className='btn btn-primary'>
                {text}
            </button>
        </div>
    );
}

export default Button;
