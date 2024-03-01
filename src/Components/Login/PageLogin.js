import './styles.css';
import images from '~/assets/images';
export default function PageLogin() {
  return (
    <>
      <div className="container">
        <div className="login-layout">
          <h1 className="my-4 text-xl font-medium text-center leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl">
            Student Login
          </h1>
          <div className="my-2 grid grid-cols-2 justify-evenly">
            <div className="w-80">
              <img src={images.loginLogo} alt="login logo"></img>
            </div>
            <div className="w-full max-w-xs p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@email.com"
                    required=""
                  ></input>
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  ></input>
                </div>
                <div className="flex items-center justify-center">
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    class="w-96 mx-5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    Login
                  </button>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{' '}
                  <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
