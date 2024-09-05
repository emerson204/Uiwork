export default function ContentBg({ children, className }) {
  return (
    <div
      className={`${className} xl:w-[96%] lg:w-[22rem] h-[15rem] xl:mx-0 lg:mx-auto  flex justify-center items-center rounded-md border border-gray-300 dark:border-transparent relative overflow-hidden`}
    >
      {children}
    </div>
  );
}
