        "use client";
    import { motion, AnimatePresence } from "framer-motion";

    type Props = {
    isOpen: boolean;
    programName: string;
    actionType: "inscribir" | "cancelar";
    onClose: () => void;
    };

    export default function Modal({ isOpen, programName, actionType, onClose }: Props) {
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { scale: 0.8, y: 50, opacity: 0 },
        visible: { 
        scale: 1, 
        y: 0, 
        opacity: 1,
        transition: { 
            type: "spring" as const, 
            stiffness: 100,
            damping: 15
        }
        },
        exit: { scale: 0.9, opacity: 0 }
    };

    const title = actionType === "inscribir" 
        ? "¡Inscripción Exitosa!" 
        : "¡Cancelación Exitosa!";
        
    const message = actionType === "inscribir"
        ? `Te has inscrito en ${programName}`
        : `Has cancelado tu inscripción en ${programName}`;

    const buttonText = actionType === "inscribir" ? "Cerrar" : "Entendido";

    return (
        <AnimatePresence>
        {isOpen && (
            <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white p-6 rounded-lg max-w-sm w-full mx-4 shadow-xl"
            >
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p>
                <span className="font-semibold text-blue-600">{message}</span>
                </p>
                <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className={`mt-4 w-full py-2 rounded transition-colors ${
                    actionType === "inscribir" 
                    ? "bg-blue-500 hover:bg-blue-600 text-white" 
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
                >
                {buttonText}
                </motion.button>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
    }