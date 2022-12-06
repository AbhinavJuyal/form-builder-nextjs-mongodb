import { ChangeEventHandler } from "react";
import AuthDropDownBtn from "@components/AuthDropDownBtn";
import useStore from "app-client/store";
import { debounce } from "utils/fns";

const NavBar = () => {
  const title = useStore.use.title();
  const editFormTitle = useStore.use.editFormTitle();

  const titleChange: ChangeEventHandler<HTMLInputElement> = debounce((e) =>
    editFormTitle(e.target.value)
  );

  return (
    <div className="w-full h-auto flex justify-between bg-neutral-focus pl-4 py-4">
      <input
        type="text"
        className="input-base max-w-xs text-primary-content font-semibold text-3xl text-ellipsis"
        defaultValue={title}
        onChange={titleChange}
      />
      <AuthDropDownBtn />
    </div>
  );
};

export default NavBar;
