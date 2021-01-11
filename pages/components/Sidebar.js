import React from 'react'
import Image from "next/image"

import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';
import LocationCitySharpIcon from '@material-ui/icons/LocationCitySharp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';




const Sidebar = () => {
    return (
        <div className="h-screen bg-gray-800 flex  flex-col items-center p-5 gap-8 space-y-4 ">
            <div className=" ">
                <p className="font-thin text-gray-400">Emi</p>

            </div>


            <div className="flex items-center  gap-4 ">
                <HomeSharpIcon className="text-red-400" />

            </div>
            <div className="flex items-center  gap-4 cursor-pointer ">
                <GroupSharpIcon className="text-gray-400 hover:text-red-400 " />

            </div>
            <div className="flex  items-center gap-4 ">
                <WorkSharpIcon className="text-gray-400 " />


            </div>
            <div className="flex  items-center gap-4 ">
                <LocationCitySharpIcon className="text-gray-400 " />


            </div>
            <div className="flex  items-center gap-4 ">
                <LinkedInIcon className="text-gray-400 " />

            </div>



        </div>
    )
}

export default Sidebar
