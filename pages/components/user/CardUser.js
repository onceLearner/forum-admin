import React, { useState } from 'react'
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DeleteIcon from '@material-ui/icons/Delete';

const deleteUser = username => {
    axios.post("https://webrtc-back1.herokuapp.com/user/etudiant/delete", {
        username: username
    })
        .then(res => { console.log(res.data); alert(`user : ${username} had been deleted`) })
        .catch(e => console.error(e))

}


const CardUser = ({ user }) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className="flex flex-col   border border-gray-600 shadow-xl hover:shadow-2xl p-4  md:w-80 flex-wrap rounded-lg space-y-4 bg-gradient-to-tr from-gray-800 to-gray-700  transform cursor-pointer hover:scale-105 transition delay-50  " style={{ fontFamily: "Questrial" }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
            <div className="flex gap-8 items-center justify-center p-3">
                <Avatar className="" >{user.username.slice(0, 1)}</Avatar>
                <div className={isHover ? `text-red-500 hover:text-white` : ` hidden`} onClick={() => deleteUser(user.username)} >
                    <DeleteIcon /> delete
                </div>
            </div>
            <div className="flex flex-wrap gap-5 items-center opacity-70" >
                <p className="text-gray-400 text-sm">username:</p>
                <p className="text-gray-200  ">{user.username}</p>


            </div>
            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">name:</p>
                <p className="text-gray-200  ">{user.name}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">prenom:</p>
                <p className="text-gray-200  ">{user.prenom}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">ecole:</p>
                <p className="text-gray-200  ">{user.ecole}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">filiere:</p>
                <p className="text-gray-50  ">{user.filiere}</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <p className="text-gray-400 text-sm">cv:</p>
                <p className="text-gray-50  ">{user.cv}</p>
            </div>

            <div className=" text-gray-300  text-center space-x-8">
                <TwitterIcon />
                <LinkedInIcon />
            </div>
            <div className={`flex   gap-5  justify-center  `}>



            </div>


        </div >
    )
}
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://webrtc-back1.herokuapp.com/user/etudiant/all')
    const user1 = await res.json()
    const user = user1[0];

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            user,
        },
    }
}


export default CardUser
