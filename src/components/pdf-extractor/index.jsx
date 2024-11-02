import { useState } from "react";
import { ScissorsIcon } from "lucide-react";
import FileUploader from "./FileUploader";
import PageGrid from "./PageGrid";
import PreviewModal from "./PreviewModal";
import ToastMessage from "./ToastMessage";
import ExtractButton from "./ExtractButton";
import { usePdfExtractor } from "../../hooks/usePdfExtractor";

const PdfExtractor = () => {
  const {
    file,
    loading,
    error,
    success,
    pdfPages,
    selectedPages,
    handleFileChange,
    handleUpload,
    handleExtract,
    handleCheckboxChange,
    setError,
    setSuccess,
  } = usePdfExtractor();

  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    pageIndex: null,
    imageUrl: null,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <ScissorsIcon className="w-8 h-8 mr-3 text-indigo-600" />
            PDF Page Extractor
          </h1>

          <FileUploader
            file={file}
            loading={loading}
            handleFileChange={handleFileChange}
            handleUpload={handleUpload}
          />

          {pdfPages.length > 0 && (
            <>
              <PageGrid
                pdfPages={pdfPages}
                selectedPages={selectedPages}
                handleCheckboxChange={handleCheckboxChange}
                setPreviewModal={setPreviewModal}
              />
              <ExtractButton
                loading={loading}
                selectedPages={selectedPages}
                handleExtract={handleExtract}
              />
            </>
          )}
        </div>

        <ToastMessage
          error={error}
          success={success}
          setError={setError}
          setSuccess={setSuccess}
        />

        <PreviewModal
          previewModal={previewModal}
          setPreviewModal={setPreviewModal}
        />
      </div>
    </div>
  );
};

export default PdfExtractor;