import React, { useState } from 'react'
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DeleteIcon from '@material-ui/icons/Delete';

const deleteentreprise = id_entreprise => {
    axios.post("https://webrtc-back1.herokuapp.com/entreprise/delete", {
        id_entreprise: id_entreprise
    })
        .then(res => { console.log(res.data); alert(`entreprise : ${id_entreprise} had been deleted`) })
        .catch(e => console.error(e))

}


const CardEnt = (props) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className="flex flex-col   border border-gray-600 shadow-xl hover:shadow-2xl p-4  md:w-80 flex-wrap rounded-lg space-y-4 bg-gradient-to-tr from-gray-800 to-gray-700  transform cursor-pointer hover:scale-105 transition delay-50  " style={{ fontFamily: "Questrial" }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
            <div className="flex gap-8 items-center justify-center p-3">
                <Avatar className="" >{props.entreprise.id_entreprise.slice(0, 1)}</Avatar>
                <div className={isHover ? `text-red-500 hover:text-white` : ` hidden`} onClick={() => deleteentreprise(props.entreprise.id_entreprise)} >
                    <DeleteIcon /> delete
                </div>
            </div>
            <div className="flex flex-wrap gap-5 items-center opacity-70" >
                <p className="text-gray-400 text-sm">id_entreprise:</p>
                <p className="text-gray-200  ">{props.entreprise.id_entreprise}</p>


            </div>
            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">username Admin :</p>
                <p className="text-gray-200  ">{props.entreprise.username_admin}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">titre:</p>
                <p className="text-gray-200  ">{props.entreprise.title_entreprise}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">domaine:</p>
                <p className="text-gray-200  ">{props.entreprise.domaine}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">code_conf:</p>
                <p className="text-gray-50  ">{props.entreprise.code_conf}</p>
            </div>


            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">interests:</p>
                <p className="text-gray-50  ">{props.entreprise.interests}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">description:</p>
                <p className="text-gray-50  ">{props.entreprise.description}</p>
            </div>



            <div className={`flex   gap-5  justify-center  `}>



            </div>


        </div >
    )
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://webrtc-back1.herokuapp.com/entreprise/entreprises')
    const posts = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}





export default CardEnt
