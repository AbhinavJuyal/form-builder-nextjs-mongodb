import FormCardDropDown from "./FormCardDropDown";

const formPreview = {
  title: "My Form",
  preview: "",
};

// height: 238px;
// width: 230px;

const FormCard = () => {
  const { title, preview } = formPreview;
  return (
    <div className="w-full max-w-[230px] bg-white text-black rounded-lg shadow-[0px_4px_24px_#000000;] m-4">
      <div className="w-full h-[200px] flex justify-center items-center border-b-2 border-[#ececec]">
        <div>{title}</div>
      </div>
      <div className="w-full flex justify-between items-center px-4 py-6">
        <div className="text-neutral-content font-medium text-sm">
          No Responses
        </div>
        <FormCardDropDown />
      </div>
    </div>
  );
};

export default FormCard;
