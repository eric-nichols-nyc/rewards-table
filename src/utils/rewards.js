
/**
 * Calculates reward points for an array of transaction amounts.
 * Points calculation rules:
 * - Transactions under $50: 0 points
 * - Transactions $50-$100: 1 point per dollar over $50
 * - Transactions over $100: 50 points + 2 points per dollar over $100
 *
 * @param {number[]} transactions - Array of transaction amounts
 * @returns {number} Total reward points for all transactions
 */
export function calcRewards(transactions) {
  return transactions.reduce((sum, t) => {
    if (t < 50) return sum; // No points for transactions under $50
    if (t <= 100) return sum + (t - 50); // 1 point per dollar over $50
    return sum + 50 + (t - 100) * 2; // 50 points + 2 points per dollar over $100
  }, 0);
}

/**
 * Processes transactions and groups them by customer, calculating reward points per month.
 *
 * @param {Array} transactions - Array of transaction objects with properties:
 *   - customerId: string
 *   - customerName: string
 *   - amount: number
 *   - date: string (format: "YYYY-MM-DD")
 * @returns {Array} Array of customer objects with:
 *   - customerName: string
 *   - months: number[] - Array of points earned per month (in chronological order)
 *   - total: number - Total points across all months
 */
export function getCustomersData(transactions) {
  // Extract unique months from all transactions (format: "YYYY-MM")
  const months = [...new Set(transactions.map((t) => t.date.slice(0, 7)))].sort();

  // Group transactions by customerId
  const groupedByCustomer = transactions.reduce((acc, t) => {
    if (!acc[t.customerId]) {
      acc[t.customerId] = [];
    }
    acc[t.customerId].push(t);
    return acc;
  }, {});

  // Transform grouped data into customer summary objects
  return Object.values(groupedByCustomer).map((cust) => {
    // Calculate points for each month by filtering transactions for that month
    const monthValues = months.map(month =>
      calcRewards(
        cust
          .filter(t => t.date.includes(month)) // Get transactions for this month
          .map(t => t.amount) // Extract amounts
      )
    );

    return {
      customerName: cust[0].customerName,
      months: monthValues, // Points earned per month
      total: monthValues.reduce((sum, val) => sum + val, 0) // Sum of all monthly points
    };
  });
}

