
import { jsPDF } from "jspdf";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  portfolioLink: string;
  statement: string;
}

export const generatePDF = (data: FormData): Blob => {
  const doc = new jsPDF();
  
  // Set background color
  doc.setFillColor(248, 246, 242); // Light cream background
  doc.rect(0, 0, 210, 297, "F");
  
  // Add logo
  const logoWidth = 60;
  const logoHeight = 30;
  const logoX = (doc.internal.pageSize.width - logoWidth) / 2; // Center horizontally
  doc.addImage("/lovable-uploads/06faee44-9a09-4e2d-913a-04f73147f2ce.png", "PNG", logoX, 15, logoWidth, logoHeight);
  
  // Add header
  doc.setFontSize(22);
  doc.setTextColor(10, 10, 40); // Dark navy color
  doc.text("Sutra Design Academy Application", 105, 60, { align: "center" });
  
  // Add decorative element - horizontal line with gradient effect
  const lineY = 65;
  doc.setDrawColor(84, 58, 36); // Gold color
  doc.setLineWidth(0.5);
  doc.line(40, lineY, 170, lineY);
  
  // Add application date with styled label
  doc.setFontSize(10);
  doc.setTextColor(84, 58, 36); // Gold color for label
  doc.text("Application Date:", 20, 75);
  doc.setTextColor(60, 60, 60); // Dark gray for value
  doc.text(`${new Date().toLocaleDateString()}`, 65, 75);
  
  // Add applicant info with styled section header
  doc.setFontSize(16);
  doc.setTextColor(10, 10, 40); // Dark navy
  doc.text("Applicant Information", 20, 90);
  
  // Add decorative element below section header
  doc.setDrawColor(84, 58, 36); // Gold color
  doc.setLineWidth(0.3);
  doc.line(20, 94, 100, 94);
  
  // Display applicant details with styled labels
  doc.setFontSize(11);
  doc.setTextColor(84, 58, 36); // Gold color for labels
  doc.text("Full Name:", 20, 105);
  doc.text("Email:", 20, 115);
  doc.text("Phone:", 20, 125);
  
  doc.setTextColor(60, 60, 60); // Dark gray for values
  doc.setFont("Helvetica", "normal");
  doc.text(data.fullName, 60, 105);
  doc.text(data.email, 60, 115);
  doc.text(data.phone, 60, 125);
  
  // Add portfolio if provided
  if (data.portfolioLink) {
    doc.setTextColor(84, 58, 36); // Gold color for label
    doc.text("Portfolio:", 20, 135);
    doc.setTextColor(60, 60, 60); // Dark gray for value
    doc.text(data.portfolioLink, 60, 135);
  }
  
  // Add statement of interest with styled section header
  doc.setFontSize(16);
  doc.setTextColor(10, 10, 40); // Dark navy
  doc.text("Statement of Interest", 20, 150);
  
  // Add decorative element below section header
  doc.setDrawColor(84, 58, 36); // Gold color
  doc.setLineWidth(0.3);
  doc.line(20, 154, 120, 154);
  
  // Format long text with line breaks
  const statementLines = doc.splitTextToSize(data.statement, 170);
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60); // Dark gray for text
  doc.text(statementLines, 20, 165);
  
  // Add border frame to the page
  doc.setDrawColor(84, 58, 36); // Gold color
  doc.setLineWidth(0.7);
  doc.roundedRect(10, 10, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 20, 3, 3, "S");
  
  // Add footer with social media
  doc.setFontSize(10);
  doc.setTextColor(10, 10, 40); // Dark navy
  doc.text("Connect with us:", 20, 270);
  
  doc.setTextColor(60, 60, 60); // Dark gray
  doc.text("Phone: +977 9804304000", 20, 277);
  doc.text("TikTok: tiktok.com/@sutrabymerina", 20, 284);
  doc.text("Instagram: instagram.com/sutrabymerina", 20, 291);
  
  // Add decorative footer element
  doc.setDrawColor(84, 58, 36); // Gold color
  doc.setLineWidth(0.3);
  doc.line(105, 265, 190, 265);
  doc.text("Where creativity meets craftsmanship", 147, 270, { align: "center" });
  
  return doc.output('blob');
};

// Function to send PDF via WhatsApp
export const sendPdfToWhatsApp = (pdfBlob: Blob, phoneNumbers: string[]) => {
  // Convert blob to data URL for download
  const fileReader = new FileReader();
  
  fileReader.onload = function() {
    // Create a downloadable link
    const a = document.createElement('a');
    a.href = fileReader.result as string;
    a.download = `Sutra_Academy_Application_${new Date().toISOString().split('T')[0]}.pdf`;
    
    // Create WhatsApp links (will open in new tabs)
    phoneNumbers.forEach(number => {
      const cleanNumber = number.replace(/\D/g, '');
      const whatsappUrl = `https://wa.me/${cleanNumber}?text=New application submission from Sutra Design Academy`;
      window.open(whatsappUrl, '_blank');
    });
    
    // Trigger download
    a.click();
  };
  
  fileReader.readAsDataURL(pdfBlob);
};
