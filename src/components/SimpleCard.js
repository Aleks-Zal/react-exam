import React, { useState } from 'react';
import '../App.css';
import { DelIcon, EdIcon, SubmitIcon } from './Icons';

export default function SimpleCard(item) {
    const [toggleDesc, setToggleDesc] = useState(false)

    const {
        id,
        deleteCallback,
        updateCallBack,
    } = item

    const [typeOfDate, setTypeOfDate] = useState('text')
    const [cardVision, setCardVision] = useState(true)
    const [formHidden, setFormHidden] = useState('hidden')
    const [divHidden, setDivHidden] = useState('')

    const [newName, setNewName] = useState(item.nameInput)
    const [newArticle, setNewArticle] = useState(item.articleInput)
    const [newPicture, setNewPicture] = useState(item.pictureInput)
    const [newCount, setNewCount] = useState(item.countInput)
    const [newPrice, setNewPrice] = useState(item.priceInput)
    const [newDate, setNewDate] = useState(item.dateInput)
    const [newDescription, setNewDescription] = useState(item.descriptionInput)
    const [newPriceType, setNewPriceType] = useState(item.priceTypeInput)

    const [warning, setWarning] = useState('')
    const [warningField, setWarningField] = useState('hidden')


    const editItem = () => {
        if (cardVision) {
            setCardVision(false)
            setFormHidden('activeForm')
            setDivHidden('hidden')
        }
    }



    const submitItem = (e) => {

        e.preventDefault()

        if (newName.length > 4) {
            if (((newArticle[0] >= 'A' && newArticle[0] <= 'Z') || (newArticle[0] >= 'А' && newArticle[0] <= 'Я')) &&
                (newArticle[1] >= 0 && newArticle[1] <= 9) &&
                (newArticle[2] >= 0 && newArticle[2] <= 9)) {
                if (newCount >= 1 && (newCount ^ 0) === Number(newCount)) {
                    if (newPrice > 0) {
                        if (newDate) {
                            e.preventDefault()
                            updateCallBack(id, newName, newArticle, newPicture, newCount, newPrice, newDate, newDescription, newPriceType)
                            if (!cardVision) {
                                setCardVision(true)
                                setFormHidden('hidden')
                                setDivHidden('')
                                if (warningField === 'warning') {
                                    setWarningField('hidden')
                                }
                            }
                        } else {
                            if (warningField === 'hidden') {
                                setWarningField('warning')
                            }
                            setWarning('The date field is required.')
                        }
                    } else {
                        if (warningField === 'hidden') {
                            setWarningField('warning')
                        }
                        setWarning('The price value must be greater than 0.')
                    }
                } else {
                    if (warningField === 'hidden') {
                        setWarningField('warning')
                    }
                    setWarning('The count must be equal to 1 or more.')
                }
            } else {
                if (warningField === 'hidden') {
                    setWarningField('warning')
                }
                setWarning('The first character of the article must be a capital letter, and the 2 and 3 characters must be a number, other characters in any form.')
            }
        } else {
            if (warningField === 'hidden') {
                setWarningField('warning')
            }
            setWarning('The name must be longer than or equal to 5 characters.')
        }
    }

    const onFocusDate = () => {
        setTypeOfDate('date')
    }

    const onBlurDate = () => {
        setTypeOfDate('text')
    }

    const noPhoto = 'https://autopartskorea.ru/catalog/view/theme/korea/images/no_photo.jpg'

    function noPhotoInput() {
        if (!newPicture) {
            return (
                noPhoto
            )
        } else {
            return newPicture
        }
    }

    function ErrorPicture() {
        setNewPicture('https://autopartskorea.ru/catalog/view/theme/korea/images/no_photo.jpg')
    }

    function lastOne() {
        if (newCount === '1') {
            return ' (LAST ONE)'
        }
    }

    const descriptionButton = () => {
        toggleDesc === false ? setToggleDesc(true) : setToggleDesc(false)
    }

    const hiddenDescription = () => {
        if (toggleDesc === true) {
            return
        } else {
            return 'hidden'
        }
    }

    const noDescription = () => {
        if (!newDescription) {
            return 'No description'
        } else {
            return newDescription
        }
    }

    const textDescription = () => {
        if (toggleDesc === true) {
            return 'Hide description'
        } else {
            return 'Show description'
        }
    }

    const priceTypeEdit = (e) => {
        setNewPriceType(e.target.value)
    }

    return (

        <div className={`card__${newPriceType}`} id='card__premium'>

            <form className={formHidden} id='card'>

                <div className='form__group'>
                    <input className='edit__input'
                        value={newPicture}
                        onChange={e => setNewPicture(e.target.value)}
                        type='text'
                        placeholder=' ' />
                    <label className='edit__label'>Link to the photo (URL)</label>
                </div>
                <div className='form__group'>
                    <input className='edit__input'
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                        type='text'
                        minLength='5'
                        placeholder=' '
                        required />
                    <label className='edit__label'>Name (min 5 char.)<span className='required'>*</span></label>
                </div>
                <div className='form__group'>
                    <input className='edit__input'
                        value={newArticle}
                        onChange={e => setNewArticle(e.target.value)}
                        type='text'
                        placeholder=' '
                        pattern='[A-ZА-Я]{1}[0-9]{2,}'
                        required />
                    <label className='edit__label'>Article (samp.: A12...)<span className='required'>*</span></label>
                    <div id='validArticleForm'></div>
                </div>
                <div className='form__group'>
                    <input className='edit__input'
                        value={newCount}
                        onChange={e => setNewCount(e.target.value)}
                        type='number'
                        min='1'
                        step='1'
                        placeholder=' '
                        required />
                    <label className='edit__label'>Count (PCs)<span className='required'>*</span></label>
                </div>
                <div className='form__group'>
                    <input className='edit__input'
                        value={newPrice}
                        onChange={e => setNewPrice(e.target.value)}
                        type='number'
                        min='0'
                        placeholder=' '
                        required />
                    <label className='edit__label'>Price (RUB)<span className='required'>*</span></label>
                </div>
                <div className='form__group'>
                    <input className='edit__input'
                        value={newDate}
                        onChange={e => setNewDate(e.target.value)}
                        type={typeOfDate}
                        onFocus={onFocusDate}
                        onBlur={onBlurDate}
                        placeholder=' '
                        required />
                    <label className='edit__label'>Creation date<span className='required'>*</span></label>
                </div>

                <div className='edit__group'>
                    <input type='radio'
                        id='cheapPriceEdit'
                        value='cheap'
                        onChange={priceTypeEdit}
                        checked={newPriceType === 'cheap'} />
                    <label className='edit__radio' htmlFor='cheapPriceEdit'>Cheap</label>

                    <input type='radio'
                        id='optimalPriceEdit'
                        value='optimal'
                        onChange={priceTypeEdit}
                        checked={newPriceType === 'optimal'} />

                    <label className='edit__radio' htmlFor='optimalPriceEdit'>Optimal</label>

                    <input type='radio'
                        id='premiumPriceEdit'
                        value='premium'
                        onChange={priceTypeEdit}
                        checked={newPriceType === 'premium'}
                        required />
                    <label className='edit__radio' htmlFor='premiumPriceEdit'>Premium<span className='required'>*</span></label>
                </div>

                <div className='form__group'>
                    <input className='edit__input form__input_description edit__input_description'
                        value={newDescription}
                        onChange={e => setNewDescription(e.target.value)}
                        type='textarea'
                        placeholder=' ' />
                    <label className='edit__label'>Description</label>
                </div>
                <div className={warningField}><span>Attention:</span>{warning}</div>
                <button
                    type='submit'
                    onClick={submitItem}
                    className='submitIcon iconBlock'><SubmitIcon />
                </button>
            </form>

            <div className={divHidden}>
                <div>
                    <img className='photo' alt={newName} src={noPhotoInput()} onError={ErrorPicture} />
                </div>

                <div className='textPadding'>
                    <b>Name: </b>
                    <i>{newName.substr(0, 1).toUpperCase()}{newName.toLowerCase().slice(1)}</i>
                </div>

                <div>
                    <b>Price:</b> <i>{newPrice}</i>
                </div>

                <div>
                    <b>Count:</b> <i>{newCount}<span className='lastOne'>{lastOne()}</span></i>
                </div>

                <div>
                    <b>Article:</b> <i>{newArticle}</i>
                </div>

                <div>
                    <b>Date:</b> <i>{newDate}</i>
                </div>

                <div>
                    <div className='show-description__button'
                        onClick={descriptionButton}>
                        {textDescription()}
                    </div>
                </div>

                <div className={hiddenDescription()}>
                    <div className='description-field'>
                        <i>{noDescription()}</i>
                    </div>
                </div>

                <div className='iconBlock'>
                    <DelIcon id={item.id} deleteCallback={deleteCallback} />
                    <div className='splitIcon'></div>
                    <EdIcon editItem={editItem} />
                </div>
            </div>

        </div>
    )
}



