import React from 'react'

export default function Input({ label, type, value, handler }) {
  return (
    <label>
        {label}
        <input type={type} value={value} onChange={handler} />
    </label>
  )
}