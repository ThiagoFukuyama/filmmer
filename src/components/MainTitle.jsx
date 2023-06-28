const MainTitle = ({ children }) => {
    return (
        <div className="text-center">
            <h1 className="inline-block text-5xl md:text-6xl uppercase font-bold text-transparent bg-clip-text bg-filmmer-gradient mt-12 mb-8">
                {children}
            </h1>
        </div>
    );
};

export default MainTitle;
