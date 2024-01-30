type LineProps = {
  additionalCSS: string;
};

const Component = ({ additionalCSS }: LineProps) => (
  <div
    className={`mt-5 w-full justify-center self-center border-[1px] ${additionalCSS}`}
  ></div>
);

export default Component;
