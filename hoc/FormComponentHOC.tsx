import useStore from "app-client/store";
import { typeComponentMapping, validAddOptionTypes } from "../utils/constants";
import { IFormItem } from "types";

interface IFormComponentHOC {
  component: IFormItem;
  edit: boolean;
  activeIdx: number;
}

const FormComponentHOC = ({
  component,
  edit,
  activeIdx,
}: IFormComponentHOC) => {
  const { question, type }: IFormItem = component;
  const FormComponent = typeComponentMapping[type];

  const baseProps = {
    edit,
    ...component,
  };

  console.log(question, "question");

  return (
    <>
      <div className="relative flex items-center mb-6 form-hoc">
        <div className="absolute top-2 -left-10 text-primary-black font-medium text-2xl mr-4">
          {activeIdx + 1}.
        </div>
        {edit ? (
          <div key={question}>
            <input
              className="input-base text-black font-medium text-4xl input-here"
              type="text"
              placeholder="Type your question here..."
              name="asdsa"
              defaultValue={question}
            />
          </div>
        ) : (
          <div className="w-full text-black font-medium text-4xl">
            {question}
          </div>
        )}
      </div>
      <FormComponent {...baseProps} />
    </>
  );
};

export default FormComponentHOC;
