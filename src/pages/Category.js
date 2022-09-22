import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../components/Products/ItemList'

const Category = () => {
    const { category } = useParams();

    return (
        <ItemList category={category} />
    )
}

export default Category