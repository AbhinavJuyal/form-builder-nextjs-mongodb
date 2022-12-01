import AuthDropDownBtn from "@components/AuthDropDownBtn";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full dashboard-layout py-6">
      <h4>Dashboard</h4>
      <AuthDropDownBtn />
    </div>
  );
};

export default NavBar;
