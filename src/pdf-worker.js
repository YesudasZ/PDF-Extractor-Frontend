import { pdfjs } from 'react-pdf';

const pdfjsVersion = '4.4.168';
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;