//onClick event
import React from 'react'

const EventClick = () => {
  return (
    <div>
      <h2>This is OnClick event handler</h2>
      <button onClick={()=>alert('Thank you for Clickig')}>Click me</button>
    </div>
  )
}

export default EventClick
