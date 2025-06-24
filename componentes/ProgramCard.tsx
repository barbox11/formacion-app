        import { Program } from "../servicios/api"; // Adjust the import path as necessary
    import { useState } from "react";

    type Props = {
    program: Program;
    onSubscribe: (id: number, isSubscribed: boolean) => void;
    };

    export default function ProgramCard({ program, onSubscribe }: Props) {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleClick = () => {
        onSubscribe(program.id, !isSubscribed);
        setIsSubscribed(!isSubscribed);
    };

    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
        
        <div className="flex items-center mb-4">
            <span className={`text-xs px-2 py-1 rounded-full ${
            program.modality === "virtual" 
                ? "bg-purple-100 text-purple-800" 
                : program.modality === "presencial" 
                ? "bg-blue-100 text-blue-800" 
                : "bg-green-100 text-green-800"
            }`}>
            {program.modality.toUpperCase()}
            </span>
        </div>

        <div className="mt-auto">
            <button
            onClick={handleClick}
            className={`w-full py-2 px-4 rounded transition-colors duration-300 ${
                isSubscribed
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            >
            {isSubscribed ? "Cancelar inscripción" : "Inscribirse"}
            </button>
        </div>
        </div>
    );
    }