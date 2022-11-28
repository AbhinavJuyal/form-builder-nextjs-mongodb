import React from "react";
import Preview from "./Preview";
import NavBar from "./NavBar";

interface ILayout {
  title: string;
  componentData: IFormItem[];
}

const Layout = (props: ILayout) => {
  const { title, componentData } = props;
  return (
    <div className="h-full">
      {/* <NavBar title={title} /> */}
      <Preview componentData={componentData} />
    </div>
  );
};

export default Layout;
