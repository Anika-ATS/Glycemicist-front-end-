import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
// import {storage} from "../../../firebase/firebase.config";
import {storage} from "../../firebase/firebase.config";
async function GetDownloadUrl(file) {
  const storageRef = ref(storage, `profileimages/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  let downloadURL = null;
  let progress = 0;

  uploadTask.on("state_changed", snapshot => {
    // You can handle progress here if needed
    progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("Upload is " + progress + "% done");
  });

  try {
    await uploadTask;
    downloadURL = await getDownloadURL(storageRef);
    console.log(downloadURL);
  } catch (error) {
    console.error("Error uploading file: ", error);
  }
  return {downloadURL, progress};
}

export default GetDownloadUrl;
