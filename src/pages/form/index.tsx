import { FC, useState } from "react"
import styles from '@/styles/Home.module.css'
import axios from "axios"

interface Form {
    name: string, 
    creator: string, 
    body: string, 
    image: string, 
}


const FormPage:FC = () => {
const [data, setData] =useState<Form>({name : "" , creator: "mario" , body: "" , image: ""})
    

const handleSubmit = async (e: any ) => {
    e.preventDefault()
  try {
    // const  movie = {...data}
    // console.log(movie)
    let formData = new FormData();
    formData.append("name" , data.name)
    formData.append("creator" , data.creator)
    formData.append("body" , data.body)
    formData.append("image" , data.image)
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    await axios.post(`http://localhost:3000/api/movies/add`, formData, config);
    console.log(formData)
  } catch (error: any) {
    console.log(error.message)
  }
}


   return (
     <>
       <form  onSubmit={handleSubmit} className={styles.form}>
         <input name="name" onChange={(e) => setData(({...data, name: e.target.value}))} />
         <textarea   name="body"  onChange={(e) => setData(({...data, body: e.target.value}))} />
         <select  name="cretor"  onChange={(e) => setData(({...data, creator: e.target.value}))} >
           <option value="mario">mario</option>
           <option  value="mark">mark</option>
         </select>
         <input type="file" name="image"  onChange={(e) => setData(({...data, image: e.target.value}))}  />
         <button>Submit</button>
       </form>
     </>
   );
}

export default  FormPage