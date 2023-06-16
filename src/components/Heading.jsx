const Heading = ({ children, className = "" }) => {
    return (
        <h1 className={`${className} text-3xl md:text-4xl font-bold`}>
            {children}
        </h1>
    );
};

export default Heading;
