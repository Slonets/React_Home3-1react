import {Link} from "react-router-dom";
import "./list_style.css";
import {useEffect, useState} from "react";
import axios from "axios";

export default function PictureList()
{
     

    useEffect(() => {
        axios.get("http://localhost:5041/api/picture").then(resp=>{
            console.log("server respons = ", resp );

            setPictures(resp.data);

        })
    }, []); // Порожній масив дозволяє викликати useEffect лише один раз при монтуванні компонента



    return(
        <>
            <div className="first">
                <h1>Відомі картини Рафаеля </h1>

                <div className="addButton">
                    <Link className="button" to ={`/pictures/add`}>Додати нову книгу</Link>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Назва картини</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pictures.map((picture) => (
                        <tr key={picture.id}>
                            <td>{picture.id}</td>
                            <td><Link to={`/pictures/${picture.id}`}>{picture.title}</Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}