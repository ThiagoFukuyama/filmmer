const MainTitle = ({ children }) => {
    return (
        <div className="flex justify-center items-center mt-12 mb-8">
            <h1 className="text-5xl md:text-6xl uppercase font-bold text-center text-transparent bg-clip-text bg-filmmer-gradient">
                {children}
            </h1>
        </div>
    );
};

export default MainTitle;
