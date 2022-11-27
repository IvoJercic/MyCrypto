import { useEffect, useState } from "react";
import axios from "axios";

export default function useCryptoData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      if (data == null) {
        try {
          setLoading(true);
          const response = await axios.get("/api/crypto/getData");
          setData(response.data);
          console.log(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      } else {
        return;
      }
    })();
  }, [data]);

  return { data, error, loading };
}
