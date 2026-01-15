import styles from "./rewards-table.module.css";
import { useTableSort } from "../hooks/useTableSort";

const CustomerRow = ({customer, months}) => {
  return (
    <tr>
      <td className={styles.customerName}>{customer.customerName}</td>
      {customer.months.map((points, index) => (
        <td key={months[index]}>{points}</td>
      ))}
      <td>{customer.total}</td>
    </tr>
  );
}

export const RewardsTable = ({customers, months}) => {
  const {sortedData, handleSort} = useTableSort(customers, months);
  return (
    <div className={styles.tableContainer}>
      <table className={styles.rewardsTable}>
        <thead>
          <tr>
            <th onClick={() => handleSort('customerName')}>Customer</th>
            {months.map((item) => (
              <th key={item} onClick={() => handleSort(item)}>{item}</th>
            ))}
            <th onClick={() => handleSort('total')}>Total points</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((cust) => (
            <CustomerRow key={cust.customerName} customer={cust} months={months} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
