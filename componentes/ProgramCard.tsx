    import { Program } from "../servicios/api";

    type Props = {
    program: Program;
    onSubscribe: (id: number) => void;
    };

    export default function ProgramCard({ program, onSubscribe }: Props) {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-blue-800">{program.name}</h3>
        <p className="text-gray-600 mb-2">
            Modalidad: <span className="font-semibold">{program.modality}</span>
        </p>
        <button
            onClick={() => onSubscribe(program.id)}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
            Inscribirse
        </button>
        </div>
    );
    }