// import axios from 'axios'
// import React, { useState } from 'react'

// function Imageupload() {
//     const [image,setImage] =useState('')
//     function handleImage(e){
//         console.log(e.target.files)
//         setImage(e.target.files[0])
//     }
//     function handleApi(){
//         const formData =new FormData()
//         formData.append('image',image)
//         axios.post('url',formData).then((res)=>{
//             console.log(res);
//         })
//     }
//   return (
//     <div>
//       <input type="file" name='file' onChange={handleImage}/>
//       <button onClick={handleApi}>Submit</button>
//     </div>
//   )
// }

// export default Imageupload

import React, { useState } from 'react';
import axios from 'axios';
import './Imageupload.css';

const Imageupload = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    // img: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      const response = await axios.post('https://6594e34f04335332df819ddb.mockapi.io/Imageupload', formData);
      console.log('Data posted successfully:', response.data);
      // You can handle success, redirect, or any other action here
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error scenarios here
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formapi'>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image URL:
        <input type="file" name="image" value={formData.img} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Imageupload;
