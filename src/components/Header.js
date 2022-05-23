import Image from "next/image";
import{MenuIcon, ShoppingCartIcon, SearchIcon} from "@heroicons/react/outline";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {selectItems} from "../slices/basketSlice";
import {useSelector} from "react-redux";

function Header() {

    const {data : session} = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

    return(
        <header>
            {/*top nav*/}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image src="https://links.papareact.com/f90"
                        onClick={() => router.push('/')}
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/*search*/}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" />
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/*user section*/}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p className="hover:underline">
                            {session ? `Bonjour, ${session.user.name}` : "Connection"}
                        </p>
                        <p className="font-extrabold md:text-sm">Compte & Listes</p>
                    </div>

                    <div onClick={() => router.push('/orders')} className="link">
                        <p>Retours</p>
                        <p className="font-extrabold md:text-sm">& Achats</p>
                    </div>

                    <div className="relative link flex items-center" onClick={() => router.push('/checkout')}>
                        <span className="absolute top-0 right-0 md:right-11 h-4 w-4 bg-yellow-400 text-center rounded-full text-black
                        font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Panier</p>
                    </div>
                </div>

            </div>
            {/*down nav*/}
            <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
                <p className="link flex items-center font-extrabold">
                    <MenuIcon className="h-6 mr-1"/>
                    Toutes
                </p>
                <p className="link">Prime Vidéo</p>
                <p className="link">Amazon Entreprise</p>
                <p className="link">Offre du jour!</p>
                <p className="link hidden lg:inline-flex">Informatique</p>
                <p className="link hidden lg:inline-flex">Musique</p>
                <p className="link hidden lg:inline-flex">Livres</p>
                <p className="link hidden lg:inline-flex">High-Tech</p>
                <p className="link hidden lg:inline-flex">Cuisine & Maison</p>
                <p className="link hidden lg:inline-flex">Audible</p>
                <p className="link hidden lg:inline-flex">Amazon Basics</p>
            </div>
        </header>
    )
}
export default Header;