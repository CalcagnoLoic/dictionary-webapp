const Component = () => (
  <label className="relative mx-3 inline-flex cursor-pointer items-center">
    <input type="checkbox" className="peer sr-only" />
    <div className="peer-checked:bg-electricViolet dark:border-scorpion dark:bg-scorpion peer h-6 w-11 rounded-full after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
  </label>
);

export default Component;
