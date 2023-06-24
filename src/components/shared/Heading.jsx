const Heading = ({ children, as = "h1", className = "" }) => {
    const Tag = as || "h1";

    return (
        <Tag className={`${className} text-3xl md:text-4xl font-bold`}>
            {children}
        </Tag>
    );
};

export default Heading;
