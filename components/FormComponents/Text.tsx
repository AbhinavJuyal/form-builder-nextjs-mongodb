import React from "react";
import { IFormComponent } from "types";

const Text = ({ edit, formItem }: IFormComponent) => {
  const { value } = formItem;
  if (!value) {
    console.log("Text Component - Value not Found");
    return;
  }
  return (
    <div>
      <input
        type="text"
        className="input-base text-3xl border-b-2 border-slate-600 pb-2"
        placeholder="Type your answer here..."
        defaultValue={value}
        disabled={edit}
      />
    </div>
  );
};

export default Text;
