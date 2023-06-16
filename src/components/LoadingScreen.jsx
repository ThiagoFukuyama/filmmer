import { LuLoader2 } from "react-icons/lu";

const LoadingScreen = () => {
    return (
        <div className="bg-dark-gray-200 absolute inset-0 flex justify-center z-10">
            <LuLoader2 color="#DD4849" className="animate-spin" size={40} />
        </div>
    );
};

export default LoadingScreen;
