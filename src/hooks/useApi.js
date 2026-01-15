import { useState, useEffect } from "react";
import { fetchTransactions } from "../api/mockApi";

export function useApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const transactions = await fetchTransactions();
        setData(transactions);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setError("I'm sorry, There was an error!");
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return {
    data,
    error,
    loading,
  };
}
