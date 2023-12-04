import { Controller } from "react-hook-form";

export default function InputDate( {control} ) {
    return (
        <>
        <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <input
                {...field}
                type="text"
                placeholder="Digite seu nome"
                className="mt-4 outline-none rounded-md p-3 text-black outline-orange-600"
            />
        )}
        />
        <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <input
                {...field}
                type="text"
                placeholder="Digite seu Telefone"
                className="mt-4 outline-none rounded-md p-3 text-black outline-orange-600"
            />
            )}
        />
        <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <input
                {...field}
                type="email"
                placeholder="Digite seu Email"
                className="mt-4 outline-none rounded-md p-3 text-black outline-orange-600"
            />
            )}
            />
        </>
    );
}