import React, {useState} from "react";
import {storage} from "../firebase/firebase.config";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

const Test = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [downloadURL, setDownloadURL] = useState("");
  // const handleFileChange = event => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  // };

  // const handleSubmit = async event => {
  //   event.preventDefault();

  //   if (!selectedFile) return;

  //   const storageRef = ref(storage, `uploads/${selectedFile.name}`);

  //   try {
  //     // Upload the file to Firebase Storage
  //     const uploadTask = uploadBytesResumable(storageRef, selectedFile);

  //     // Listen to state changes, errors, and completion of the upload.
  //     uploadTask.on("state_changed", snapshot => {
  //       // You can handle progress here if needed
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //     });

  //     // Wait for the upload to complete
  //     await uploadTask;

  //     // Get the download URL of the uploaded file
  //     const URL = await getDownloadURL(storageRef);
  //     setDownloadURL(URL); //
  //     console.log("Download URL:", URL);
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input type="file" onChange={handleFileChange} />
  //       <button type="submit" className="btn btn-accent">
  //         Upload
  //       </button>
  //     </form>
  //     {downloadURL && (
  //       <div>
  //         <a href={downloadURL} target="_blank" rel="noopener noreferrer">
  //           View PDF
  //         </a>
  //       </div>
  //     )}
  //   </div>
  // );

  const [medicines, setMedicines] = useState([
    {
      medicine_name: "",
      times: [""],
    },
  ]);

  const handleAddMedicine = () => {
    setMedicines([
      ...medicines,
      {
        medicine_name: "",
        times: [""],
      },
    ]);
  };

  const handleAddNewTime = medicineIndex => {
    const updatedMedicines = [...medicines];
    updatedMedicines[medicineIndex].times.push("");
    setMedicines(updatedMedicines);
  };

  const handleRemoveMedicine = medicineIndex => {
    const updatedMedicines = [...medicines];
    updatedMedicines.splice(medicineIndex, 1);
    setMedicines(updatedMedicines);
  };

  const handleRemoveNewTime = (medicineIndex, timeIndex) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[medicineIndex].times.splice(timeIndex, 1);
    setMedicines(updatedMedicines);
  };

  const handleMedicineChange = (e, medicineIndex) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[medicineIndex].medicine_name = e.target.value;
    setMedicines(updatedMedicines);
  };

  const handleTimeChange = (e, medicineIndex, timeIndex) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[medicineIndex].times[timeIndex] = e.target.value;
    setMedicines(updatedMedicines);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Process and submit form data here
    console.log(medicines);
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="mt-5 w-50">
        {medicines.map((medicine, medicineIndex) => (
          <div key={medicineIndex} className="border border-info p-5 my-2">
            <input
              type="text"
              placeholder="Medicine Name"
              value={medicine.medicine_name}
              onChange={e => handleMedicineChange(e, medicineIndex)}
            />
            {medicine.times.map((time, timeIndex) => (
              <div key={timeIndex}>
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={e => handleTimeChange(e, medicineIndex, timeIndex)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveNewTime(medicineIndex, timeIndex)}
                  className="btn btn-sm btn-danger ms-1"
                >
                  Remove Time
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddNewTime(medicineIndex)}
              className="btn btn-sm btn-warning mt-2"
            >
              Add Time
            </button>
            <button
              type="button"
              onClick={() => handleRemoveMedicine(medicineIndex)}
              className="btn btn-sm btn-danger mt-2"
            >
              Remove Medicine
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddMedicine}
          className="btn btn-sm btn-primary mt-4 mb-5"
        >
          Add New Medicine
        </button>
        <button type="submit" className="btn btn-sm btn-success mt-4 ms-2 mb-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
