    type Props = {
    onSearch: (search: string, modality: string) => void;
    };

    export default function FilterBar({ onSearch }: Props) {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
            type="text"
            placeholder="Buscar por nombre..."
            onChange={(e) => onSearch(e.target.value, "")}
            className="border p-2 rounded flex-grow"
        />
        <select
            onChange={(e) => onSearch("", e.target.value)}
            className="border p-2 rounded"
        >
            <option value="">Todas las modalidades</option>
            <option value="virtual">Virtual</option>
            <option value="presencial">Presencial</option>
            <option value="mixta">Mixta</option>
        </select>
        </div>
    );
    }