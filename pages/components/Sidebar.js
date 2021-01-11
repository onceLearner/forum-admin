import React from 'react'
import Link from "next/link"

import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';
import LocationCitySharpIcon from '@material-ui/icons/LocationCitySharp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';


const iconColor = (cnd) => cnd ? `text-red-400` : `text-gray-400`

const Sidebar = (props) => {
    return (
        <div className="h-screen bg-gray-800 flex  flex-col items-center p-5 gap-8 space-y-4 ">
            <div className=" ">
                <p className="font-thin text-gray-400">Emi</p>

            </div>
            <div>
                <Link href="/Home"><a id="a0"></a></Link>
                <Link href="/Users"><a id="a1"></a></Link>
                <Link href="/Jobs"><a id="a2"></a></Link>
                <Link href="/Entreprise"><a id="a3"></a></Link>
                <Link href="/Users"><a id="a4"></a></Link>
            </div>



            <div className="flex items-center  gap-4 cursor-pointer ">
                <HomeSharpIcon className={`${iconColor(props.id == 0)} hover:text-red-400`} onClick={() => document.getElementById("a0").click()} />
            </div>
            <div className="flex items-center  gap-4 cursor-pointer ">
                <GroupSharpIcon className={`${iconColor(props.id == 1)} hover:text-red-400`} onClick={() => document.getElementById("a1").click()} />

            </div>
            <div className="flex  items-center gap-4 cursor-pointer ">
                <WorkSharpIcon className={`${iconColor(props.id == 2)} hover:text-red-400`} onClick={() => document.getElementById("a2").click()} />


            </div>
            <div className="flex  items-center gap-4 cursor-pointer ">
                <LocationCitySharpIcon className={`${iconColor(props.id == 3)} hover:text-red-400`} onClick={() => document.getElementById("a3").click()} />


            </div>
            <div className="flex  items-center gap-4 cursor-pointer ">
                <LinkedInIcon className={`${iconColor(props.id == 4)} hover:text-red-400`} />

            </div>



        </div>
    )
}

export default Sidebar
