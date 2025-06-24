    export type Program = {
    id: number;
    name: string;
    modality: "virtual" | "presencial" | "mixta";
    };

    export async function getPrograms(): Promise<Program[]> {
    const res = await fetch("/data/programs.json");
    return res.json();
    }