import {
  ArrowLeft,
  ArrowLeftFromLine,
  ArrowRight,
  ArrowRightFromLine,
} from "lucide-react";

interface CharacterPaginationProps {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  setPage: (page: number | ((prevPage: number) => number)) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

export const CharacterPagination = ({
  page,
  totalPages,
  hasNextPage,
  setPage,
  handlePrev,
  handleNext,
}: CharacterPaginationProps) => {
  const isFirstPage = page === 1;
  const isLastPage = !hasNextPage || page === totalPages;

  return (
    <div className="pt-8 flex justify-center items-center gap-4">
      <button
        onClick={() => setPage(1)}
        disabled={isFirstPage}
        className="p-2 sm:px-4 sm:py-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-opacity"
        aria-label="Ir a la primera página"
      >
        <ArrowLeftFromLine className="h-5 w-5 text-text" />
      </button>
      <button
        onClick={handlePrev}
        disabled={isFirstPage}
        className="p-2 sm:px-4 sm:py-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-opacity"
        aria-label="Página anterior"
      >
        <ArrowLeft className="h-5 w-5 text-text" />
      </button>

      <span className="text-sm text-text">
        Página {page} de {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={isLastPage}
        className="p-2 sm:px-4 sm:py-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-opacity"
        aria-label="Página siguiente"
      >
        <ArrowRight className="h-5 w-5 text-text" />
      </button>

      <button
        onClick={() => setPage(totalPages)}
        disabled={isLastPage}
        className="p-2 sm:px-4 sm:py-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-opacity"
        aria-label="Ir a la última página"
      >
        <ArrowRightFromLine className="h-5 w-5 text-text" />
      </button>
    </div>
  );
};
