import { useState } from "react";
import { useCart } from "../../../context/cart/CartContext";
import { useFavorite } from "../../../context/favorite/FavoriteContext";

export default function ButtonAddCartMenu({ data }) {
    const { cartDispatch } = useCart();
    const { addFavorite } = useFavorite();
    const [addedToCart, setAddedToCart] = useState(false);
    const [addedToFavorite, setAddedToFavorite] = useState(false);

    const addToCart = () => {
        cartDispatch({ type: 'ADD_TO_CART', payload: { ...data, quantity: 1 } });
        setAddedToCart(true);
    }

    const addToFavorite = () => {
        addFavorite({ ...data });
        setAddedToFavorite(true);
    }

    return (
        <>
            <button onClick={addToCart}>
                {addedToCart ? 'Adicionado ao Carrinho' : 'Adicionar ao Carrinho de Compras'}
            </button>
            <button onClick={addToFavorite} className="mt-2">
                {addedToFavorite ? 'Adicionado aos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
        </>
    );
}
