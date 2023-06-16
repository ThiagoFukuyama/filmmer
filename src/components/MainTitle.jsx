const MainTitle = ({ children }) => {
    return (
        <div className="flex justify-center items-center sm:mt-8">
            <h1 className="text-5xl md:text-6xl uppercase font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#EC5D37] from-20% to-[#8D2EB0] p-10">
                {children}
            </h1>
        </div>
    );
};

export default MainTitle;
