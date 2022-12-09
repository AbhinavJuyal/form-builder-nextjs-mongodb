import { IFormComponent } from "types";
import OptionsList from "./OptionsList";

const Radio = ({ edit, formItem }: IFormComponent) => {
  return <OptionsList edit={edit} formItem={formItem} inputType="radio" />;
};

export default Radio;
