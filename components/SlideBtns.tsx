import useStore from "app-client/store";
import { CaretDown, CaretUp } from "phosphor-react";

interface ISlideBtns {
  min: number; // 0
  max: number; // anything
  activeIdx: number;
  changeFn: (activeIdx: number) => void;
}

const SlideBtns = ({ min, max, activeIdx, changeFn }: ISlideBtns) => {
  const nextSlide = () => changeFn(activeIdx + 1);
  const prevSlide = () => changeFn(activeIdx - 1);
  return (
    <div className="absolute right-10 bottom-10 flex items-center">
      <button
        onClick={prevSlide}
        type="button"
        className="dui-btn dui-btn-primary rounded-sm rounded-r-none"
        disabled={activeIdx === min}
      >
        <CaretUp weight="fill" size={22} className="rounded-" />
      </button>
      <div className="w-[1px] h-full bg-primary-content"></div>
      <button
        onClick={nextSlide}
        type="button"
        className="dui-btn dui-btn-primary rounded-sm rounded-l-none"
        disabled={activeIdx === max}
      >
        <CaretDown weight="fill" size={22} />
      </button>
    </div>
  );
};

export default SlideBtns;
