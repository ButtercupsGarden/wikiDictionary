import React from 'react'


const STYLES = [
  'inp--primary'
]

const SIZES = [
  'inp--small',
  'inp--medium',
  'inp--large'
]

export const Input = ({
                        value,
                        inputStyle,
                        type,
                        onChange,
                        id,
                        name,
                        labelText,
                        placeholder,
                        inputSize
                      }) => {

  const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0]
  const checkInputSize = SIZES.includes(inputSize) ? inputSize : SIZES[0]

  return (
    <div className='input_area'>
      {labelText && <label className='input-label' htmlFor={name}>{labelText}</label>}
      <input
        type={type}
        value={value}
        className={`inp ${checkInputStyle} ${checkInputSize}`}
        onChange={onChange}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}
