import EmailAndPassAuth from "@components/EmailAndPassAuth";
import ContinueWithGoogleBtn from "../components/ContinueWithGoogleBtn";

const Register = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2">Register</h1>
        <EmailAndPassAuth />
        <div className="dui-divider">or</div>
        <ContinueWithGoogleBtn />
      </div>
    </div>
  );
};

export default Register;
