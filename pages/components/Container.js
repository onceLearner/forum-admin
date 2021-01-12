import React from 'react'
import Link from "next/link"
import Header from './Header'

const Container = () => {
    return (
        <div className="flex flex-col w-screen " style={{ fontFamily: "Questrial" }}>
            <Header />
            <div className=" flex flex-col  p-10">
                <p className="text-5xl  text-gray-300" style={{ fontFamily: "Questrial" }}> Welcome , Admin</p>
                <div className="p-10  flex flex-wrap  gap-10">
                    <Link href="/Users"  >
                        <p className="text-3xl border p-3 w-1/3  text-gray-300 cursor-pointer  hover:border-red-400 " style={{ fontFamily: "Questrial" }}> Gestion des Utilisateurs</p>
                    </Link>
                    <Link href="/Jobs"  >
                        <p className="text-3xl border p-3 w-1/3  text-gray-300" style={{ fontFamily: "Questrial" }}> Gestion des Jobs</p>
                    </Link>
                    <Link href="/Entreprise"  >
                        <p className="text-3xl border p-3 w-1/3  text-gray-300" style={{ fontFamily: "Questrial" }}> Gestion des Entreprises</p>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Container
