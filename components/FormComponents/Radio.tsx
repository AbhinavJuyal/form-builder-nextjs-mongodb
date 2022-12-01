import { IFormComponent } from "types";
import OptionsList from "./OptionsList";

const Radio = ({ edit, options }: IFormComponent) => {
  return <OptionsList edit={edit} inputType="radio" />;
};

export default Radio;
