export default function ButtonSend( { isSubmitting, text } ) {
    return (
        <>
          <button
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold p-4 rounded-md w-1/2 border-none hover:scale-105 duration-100 w-[200px]"
                type="submit"
                disabled={isSubmitting}
                >
                {isSubmitting ? 'Enviando...' : text}
            </button>
        </>
    )
}