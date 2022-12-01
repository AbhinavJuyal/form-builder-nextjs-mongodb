import useStore from "app-client/store";
import {
  RADIO,
  typeComponentMapping,
  validAddOptionTypes,
} from "../utils/constants";
import { containsKey, optionsTemp } from "../utils/fns";
import { IFormItem, OptionsType } from "types";

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
  const { editFormItem } = useStore();
  const { question, options, type }: IFormItem = component;
  const FormComponent = typeComponentMapping[type];
  const addOptionBtnReq: boolean = validAddOptionTypes.includes(type);
  const baseProps = {
    edit,
    ...component,
  };

  // needs to be defined afterwards
  const addOption = () => {
    if (
      !validAddOptionTypes.includes(type) &&
      containsKey(component, "options")
    )
      return;
    const newOptions = [...(component.options as OptionsType)];
    if ((options as OptionsType).length === 0) newOptions.push(optionsTemp());
    else if (type === RADIO) newOptions.push(optionsTemp(newOptions[0].name));
    editFormItem({
      ...component,
      options: newOptions,
    });
  };

  return (
    <>
      <div className="relative flex items-center mb-6">
        <div className="absolute top-2 -left-10 text-primary-black font-medium text-2xl mr-4">
          {activeIdx + 1}.
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
    </>
  );
};

export default FormComponentHOC;
