import React from 'react'

const STYLES = [
  "btn-app--primary--solid",
  "btn-app--secondary--solid",
]

const SIZES = [
  "btn-app--medium",
  "btn-app--small",
]

export const ButtonApp = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0]

  return (
    <div type={type} onClick={onClick} className={`btn-app ${checkButtonStyle} ${checkButtonSize}`}>
      {children}
    </div>
  )
}
