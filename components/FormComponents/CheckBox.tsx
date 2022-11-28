import { IFormComponent } from "types";
import OptionsList from "./OptionsList";

const CheckBox = ({ edit, options }: IFormComponent) => {
  return <OptionsList edit={edit} options={options} type="checkbox" />;
};

export default CheckBox;
