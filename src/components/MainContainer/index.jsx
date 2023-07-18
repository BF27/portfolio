const MainContainer = (props) => {
  return (
    <main className="mb-24 w-full flex justify-center">
      <div className="md:container md:mx-auto mt-4 flex flex-col items-center justify-center">
        {props.children}
      </div>
    </main>
  );
};

export default MainContainer;
