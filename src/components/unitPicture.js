import {useParams} from "react-router-dom";
import "./unit_style.css";
import {useEffect, useState} from "react";
import axios from "axios";
const UnitPicture=()=>
{
    // отримує id книги з App Route path=":id" element={<UnitPicture/>}
    const {id} =useParams();

    const [picture, setPicture] = useState({
        id:0,
        title:"",
        description:""
    });

    useEffect(() => {
        axios.get(`http://localhost:5041/api/picture/${id}`).then(resp => {

            setPicture(resp.data);
            console.log("server response:", resp);
        }).catch(error => {
            console.error("Error fetching pictures:", error);
        });
    }, [id]); //[id] виклюкає функцію коли цей компонент змінюється


    console.log(picture);
    return(
        <>
            <div className="unit">
              <h4>Назва картини: {picture.title}</h4>
                <p>{picture.description}</p>
            </div>
        </>
    );
}

export default UnitPicture;