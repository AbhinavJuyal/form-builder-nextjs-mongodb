import { typeComponentMapping } from "../utils/constants";
import { IFormItem } from "types";
import { ChangeEvent, ChangeEventHandler } from "react";
import { debounce } from "utils/debounce";
import useStore from "app-client/store";

const FormItemContainer = () => {
  const editFormItem = useStore.use.editFormItem();
  const activeIdx = useStore.use.activeIdx();
  const edit = useStore.use.edit();
  const componentData = useStore.use.componentData();
  const formItem = componentData[activeIdx];
  const { question, type }: IFormItem = formItem;
  const FormComponent = typeComponentMapping[type];

  const baseProps = {
    edit,
    formItem,
  };

  const changeQuestion: ChangeEventHandler<HTMLInputElement> = (e) => {
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      const changes = (activeFormItem: IFormItem): IFormItem => {
        const newFormItem = { ...activeFormItem };
        newFormItem.question = e.target.value;
        return newFormItem;
      };
      editFormItem(changes);
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-start mb-6">
      <div className="relative mb-4">
        <div className="absolute -left-10 text-neutral font-medium text-2xl">
          {activeIdx + 1}.
        </div>
        {edit ? (
          <input
            value={question}
            onChange={changeQuestion}
            className="input-base text-neutral font-medium text-4xl input-here"
            type="text"
            placeholder="Type your question here..."
            name="form-item-question"
          />
        ) : (
          <div className="w-full text-netural-focus font-medium text-4xl">
            {question}
          </div>
        )}
      </div>
      <div className="w-full">
        <FormComponent {...baseProps} />
      </div>
    </div>
  );
};

export default FormItemContainer;
