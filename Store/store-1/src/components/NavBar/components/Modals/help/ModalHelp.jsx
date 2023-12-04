import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function ModalHelp({ isOpen, setOpenHelpModal }) {
    
    const handleCloseModal = () => {
        setOpenHelpModal(false);
    };
  
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 p-10 flex items-center justify-center backdrop-blur hover:backdrop-blur py-10">
            <div className="bg-white rounded-lg w-[400px] h-[700px] p-10 justify-center flex flex-col">
                <div className="self-end cursor-pointer " onClick={handleCloseModal}>
                    <AiOutlineClose size={24} />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-orange-600">Ajuda</h2>
                <div>
                    <p className="font-bold">Dúvidas Frequentes</p>
                </div>
                <div className='mt-4'>
                    <ul>
                        <li className='font-bold hover:text-blue-600 cursor-pointer'>
                            <a href="[Inserir link da página de devoluções]">Como faço para devolver um item?</a>
                        </li>
                        <li className='font-bold hover:text-blue-600 cursor-pointer'>
                            <a href="[Inserir link da página de custo de entrega]">Quanto custa a entrega?</a>
                        </li>
                    </ul>
                </div>
                <div className='mt-4 text-justify'>
                    <p>
                        Precisa de Ajuda? Nossa equipe de suporte está aqui para te ajudar! Se você tiver alguma dúvida, problema ou precisar de assistência, não hesite em entrar em contato conosco.

                        **Horário de Atendimento:**
                        - Segunda a Sexta: 08:00h até 18:00
                        - Sábado e Domingo: 18:00 até 10:00h

                        **Opções de Contato:**
                        - Chat Ao Vivo: Clique no ícone do chat no canto inferior direito desta página para falar com um representante agora mesmo.
                        - E-mail: Envie-nos um e-mail para sacDelivery.com.br e responderemos o mais rápido possível.
                        - Telefone: Ligue para o nosso suporte no 11-98XX-XXXX para assistência imediata.

                        Estamos dedicados a proporcionar a melhor experiência para você e estamos à disposição para resolver qualquer dúvida ou preocupação que você possa ter.

                        Obrigado por escolher Delivery! Sua satisfação é a nossa prioridade.
                    </p>
                </div>
            </div>
        </div>
    )
}
