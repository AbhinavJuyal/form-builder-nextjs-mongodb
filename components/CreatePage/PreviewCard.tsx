import { IFormItem } from "@types";
import useStore from "app-client/store";

interface IPreviewCard {
  component: IFormItem;
  changeIdx: () => void;
}

const PreviewCard = ({ component, changeIdx }: IPreviewCard) => {
  const { question } = component;
  return (
    <div
      className="flex items-center cursor-pointer my-6"
      onClick={() => changeIdx()}
    >
      {/* preview */}
      <div className="w-10 aspect-square border-[1px] border-base-300 rounded-sm"></div>
      {/* preview question */}
      <span className="inline-block w-full text-left text-sm font-medium text-ellipsis overflow-hidden max-w-full whitespace-nowrap mx-4">
        {question}
      </span>
    </div>
  );
};

export default PreviewCard;
