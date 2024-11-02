import { useState } from "react";
import { uploadPdf, extractPages } from "../services/pdfService";
import { loadPdfPages } from "../utils/pdfUtils";

export const usePdfExtractor = () => {
  const [file, setFile] = useState(null);
  const [uploadedPdfId, setUploadedPdfId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pdfPages, setPdfPages] = useState([]);
  const [selectedPages, setSelectedPages] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setUploadedPdfId(null);
      setPdfPages([]);
      setSelectedPages([]);
      setError("");
      setSuccess("");
    } else {
      setError("Please select a valid PDF file");
      setFile(null);
    }
  };

  const handleCheckboxChange = (pageIndex) => {
    setSelectedPages((prevSelected) => {
      if (prevSelected.includes(pageIndex + 1)) {
        return prevSelected.filter((page) => page !== pageIndex + 1);
      } else {
        return [...prevSelected, pageIndex + 1];
      }
    });
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const { _id, url } = await uploadPdf(file);
      setUploadedPdfId(_id);
      const pages = await loadPdfPages(url);
      setPdfPages(pages);
      setSuccess("PDF uploaded successfully!");
    } catch (err) {
      setError("Failed to upload PDF");
    } finally {
      setLoading(false);
    }
  };

  const handleExtract = async () => {
    if (!uploadedPdfId || selectedPages.length === 0) return;

    setLoading(true);
    try {
      const blob = await extractPages(uploadedPdfId, selectedPages);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "extracted.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setSuccess("PDF extracted successfully!");
    } catch (err) {
      setError("Failed to extract PDF pages");
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
};