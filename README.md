# PDF Page Extractor

A React-based web application that allows users to upload PDF files, view individual pages, and extract selected pages into a new PDF document.

## 🌟 Features

- PDF file upload with drag & drop support
- Page preview with thumbnail grid
- High-resolution page preview modal
- Page selection and extraction
- Responsive design
- Toast notifications for user feedback

## 📁 Project Structure

```
pdf-extractor/
├── public/
│   └── pdf.worker.min.js
├── src/
│   ├── components/
│   │   ├── pdf-extractor/
│   │   │   ├── index.jsx
│   │   │   ├── FileUploader.jsx
│   │   │   ├── PageGrid.jsx
│   │   │   ├── PreviewModal.jsx
│   │   │   ├── ToastMessage.jsx
│   │   │   └── ExtractButton.jsx
│   │   └── ui/
│   │       └── Loader.jsx
│   ├── hooks/
│   │   └── usePdfExtractor.js
│   ├── services/
│   │   └── pdfService.js
│   ├── utils/
│   │   └── pdfUtils.js
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.json
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pdf-extractor.git
cd pdf-extractor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📦 Package Analysis

### Current Dependencies Analysis

#### Required Packages (Keep)
```json
{
  "@headlessui/react": "^2.2.0",     // For modal components
  "@uiball/loaders": "^1.3.1",       // For loading animations
  "axios": "^1.7.7",                 // For HTTP requests
  "lucide-react": "^0.454.0",        // For icons
  "pdfjs-dist": "^3.4.120",          // Core PDF handling
  "react": "^18.3.1",                // Core React
  "react-dom": "^18.3.1",            // Core React DOM
  "react-dropzone": "^14.2.10"       // For drag-and-drop functionality
}
```

#### Development Dependencies (Keep)
```json
{
  "@vitejs/plugin-react": "^4.3.3",   // Required for Vite
  "autoprefixer": "^10.4.20",         // Required for Tailwind
  "postcss": "^8.4.47",               // Required for Tailwind
  "tailwindcss": "^3.4.14",           // For styling
  "vite": "^5.4.10"                   // Build tool
}
```

#### Unnecessary Packages (Can be removed)
1. **MUI Related Packages** (if not using Material-UI elsewhere):
   - "@emotion/react"
   - "@emotion/styled"
   - "@mui/icons-material"
   - "@mui/lab"
   - "@mui/material"

2. **PDF Viewers** (since we're using pdfjs-dist directly):
   - "@react-pdf-viewer/core"
   - "@react-pdf-viewer/default-layout"
   - "react-pdf"

3. **Redux** (if not using state management elsewhere):
   - "@reduxjs/toolkit"
   - "react-redux"

4. **Other**:
   - "react-hot-toast" (using custom toast component)
   - "pdf-lib" (functionality handled by pdfjs-dist)


## 🛠️ Technology Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **PDF.js** - PDF processing
- **Headless UI** - Accessible components
- **Axios** - HTTP client
- **React Dropzone** - File upload

## 📄 API Endpoints

The application expects the following API endpoints:

- `POST /api/pdf/uploadPdf` - Upload PDF file
- `GET /api/pdf/:id` - Get PDF file information
- `POST /api/pdf/extract/:id` - Extract selected pages

## 🧪 Testing

To add testing to the project, you can install Jest and React Testing Library:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
