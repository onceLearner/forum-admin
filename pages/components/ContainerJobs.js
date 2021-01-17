import React, { useState, useEffect } from 'react'
import axios from "axios"
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import Header from './Header'
import CardJob from './job/CardJob';
import JobModal from './job/JobModal';

const ContainerJobs = ({ jobs }) => {
    const [list, setList] = useState([])
    const [listInitial, setListInitial] = useState(jobs)
    const [loading, setLoading] = useState(true)
    const [SearchValue, setSearchValue] = useState("");
    const [modal, setModal] = useState(false);


    useEffect(() => {
        axios.get("https://webrtc-back1.herokuapp.com/job/jobs")
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

        setList(listInitial.filter(job => job.id_job.includes(SearchValue)))
        return () => {

        }
    }, [SearchValue])




    return (
        <div className={`flex flex-col w-screen `}>
            <Header />
            <div className="w-full p-10" >
                <div className="flex items-center justify-between border-gray-500 py-10 px-7  ">
                    <p className="text-3xl  text-gray-300" style={{ fontFamily: "Questrial" }}> Gestion des Jobs</p>
                    <AddCircleOutlineIcon onClick={() => setModal(true)} className="text-gray-300 hover:text-red-400 cursor-pointer" fontSize="large" />
                    <input type="text" className="bg-gray-800 p-3 text-white " placeholder="Search"
                        onChange={(evt) => setSearchValue(evt.target.value)}
                    />

                </div>

                {modal && <JobModal modal={setModal} />}


                <div className={!loading ? `hidden` : ` flex items-center justify-center h-screen `}>
                    <TrackChangesIcon style={{ fontSize: "60px" }} className=" text-gray-200  animate-spin" />
                </div>

                <div className="flex flex-wrap justify-evenly  gap-8">
                    {list.map(job => {
                        return (
                            <CardJob job={job} key={job.id_job} />
                        )
                    })}
                </div>


            </div>

        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://webrtc-back1.herokuapp.com/job/jobs")
    const jobs = await res.json()

    return {
        props: {
            jobs,
        },
        revalidate: 1,
    }
}


export default ContainerJobs

