import { useState } from 'react';
import Button from '../components/Button';
import { GoogleSignIn } from '../components/GoogleSignIn';
import { useDispatch, useSelector } from 'react-redux';
import { user_login } from '../store/actions/userActions';
import { Link as Anchor } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const loading = useSelector((store) => store.userReducer.loading);
  const error = useSelector((store) => store.userReducer.error);

  const handleInputChange = (u) => {
    setFormData({
        ...formData,
        [u.target.name]: u.target.value
    })
  };
  
  const handleLogin = async (u) => {
    u.preventDefault();

    try {

      dispatch(user_login({ data: formData }));
      
      setIsLoggedIn(true);
      window.location.href = "/";

    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setIsLoggedIn(false);
  };

  const handleGooglesign = (boolean) => {
  
    setIsLoggedIn(boolean);
    window.location.href = "/";
  };

  return (
    <div className='flex items-center justify-center'>
      {isLoggedIn ? (
        <div className='hidden bg-transparent border-0'>
          
     
        </div>
      ) : (
        <div className='w-fit lg:w-fit lg:h-fit'>
          <h2 as="h2" className="text-lg font-base font-bold mb-2 text-center">
            Sign in
          </h2>
          <form className='h-5/6 mx-auto lg:h-auto lg:w-auto flex flex-wrap flex-col items-start content-center text-base space-y-4 p-4 bg-indigo-50 border-2 border-current'>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-row justify-center mx-auto'>
              <Button
                text='Sign In'
                className='flex flex-row items-center ml-3 button w-fit h-10 group relative focus:outline-none focus:ring'
                onClick={handleLogin}
                disabled={loading} 
              />
            </div>
            <GoogleSignIn handleGooglesign={handleGooglesign}/>
            <p className="mt-4 mb-0 leading-normal text-sm">
              Don&apos;t have an account?{" "}
              <Anchor className="font-bold text-slate-700" to="/signup">
                Sign up
              </Anchor>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignIn;