interface detailItemProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
}

export const DetailItem = ({ label, value, icon: Icon }: detailItemProps) => {
  return (
    <div className="flex items-center bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow shadow-sm transition hover:shadow-md">
      <span className="mr-3 text-text/90">
        <Icon size={24} />
      </span>
      <p className="flex flex-col sm:flex-row sm:gap-1">
        <span className="font-semibold text-text">{label}:</span>
        <span className="text-text font-medium break-words">{value}</span>
      </p>
    </div>
  );
};
