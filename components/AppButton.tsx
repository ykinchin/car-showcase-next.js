'use client'

import Image from 'next/image'
import { FC, MouseEventHandler } from 'react'

type AppButtonProps = {
  isDisabled?: boolean
  btnType?: 'button' | 'submit'
  containerStyles?: string
  textStyles?: string
  title: string
  rightIcon?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

const AppButton: FC<AppButtonProps> = ({
  title,
  handleClick,
  containerStyles,
  btnType,
  isDisabled,
  rightIcon,
  textStyles,
}) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || 'button'}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default AppButton
