import { Search } from "lucide-react";
import { Dropdown } from "../../elements/Dropdown";

interface CharacterFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selected: string;
  setSelected: (status: string) => void;
  options: string[];
  handleClearFilters: () => void;
}

export const CharacterFilters = ({
  searchTerm,
  setSearchTerm,
  selected,
  setSelected,
  options,
  handleClearFilters,
}: CharacterFiltersProps) => {
  return (
    <div className="mb-8 flex flex-wrap gap-4 items-center justify-center sm:justify-start">
      {/*Nombre*/}
      <div className="relative sm:w-64">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white pl-10 pr-4 py-2 border rounded-md border-foreground/20 text-sm w-full focus:outline-offset-2 focus:outline-foreground/50"
          name="search"
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="rounded-2xl text-foreground/30 h-4 w-4 " />
        </div>
      </div>

      {/*Dropdown*/}
      <Dropdown
        selected={selected}
        options={options}
        onSelect={setSelected}
        className="w-44"
        defaultPlaceholder="Estado"
      />

      {/*Limpiar */}
      <button
        onClick={handleClearFilters}
        className="px-6 py-2 rounded-lg font-bold cursor-pointer btn-more transition duration-150 ease-in-out"
      >
        Limpiar filtros
      </button>
    </div>
  );
};
