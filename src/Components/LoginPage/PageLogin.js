import './styles.css';
import images from '~/assets/images';
export default function PageLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-8 py-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome Back, Student</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-medium text-gray-700">
              Student Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember_me" name="remember_me" className="w-4 h-4 mr-2" />
              <label htmlFor="remember_me" className="text-sm text-gray-700">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-center bg-blue-500 rounded-md text-white font-medium hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
