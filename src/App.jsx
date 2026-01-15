import { useMemo } from "react";
import { RewardsTable } from "./components/rewards-table";
import {useApi} from './hooks/useApi'
import { Loader } from "./components/loader";
import { Header } from "./components/header";
import { getCustomersData } from "./utils/rewards";

import styles from "./App.module.css";

export default function App() {
  const {data, error, loading} = useApi()

  const customers = useMemo(() => {
    if (!data) return null;
    return getCustomersData(data);
  }, [data]);

  const months = useMemo(() => {
    if (!data) return [];
    return [...new Set(data.map((t) => t.date.slice(0, 7).split('-').reverse().join('-')))].sort();
  }, [data]);

  return (
    <div className={styles.App}>
      <Header />
      {loading && <Loader />}
      {error && <div className={styles.errorMessage}>{error}</div>}
      {customers && !loading && !error && <RewardsTable customers={customers} months={months}/>}
    </div>
  );
}
