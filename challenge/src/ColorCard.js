import React from 'react'

const ColorCard = ({color}) => {

  return (
    <div style={{
      "width": "400px",
      "height": "400px",
      "border": "2px solid #2c3e50",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "backgroundColor": color
    }}>
      <p style={{
        "textAlign": "center",
        "color": "#000",
        "fontSize": "40px",
      }}>
        {color}
      </p>
    </div>
  )
}

export default ColorCard