import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
      const eventData = {
        name: data.name,
        imagesURL : imageURL
      }
      const url = 'http://localhost:5055/addEvent'
      console.log(eventData)
      fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(eventData)
      })
      .then(res => {
        console.log("server side response done" , res);
      })
    };


    const handleImagesUpload = event => {
            console.log(event.target.files[0]); 

           const imgData = new FormData();
           imgData.set('key', '941644256336912a1409c0bcfce50071');
           imgData.append('image',event.target.files[0]);
            
           axios.post('https://api.imgbb.com/1/upload',imgData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name = "name" {...register("name",{ required : true})} />
        <br />
        <input  type= "file" onChange = {handleImagesUpload}/>
        <br />
        
        <input type="submit" />
      </form>
    );
};

export default AddEvent;