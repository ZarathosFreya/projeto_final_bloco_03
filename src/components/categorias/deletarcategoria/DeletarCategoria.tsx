/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import Modal from "../../modal/Modal";

function DeletarCategoria() {
    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>();

    const [isOpen, setIsOpen] = useState<boolean>(true); 


    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategorias)
        } catch (error: any) {
            alert('Erro ao buscar a categoria')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
          buscarPorId(id);
        }
    }, [id]);

    async function deletarCategoria() {
        setIsLoading(true);
    
        try {
          await deletar(`/categorias/${id}`);
    
          alert("Categoria apagado com sucesso");

        } catch (error: any) {
            alert('Erro ao deletar a categoria')
        }
    
        setIsLoading(false);
        retornar();
    }
    

    function retornar() {
        setIsOpen(false); 
        navigate("/categorias");
      }

    return (
        <Modal isOpen={isOpen} onClose={retornar}>
            <h1 className="text-4xl text-center my-4">Deletar categoria</h1>
            <p className="text-center font-semibold mb-4">
                Você tem certeza de que deseja apagar categoria a seguir?
            </p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
                Categoria
                </header>
                <p className="p-8 text-3xl bg-slate-200 h-full">{categorias.nome}</p>
                <div className="flex">
                <button
                    className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                    onClick={retornar}
                >
                    Não
                </button>
                <button
                    className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
                    onClick={deletarCategoria}
                >
                    {isLoading ? (
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    />
                    ) : (
                    <span>Sim</span>
                    )}
                </button>
                </div>
            </div>
        </Modal>
    )
}

export default DeletarCategoria;