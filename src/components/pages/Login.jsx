import { Link } from "react-router-dom";
import Mainlayout from "../layout/Main.layout";
function Login() {
    return (
        <Mainlayout showHeader={false}>
        <div>
        <div className="flex">
            <img src="https://blush.design/api/download?shareUri=OsJoFRmWf&w=800&h=800&fm=png" alt="" className="w-2/4 ml-14" />
            <form className="max-w-md mx-auto p-6 mt-24">
                <div className="mb-4  h-72 p-6 border-solid border-2 border-gray rounded">
                    <h4 className="text-blue-500 text-center">TokoKu</h4>
                    <div className="ml-12 mt-12 ">
                    <input type="text" id="username" name="username" className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight mb-4" placeholder="username" />
                    <input type="password" id="password" name="password" className="shadow border rounded w-64 py-2 px-3 text-gray-700 leading-tight mb-2" placeholder="password" />
                    <button type="submit" class="bg-blue-300 hover:bg-blue-700 py-2 px-2 w-64 rounded">
                        Login
                    </button>

                    </div>
                </div>
                    <div className="mb-4 p-4  h-16  border-solid border-2 border-gray rounded" >
                        <p className="">Belum Punya Akun? <Link  to="/register" className="text-blue-500">Register</Link></p>
                    </div>

            </form>
            
        
        </div>
        </div>
        
       </Mainlayout>
    )


}

export default Login;