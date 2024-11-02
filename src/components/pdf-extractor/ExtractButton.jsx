import { Download } from "lucide-react";
import { Loader } from "../ui/Loader";

const ExtractButton = ({ loading, selectedPages, handleExtract }) => {
  return (
    <button
      onClick={handleExtract}
      disabled={loading || selectedPages.length === 0}
      className="w-full mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Download className="w-5 h-5" />
          Extract Selected Pages
        </>
      )}
    </button>
  );
};

export default ExtractButton;
