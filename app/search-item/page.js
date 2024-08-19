'use client';
import React from 'react'
import SearchItem from '../_components/SearchItem'

export const page = () => {

  const item = ["orange","banana","apple","gauvava","mango","apricot"];

  return (
    <SearchItem item={item} ItemsPerPage={2}/>
  )
}

export default page




















