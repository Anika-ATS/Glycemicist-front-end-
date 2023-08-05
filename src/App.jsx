// import React, {useContext, useEffect, useState} from "react";
// import {AuthContext} from "./Providers/AuthProvider";
// import axios from "axios";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// const generatePDF = medi => {
//   // initialize jsPDF
//   const doc = new jsPDF();

//   // define the columns we want and their titles
//   const tableColumn = ["Medicine", "Times"];
//   // define an empty array of rows
//   const tableRows = [];

//   // for each ticket pass all its data into an array
//   medi.forEach(m => {
//     const MedicineData = [m.medicine_name, m.times];
//     // push each tickcet's info into a row
//     tableRows.push(ticketData);
//   });

//   // startY is basically margin-top
//   doc.autoTable(tableColumn, tableRows, {startY: 20});
//   doc.text("Closed tickets within the last one month.", 14, 15);
//   // we define the name of our PDF file.
//   doc.save(`report.pdf`);
// };

// const App = email => {
//   // const {user} = useContext(AuthContext);
//   const [med, setMed] = useState([]);

//   const fetchMedicines = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/medicines/${email}`);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       console.log(data.medicines);
//       setMed(data.medicines);
//       console.log(...med);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       // Handle the error, e.g., show a user-friendly error message
//     }
//   };
//   useEffect(() => {
//     fetchMedicines();
//   }, []);
//   // const med = {
//   //   medicines: [
//   //     {
//   //       name: "Medicine 1",
//   //       times: ["08:00 AM", "01:00 PM", "07:00 PM"],
//   //     },
//   //     {
//   //       name: "Medicine 2",
//   //       times: ["09:30 AM", "04:00 PM"],
//   //     },
//   //     {
//   //       name: "Medicine 3",
//   //       times: ["10:00 AM", "02:30 PM", "09:30 PM"],
//   //     },
//   //     // Add more medicines...
//   //   ],
//   // };
//   return (
//     <div>
//       <h1>User Medicines PDF Report</h1>
//       <div>
//         <div className="container mb-4 mt-4 p-3">
//           <div className="row">
//             <button
//               className="btn btn-primary"
//               onClick={() => generatePDF(med)}
//             >
//               Generate monthly report
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
