import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";
import { Slide } from "@components/CreatePage";

import useStore from "app-client/store";
import { debounce } from "utils/debounce";
import { CHECKBOX, RADIO, TEXT } from "utils/constants";

import { IFormItem } from "@types";
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
          value: "op1",
          name: "E20yWbqxaeOLF5de1yPRB",
        },
        {
          id: "DFyO9sp-24tfRjUNsMKMo",
          value: "op2",
          name: "E20yWbqxaeOLF5de1yPRB",
        },
        {
          id: "CK2tIFpoaf9W5HudANtB8",
          value: "op3",
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
          value: "op1",
          name: "5c2Er97XuzTjlpfSazR46",
        },
        {
          id: "LQkEpYF_qwoKm1h6m3MEE",
          value: "op2`",
          name: "zFJ-0m6vVFdY4zILLIRPj",
        },
        {
          id: "w7iB0_guI3X7Jyn22ar0l",
          value: "op3",
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

const parseComponentData = (componentData: IFormItem[]) =>
  componentData.map((item) => {
    const { type, question, options } = item;
    if (type === CHECKBOX || type === RADIO) {
      if (!options) {
        console.error("Form Submit - options is undefined");
        return;
      }
      const checkedOptions = options.filter((option) => option.checked);
      const values = checkedOptions?.map((option) => option.value);
      return { type, question, values };
    }
    if (type === TEXT) {
      const { value } = item;
      return { type, question, value };
    }
  });

const changeFormState = (
  prev: IFormItem,
  e: EventTarget & HTMLFormElement
): IFormItem => {
  const { value, id } = e;
  const { type } = prev;
  const temp = { ...prev };

  if (type === CHECKBOX || type === RADIO) {
    const { options } = prev;
    const { checked } = e;
    let newOptions = [];
    if (!options) return temp;
    newOptions =
      type === RADIO
        ? [...options].map((option) => ({
            ...option,
            checked: false,
          }))
        : [...options];
    const optionIdx = newOptions.findIndex((option) => option.id === id);
    const newOptionState = { ...newOptions[optionIdx] };
    newOptionState.checked = checked;
    newOptions[optionIdx] = newOptionState;
    temp.options = newOptions;
  }
  if (type === TEXT) {
    temp.value = value;
  }
  return temp;
};

const Form = () => {
  const componentData = useStore.use.componentData();
  const activeIdx = useStore.use.activeIdx();
  const changeActiveIdx = useStore.use.changeActiveIdx();
  const editFormItem = useStore.use.editFormItem();
  const edit = useStore.use.edit();

  const changeForm: ChangeEventHandler<HTMLFormElement> = debounce((e) =>
    editFormItem((activeFormItem) => changeFormState(activeFormItem, e.target))
  );

  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const parsedData = parseComponentData(componentData);
    console.log("Form Submitted", parsedData);
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
