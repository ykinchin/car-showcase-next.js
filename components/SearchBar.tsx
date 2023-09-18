'use client'

import React, { useState } from 'react'

import { SearchBrand } from '.'

type Props = {}

const SearchBar = (props: Props) => {
  const [brand, setBrand] = useState('')
  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl'>
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <SearchBrand brand={brand} setBrand={setBrand} />
      </div>
    </form>
  )
}

export default SearchBar
