import { XIcon, FileText } from "lucide-react";

const ToastMessage = ({ error, success, setError, setSuccess }) => {
  if (!error && !success) return null;

  return (
    <div
      className={`fixed top-5 right-4 p-4 rounded-lg shadow-lg flex items-center gap-3 ${
        error ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
      }`}
    >
      {error ? <XIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
      <p>{error || success}</p>
      <button
        onClick={() => {
          setError("");
          setSuccess("");
        }}
        className="ml-auto"
      >
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ToastMessage;