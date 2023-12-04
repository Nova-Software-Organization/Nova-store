import { Controller } from "react-hook-form";

export default function CustomerInfoPayment({state, control }) {
    return (
        <div className="bg-orange-600 p-4 rounded-md">
            <h2 className="text-xl font-bold text-white">Informações do Cliente</h2>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="customerName">
                    Digite o seu nome:
                </label>
                <Controller
                    name="customerName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            className="w-full border rounded py-2 px-3 outline-orange-600"
                            type="text"
                            placeholder="Digite seu nome"
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="customerLastName">
                    Digite o seu sobrenome:
                </label>
                <Controller
                    name="customerLastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            className="w-full border rounded py-2 px-3  outline-orange-600"
                            type="text"
                            placeholder="Digite seu sobrenome"
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="customerEmail">
                    Digite o seu email:
                </label>
                <Controller
                    name="customerEmail"
                    control={control}
                    defaultValue={state.email || ''}
                    render={({ field }) => (
                        <input
                            className="w-full border rounded py-2 px-3  outline-orange-600"
                            type="email"
                            placeholder="cliente@gmail.com"
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="customerPassword">
                    Digite sua senha:
                </label>
                <Controller
                    name="customerPassword"
                    control={control}
                    defaultValue={state.password || ''}
                    render={({ field }) => (
                        <input
                            className="w-full border rounded py-2 px-3  outline-orange-600"
                            type="password"
                            placeholder="******"
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="customerCpf">
                    Digite o seu CPF:
                </label>
                <Controller
                    name="customerCpf"
                    control={control}
                    defaultValue={''}
                    render={({ field }) => (
                        <input
                            className="w-full border rounded py-2 px-3  outline-orange-600"
                            type="text"
                            placeholder="00000000000"
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="customerAddress">
                    Endereço de Entrega:
                </label>
                <Controller
                    name="customerAddress"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            className="w-full border rounded py-2 px-3  outline-orange-600"
                            type="text"
                            placeholder="Endereço de Entrega"
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="customerCep">
                    CEP
                </label>
                <Controller
                    name="customerCep"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            className="w-full border rounded py-2 px-3  outline-orange-600"
                            type="text"
                            placeholder="CEP"
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="customerNeighborhood">
                    Digite o seu Bairro:
                </label>
                <Controller
                    name="customerNeighborhood"
                    control={control}
                    defaultValue={''}
                    render={({ field }) => (
                        <input
                            className="w-full border rounded py-2 px-3  outline-orange-600"
                            type="text"
                            placeholder=""
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="customerNumberHouse">
                    Numero da casa:
                </label>
                <Controller
                    name="customerNumberHouse"
                    control={control}
                    defaultValue={''}
                    render={({ field }) => (
                        <input
                            className="w-full border rounded py-2 px-3  outline-orange-600"
                            type="text"
                            placeholder=""
                            {...field}
                        />
                    )}
                />
            </div>
        </div>
    );
}