import React from 'react'
import { getItem, getProducts } from './app/api';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ onAdd: addItem }) => {
    return (
        getProducts().map(p =>
            <ItemDetail onAdd={addItem} item={getItem(p.id)}></ItemDetail>
        )
    )
}

export default ItemDetailContainer