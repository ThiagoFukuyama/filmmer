import { LuLoader2 } from "react-icons/lu";

const LoadingScreen = () => {
    return (
        <div className="bg-dark-gray-200 absolute inset-0 flex justify-center z-20">
            <LuLoader2 color="#DD4849" size={40} className="animate-spin" />
        </div>
    );
};

export default LoadingScreen;
