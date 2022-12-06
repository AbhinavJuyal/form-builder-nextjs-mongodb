import { MouseEventHandler, useEffect, useState } from "react";
import { CaretDown } from "phosphor-react";
import { FormComponentTypes } from "@types";
import useStore from "app-client/store";
import { createSelector } from "app-client/selectors";

interface IDropDown {
  label: string;
  list: FormComponentTypes[];
  onChange: (args: any) => void;
}

const DropDown = ({ label, list, onChange }: IDropDown) => {
  const componentData = useStore.use.componentData();
  const activeIdx = useStore.use.activeIdx();
  const { type } = componentData[activeIdx];
  const [selectedVal, setSelectedVal] = useState(type);

  useEffect(() => {
    setSelectedVal(type);
  }, [activeIdx]);

  const handleOnClick: MouseEventHandler<HTMLElement> = (e) => {
    const content = (e.target as HTMLDivElement).textContent;
    setSelectedVal(content);
    onChange(content);
  };
  return (
    <div className="m-">
      <div className="text-base text-white font-medium mb-1">{label}</div>
      <div className="dui-dropdown dui-dropdown-end w-full max-w-md">
        <label
          tabIndex={0}
          className="flex items-center w-full bg-primary-grey text-white px-2 py-2 rounded-lg text-lg font-semibold pl-4 m-1"
        >
          <span className="overflow-hidden w-full whitespace-nowrap text-ellipsis">
            {selectedVal}
          </span>
          <CaretDown size={20} weight="bold" className="ml-auto" />
        </label>
        <ul
          tabIndex={0}
          className="dui-dropdown-content dui-menu p-2 ml-2 shadow bg-base-100 rounded-lg w-min"
          onClick={handleOnClick}
        >
          {list.map((val: FormComponentTypes, idx: number) => (
            <li key={idx}>
              <button type="button" className="whitespace-nowrap text-white">
                {val}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
