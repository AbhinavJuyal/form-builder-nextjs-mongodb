import { ChangeEventHandler } from "react";
import AuthDropDownBtn from "@components/AuthDropDownBtn";
import useStore from "app-client/store";
import { debounce } from "utils/fns";
import { Eye } from "phosphor-react";

const NavBar = () => {
  const title = useStore.use.title();
  const editFormTitle = useStore.use.editFormTitle();

  const titleChange: ChangeEventHandler<HTMLInputElement> = debounce((e) =>
    editFormTitle(e.target.value)
  );

  return (
    <div className="w-full h-auto flex justify-between bg-neutral-focus px-4 py-4">
      <input
        type="text"
        className="input-base max-w-xs text-primary-content font-semibold text-3xl text-ellipsis"
        value={title}
        onChange={titleChange}
      />
      <div className="flex items-center">
        <Eye
          size={32}
          weight="fill"
          className="hover:text-primary-content mx-2 cursor-pointer"
        />
        <button type="button" className="dui-btn dui-btn-primary mx-4">
          Save
        </button>
        <AuthDropDownBtn />
      </div>
    </div>
  );
};

export default NavBar;
