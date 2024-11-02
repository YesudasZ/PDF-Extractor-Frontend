import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";
import axios from "axios";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const loadPdfPages = async (pdfUrl) => {
  try {
    const pdfData = await axios.get(pdfUrl, { responseType: "arraybuffer" });
    const pdf = await pdfjsLib.getDocument({ data: pdfData.data }).promise;

    const pages = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 0.3 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: context, viewport }).promise;
      pages.push(canvas.toDataURL("image/png"));
    }
    return pages;
  } catch (error) {
    console.error("Error loading PDF:", error);
    throw new Error("Failed to load PDF pages");
  }
};

export const generateHighResPreview = async (file, pageIndex) => {
  try {
    const pdfData = await axios.get(
      file ? URL.createObjectURL(file) : currentImageUrl,
      {
        responseType: "arraybuffer",
      }
    );
    const pdf = await pdfjsLib.getDocument({ data: pdfData.data }).promise;
    const page = await pdf.getPage(pageIndex + 1);
    
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: context, viewport }).promise;
    
    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error("Error loading high-res preview:", error);
    throw new Error("Failed to generate high-res preview");
  }
};