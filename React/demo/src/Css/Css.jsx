import React from 'react'
import "./style.css"

function Css() {

    let htmlcss = {
        backgroundColor : "blue",
        color:"red"
    }

  return (
    <div>
      1) inline css 
        <h1  style={{backgroundColor:"red",color:"blue",padding:"20px"}}>Hello this inline css</h1>

      2) internal css : not use in react 
      <h1 style={htmlcss}>hello this data</h1>

      3) external css : style.css

      <h1 className='h1'>Hello this External css</h1>

    </div>
  )
}

export default Css
