import ContinueWithGoogleBtn from "../components/ContinueWithGoogleBtn";

const Login = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <form className="flex flex-col">
          <div className="mb-4">
            <input
              className="dui-input dui-input-bordered w-full my-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="dui-input dui-input-bordered w-full my-2"
              type="text"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="dui-btn dui-btn-primary">
            Login
          </button>
        </form>
        <div className="dui-divider">or</div>
        <ContinueWithGoogleBtn />
      </div>
    </div>
  );
};

export default Login;
