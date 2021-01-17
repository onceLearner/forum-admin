import React, { useState, useEffect } from 'react'
import axios from "axios"
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SearchIcon from '@material-ui/icons/Search';
import Header from './Header'
import CardEnt from './entreprise/CardEnt';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EntModal from './entreprise/EntModal';


const ContainerEntr = ({ entreprises }) => {
    const [list, setList] = useState([])
    const [listInitial, setListInitial] = useState(entreprises)
    const [loading, setLoading] = useState(true)
    const [SearchValue, setSearchValue] = useState("");
    const [modal, setModal] = useState(false)


    useEffect(() => {
        axios.get("https://webrtc-back1.herokuapp.com/entreprise/entreprises")
            .then(res => {
                setList(res.data);
                setListInitial(res.data)
                setLoading(false);
                console.log(res.data)
            })

        return () => {

        }
    }, [])


    useEffect(() => {

        setList(listInitial.filter(entreprise => entreprise.id_entreprise.includes(SearchValue)))
        return () => {

        }
    }, [SearchValue])




    return (
        <div className="flex flex-col w-screen ">
            <Header />
            <div className="w-full p-10" >
                <div className="flex items-center justify-between border-gray-500 py-10 px-7 ">
                    <p className="text-3xl  text-gray-300" style={{ fontFamily: "Questrial" }}> Gestion des Entreprise</p>
                    <AddCircleOutlineIcon onClick={() => setModal(true)} className="text-gray-300 hover:text-red-400 cursor-pointer" fontSize="large" />

                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="Search"
                        onChange={(evt) => setSearchValue(evt.target.value)}
                    />


                </div>
                {modal && <EntModal modal={setModal} />}

                <div className={!loading ? `hidden` : ` flex items-center justify-center h-screen `}>
                    <TrackChangesIcon style={{ fontSize: "60px" }} className=" text-gray-200  animate-spin" />
                </div>

                <div className="flex flex-wrap justify-evenly  gap-8">
                    {list.map(entreprise => {
                        return (
                            <CardEnt entreprise={entreprise} key={entreprise.id_entreprise} />
                        )
                    })}
                </div>


            </div>

        </div>
    )
}
export async function getStaticProps() {
    const res = await fetch("https://webrtc-back1.herokuapp.com/entreprise/entreprises")
    const entreprises = await res.json()

    return {
        props: {
            entreprises,
        },
        revalidate: 1,
    }
}


export default ContainerEntr


