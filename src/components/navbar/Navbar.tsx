import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>

                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">
                    <img src="https://ik.imagekit.io/vp8x0spqk/Generation/logo%20farmacia.png?updatedAt=1740485326140" alt="Logo Fármacia" />
                </Link>
                
                    <div className='flex gap-4'>
                        Categorias
                        Cadastrar Categoria
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar