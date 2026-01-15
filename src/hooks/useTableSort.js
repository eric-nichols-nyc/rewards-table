import { useState, useMemo } from "react";

/**
 * Custom hook for managing table sorting state and logic
 */
export function useTableSort(data, months = []) {
  const [sortedColId, setSortedColId] = useState(null);
  const [direction, setDirection] = useState('ASC');

  // Sort the data based on current sort column and direction
  const sortedData = useMemo(() => {
    // Handle null/undefined data
    if (!data) return [];
    // If no sort is active, return original data
    if (!sortedColId) return data;

    // Create a copy to avoid mutating the original array
    const sorted = [...data];

    sorted.sort((a, b) => {
      let aValue, bValue;

      // Determine the value to compare based on column type
      if (sortedColId === 'customerName') {
        // String comparison for customer names
        aValue = a.customerName.toLowerCase();
        bValue = b.customerName.toLowerCase();
      } else if (sortedColId === 'total') {
        // Number comparison for total points
        aValue = a.total;
        bValue = b.total;
      } else {
        // Month column - find the index of this month in the months array
        const monthIndex = months.indexOf(sortedColId);
        if (monthIndex === -1) return 0; // If month not found, don't sort
        aValue = a.months[monthIndex] || 0;
        bValue = b.months[monthIndex] || 0;
      }

      // Compare values
      if (aValue < bValue) return direction === 'ASC' ? -1 : 1;
      if (aValue > bValue) return direction === 'ASC' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, sortedColId, direction, months]);

  // Handler function to update sort when column header is clicked
  const handleSort = (column) => {
    if (sortedColId === column) {
      // Toggle direction if clicking same column
      setDirection(prev => prev === 'ASC' ? 'DESC' : 'ASC');
    } else {
      // Set new column and reset to ascending
      setSortedColId(column);
      setDirection('ASC');
    }
  };

  return {
    sortedData,
    handleSort,
  };
}

