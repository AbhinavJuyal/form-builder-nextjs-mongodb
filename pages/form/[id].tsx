import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";
import { Slide } from "@components/CreatePage";

import useStore from "app-client/store";
import { changeFormState, parseFormData } from "utils/fns";

import { ISubmitFormItem } from "@types";
import SlideBtns from "@components/SlideBtns";

const state = {
  title: "Sample Title",
  desc: "",
  componentData: [
    {
      id: "4laZ_PeJHfgk_HA-D9QAj",
      type: "Single Select Radio",
      question: "question1",
      options: [
        {
          id: "RfUDU6tP8INHldtplB4FZ",
          label: "op1",
          name: "E20yWbqxaeOLF5de1yPRB",
        },
        {
          id: "DFyO9sp-24tfRjUNsMKMo",
          label: "op2",
          name: "E20yWbqxaeOLF5de1yPRB",
        },
        {
          id: "CK2tIFpoaf9W5HudANtB8",
          label: "op3",
          name: "E20yWbqxaeOLF5de1yPRB",
        },
      ],
    },
    {
      id: "gHKebDOroUEkyH_XttCGA",
      type: "Multichoice Checkbox",
      question: "question2",
      options: [
        {
          id: "Kqe86HS8DLqd3m2pi2LQO",
          label: "op1",
          name: "5c2Er97XuzTjlpfSazR46",
        },
        {
          id: "LQkEpYF_qwoKm1h6m3MEE",
          label: "op2`",
          name: "zFJ-0m6vVFdY4zILLIRPj",
        },
        {
          id: "w7iB0_guI3X7Jyn22ar0l",
          label: "op3",
          name: "MugZRBnxKNtw2I7oLuIgO",
        },
      ],
    },
    {
      id: "4WJMNNymCG-7GJXjWg5Jb",
      type: "Text",
      question: "question3",
    },
  ],
  activeIdx: 0,
  edit: false,
};

const Form = () => {
  const componentData = useStore.use.componentData();
  const activeIdx = useStore.use.activeIdx();
  const changeActiveIdx = useStore.use.changeActiveIdx();
  const edit = useStore.use.edit();
  const [form, setForm] = useState<ISubmitFormItem[]>(
    parseFormData(componentData)
  );

  const changeForm: ChangeEventHandler<HTMLFormElement> = (e) =>
    setForm((prev: any) => changeFormState(prev, e.target, activeIdx));

  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="h-full bg-primary-content" data-theme="light">
      <form
        className="w-full h-full flex justify-center items-center "
        onChange={changeForm}
        onSubmit={submitForm}
      >
        <div className="w-full max-w-md">
          <Slide />
          {!edit && activeIdx !== componentData.length - 1 && (
            <button
              type="button"
              onClick={() => changeActiveIdx(activeIdx + 1)}
              className="dui-btn dui-btn-primary"
            >
              OK
            </button>
          )}
          {!edit && activeIdx === componentData.length - 1 && (
            <button type="submit" className="dui-btn dui-btn-primary">
              Submit
            </button>
          )}
        </div>
      </form>
      <SlideBtns
        min={0}
        max={componentData.length - 1}
        activeIdx={activeIdx}
        changeFn={(idx) => changeActiveIdx(idx)}
      />
    </div>
  );
};

export default Form;
