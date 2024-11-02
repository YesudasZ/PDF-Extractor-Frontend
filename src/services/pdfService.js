export const uploadPdf = async (file) => {
  const formData = new FormData();
  formData.append("pdf", file);
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/uploadPdf`, {
    method: "POST",
    withCredentials: true,
    body: formData,
  });

  if (!response.ok) throw new Error("Upload failed");
  return response.json();
};

export const extractPages = async (pdfId, selectedPages) => {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/extract/${pdfId}`, {
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pages: selectedPages }),
    });
  
    if (!response.ok) throw new Error("Extraction failed");
    return response.blob();
  };
  
  export const getPdf = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/${id}`, {
      method: "GET",
      withCredentials: true,
    });
  
    if (!response.ok) throw new Error("Failed to retrieve PDF file");
    return response.json();
  };
  