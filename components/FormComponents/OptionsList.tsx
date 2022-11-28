import { nanoid } from "nanoid";
import { OptionsType } from "types";
import cls from "classnames";

interface IOptionsList {
  edit: boolean;
  options: OptionsType;
  type: "checkbox" | "radio";
}

const OptionsList = ({ edit, options, type }: IOptionsList) => {
  return (
    <>
      {options.map(({ name, value }) => {
        const inputId = nanoid();
        return (
          <div
            className="flex items-center w-full border p-2 my-2 rounded-lg"
            key={inputId}
          >
            <input
              className={cls(
                "m-1",
                type === "radio" ? "dui-radio" : "dui-checkbox"
              )}
              type={type}
              id={inputId}
              name={name}
            />
            {edit ? (
              <input
                className="input-base text-black text-xl"
                type="text"
                placeholder="Anything that is relevant to the question"
                defaultValue={value}
              />
            ) : (
              <label
                className="input-base text-black text-xl ml-3"
                htmlFor={inputId}
              >
                {value}
              </label>
            )}
          </div>
        );
      })}
    </>
  );
};

export default OptionsList;
