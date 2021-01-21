import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Header from './Header'

import axios from "axios"





const Container = () => {
    const [showUrl, setShowUrl] = useState("")
    const [showUrlfixed, setShowUrlfixed] = useState("")
    const [description, setDescription] = useState("")
    const [descriptionfixed, setDescriptionfixed] = useState("")



    const handleUpdate = (url, desc) => {
        axios.post("https://webrtc-back1.herokuapp.com/entreprise/show/update", {
            show_url: url,
            description: desc
        })
            .then(res => {
                if (res.data) {
                    setDescriptionfixed(desc);
                    setShowUrlfixed(url);
                }
            }
            )
    }

    useEffect(() => {

        axios.get("https://webrtc-back1.herokuapp.com/entreprise/show/shows").then(res => {
            setShowUrlfixed(res.data[0].url_show)
            setDescriptionfixed(res.data[0].description)
        }

        )

        return () => {

        }
    }, [])





    return (
        <div className="flex flex-col w-screen " style={{ fontFamily: "Questrial" }}>
            <Header />
            <div className=" flex flex-col  p-10">
                <p className="text-5xl  text-gray-300" style={{ fontFamily: "Questrial" }}> Welcome , Admin</p>
                <div className="p-10  flex flex-wrap  gap-10">
                    <Link href="/Users"  >
                        <p className="text-3xl border p-3 w-1/3  text-gray-300 cursor-pointer  hover:border-red-400 " style={{ fontFamily: "Questrial" }}> Gestion des Utilisateurs</p>
                    </Link>
                    <Link href="/Jobs"  >
                        <p className="text-3xl border p-3 w-1/3  text-gray-300" style={{ fontFamily: "Questrial" }}> Gestion des Jobs</p>
                    </Link>
                    <Link href="/Entreprise"  >
                        <p className="text-3xl border p-3 w-1/3  text-gray-300" style={{ fontFamily: "Questrial" }}> Gestion des Entreprises</p>
                    </Link>

                </div>
                <div className="p-3 flex flex-col  gap-7 ">
                    <div className='border border-gray-600  flex flex-col gap-7 p-4 w-1/3' >
                        <p className="text-gray-300 text-3xl">show actuel: </p>
                        <p className="text-sm text-gray-600">lien:</p>
                        <a className="text-gray-300 hover:text-red-400" target="_blank" href={showUrlfixed}> {showUrlfixed}</a>
                        <p className="text-sm text-gray-600">descriptoin</p>
                        <p className="text-gray-400 text-xl " style={{ fontFamily: "Questrial" }}> {descriptionfixed}</p>

                    </div>

                    <p className="text-gray-300">Nouveau show: </p>
                    <input type="text" className="bg-gray-800 p-3 text-white w-64 " placeholder="url show"
                        onChange={(evt) => setShowUrl(evt.target.value)}
                    />
                    <input type="text" className="bg-gray-800 p-3 text-white w-64 " placeholder="description"
                        onChange={(evt) => setDescription(evt.target.value)}
                    />
                    <button onClick={() => handleUpdate(showUrl, description)} className="p-2 text-lg border border-gray-500 w-40 text-gray-500 hover:text-gray-200 hover:border-gray-200">
                        update show
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Container
