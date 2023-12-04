import { Link } from "react-router-dom";

export default function NotFouldProduct({ data, productId }) {
    const product = data.find((item) => item.id === parseInt(productId));

    if (!product) {
        return (
            <>
                <div className="justify-center flex items-center mx-auto px-0 h-screen flex-col bg-orange-600">
                    <h1 className="text-white font-bold">Este Produto está indisponível!!</h1>
                    <p className="text-white">Por favor volte, mas tarde</p>
                    <button className="font-bold bg-black text-white hover:text-orange-500 duration-200 hover:scale-105">
                        <Link to="/">Voltar para página principal</Link>
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="justify-center flex items-center mx-auto px-0 h-screen flex-col bg-orange-600">
                <h1 className="text-white font-bold">Este Produto está indisponível!!</h1>
                <img src={product.url} alt={product.name} />
                <p className="text-white">Por favor volte, mas tarde</p>
                <button className="font-bold bg-black text-white hover:text-orange-500 duration-200 hover:scale-105">
                    <Link to="/">Voltar para página principal</Link>
                </button>
            </div>
        </>
    );
}
