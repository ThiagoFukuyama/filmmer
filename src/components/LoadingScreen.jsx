import { LuLoader2 } from "react-icons/lu";

const LoadingScreen = () => {
    return (
        <div className="bg-dark-gray-200 absolute left-0 right-0 bottom-0 flex justify-center z-10">
            <span className="animate-spin">
                <LuLoader2 color="#DD4849" size={40} />
            </span>
        </div>
    );
};

export default LoadingScreen;
