'use client'

import Image from 'next/image'
import { FC, MouseEventHandler } from 'react'

type AppButtonProps = {
  title: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  containerStyles?: string
}

const AppButton: FC<AppButtonProps> = ({
  title,
  handleClick,
  containerStyles,
}) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default AppButton
