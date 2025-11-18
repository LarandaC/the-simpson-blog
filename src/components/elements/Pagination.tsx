import {
  ArrowLeft,
  ArrowLeftFromLine,
  ArrowRight,
  ArrowRightFromLine,
} from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  setPage: (page: number | ((prevPage: number) => number)) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

// Clase base para botones
const buttonClasses =
  "p-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

export const Pagination = ({
  page,
  totalPages,
  hasNextPage,
  setPage,
  handlePrev,
  handleNext,
}: PaginationProps) => {
  const isFirstPage = page === 1;
  const isLastPage = !hasNextPage && page === totalPages;

  return (
    <div className="pt-10 flex justify-center items-center gap-2 sm:gap-4 font-semibold">
      {/* PRIMERA PÁGINA */}
      <button
        onClick={() => setPage(1)}
        disabled={isFirstPage}
        className={`${buttonClasses} bg-gray-100 hover:bg-yellow-300 text-text`}
        aria-label="Ir a la primera página"
      >
        <ArrowLeftFromLine className="h-5 w-5" />
      </button>
      {/*  PÁGINA ANTERIOR */}
      <button
        onClick={handlePrev}
        disabled={isFirstPage}
        className={`${buttonClasses} bg-yellow-400 hover:bg-yellow-500 text-text shadow-md`}
        aria-label="Página anterior"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      {/* ACTUAL */}
      <span className="text-md sm:text-lg px-4 px-2 bg-transparent text-text font-luckiest-guy tracking-wider min-w-[120px] text-center">
        Pág. {page} / {totalPages}
      </span>
      {/* PÁGINA SIGUIENTE */}
      <button
        onClick={handleNext}
        disabled={!hasNextPage} // Usamos hasNextPage para determinar el límite de avanzar
        className={`${buttonClasses} bg-yellow-400 hover:bg-yellow-500 text-text shadow-md`}
        aria-label="Página siguiente"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
      {/* IR A LA ÚLTIMA PÁGINA */}
      <button
        onClick={() => setPage(totalPages)}
        disabled={isLastPage}
        className={`${buttonClasses} bg-gray-100 hover:bg-yellow-300 text-text`}
        aria-label="Ir a la última página"
      >
        <ArrowRightFromLine className="h-5 w-5" />
      </button>
    </div>
  );
};
