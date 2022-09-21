import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../components/Products/ItemList';

const Office = () => {
  const { office } = useParams();

  return (
    <ItemList category={office} />
  )
}

export default Office