import { IFormComponent } from "types";
import OptionsList from "./OptionsList";

const Radio = ({ edit, options }: IFormComponent) => {
  return <OptionsList edit={edit} options={options} type="radio" />;
};

export default Radio;
