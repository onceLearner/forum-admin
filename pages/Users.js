import React from 'react'
import ContainerUser from './components/ContainerUser'
import Sidebar from './components/Sidebar'


const Users = () => {
    return (
        <div className="flex   bg-gradient-to-br from-gray-900 to-gray-800 ">
            <Sidebar id={1} />
            <ContainerUser />



        </div>
    )
}

export default Users
