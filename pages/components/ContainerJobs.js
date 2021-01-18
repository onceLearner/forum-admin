import React, { useState, useEffect } from 'react'
import axios from "axios"
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useSWR from "swr"

import Header from './Header'
import CardJob from './job/CardJob';
import JobModal from './job/JobModal';

const fetcher = url => fetch(url).then(res => res.json());


const ContainerJobs = () => {
    const [list, setList] = useState([])
    const [listInitial, setListInitial] = useState([])
    const [loading, setLoading] = useState(true)
    const [SearchValue, setSearchValue] = useState("");
    const [modal, setModal] = useState(false);


    // useEffect(() => {
    //     axios.get("https://webrtc-back1.herokuapp.com/job/jobs")
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

        setList(listInitial.filter(job => job.id_job.includes(SearchValue)))
        return () => {

        }
    }, [SearchValue])


    const { data, error } = useSWR('https://webrtc-back1.herokuapp.com/job/jobs', fetcher, { refreshInterval: 2000 })


    if (!data) return (
        <div className={` grid place-items-center h-screen w-screen `}>
            <TrackChangesIcon style={{ fontSize: "60px" }} className=" text-gray-200  animate-spin" />
        </div>)





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



                <div className="flex flex-wrap justify-evenly  gap-8">
                    {data.map(job => {
                        return (
                            <CardJob job={job} key={job.id_job} />
                        )
                    })}
                </div>


            </div>

        </div>
    )
}

// export async function getStaticProps() {
//     let jobs = [];
//     axios.get("https://webrtc-back1.herokuapp.com/job/jobs")
//         .then(res => {
//             jobs = res.data

//         })
//     return {
//         props: {
//             jobs,
//         },
//         revalidate: 1,
//     }
// }


export default ContainerJobs

