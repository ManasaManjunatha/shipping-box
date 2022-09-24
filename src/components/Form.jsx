import React from 'react'

function Form() {
  return (
    <div>
      <form>
        <h1>Shipping Items</h1>
        <lable for="item name">item name: 
        <input type="text" name="item name"  placeholder="enter item name" required/></lable><br></br>
        item weight:<input type="text"  placeholder="enter item weight" required/><br></br>
        item color:<input type="text"   placeholder="enter item color" required/><br></br>
        place:<input type="text"    placeholder="enter place" required/><br></br>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Form