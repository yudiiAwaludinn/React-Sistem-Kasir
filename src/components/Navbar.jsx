function Navbar() {
    return (
        <nav className="bg-blue-400 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white text-xl font-semibold bg-white w-28 p-2 rounded-lg" >
                        <h3 className="text-blue-400 text-center">TokoKu</h3>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className=" text-black border border-gray-600 rounded py-1 px-3 pl-8 w-64"
                        />
                    </div>
                    
                    <ul className="hidden md:flex space-x-4">
                        <li>
                            <a href="#" class="text-white hover:text-gray-300">Home</a>
                        </li>
                        <li>
                            <a href="#" class="text-white hover:text-gray-300">About</a>
                        </li>
                        <li>
                            <a href="#" class="text-white hover:text-gray-300">Contact</a>
                        </li>
                    </ul>
                    <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <img class="w-8 h-8 rounded-full" src="./red.jpg" alt="user photo" />
      </button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;