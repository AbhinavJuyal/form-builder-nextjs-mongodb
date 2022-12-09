import { IFormComponent } from "types";
import OptionsList from "./OptionsList";

const CheckBox = ({ edit, formItem }: IFormComponent) => {
  return <OptionsList edit={edit} formItem={formItem} inputType="checkbox" />;
};

export default CheckBox;
