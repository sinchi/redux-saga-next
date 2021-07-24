import React, { useEffect, useRef } from 'react'

export const PopoverDisplay = ({title, complete}) => {

  const ref = useRef();
  useEffect(() => {
    new bootstrap.Popover(ref.current, {
      trigger: 'focus'
    })
  }, [])
  return (
    <button 
      ref={ref}
      type="button"
      className="btn btn-lg btn-danger"
      data-bs-toggle="popover"
      title={title}
      data-bs-content="And here's some amazing content. It's very engaging. Right?">
      Click to toggle popover
    </button>
  )
}