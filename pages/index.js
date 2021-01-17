import React, { useState } from "react"
import Link from "next/link"
import axios from "axios"

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AutorenewIcon from '@material-ui/icons/Autorenew';




const loginHandle = async (username, password, setLoading, setMessgae) => {
  setLoading(true)
  const remote = "https://webrtc-back1.herokuapp.com/user/one_user"
  let result = false;
  axios.post(remote, {
    username: username,
    password: password,
    role: "admin"
  }).then(res => {
    setLoading(false);
    result = res.data
    setMessgae(result)
    if (result) setTimeout(() => {
      let btn = document.getElementById("a");
      console.log("heree");
      btn.click();
    }, 1000)
  })
    .catch(e => console.error(e))


}


export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)




  const LaodingIcon = <AutorenewIcon className="animate-spin" />
  return (
    <div className="bg-gradient-to-tr from-gray-800 to-gray-900 h-screen w-screen p-10 flex flex-col items-center">
      <div className="font-hairline text-sm text-gray-200 p-10 ">
        <p className="text-center font-light  p-4 text-sm">
          Admin Forum
       </p>
        <Link href="/Home" ><a id="a"></a></Link>
        <div className="border border-gray-600 opacity-80 px-5 ">
          {
            message !== null ?
              (
                message ?
                  <p className="text-green-400 p-3  text-lg"> Welcome ! wait...</p> :
                  <p className="text-red-400 p-3 text-lg">  Wrong Infos! Try again </p>
              )
              :
              ``
          }
        </div>
      </div>

      <div className="rounded-xl shadow-2xl md:w-2/3 h-2/3 justify-center  w-full  flex flex-col  items-center space-y-8 p-8 bg-gradient-to-br from-gray-800 to-gray-800">
        <AccountCircleIcon className="text-white" />
        <input type="text" className="border p-2  md:w-1/3 rounded-xl   " onChange={evt => setUsername(evt.target.value)} placeholder="Username" />
        <input type="password" className="border p-2 md:w-1/3  rounded-xl " onChange={evt => setPassword(evt.target.value)} placeholder="password" />
        <button onClick={() => loginHandle(username, password, setLoading, setMessage)} className="border font-extralight hover:border-red-500 hover:text-red-500  text-white px-8 py-2">

          {loading ? LaodingIcon : `Login`}


        </button>
      </div>



    </div>
  )
}
