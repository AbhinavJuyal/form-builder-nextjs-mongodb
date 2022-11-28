import { typeComponentMapping, validAddOptionTypes } from "../utils/constants";
import { IFormItem } from "types";

interface IFormComponentHOC {
  component: IFormItem;
  edit: boolean;
  activeComponent: number;
}

const FormComponentHOC = ({
  component,
  edit,
  activeComponent,
}: IFormComponentHOC) => {
  const { question, options, type }: IFormItem = component;
  const FormComponent = typeComponentMapping[type];
  const addOptionBtnReq: boolean = validAddOptionTypes.includes(type);
  const baseProps = {
    edit,
    ...component,
  };

  // needs to be defined afterwards
  const addOption = () => {};

  return (
    <>
      <div className="relative flex items-center mb-6">
        <div className="absolute top-2 -left-10 text-primary-black font-medium text-2xl mr-4">
          {activeComponent + 1}.
        </div>
        {edit ? (
          <input
            className="input-base text-black font-medium text-4xl"
            type="text"
            placeholder="Type your question here..."
            name="question"
            defaultValue={question}
          />
        ) : (
          <div className="w-full text-black font-medium text-4xl">
            {question}
          </div>
        )}
      </div>
      <FormComponent {...baseProps} />
      {edit && addOptionBtnReq && (
        <button
          type="button"
          className="dui-btn capitalize mt-6 py-2"
          onClick={addOption}
        >
          Create Option
        </button>
      )}
    </>
  );
};

export default FormComponentHOC;
