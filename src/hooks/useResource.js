import { useEffect, useState } from "react";

export default function useResource(...resourceIdentifiers) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!resourceIdentifiers.every(id => id)) return;

      try {
        const response = await fetch(`/api/2014/${resourceIdentifiers.join('/')}`);

        if (!response.ok) {
          const error = new Error(`Error fetching resource: ${response.statusText}`);
          error.status = response.status;
          throw error;
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [JSON.stringify(resourceIdentifiers)]);

  return { data, error, loading };
}