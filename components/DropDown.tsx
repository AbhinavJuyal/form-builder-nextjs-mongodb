import { MouseEventHandler, useEffect, useState } from "react";
import { CaretDown } from "phosphor-react";
import { FormComponentTypes } from "@types";
import useStore from "app-client/store";

interface IDropDown {
  list: FormComponentTypes[];
  onChange: (args: any) => void;
}

const DropDown = ({ list, onChange }: IDropDown) => {
  const { componentData, activeIdx } = useStore();
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
    <div className="dui-dropdown w-full max-w-md">
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
        className="w-full dui-dropdown-content dui-menup-2 shadow bg-base-100 rounded-lg p-2"
        onClick={handleOnClick}
      >
        {list.map((val: FormComponentTypes, idx: number) => (
          <div
            key={idx}
            className="text-black whitespace-nowrap text-left p-2 hover:bg-slate-200 rounded-lg"
          >
            {val}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
