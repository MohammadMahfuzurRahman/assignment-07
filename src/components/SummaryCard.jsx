const SummaryCard = ({ title, value }) => {
  return (
    <div className="p-4 rounded-md shadow bg-white flex flex-col items-center gap-4 w-44">
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold">{value}</p>
        <h3 className="text-gray-500 text-sm">{title}</h3>
      </div>
    </div>
  );
};

export default SummaryCard;