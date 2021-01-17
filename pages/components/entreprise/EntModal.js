import React, { useState } from 'react'
import axios from "axios"

import TrackChangesIcon from '@material-ui/icons/TrackChanges';




const handleAdd = (Entreprise, setLoading, setRes) => {
    setLoading(true);

    axios.post("https://webrtc-back1.herokuapp.com/entreprise/add", Entreprise)
        .then(res => { setLoading(false); setRes(res.data) })
        .catch(exc => console.error(exc))


}



const EntModal = (props) => {

    const [Entreprise, setEntreprise] = useState(
        { id_entreprise: "", username_admin: "", title_entreprise: "", domaine: "", code_conf: "", interests: "", description: "" }
    )

    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState(null)



    return (
        <div className={` z-20 fixed   p-4 md:px-16   transform md:translate-x-96 md:-translate-y-40  scale-90 border border-gray-400 rounded-2xl  bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl   `}>

            <div className={`   flex flex-col pr-10    space-y-10   `} >


                <div className={` flex  space-x-6`}>

                    <p onClick={() => props.modal(false)}
                        className={` cursor-pointer hover:text-red-600 text-red-400 font-hairline absolute right-0 px-4 m-2`}>
                        X
                </p>
                </div>
                <div className="flex justify-center text-lg text-gray-400 " style={{ fontFamily: "Questrial" }}>
                    <p>nouvelle Entreprise</p>

                </div>
                <div className="flex flex-wrap gap-5 justify-between items-center opacity-70  " >
                    <p className="text-gray-200 font-mono">id_entreprise:</p>
                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="..."
                        onChange={(evt) => setEntreprise({ ...Entreprise, id_entreprise: evt.target.value })}
                    />



                </div>
                <div className="flex flex-wrap gap-4 items-center opacity-70">
                    <p className="text-gray-200 font-mono">username admin:</p>
                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="..."
                        onChange={(evt) => setEntreprise({ ...Entreprise, username_admin: evt.target.value })}
                    />

                </div>

                <div className="flex flex-wrap gap-4 items-center opacity-70 justify-between">
                    <p className="text-gray-200 font-mono">titre:</p>
                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="..."
                        onChange={(evt) => setEntreprise({ ...Entreprise, title_entreprise: evt.target.value })}
                    />

                </div>

                <div className="flex flex-wrap gap-4 items-center opacity-70 justify-between">
                    <p className="text-gray-200 font-mono">domaine:</p>
                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="..."
                        onChange={(evt) => setEntreprise({ ...Entreprise, domaine: evt.target.value })}
                    />

                </div>

                <div className="flex flex-wrap gap-4 items-center opacity-70 justify-between">
                    <p className="text-gray-200 font-mono">code cong:</p>
                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="pfe offre "
                        onChange={(evt) => setEntreprise({ ...Entreprise, code_conf: evt.target.value })}
                    />

                </div>

                <div className="flex flex-wrap gap-4 items-center opacity-70 justify-between">
                    <p className="text-gray-200 font-mono">interests:</p>
                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="pfe offre "
                        onChange={(evt) => setEntreprise({ ...Entreprise, interests: evt.target.value })}
                    />

                </div>

                <div className="flex flex-wrap gap-4 items-center opacity-70 justify-between">
                    <p className="text-gray-200 font-mono">description:</p>
                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="pfe offre "
                        onChange={(evt) => setEntreprise({ ...Entreprise, description: evt.target.value })}
                    />

                </div>




                <div className="flex flex-col items-center justify-center">
                    <button
                        className={` flex items-center  space-x-4 border-2 focus:outline-none  border-gray-700  p-2 px-6 text-lg font-semibold  rounded-3xl  mb-8 text-gray-500 hover:text-white hover:bg-blue-500 `}
                        onClick={() => { handleAdd(Entreprise, setLoading, setRes) }}>
                        <p>ajouter </p>
                        {
                            loading && <TrackChangesIcon className={`text-gray-100 animate-spin `} />
                        }
                    </button>
                    {res != null &&
                        (res ?
                            <p className="text-green-500 ">Ajouter avec Sucess!</p> :
                            <p className="text-red-500 ">Erreur!</p>
                        )



                    }
                </div>
            </div>

        </div>
    )
}

export default EntModal
