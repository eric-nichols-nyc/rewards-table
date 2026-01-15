# Customer Rewards Program

A React application that calculates and displays reward points earned by customers based on their transaction history over a three-month period.

## Assignment Requirements

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase. A customer receives:
- **2 points** for every dollar spent over $100 in each transaction
- **1 point** for every dollar spent between $50 and $100 in each transaction

**Example:** A $120 purchase = 2×$20 + 1×$50 = 90 points

Given a record of every transaction during a three-month period, calculate the reward points earned for each customer per month and total.

### Requirements Met

✅ **React JS** (no TypeScript)
✅ **Simulated asynchronous API call** to fetch data (3-second delay)
✅ **No Redux** (using React hooks for state management)
✅ **Sample data set** demonstrating the solution
✅ **GitHub repository** with solution

## Features

- Displays customer reward points per month in a table format
- Shows total points across all months for each customer
- Simulates API loading state with animated Vite logo spinner
- Error handling for API failures with user-friendly messages
- Responsive table design with CSS Modules for scoped styling
- Dynamic month calculation based on transaction dates
- Clean separation of concerns (API layer, hooks, utils, components)
- Efficient data processing using React hooks (`useMemo`, `useState`, `useEffect`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── api/
│   └── mockApi.js           # Mock API service for fetching transactions
├── components/
│   ├── rewards-table.jsx    # Main table component displaying customer rewards
│   ├── rewards-table.module.css
│   ├── loader.jsx           # Loading indicator component with spinning logo
│   └── loader.module.css
├── hooks/
│   └── useApi.js            # Custom hook for API data fetching with loading/error states
├── utils/
│   └── rewards.js           # Reward calculation utilities and business logic
├── data/
│   └── transactions.js      # Sample transaction data set
├── App.jsx                  # Main application component (container)
├── App.module.css            # Application-level styles
├── index.css                 # Global styles
└── main.jsx                 # Application entry point
```

## Technologies Used

- **React 19.2.0** - UI library
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **ESLint** - Code linting

## Reward Points Calculation

The application calculates points using the following logic:

- Transactions under $50: **0 points**
- Transactions $50-$100: **1 point per dollar over $50**
- Transactions over $100: **50 points + 2 points per dollar over $100**

## API Simulation

The application uses a mock API service (`api/mockApi.js`) that simulates an asynchronous API call with a 3-second delay. The `useApi` hook manages the API call lifecycle, including loading states, error handling, and data management using React hooks.

## Architecture

The application follows a clean architecture pattern:

- **API Layer** (`api/`): Handles data fetching and API simulation
- **Hooks** (`hooks/`): Custom React hooks for state management and side effects
- **Utils** (`utils/`): Business logic and data transformation functions
- **Components** (`components/`): Presentational React components
- **Data** (`data/`): Sample data sets

This separation ensures maintainability, testability, and scalability.

## License

This project was created as a coding assignment.
