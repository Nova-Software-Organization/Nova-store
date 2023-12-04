import { Link } from "react-router-dom";
import { useFavorite } from "../../context/favorite/FavoriteContext";

export default function Favorite() {
    const { favorites } = useFavorite();

    return (
        <div className="h-screen">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold my-4 text-orange-600">Favoritos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites && favorites.length > 0 ? (
                    favorites.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4">
                            <img src={product.url} alt={product.name} className="rounded-lg w-full h-[200px] object-cover hover:scale-105 hover:duration-100" />
                            <h2 className="text-xl font-bold">{product.name}</h2>
                            <p className="text-orange-600">{product.description}</p>
                            <p className="text-black font-bold mt-2">R${product.price}</p>
                            <div className='text-orange-600 hover-text-black font-bold flex'>
                                <Link to={`/produto/${product.id}`}>
                                    <button>Comprar</button>
                                </Link>
                            </div>
                        </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center mx-auto">
                            <p className="text-orange-600">Nenhum item favorito no carrinho.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
