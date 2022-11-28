import { nanoid } from "nanoid";
import { OptionsType } from "types";

interface IOptionsList {
  edit: boolean;
  options: OptionsType;
  type: string;
}

const OptionsList = ({ edit, options, type }: IOptionsList) => {
  return (
    <>
      {options.map(({ name, value }) => {
        const inputId = nanoid();
        return (
          <div className="flex" key={inputId}>
            <input
              className="mr-4 daisy-radio"
              type={type}
              id={inputId}
              name={name}
            />
            {edit ? (
              <input
                className="input-base text-xl"
                type="text"
                defaultValue={value}
              />
            ) : (
              <label htmlFor={inputId}>{value}</label>
            )}
          </div>
        );
      })}
    </>
  );
};

export default OptionsList;
