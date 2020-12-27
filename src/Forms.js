import React from 'react'

export const Input = ({input, meta, ...props}) => {
  return (
    <div>
      <input {...input} {...props} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  )
}

export const Textarea = ({input, meta, ...props}) => {
  return (
    <div>
      <textarea {...input} {...props} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  )
}