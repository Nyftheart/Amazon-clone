let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function Footer() {
    return (
        <div className="flex flex-col">
            <div id="btn-back-to-top" className="text-sm p-3 w-full flex justify-center bg-amazon_blue-light">
                <p className="link text-gray-300">Back To top</p>
            </div>
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