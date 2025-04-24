import React from 'react'
import ntc_logo from '../assets/Companies/ntc.jpg'

const CompaniesGrid = () => {
    return (<>
        <h2 className="text-4xl font-bold text-center dark:text-white">Happy Customers</h2>
        <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
            Proud to work with leading companies and grateful for the valuable experience we've gained.
        </p>
        <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent">
            <div className="mx-8 text-center justify-center items-center gap-4 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4">
                <img
                    alt="PTCL Logo"
                    className="h-20 mx-auto  object-center object-contain"
                    src="https://ptcl.com.pk/images/ptcl-logo-plain.svg"
                />

                <img
                    alt="PTV Logo"
                    className="h-20  mx-auto  rounded-full object-center object-cover"
                    src="https://upload.wikimedia.org/wikipedia/en/0/0c/PTV_Logo.png?20220108091410"
                />


                <img
                    alt="NTC Logo"
                    className="h-20  mx-auto rounded-full object-center object-cover"
                    src={ntc_logo}
                />

                <img
                    alt="State Life Logo"
                    className="h-20  mx-auto rounded-lg object-center "
                    src="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-1/347811364_650994456849727_7489633463661441312_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=eEAJhCDakkIQ7kNvwHo5lZu&_nc_oc=AdkE9meqlpGYlgjyKuxGUzjGGQARlAKFZLWPctr9Tut459QbJEiUKzzXvwuf69jAJXI&_nc_zt=24&_nc_ht=scontent.fisb5-1.fna&_nc_gid=spEhG4s4KwxRoMjeSl-pAA&oh=00_AfGvQIOslgPswjMOFBsgQRU6CwvOhDaBSik-sQ_ONrTIig&oe=680B283D"
                />

                <img
                    alt="COMSATS Logo"
                    className="h-22  mx-auto  rounded-full object-center object-cover"
                    src="https://www.comsats.edu.pk/assets/img/COMSATS-logo.png"
                />

                <img
                    alt="WAPDA Logo"
                    className="h-20  mx-auto rounded-full object-center object-cover"
                    src="https://images.seeklogo.com/logo-png/21/1/wapda-logo-png_seeklogo-210080.png?v=1955233635383792184"
                />

                <img
                    alt="IESCO Logo"
                    className="h-18  mx-auto  rounded-full object-center object-cover"
                    src="https://cdn.brandfetch.io/idkNf2qAeI/w/250/h/109/theme/light/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
                />
            </div>
        </div>
    </>
    )
}

export default CompaniesGrid
