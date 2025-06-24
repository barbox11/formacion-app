"use client";
import { useState, useEffect } from "react";
import { getPrograms, Program } from "../servicios/api";
import ProgramCard from "../componentes/ProgramCard";
import FilterBar from "../componentes/FilterBar";
import Modal from "../componentes/Modal";

export default function Home() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [actionType, setActionType] = useState<"inscribir" | "cancelar">("inscribir");

  useEffect(() => {
    getPrograms()
      .then((data) => {
        setPrograms(data);
        setFilteredPrograms(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleSearch = (search: string, modality: string) => {
    const filtered = programs.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (modality === "" || p.modality === modality)
    );
    setFilteredPrograms(filtered);
  };

  const handleSubscribe = (id: number, isSubscribed: boolean) => {
    const program = programs.find(p => p.id === id);
    if (program) {
      setSelectedProgram(program.name);
      setActionType(isSubscribed ? "cancelar" : "inscribir");
      setIsModalOpen(true);
    }
  };

  return (
    <main className="p-4 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Programas de Formación</h1>
      
      <FilterBar onSearch={handleSearch} />

      {isLoading ? (
        <div className="text-center py-8">
          <p className="text-lg">Cargando programas...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onSubscribe={handleSubscribe}
            />
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        programName={selectedProgram}
        actionType={actionType}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}