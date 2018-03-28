import React from 'react';
import Estatistic from './Estatistic'
import Search from './Search'
import "../../css_components/layout/Estatistic.css"

export default () => (
    <div>
        <Search />
        <div className='estatisticas'>
            <Estatistic numero='2.500' palavra='lorem' />
            <Estatistic numero='10.000' palavra='ipsum' />
            <Estatistic numero='1.500' palavra='lorem' />
            <Estatistic numero='15.000' palavra='lorem' />
        </div>
    </div>
)