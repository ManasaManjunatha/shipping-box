import React, { useState } from 'react'

function ShippingForm(props) {
  // create simple state variable
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [place, setPlace] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      weight: weight,
      color: color,
      place: place

    };
    //console.log(data);

    //calling parent method
    props.addToListCallback(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Shipping Items</h1>
        Item name: <input type="text" value={name} placeholder="enter item name" onChange={(e) => setName(e.target.value)} required /><br></br>
        Item weight:<input type="number" value={weight} placeholder="enter item weight" onChange={(e) => setWeight(e.target.value)} required /><br></br>
        Color:<input type="color" value={color} onChange={(e) => setColor(e.target.value)} /><br></br>
        Place:<input type="text" value={place} placeholder="enter place" onChange={(e) => setPlace(e.target.value)} required /><br></br>
        <button>submit</button>
      </form>
    </div>
  )
}

export default ShippingForm