import React from 'react';

import './Description.css';

function Description(props) {
    return (
        <div className='description'>
            <div className="description-block">
                <div className="description-color client-color">
                </div>
                <p className="description-text">
                    Клиентская часть
                </p>
            </div>
            <div className="description-block">
                <div className="description-color server-color">
                </div>
                <p className="description-text">
                    Серверная часть
                </p>
            </div>
            <div className="description-block">
                <div className="description-color db-color">
                </div>
                <p className="description-text">
                    База данных
                </p>
            </div>
        </div>
    )
}

export default Description;

