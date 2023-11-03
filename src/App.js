import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  { id: 'e1', title: "Car Insurance", amount: 294.67, date: new Date(2023, 9, 1) },
  { id: 'e2', title: "Yard Sale", amount: 194.67, date: new Date(2022, 8, 26) },
  { id: 'e3', title: "Car Maintainance", amount: 494.67, date: new Date(2021, 7, 11) },
  { id: 'e4', title: "Park Date", amount: 94.67, date: new Date(2022, 6, 12) },
];
const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
