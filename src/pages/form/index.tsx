import { FC, useState } from "react"
import styles from '@/styles/Home.module.css'
import axios from "axios"

type Form = {
    name: string,
    creator: string,
    body: string,
    image: string,
}


const FormPage: FC = () => {
    const [data, setData] = useState<Form>({ name: "", creator: "mario", body: "", image: "" })


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const movie = { ...data }
            const res = await fetch("http://localhost:3000/api/movies/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(movie)
            })
            const data1 = await res.json()
            console.log(data1)
        } catch (error: any) {
            console.log(error.message);
        }
    };

    //   formData.append("photo", data.image);
    //   formData.append("name", data.name);
    //   formData.append("creator", data.creator);
    //   formData.append("body", data.body);
    //   const config = { headers: { "Content-Type": "multipart/form-data" } };
    //   await axios
    //     .post(`http://localhost:3000/api/movies/add`, formData, config)
    //     .then((data) => console.log(data));



    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e: any) => setData({ ...data, name: e.target.value })}
                />
                <textarea
                    value={data.body}
                    onChange={(e: any) => setData({ ...data, body: e.target.value })}
                />
                <select
                    value={data.creator}
                    onChange={(e) => setData({ ...data, creator: e.target.value })}
                >
                    <option value={"mario"}>Mario</option>
                    <option value={"mark"}>Mark</option>
                </select>
                <input
                    type="file"
                    value={data.image}
                    onChange={(e: any) => setData({ ...data, image: e.target.files })}
                />
                <button>Submit</button>
            </form>
        </>
    );
}

export default FormPage