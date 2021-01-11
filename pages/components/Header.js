import React from 'react'
import Link from "next/link"
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';

const date = new Date().toLocaleString('en-GB', { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", })


const Header = () => {
    return (
        <div className="flex border-b border-gray-700 shadow-2xl  justify-between    p-3 px-10  ">
            <div className="text-gray-100 opacity-50">
                {date}
            </div>
            <Link href="/"><a id="a"></a></Link>


            <div className="flex gap-5">
                <p className="text-gray-500">Admin hamid</p>
                <AccountBoxSharpIcon className="text-gray-300" />
                <ExitToAppSharpIcon className="text-gray-300 hover:text-red-400 cursor-pointer" onClick={() => document.getElementById("a").click()} />

            </div>




        </div>
    )
}

export default Header
