import DropDown from "@components/DropDown";
import { FormComponentTypes, IFormItem } from "@types";
import useStore from "app-client/store";
import { formComponentTypes } from "utils/constants";
import { createDefFormItem } from "utils/fns";

const Settings = () => {
  const editFormItem = useStore.use.editFormItem();

  const changeType = (content: FormComponentTypes) => {
    const changes = (activeFormItem: IFormItem): IFormItem => {
      const { question } = activeFormItem;
      const newFormItem = createDefFormItem(content);
      newFormItem.question = question;
      return newFormItem;
    };
    editFormItem(changes);
  };

  const list = Object.values(formComponentTypes);
  return (
    <div className="highlight-bg px-6 py-10">
      <h4 className="text-2xl text-white font-semibold mb-4">Settings</h4>
      <DropDown label="Type" list={list} onChange={changeType} />
    </div>
  );
};

export default Settings;
