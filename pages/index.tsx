"use client";
import { useEffect, useState } from "react";
import { getPrograms, Program } from "../servicios/api";
import ProgramCard from "../componentes/ProgramCard";
import FilterBar from "../componentes/FilterBar";

export default function Home() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([]);

  useEffect(() => {
    getPrograms().then((data) => {
      setPrograms(data);
      setFilteredPrograms(data);
    });
  }, []);

  const handleSearch = (search: string, modality: string) => {
    const filtered = programs.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (modality === "" || p.modality === modality)
    );
    setFilteredPrograms(filtered);
  };

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Programas de Formación</h1>
      <FilterBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPrograms.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
            onSubscribe={(id: number) => {
              // TODO: Implement subscribe logic here
              console.log(`Subscribed to program with id: ${id}`);
            }}
          />
        ))}
      </div>
    </main>
  );
}