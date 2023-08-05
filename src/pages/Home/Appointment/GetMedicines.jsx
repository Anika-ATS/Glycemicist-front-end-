import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

import "firebase/storage";
import GetDownloadUrl from "../../SignUp/GetDownload";
import {useState} from "react";

export const generatePDFAndUpload = async email => {
  try {
    // Fetch user medicines using the provided email
    const response = await axios.get(
      `http://localhost:5000/medicines/${email}`
    );
    const med = response.data.medicines;

    const doc = new jsPDF();

    // define the columns we want and their titles
    const tableColumn = ["Medicine", "Times"];
    // define an empty array of rows
    const tableRows = [];

    med.forEach(m => {
      const MedicineData = [m.medicine_name, m.times];
      // push each tickcet's info into a row
      tableRows.push(MedicineData);
    });

    // startY is margin-top
    doc.autoTable(tableColumn, tableRows, {startY: 20});

    // Save the PDF as a Blob
    const pdfBlob = doc.output("blob");

    // Upload the PDF Blob to Firebase and get the download URL
    const {downloadURL, progress} = await GetDownloadUrl(pdfBlob);
    let url;
    if (downloadURL) {
      console.log("Download link: ", downloadURL);
      url = downloadURL;
    }
    console.log("PDF generated and uploaded successfully!");
    return url;
  } catch (error) {
    console.error("Error generating and uploading PDF:", error);
    throw error;
  }
};
const GetMedicines = () => {};

export default GetMedicines;
