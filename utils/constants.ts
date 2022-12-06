import { CheckBox, Radio, Text } from "@components/FormComponents";
import { IFormItem, IOption } from "@types";

export const CHECKBOX = "Multichoice Checkbox";
export const TEXT = "Text";
export const RADIO = "Single Select Radio";

export const formComponentTypes: Record<string, string> = {
  CHECKBOX,
  TEXT,
  RADIO,
} as const;

export const validAddOptionTypes = [CHECKBOX, RADIO];

export const typeComponentMapping: Record<string, (props: any) => JSX.Element> =
  {
    [CHECKBOX]: CheckBox,
    [RADIO]: Radio,
    [TEXT]: Text,
  } as const;

export const formItemTemp: IFormItem = {
  id: "",
  type: "",
  question: "Nice to meet you!",
  options: [],
};

export const optionTemp: Omit<IOption, "id"> = {
  name: "",
  label: "",
} as const;
