import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  selected: string;
  options: string[];
  onSelect: (value: string) => void;
  className?: string;
  defaultPlaceholder?: string;
}

export const Dropdown = ({
  selected,
  options,
  onSelect,
  className = "w-40",
  defaultPlaceholder = "Seleccionar",
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const buttonText =
    selected === defaultPlaceholder ? defaultPlaceholder : selected;

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="cursor-pointer inline-flex justify-between w-full px-4 py-2 text-sm font-medium bg-white text-text border border-foreground/20 rounded-md focus:outline-none"
      >
        <span
          className={
            selected === defaultPlaceholder ? "text-gray-500" : " text-text"
          }
        >
          {buttonText}
        </span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/*Menu desplegable */}
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          <ul role="listbox" className="py-1 text-sm text-text">
            {options.map((opt) => (
              <li
                key={opt}
                role="option"
                aria-selected={opt === selected}
                onClick={() => handleSelect(opt)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
