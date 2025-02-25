/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]>([])


    async function buscarCategorias() {
        try {
            await buscar(`/categorias/`, setCategorias); 
        } catch (error: any) {
            alert('Erro ao buscar temas');
        }
    }

    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])
    
    return (
        <>
        {categorias.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4 ">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categorias.map((categorias) => (
                            <CardCategoria key={categorias.id} categoria={categorias} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategoria;