import React from 'react'
import ContainerJobs from './components/ContainerJobs'
import Sidebar from './components/Sidebar'


const Jobs = () => {
    return (
        <div className="flex   bg-gradient-to-br from-gray-900 to-gray-800 ">
            <Sidebar id={2} />
            <ContainerJobs />



        </div>
    )
}

export default Jobs
