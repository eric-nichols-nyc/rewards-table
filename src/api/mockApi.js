import { transactions } from "../data/transactions";

export function fetchTransactions() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(transactions), 3000);
  });
}