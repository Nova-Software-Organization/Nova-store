import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function ModalInviteFriends({ isOpen, setOpenInviteModal }) {

  const handleCloseModal = () => {
    setOpenInviteModal(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur hover:backdrop-blur">
        <div className="bg-white rounded-lg w-[400px] h-[500px] p-10 flex flex-col">
          <div className="self-end cursor-pointer" onClick={handleCloseModal}>
            <AiOutlineClose size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Convide Amigos</h2>
          <div>
            <p>
              Você está convidado para participar de um evento especial!
              <br />
              <strong>Evento:</strong> Apresentação do site
              <br />
              <strong>Data:</strong> 27/10/2023
              <br />
              <strong>Horário:</strong> 19:00 h
              <br />
              <strong>Local:</strong> Universidade Paulista Marquês São Vicente
              <br />
              Junte-se a nós para celebrar este momento único. Clique no link abaixo para saber mais detalhes e confirmar a sua presença:
              <br />
              <strong>Link do evento:</strong> 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
