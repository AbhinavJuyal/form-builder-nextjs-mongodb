import React from "react";
import { GoogleLogo } from "phosphor-react";

const ContinueWithGoogleBtn = () => {
  return (
    <button
      type="button"
      className="dui-btn dui-btn-outline dui-btn-primary w-full rounded-full"
    >
      <div className="flex items-center">
        <GoogleLogo size={32} className="mr-4" weight="bold" />
        <div className="font-bold leading-none">Continue With Google</div>
      </div>
    </button>
  );
};

export default ContinueWithGoogleBtn;
