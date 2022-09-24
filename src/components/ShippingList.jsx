import React, { useState } from 'react'
import ShippingForm from './ShippingForm';

function ShippingList() {
  // items is created to hold the variable
  const [items, setItems] = useState([]);

  //define addtolist
  const addToList = (item) => {
    console.log(item);
    const itemsCopy = [...items];
    itemsCopy.push(item)
    setItems(itemsCopy);
  }

  return (
    <div>
      <ShippingForm addToListCallback={(value) => addToList(value)} />
      <table >
        <thead>
          <td>Name</td>
          <td>Weight</td>
          <td>Color</td>
          <td>Place</td>
        </thead>
        <tbody>
          {
            items.map(item => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.weight}</td>
                  <td>  
                    <div style={{backgroundColor:item.color, width:"60px", height:"30px"}}></div></td>
                  <td>{item.place}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )

}
export default ShippingList