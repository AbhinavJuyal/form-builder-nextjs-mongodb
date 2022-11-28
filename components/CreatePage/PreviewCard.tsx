interface IPreviewCard {
  component: IFormItem;
}

const PreviewCard = ({ component }: IPreviewCard) => {
  const { question } = component;
  return (
    <div className="">
      {/* preview */}
      <div className="w-[120px] max-w-[120px] h-20 border-2 border-base-300 rounded-lg mx-auto"></div>
      {/* preview question */}
      <span className="inline-block w-full text-center text-sm font-light text-ellipsis">
        {question}
      </span>
    </div>
  );
};

export default PreviewCard;
