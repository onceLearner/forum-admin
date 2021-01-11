import React, { useState, useEffect } from 'react'
import axios from "axios"
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SearchIcon from '@material-ui/icons/Search';
import Header from './Header'
import CardUser from './user/CardUser';

const ContainerUser = () => {
    const [list, setList] = useState([])
    const [listInitial, setListInitial] = useState([])
    const [loading, setLoading] = useState(true)
    const [SearchValue, setSearchValue] = useState("");


    useEffect(() => {
        axios.get("https://webrtc-back1.herokuapp.com/user/etudiant/all")
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

        setList(listInitial.filter(user => user.username.includes(SearchValue)))
        return () => {

        }
    }, [SearchValue])




    return (
        <div className="flex flex-col w-screen ">
            <Header />
            <div className="w-full p-10" >
                <div className="flex items-center justify-between border-gray-500 p-7  ">
                    <p></p>
                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="Search"
                        onChange={(evt) => setSearchValue(evt.target.value)}
                    />

                </div>

                <div className={!loading ? `hidden` : ` flex items-center justify-center h-screen `}>
                    <TrackChangesIcon style={{ fontSize: "60px" }} className=" text-gray-200  animate-spin" />
                </div>

                <div className="flex flex-wrap justify-evenly  gap-8">
                    {list.map(user => {
                        return (
                            <CardUser user={user} key={user.username} />
                        )
                    })}
                </div>


            </div>

        </div>
    )
}

export default ContainerUser
