import React, { useState, useEffect } from 'react'
import useSWR from "swr"

import axios from "axios"
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SearchIcon from '@material-ui/icons/Search';
import Header from './Header'
import CardUser from './user/CardUser';



const ContainerUser = () => {
    const [list, setList] = useState([])
    const [listInitial, setListInitial] = useState([])
    const [loading, setLoading] = useState(false)
    const [SearchValue, setSearchValue] = useState("");

    const fetcher = url => fetch(url).then(res => res.json());






    // useEffect(() => {
    //     axios.get("https://webrtc-back1.herokuapp.com/user/etudiant/all")
    //         .then(res => {
    //             setList(res.data);
    //             setListInitial(res.data)
    //             setLoading(false);
    //             console.log(res.data)
    //         })

    //     return () => {

    //     }
    // }, [])


    useEffect(() => {

        setList(listInitial.filter(user => user.username.includes(SearchValue)))
        return () => {

        }
    }, [SearchValue])

    const { data, error } = useSWR('https://webrtc-back1.herokuapp.com/user/etudiant/all', fetcher, { refreshInterval: 2000 })

    if (!data) return (
        <div className={` grid place-items-center h-screen w-screen `}>
            <TrackChangesIcon style={{ fontSize: "60px" }} className=" text-gray-200  animate-spin" />
        </div>)




    return (
        <div className="flex flex-col w-screen ">
            <Header />
            <div className="w-full p-10" >
                <div className="flex items-center justify-between border-gray-500 py-10 px-7 ">
                    <p className="text-3xl  text-gray-300" style={{ fontFamily: "Questrial" }}> Gestion des utilisateurs</p>

                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="Search"
                        onChange={(evt) => setSearchValue(evt.target.value)}
                    />

                </div>


                <div className={!loading ? `hidden` : ` flex items-center justify-center h-screen `}>
                    <TrackChangesIcon style={{ fontSize: "60px" }} className=" text-gray-200  animate-spin" />
                </div>

                <div className="flex flex-wrap justify-evenly  gap-8">
                    {data.map(user => {
                        return (
                            <CardUser user={user} key={user.username} />
                        )
                    })}
                </div>


            </div>

        </div>
    )
}
// export async function getStaticProps() {
//     const res = await fetch("https://webrtc-back1.herokuapp.com/user/etudiant/all")
//     const users = await res.json()

//     return {
//         props: {
//             users,
//         },
//         revalidate: 1,
//     }
// }


export default ContainerUser
