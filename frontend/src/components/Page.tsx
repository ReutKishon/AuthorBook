const Page = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="h-screen flex flex-col items-center justify-start p-4 gap-4 w-full md:w-2/3 m-auto">
      <h2 className="text-3xl font-bold text-white text-center w-full">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Page;
