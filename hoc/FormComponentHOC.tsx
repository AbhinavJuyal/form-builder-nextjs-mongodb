import { typeComponentMapping } from "../utils/constants";
import { IFormItem } from "types";

interface IFormComponentHOC {
  component: IFormItem;
  edit: boolean;
}

const FormComponentHOC = ({ component, edit }: IFormComponentHOC) => {
  const { question, options, type }: IFormItem = component;
  const FormComponent = typeComponentMapping[type];
  const baseProps = {
    edit,
    ...component,
  };

  return (
    <>
      <div>
        {edit ? (
          <input
            className="input-base font-bold text-3xl mb-6"
            type="text"
            placeholder="Type your question here???"
            name="question"
            defaultValue={question}
          />
        ) : (
          <div className="">{question}</div>
        )}
      </div>
      <FormComponent {...baseProps} />
    </>
  );
};

export default FormComponentHOC;
