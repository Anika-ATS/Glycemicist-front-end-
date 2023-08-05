import {useEffect, useState} from "react";

const useDiagnosticData = () => {
  const [DiagnosticData, setDiagnosticData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/diagnosticData.json")
      .then(res => res.json())
      .then(data => {
        setDiagnosticData(data);
        setLoading(false);
      })

      .catch(error => console.log(error));
  }, []);
  return [DiagnosticData, loading];
};

export default useDiagnosticData;
