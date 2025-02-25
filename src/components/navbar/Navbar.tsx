import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>

                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">
                    <img className="w-[250px]" 
                        src="https://ik.imagekit.io/vp8x0spqk/Generation/logo%20farmacia.png?updatedAt=1740485326140" alt="Logo Fármacia" />
                </Link>
                <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative w-[100vw]">
                            <input type="text" id="simple-search" 
                            className="bg-gray-50 border 
                            border-gray-300 
                            text-gray-900 
                            text-sm rounded-lg 
                            focus:ring-blue-500 
                            focus:border-blue-500 
                            block w-full p-2.5  
                            dark:bg-gray-700 
                            dark:border-gray-600 
                            dark:placeholder-gray-400 
                            dark:text-white 
                            dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" 
                            placeholder="Procurar" required />
                        </div>
                
                    <div className="pt-4 w-full">
                        <nav className="flex justify-center gap-20">
                        <a href="#" className="relative group text-white text-lg">
                        Produtos
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#00ffff] to-[#ff00d6] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <Link to='/categorias' className="relative group text-white text-lg">Categorias<span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#00ffff] to-[#ff00d6] transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to='/cadastrarcategoria' className="relative group text-white text-lg">Cadastrar Categoria <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#00ffff] to-[#ff00d6] transition-all duration-300 group-hover:w-full"></span></Link>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar