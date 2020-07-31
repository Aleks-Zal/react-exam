import React from 'react';
import '../App.css';
import SimpleCard from './SimpleCard';


export default function CardsContainer({ cards, deleteCallback, updateCallBack }) {
    return (
        <div className='cardsContainer'>
            {cards.map(item => <SimpleCard updateCallBack={updateCallBack} deleteCallback={deleteCallback} id={item.id} key={item.id} {...item} />)}
        </div>
    )
}
