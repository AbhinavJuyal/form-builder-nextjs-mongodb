interface ICreatePageNavBar {
  title: string;
}

const NavBar = (props: ICreatePageNavBar) => {
  const { title } = props;
  return (
    <div className="w-full h-auto pl-4 py-4 border-b border-gray-400">
      <h1 className="font-semibold text-xl captialize">{title}</h1>
    </div>
  );
};

export default NavBar;
