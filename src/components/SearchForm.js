import React, { useState } from 'react';
import '../App.css';

export default function SearchForm(props) {

    const [search, setSearch] = useState('')

    const searchChange = (e) => {
        setSearch(e.target.value)
        props.setSearchValue(e.target.value.toLowerCase())

    }

    const searchReset = () => {
        props.setSearchValue('')
        setSearch('')
    }

    const setFilterValue = (e) => {
        props.setFilterValue(e.target.value)
    }

    const setSortValue = (e) => {
        props.setSortValue(e.target.value)
    }

    return (
        <>
            <form className='searchContainer'>
                <div className='sortWrapper form__group' id='sortWrapper'>
                    <input type='radio'
                        id='alphabet'
                        value='alphabet'
                        name='sort'
                        defaultChecked='checked'
                        onChange={setSortValue} />
                    <label htmlFor='alphabet'>Alphabet</label>
                    <input type='radio'
                        id='price'
                        value='price'
                        name='sort'
                        onChange={setSortValue} />
                    <label htmlFor='price'>Price</label>
                    <input type='radio'
                        id='count'
                        value='count'
                        name='sort'
                        onChange={setSortValue} />
                    <label htmlFor='count'>Count</label>
                    <input type='radio'
                        id='date'
                        value='date'
                        name='sort'
                        onChange={setSortValue} />
                    <label htmlFor='date'>Date</label>
                </div>

                <div className='filterWrapper form__group' id='filterWrapper'>
                    <input className='filter__input'
                        type='checkbox'
                        id='filterInputCheap'
                        value='cheap'
                        onChange={setFilterValue} />
                    <label htmlFor='filterInputCheap' className='filter__label'>Cheap</label>
                    <input className='filter__input'
                        type='checkbox'
                        id='filterInputOptimal'
                        value='optimal'
                        onChange={setFilterValue} />
                    <label htmlFor='filterInputOptimal' className='filter__label'>Optimal</label>
                    <input className='filter__input'
                        type='checkbox'
                        id='filterInputPremium'
                        value='premium'
                        onChange={setFilterValue} />
                    <label htmlFor='filterInputPremium' className='filter__label'>Premium</label>
                </div>

                <div className='searchWrapper form__group'>
                    <input className='form__input'
                        type='text'
                        value={search}
                        onChange={searchChange}
                        id='searchInput'
                        placeholder=' ' />
                    <label className='form__label'>Search</label>
                    <div className='form__button'
                        id='clearInputButton'
                        onClick={searchReset}>Clear</div>
                </div>
            </form>
        </>
    )
}

