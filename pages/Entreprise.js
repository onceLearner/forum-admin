import React from 'react'
import ContainerEntr from './components/ContainerEntr'
import Sidebar from './components/Sidebar'


const Entreprise = () => {
    return (
        <div className="flex   bg-gradient-to-br from-gray-900 to-gray-800 ">
            <Sidebar id={3} />
            <ContainerEntr />



        </div>
    )
}

export default Entreprise
