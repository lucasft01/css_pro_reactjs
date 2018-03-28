import React from 'react';


export default (props) => (
    <div className='estatisticas-item'>
        <span>{props.numero}</span>
        <p>{props.palavra}</p>
    </div>
)