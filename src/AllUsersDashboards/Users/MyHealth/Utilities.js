import html2canvas from "html2canvas";
import HbARBS from "./HbARBS";
import jsPDF from "jspdf";

// to get the date value as desired format
export const formatDateTime = dateStr => {
  const dateObj = new Date(dateStr);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Adding 1 since getMonth() returns 0-based index
  const day = dateObj.getDate();

  // Formatting the time in 12-hour format without the 'T'
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
    dateObj
  );

  // Combine the date and time parts in the desired format
  const formattedDateTime = `${day}-${month}-${year},
    ${formattedTime}`;
  return formattedDateTime;
};

// fuunction to generate image from chart

// to generate report pdf

// Function to generate the image of a chart
const generateChartImage = async (elementId, chartTitle) => {
  const chart = document.getElementById(elementId);
  if (!chart) {
    throw new Error(`Element with ID "${elementId}" not found.`);
  }

  const canvas = await html2canvas(chart, {
    logging: true,
    letterRender: 1,
    useCORS: true,
  });
  return {title: chartTitle, dataUrl: canvas.toDataURL("img/png")};
};

export const generateReport = async open => {
  const imgwidth = 208;
  const imgheight = (imgwidth * 3) / 4;

  try {
    // Generate images of each chart
    const bpImage = await generateChartImage("bp-chart", "Blood Pressure");
    const blsugarImage = await generateChartImage(
      "blsugar",
      "Blood Sugar Levels"
    );

    // Create a new PDF document
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.setFontSize(18);

    // Add Blood Pressure chart image to the PDF
    pdf.text(bpImage.title, 15, 15);
    pdf.addImage(bpImage.dataUrl, "PNG", 0, 25, imgwidth, imgheight);

    // Add Blood Sugar chart image to the PDF
    pdf.addPage();
    pdf.text(blsugarImage.title, 15, 15);
    pdf.addImage(blsugarImage.dataUrl, "PNG", 0, 25, imgwidth, imgheight);
    pdf.addPage();

    // hb bar graph
    const chartContainer = document.getElementById("Hb");
    chartContainer.style.width = "600px";
    chartContainer.style.height = "600px";

    const canvas = await html2canvas(chartContainer, {
      logging: true,
      letterRender: 1,
      useCORS: true,
    });
    const hbsvgUrl = canvas.toDataURL("image/jpeg");

    const HbimageWidth = 208;
    const HbimageHeight = (canvas.height * HbimageWidth) / canvas.width;

    // rbs chart
    const chartRBS = document.getElementById("rb");
    chartRBS.style.width = "600px";
    chartRBS.style.height = "600px";

    const canvas2 = await html2canvas(chartRBS, {
      logging: true,
      letterRender: 1,
      useCORS: true,
    });
    const RBSsvgUrl = canvas2.toDataURL("image/jpeg");

    const RBSimageWidth = 208;
    const RBSimageHeight = (canvas2.height * RBSimageWidth) / canvas.width;

    pdf.text("Haemoglobin", 15, 15);
    pdf.addImage(hbsvgUrl, "JPEG", 0, 25, HbimageWidth, HbimageHeight);

    pdf.addPage();
    pdf.text("Random Blood Sugar", 15, 15);
    pdf.addImage(RBSsvgUrl, "JPEG", 0, 25, RBSimageWidth, RBSimageHeight);

    // --------------------------------------------------------

    // Save the PDF as a Blob
    const pdfBlob = pdf.output("blob");

    // Create an object URL for the Blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Open a new window to display the PDF
    if (open === "open") {
      const pdfWindow = window.open(pdfUrl);
      if (!pdfWindow) {
        alert(
          "Popup blocked. Please allow popups for this website to view the PDF."
        );
      }
    } else {
      return pdfUrl;
    }
  } catch (error) {
    console.error("Error generating the report:", error.message);
  }
};
