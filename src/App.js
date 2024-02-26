import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, charge: "아이폰 15 pro", amount: 1500000 },
        { id: 2, charge: "맥북", amount: 3700000 },
        { id: 3, charge: "에어팟", amount: 350000 },
      ],
    };
  }

  handleDelete = (id) => {
    const newExpense = this.state.expenses.filter(
      (expense) => expense.id !== id
    );

    this.setState({ expenses: newExpense });

    console.log(newExpense);
  };

  render() {
    return (
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>
          <div
            style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
          >
            {/* Expense Form */}
            <ExpenseForm />
          </div>

          <div
            style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
          >
            {/* Expense List */}
            <ExpenseList
              initialExpenses={this.state.expenses}
              handleDelete={this.handleDelete}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: "1rem",
            }}
          >
            <p style={{ fontSize: "2rem" }}>총합계 :</p>
          </div>
        </div>
      </main>
    );
  }
}
