const MainTitle = ({ children }) => {
    return (
        <div className="flex justify-center align-middle mt-10">
            <h1 className="text-5xl md:text-6xl uppercase font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ec5d37] from-20% to-[#8d2eb0] p-10">
                {children}
            </h1>
        </div>
    );
};

export default MainTitle;
