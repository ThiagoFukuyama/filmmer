import { LuLoader2 } from "react-icons/lu";

const LoadingScreen = () => {
    return (
        <div className="bg-dark-gray-100 min-h-screen absolute inset-0 flex justify-center items-center z-10">
            <span className="animate-spin">
                <LuLoader2 color="#DD4849" size={40} />
            </span>
        </div>
    );
};

export default LoadingScreen;
