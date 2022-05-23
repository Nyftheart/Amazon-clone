import Header from "../components/Header";
import Image from "next/image";
import {useSelector} from "react-redux";
import {selectItems, selectTotal} from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import {useSession} from "next-auth/react";
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key)

function Checkout(){

    const items = useSelector(selectItems);
    const {data : session} = useSession();
    const total = useSelector(selectTotal);

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items : items,
            email : session.user.email
        });

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        if(result.error){
            alert(result.error.message);
        }
    }

    return(
        <div className="bg-gray-100">
            <Header></Header>

            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/*Left*/}
                <div className="flex-grow m-5 shadow-sm">
                    <Image src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"/>

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">{items.length === 0 ? "Panier Amazon Vide..." : "Votre Panier"}</h1>
                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                havePrime={item.havePrime}></CheckoutProduct>
                        ))}
                    </div>

                </div>

                {/*Right*/}
                <div className="flex flex-col bg-white shadow-md">
                    {items.length > 0 && (
                        <div className="p-10 ">
                            <h2 className="whitespace-nowrap">Liste d'achat ({items.length} articles) :
                            <span className="font-bold">
                                <Currency quantity={total} currency="EUR"/>
                            </span>
                            </h2>

                            <button
                            role="link"
                            onClick={createCheckoutSession}
                            className={`button mt-2 ${!session && "from-gray-300 to-gray-500 " +
                            "border-gray-200 text-gray-300 cursor-not-allowed"}`}
                            disabled={!session}>

                                {!session ? "Connectez vous !" : "Finir les achats"}

                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
export default Checkout;