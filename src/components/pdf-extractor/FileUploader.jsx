import { Upload, FileText, PlusIcon } from "lucide-react";
import { Loader } from "../ui/Loader";

const FileUploader = ({ file, loading, handleFileChange, handleUpload }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-indigo-200 border-dashed rounded-xl cursor-pointer bg-indigo-50/50 hover:bg-indigo-100/50 transition-all duration-300">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-12 h-12 mb-4 text-indigo-500" />
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">PDF files only</p>
          </div>
          <input
            type="file"
            className="hidden"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {file && (
        <div className="mt-4 flex items-center gap-3 bg-indigo-50 p-3 rounded-lg">
          <FileText className="w-5 h-5 text-indigo-600" />
          <span className="text-sm text-gray-700">{file.name}</span>
          <button
            onClick={handleUpload}
            disabled={loading}
            className="ml-auto flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? (
              <Loader />
            ) : (
              <>
                <PlusIcon className="w-4 h-4" />
                Upload
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;