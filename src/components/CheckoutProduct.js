import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';
import {addToBasket ,removeFromBasket} from "../slices/basketSlice";
import {useDispatch} from "react-redux";

function CheckoutProduct({id, title, price, rating, description, category, image, havePrime,}) {

    const dispatch = useDispatch();
    const AddItemToBasket = () => {
        const product = {
            id, title, rating, price, description, category, image, havePrime,
        };
        dispatch(addToBasket(product));
    }
    const RemoveItemFromBasket = () => {

        dispatch(removeFromBasket({id}));
    }

    return(
        <div className="flex flex-col mb-5 lg:grid grid-cols-5 ">
            <Image src={image} height={200} width={200} objectFit="contain"/>
            <div className="pt-5 lg:col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i) =>(
                        <StarIcon  className="h-5 text-yellow-500" />
                    )) }
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="EUR"/>
                {havePrime && (
                    <div className="flex items-center space-x-2">
                        <img src="https://links.papareact.com/fdw" className="w-12" loading="lazy"/>
                        <p className="text-xs text-gray-500">Livraison Gratuite en 1 jour</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={AddItemToBasket}>Ajouter au panier</button>
                <button className="button" onClick={RemoveItemFromBasket}>Enlever du panier</button>
            </div>
        </div>

    )
}
export default CheckoutProduct;