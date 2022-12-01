import { DotsThree } from "phosphor-react";

const FormCardDropDown = () => {
  return (
    <div>
      {/* <div className="dui-dropdown">
        <label tabIndex={0} className="m-1">
          <DotsThree size={20} weight="bold" className="cursor-pointer" />
        </label>
        <ul
          tabIndex={0}
          className="dui-dropdown-content dui-menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div> */}
      <DotsThree size={20} weight="bold" className="cursor-pointer" />
    </div>
  );
};

export default FormCardDropDown;
