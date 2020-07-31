import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import CardsContainer from './components/CardsContainer';

export default function App() {

  const [cards, setCards] = useState([
    {
      articleInput: 'H01',
      priceTypeInput: 'cheap',
      countInput: '3',
      dateInput: '2020-05-19',
      descriptionInput: 'powerful battery',
      nameInput: 'huawei y8',
      pictureInput: 'https://dimonvideo.ru/files/newsimg/usernews/140656/img_huawei-y8p-883x1024.jpg',
      priceInput: 290,
      id: Date.now()
    },
    {
      articleInput: 'S01',
      priceTypeInput: 'optimal',
      countInput: '1',
      dateInput: '2020-05-18',
      descriptionInput: 'great camera',
      nameInput: 'samsung a51',
      pictureInput: 'https://http2.mlstatic.com/D_NQ_NP_750309-MLM40542356964_012020-V.jpg',
      priceInput: 600,
      id: Date.now() + 1
    },
    {
      articleInput: 'H02',
      priceTypeInput: 'premium',
      countInput: '7',
      dateInput: '2020-05-17',
      descriptionInput: 'great camera',
      nameInput: 'honor 30',
      pictureInput: 'https://www.superplanshet.ru/images/Honor_30S_EF3921ADDD66AF0EDF19BE042mp.jpg',
      priceInput: 1000,
      id: Date.now() + 2
    },
    {
      articleInput: 'X01',
      priceTypeInput: 'optimal',
      countInput: '3',
      dateInput: '2020-05-22',
      descriptionInput: 'super phone',
      nameInput: 'xiaomi note 8',
      pictureInput: 'https://images.kz.prom.st/118824560_w640_h640_xiaomi-redmi-note.jpg',
      priceInput: 650,
      id: Date.now() + 3
    },
    {
      articleInput: 'S02',
      priceTypeInput: 'premium',
      countInput: '4',
      dateInput: '2020-05-21',
      descriptionInput: 'ultra zoom',
      nameInput: 'samsung s20',
      pictureInput: 'https://qiymeti.net/wp-content/uploads/samsung-galaxy-s20-ultra-5g-qiymeti-768x768.jpg',
      priceInput: 2400,
      id: Date.now() + 4
    },
    {
      articleInput: 'X02',
      priceTypeInput: 'cheap',
      countInput: '20',
      dateInput: '2020-05-20',
      descriptionInput: '',
      nameInput: 'xiaomi 8a',
      pictureInput: 'https://gadgetstripe.com/wp-content/uploads/2019/10/Xioami-Redmi-8A-gadgetstripe.jpg',
      priceInput: 280,
      id: Date.now() + 5
    },
  ])

  const [storage, setStorage] = useState(
    {
      typeOfDate: 'text',
      nameInput: '',
      articleInput: '',
      countInput: '',
      priceInput: '',
      dateInput: '',
      pictureInput: '',
      descriptionInput: '',
      priceTypeInput: '',
    }
  )

  const [searchApp, setSearchApp] = useState('')
  const [filterApp, setFilterApp] = useState({
    cheap: false,
    optimal: false,
    premium: false,
  })
  const [sortApp, setSortApp] = useState('alphabet')


  const handleSubmit = (e) => {
    e.preventDefault()

    setStorage({
      nameInput: '',
      articleInput: '',
      countInput: '',
      priceInput: '',
      dateInput: '',
      pictureInput: '',
      descriptionInput: '',
      priceTypeInput: '',
    })

    setCards([
      ...cards,
      {
        nameInput: storage.nameInput.toLowerCase(),
        articleInput: storage.articleInput,
        countInput: storage.countInput.toLowerCase(),
        priceInput: storage.priceInput.toLowerCase(),
        dateInput: storage.dateInput.toLowerCase(),
        pictureInput: storage.pictureInput.toLowerCase(),
        descriptionInput: storage.descriptionInput.toLowerCase(),
        priceTypeInput: storage.priceTypeInput.toLowerCase(),
        id: Date.now()
      }
    ])
  }

  const handleEdit = (
    id, newName, newArticle, newPicture, newCount, newPrice, newDate, newDescription, newPriceType
  ) => {
    const updateCards = cards.map((card) =>
      card.id === id ?
        {
          ...card,
          id: id,
          nameInput: newName,
          articleInput: newArticle,
          pictureInput: newPicture,
          countInput: newCount,
          priceInput: newPrice,
          dateInput: newDate,
          descriptionInput: newDescription,
          priceTypeInput: newPriceType,
        } : card
    )
    setCards(updateCards)
  }

  const nameChange = (e) => {
    setStorage({ ...storage, nameInput: e.target.value })
  }

  const articleChange = (e) => {
    setStorage({ ...storage, articleInput: e.target.value })
  }

  const countChange = (e) => {
    setStorage({ ...storage, countInput: e.target.value })
  }

  const priceChange = (e) => {
    setStorage({ ...storage, priceInput: e.target.value })
  }

  const dateChange = (e) => {
    setStorage({ ...storage, dateInput: e.target.value })
  }

  const pictureChange = (e) => {
    setStorage({ ...storage, pictureInput: e.target.value })
  }

  const descriptionChange = (e) => {
    setStorage({ ...storage, descriptionInput: e.target.value })
  }

  const priceTypeChange = (e) => {
    setStorage({ ...storage, priceTypeInput: e.target.value })
  }

  const onFocusDate = () => {
    setStorage({ ...storage, typeOfDate: 'date' })
  }

  const onBlurDate = () => {
    setStorage({ ...storage, typeOfDate: 'text' })
  }

  const handleDelete = (id) => {
    setCards(cards.filter(item => item.id !== id))
  };

  const getFilterArray = (e) => {

    switch (e) {
      case 'cheap':
        if (filterApp.cheap === false) {
          setFilterApp({ ...filterApp, cheap: true })
        } else {
          setFilterApp({ ...filterApp, cheap: false })
        }
        break
      case 'optimal':
        if (filterApp.optimal === false) {
          setFilterApp({ ...filterApp, optimal: true })
        } else {
          setFilterApp({ ...filterApp, optimal: false })
        }
        break
      case 'premium':
        if (filterApp.premium === false) {
          setFilterApp({ ...filterApp, premium: true })
        } else {
          setFilterApp({ ...filterApp, premium: false })
        }
        break
      default:
    }

    const categoryArray = [];

    Object.keys(filterApp).forEach((item) => {

      if (filterApp[item] === true) {
        categoryArray.push(item)
      }

    })

    return categoryArray
  }

  const arrayWithTypeOfValue = getFilterArray()

  const alphabetSort = (a, b) => {
    if (a.nameInput > b.nameInput) {
      return 1
    } else if (a.nameInput < b.nameInput) {
      return -1
    } else {
      return 0
    }
  };

  const priceSort = (a, b) => {
    if (a.priceInput > b.priceInput) {
      return 1
    } else if (a.priceInput < b.priceInput) {
      return -1
    } else {
      return 0
    }
  };

  const countSort = (a, b) => {
    if (Number(a.countInput) > Number(b.countInput)) {
      return 1
    } else if (Number(a.countInput) < Number(b.countInput)) {
      return -1
    } else {
      return 0
    }
  };

  const dateSort = (a, b) => {
    if (a.dateInput > b.dateInput) {
      return 1
    } else if (a.dateInput < b.dateInput) {
      return -1
    } else {
      return 0
    }
  };

  const filteredCards = () => {

    if (arrayWithTypeOfValue) {
      const cardsWithSearch = cards.filter(item => item.nameInput.includes(searchApp))
      if (arrayWithTypeOfValue.length === 0) {
        return cardsWithSearch
      } else {
        return (
          cardsWithSearch.filter(item => arrayWithTypeOfValue.includes(item.priceTypeInput))
        )
      }
    } else {
      if (arrayWithTypeOfValue.length === 0) {
        return cards
      } else {
        return cards.filter(item => arrayWithTypeOfValue.includes(item.priceTypeInput))
      }
    }
  }

  const arrayFilteredCards = filteredCards()

  const sortedCards = () => {

    switch (sortApp) {
      case 'alphabet':
        return arrayFilteredCards.sort(alphabetSort)

      case 'price':
        return arrayFilteredCards.sort(priceSort)

      case 'count':
        return arrayFilteredCards.sort(countSort)

      case 'date':
        return arrayFilteredCards.sort(dateSort)

      default:
        return arrayFilteredCards.sort(alphabetSort)
    }

  }

  return (
    <div className='body'>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='form__title'>
          Adding form
        </h2>

        <div className='form__group'>
          <input className='form__input'
            id='nameInput'
            type='text'
            value={storage.nameInput}
            onChange={nameChange}
            minLength='5'
            placeholder=' '
            required />
          <label className='form__label'>Name (min 5 characters)<span className='required'>*</span></label>
        </div>

        <div className='form__group'>
          <input className='form__input'
            type='text'
            value={storage.articleInput}
            onChange={articleChange}
            placeholder=' '
            pattern='[A-ZА-Я]{1}[0-9]{2,}'
            required />
          <label className='form__label'>Article (sample: A12...)<span className='required'>*</span></label>
        </div>

        <div className='form__group'>
          <input className='form__input'
            type='number'
            value={storage.countInput}
            onChange={countChange}
            min='1'
            step='1'
            placeholder=' '
            required />
          <label className='form__label'>Count (PCs)<span className='required'>*</span></label>
        </div>

        <div className='form__group'>
          <input className='form__input'
            type='number'
            value={storage.priceInput}
            onChange={priceChange}
            min='1'
            step='0.1'
            placeholder=' '
            required />
          <label className='form__label'>Price (RUB)<span className='required'>*</span></label>
        </div>

        <div className='form__group'>
          <input className='form__input'
            type={storage.typeOfDate}
            value={storage.dateInput}
            onChange={dateChange}
            onFocus={onFocusDate}
            onBlur={onBlurDate}
            placeholder=' '
            required />
          <label className='form__label'>Creation date<span className='required'>*</span></label>
        </div>

        <div className='form__group form__group_align'>
          <input type='radio'
            id='cheapPrice'
            onChange={priceTypeChange}
            value='cheap'
            name='priceType'
            checked={storage.priceTypeInput === 'cheap'} />
          <label className='form__radio' htmlFor='cheapPrice'>Cheap</label>

          <input type='radio'
            id='optimalPrice'
            onChange={priceTypeChange}
            value='optimal'
            name='priceType'
            checked={storage.priceTypeInput === 'optimal'} />
          <label className='form__radio' htmlFor='optimalPrice'>Optimal</label>

          <input type='radio'
            id='premiumPrice'
            onChange={priceTypeChange}
            value='premium'
            name='priceType'
            checked={storage.priceTypeInput === 'premium'} required />
          <label className='form__radio' htmlFor='premiumPrice'>Premium<span className='required'>*</span></label>
        </div>

        <div className='form__group'>
          <input className='form__input'
            type='text'
            value={storage.pictureInput}
            onChange={pictureChange}
            placeholder=' ' />
          <label className='form__label'>Picture (text link to an image)</label>
        </div>

        <div className='form__group'>
          <input className='form__input form__input_description'
            type='textarea'
            value={storage.descriptionInput}
            onChange={descriptionChange}
            placeholder=' ' />
          <label className='form__label'>Description</label>
        </div>

        <button
          className='form__button'
          type='submit'>
          Send
        </button>

        <div className='reqInform'><span className='required'>*</span> Required information</div>

      </form>
      <div className='wrapperContainer'>
        <SearchForm setSearchValue={setSearchApp} setFilterValue={getFilterArray} setSortValue={setSortApp} />
        <CardsContainer deleteCallback={handleDelete} updateCallBack={handleEdit} cards={sortedCards()} />
      </div>
    </div>
  )
}

