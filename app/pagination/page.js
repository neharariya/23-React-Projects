'use client';
import React from 'react'
import Pagination from '../_components/Pagination'

const page = () => {

    const item = ["orange","banana","apple","gauvava","mango","apricot"];

  return (
    <Pagination item={item} ItemsPerPage={2}/>
  )
}

export default page