import Header from '../components/Header';
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter  } from "next/router";
import Footer from "../components/Footer";

function success() {
    const router = useRouter();

    return (
        <div className="bg-gray-100 h-screen">
            <Header />
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon  className="text-green-500 h-10" />
                        <h1 className="text-3xl">Merci, pour votre commande</h1>
                    </div>
                    <p>
                        Merci de nous avoir fait confiance. Nous vous enverrons une confirmation de l'expédition de votre article d'achat, si vous souhaitez
                        souhaitez vérifier l'état de votre (vos) commande(s), veuillez appuyer sur le lien ci-dessous.
                    </p>
                    <button onClick={()=>router.push("/orders")}
                            className="button mt-8"> Mes achats</button>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default success