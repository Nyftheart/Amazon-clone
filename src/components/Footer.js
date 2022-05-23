function Footer() {
    return (
        <div className="flex flex-col">
            <div className="max-w-full flex flex-col md:flex-row md:justify-around bg-amazon_blue text-white h-full pb-5">
                <div className="ml-5">
                    <h3 className="mt-4">Nous Connaitre</h3>
                    <div className="text-sm leading-snug mt-2 text-gray-300">
                        <p className="link">A Propos de nous</p>
                        <p className="link">Carierre</p>
                        <p className="link">Nouvelle Amelioration</p>
                        <p className="link">Amazon Protection</p>
                        <p className="link">Donnez Votre Avis</p>
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="mt-4">Contact</h3>
                    <div className="text-sm leading-snug mt-2 text-gray-300">
                        <p className="link">Facebook</p>
                        <p className="link">Twitter</p>
                        <p className="link">Instagram</p>
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="mt-4">Proposer vos produit</h3>
                    <div className="text-sm leading-snug mt-2 text-gray-300">
                        <p className="link">Vendre sur Amazon</p>
                        <p className="link">Vendre sous le nom d'Amazon </p>
                        <p className="link">Vendre sur Amazon Global</p>
                        <p className="link">Etre Affilier</p>
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="mt-4">On vous Aide</h3>
                    <div className="text-sm leading-snug mt-2 text-gray-300">
                        <p className="link">COVID-19 & Amazon</p>
                        <p className="link">Votre Compte</p>
                        <p className="link">Retour Article</p>
                        <p className="link">Achat 100% Protéger</p>
                        <p className="link">Amazon App</p>
                        <p className="link">Amazon Assistant</p>
                        <p className="link">Aide</p>
                    </div>
                </div>
            </div>
            <div className="flex text-sm p-3 space-x-3 w-full justify-center bg-amazon_blue">
                <p className="flex text-gray-300">Made By </p>
                <h1 className="link text-gray-300 font-bold">NyftHeart</h1>
            </div>
        </div>
    )
}

export default Footer