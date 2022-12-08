const userData = {
  firstName: "John",
  lastName: "Doe",
  img: "",
  email: "john.doe@gmail.com",
  token: "iufhjeowsfhjeoisj",
};

const extractData = (userData: any) => {
  const { firstName, lastName, email } = userData;
  const firstOne = firstName.split("")[0];
  const lastOne = lastName.split("")[0];
  return {
    initials: String(firstOne + lastOne).toUpperCase(),
    fullName: String(firstName + " " + lastName),
    email,
  };
};

const UserProfileAvatar = () => {
  const { initials } = extractData(userData);
  return (
    <div className="flex justify-center items-center w-9 aspect-square text-primary-content bg-[url(https://d1llvcsapfiksz.cloudfront.net/vendors/moscilate/moscillate-granular-textures/images/granulartextures_desktop.jpg)] bg-[cover] bg-[center_center] rounded-full m-2">
      <div className="text-base font-semibold">{initials}</div>
    </div>
  );
};

const FullUserProfileAvatar = () => {
  const { fullName, email } = extractData(userData);
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div>
        <UserProfileAvatar />
      </div>
      <div className="text-primary-content">
        <div className="text-base font-medium">{fullName}</div>
        <div className="text-base">{email}</div>
      </div>
    </div>
  );
};

const AuthDropDownBtn = () => {
  return (
    <div className="dui-dropdown dui-dropdown-bottom dui-dropdown-end bg-transparent no-animation">
      <label tabIndex={0} className="cursor-pointer">
        <UserProfileAvatar />
      </label>
      <ul
        tabIndex={0}
        className="dui-dropdown-content dui-menu p-2 shadow bg-base-100 rounded-box"
      >
        <li className="">
          <FullUserProfileAvatar />
        </li>
        <li className="">
          <div className="text-base text-error font-semibold">Log Out</div>
        </li>
      </ul>
    </div>
  );
};

export default AuthDropDownBtn;
