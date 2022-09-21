import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../components/Products/ItemList'

const Gamer = () => {
    const { gamer } = useParams();

    return (
        <ItemList category={gamer} />
    )
}

export default Gamer