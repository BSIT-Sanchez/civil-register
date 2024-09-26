
import { Link } from 'react-router-dom';

const Login = () => {
  
  return (
    <div className="w-full h-screen bg-gradient-to-r from-yellow-200 via-red-500 to-pink-500 flex justify-center items-center">
    <form className="w-96 bg-white shadow-lg rounded">
        <div className="m-5">
            <label className="block text-xl font-bold mb-2">Email</label>
            <input
                name="email"
                type="email"
                className="border-grey-200 border-2 rounded w-full p-2 h-10"
            >

            </input>
        </div>
        <div className="m-5">
            <label className="block text-xl font-bold mb-2">Password</label>
            <input
                name="password"
                type="password"
                className="border-grey-200 border-2 rounded w-full p-2 h-10"
            >

            </input>
        </div>
        <div className="m-5">
            <input type='submit' value='Login'
            className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-10 py-2 rounded text-xl font-bold w-full cursor-pointer"

            />
                
            
        </div>
        <div className="m-5">
            <Link to="/register">
                Don't have an account?
            </Link>
        </div>

    </form>
</div>
  );
};

export default Login;
