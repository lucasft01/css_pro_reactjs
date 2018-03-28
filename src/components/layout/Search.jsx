import React from 'react';
import "../../css_components/layout/Search.css"

export default () => (
    <section className='section'>
        <div className='search-box'>
            <header>
                <h1 className='tagline'>Lorem Ipsum placeholder</h1>
                <p></p>
            </header>
            <form name='formSearch' method='post' action=''>
                <input type='search' name='busca' id='busca' placeholder='Pesquisar' />
                <button type='submit'><i className="fas fa-search"></i></button>
            </form>
        </div>
    </section>
)