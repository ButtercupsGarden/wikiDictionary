import React from 'react'

const STYLES = [
  "btn--primary--solid",
  "btn--secondary--solid",
]

const SIZES = [
  "btn--medium",
  "btn--small",
]

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0]

  return (
    <div type={type} onClick={onClick} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
      {children}
    </div>
  )
}
