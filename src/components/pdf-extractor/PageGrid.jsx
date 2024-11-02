import { MaximizeIcon } from "lucide-react";

const PageGrid = ({
  pdfPages,
  selectedPages,
  handleCheckboxChange,
  setPreviewModal,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {pdfPages.map((page, index) => (
        <div key={index} className="relative group">
          <div className="relative border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              src={page}
              alt={`Page ${index + 1}`}
              className="w-full object-cover cursor-pointer"
              onClick={() => setPreviewModal({ isOpen: true, pageIndex: index, imageUrl: page })}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            <input
              type="checkbox"
              className="absolute top-2 right-2 w-4 h-4 accent-indigo-600"
              checked={selectedPages.includes(index + 1)}
              onChange={() => handleCheckboxChange(index)}
            />
            <button
              onClick={() => setPreviewModal({ isOpen: true, pageIndex: index, imageUrl: page })}
              className="absolute top-2 left-2 p-1 bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <MaximizeIcon className="w-4 h-4 text-gray-700" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1 px-2">
              Page {index + 1}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageGrid;