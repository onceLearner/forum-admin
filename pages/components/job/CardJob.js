import React, { useState } from 'react'
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DeleteIcon from '@material-ui/icons/Delete';

const deleteJob = id_job => {
    axios.post("https://webrtc-back1.herokuapp.com/job/delete", {
        id_job: id_job
    })
        .then(res => { console.log(res.data); alert(`job : ${id_job} had been deleted`) })
        .catch(e => console.error(e))

}


const CardJob = ({ job }) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className="flex flex-col   border border-gray-600 shadow-xl hover:shadow-2xl p-4  md:w-80 flex-wrap rounded-lg space-y-4 bg-gradient-to-tr from-gray-800 to-gray-700  transform cursor-pointer hover:scale-105 transition delay-50  " style={{ fontFamily: "Questrial" }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
            <div className="flex gap-8 items-center justify-center p-3">
                <Avatar className="" >{job.id_job.slice(0, 1)}</Avatar>
                <div className={isHover ? `text-red-500 hover:text-red-400` : ` hidden`} onClick={() => deleteJob(job.id_job)} >
                    <DeleteIcon /> delete
                </div>
            </div>
            <div className="flex flex-wrap gap-5 items-center opacity-70" >
                <p className="text-gray-400 text-sm">id_job:</p>
                <p className="text-gray-200  ">{job.id_job}</p>


            </div>
            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">id entrerprise:</p>
                <p className="text-gray-200  ">{job.id_entreprise}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">titre:</p>
                <p className="text-gray-200  ">{job.title_job}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">description:</p>
                <p className="text-gray-200  ">{job.description_job}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">tags:</p>
                <p className="text-gray-50  ">{job.tags.map(tag => (<p>#{tag}</p>))}</p>
            </div>


            <div className={`flex   gap-5  justify-center  `}>



            </div>


        </div >
    )
}
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://webrtc-back1.herokuapp.com/job/jobs')
    const job1 = await res.json()
    const job = job1[0];

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            job,
        },
    }
}


export default CardJob
