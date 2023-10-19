import React ,{useState}from 'react'

export default function AddProduct() {
    const [text, setText] = useState({
        name:"Enter Name",
        price:"Enter Price",
        description:"Enter Description ",
        category:" Enter Category",
        quantity:" Enter Quantity",



    });
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = () => {
        
        alert(JSON.stringify(text, null, 2));
        console.log(text);
    }
    const handleCANCEL = () => {
        setText({
            name: 'Enter Name',
            price: 'Enter Price',
            description: 'Enter Description',
            category: 'Enter Category',
            quantity: 'Enter Quantity',
          });
    }


  return (
    <div>
        <center>
    <input type='text' name='text' value={text.name} onChange={handleOnChange}  id='name'/> <br/>  <br/>
    <input type='text' name='text' value={text.description} onChange={handleOnChange}  id='description'/> <br/>  <br/>
    <input type='text' name='text' value={text.category} onChange={handleOnChange} id='category'/> <br/>  <br/>
    <input type='text' name='text'   value={text.quantity} onChange={handleOnChange}  id='quantity'/> <br/>  <br/>
    <input type='text' name='text'   value={text.price} onChange={handleOnChange} id='price'/> <br/>  <br/>
    <button onClick={handleSubmit}>SUBMIT</button>  <br/> <br></br>
    <button onClick={handleCANCEL} >CANCEL</button>
    </center>
      
    </div>
  )
}
