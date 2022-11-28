import { CheckBox, Radio, Text } from "@components/FormComponents";

export const CHECKBOX = "Multichoice Checkbox";
export const TEXT = "Text";
export const RADIO = "Single Select Radio";

export const formComponentTypes = { CHECKBOX, TEXT, RADIO } as const;

export const validAddOptionTypes = [CHECKBOX, RADIO];

export const typeComponentMapping: Record<string, (props: any) => JSX.Element> =
  {
    [CHECKBOX]: CheckBox,
    [RADIO]: Radio,
    [TEXT]: Text,
  };
