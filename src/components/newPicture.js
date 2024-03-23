import {useForm} from "react-hook-form";
import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./new_picture.css";

export function NewPicture()
{
    //підключення навігації
    const navigate=useNavigate();

    const [picturesData, setPictures] = useState([]);

    // Початковий стан нової картини
    const newPicture = {
        id: picturesData.length + 1, // отримуємо новий id
        title: "",
        description: ""
    };

    // handleSubmit у ній знаходиться функція, де надсилають форму
    // register відслідковує змінит
    const { register, handleSubmit } = useForm();

    const onSubmit = (newPicture) => {
        axios.post("http://localhost:5041/api/picture", newPicture)
            .then(resp=>{
            setPictures([...picturesData, newPicture]); // Оновлення стану з додаванням нової картини

                navigate('/pictures');
            })
            .catch(error => {
                console.error("Error adding picture:", error);
            });
    };

    return (
        <>
            <div className="newForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Назва</label>
                        <input type="text" name="title" {...register("title")} required />
                    </div>

                    <div>
                        <label>Опис картини</label>
                        <input type="text" name="description" {...register("description")} required />
                    </div>

                    <div>
                        <input className="button" type="submit" value="Додати картину" />
                    </div>
                </form>
            </div>
        </>
    );
}