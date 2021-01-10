import React, { useState, useHook } from "react"
import axios from "axios"

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const loginHandle = async (username, password) => {
  const remote = "https://webrtc-back1.herokuapp.com/user/one_user"
  let result;
  axios.post(remote, {
    username: username,
    password: password,
    role: "admin"
  }).then(res => console.log(res.data))
    .catch(e => console.error(e))

}


export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 h-screen w-screen p-10 flex flex-col items-center">
      <div className="font-hairline text-sm text-gray-200 p-10 ">
        Forum Administration
      </div>

      <div className="border border-gray-600 shadow-sm md:w-1/3 w-full  flex flex-col  items-center space-y-8 p-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <AccountCircleIcon className="text-white" />
        <input type="text" className="border p-3  w-full  " onChange={evt => setUsername(evt.target.value)} placeholder="Username" />
        <input type="password" className="border p-3 w-full " onChange={evt => setPassword(evt.target.value)} placeholder="password" />
        <button onClick={() => loginHandle(username, password)} className="border font-extralight hover:border-red-500 hover:text-red-500  text-white px-8 py-2"> Login </button>
      </div>



    </div>
  )
}
