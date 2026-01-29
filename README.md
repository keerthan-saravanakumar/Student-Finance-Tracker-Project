# **💸 Student Finance Tracker**

A simple and responsive finance tracking web application built using **HTML, CSS, and JavaScript**. This project is designed specifically to help students manage their budgets, track income and expenses, and visualize their spending habits directly in the browser.

---

**## ✨ Features**

* **Automatic Balance Update:** Real-time calculation of total income, total expenses, and current balance.
* **Comprehensive Tracking:** Add transactions with specific details including amount, category, date, and type.
* **Filtering Options:** Easily toggle views between "All" transactions, "Income" only, or "Expenses" only.
* **Delete Functionality:** Remove individual records from your history with a single click.
* **Data Persistence:** Integrated with `localStorage` to ensure data remains saved even after refreshing the page or closing the browser.
* **Visual Indicators:** Instant recognition of financial flow with color-coded borders (Green for income, Red for expenses).
* **Responsive Design:** Optimized layout for seamless use on both desktop and mobile screens.

---

**## 🚀 Getting Started**

**### Prerequisites**
Any modern web browser (e.g., Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).

**### Installation**
1. Download or clone the project files to your local machine.
2. Ensure your folder structure matches the following:
   ```text
   ├── index.html
   ├── Project.css
   └── Project.js

   Open index.html in your browser to launch the application.

## 🛠️ Usage

Enter Details: Input the Amount, Type (Income/Expense), Category, and Date in the provided form.

Add Transaction: Click the Add button to save the record. If any fields are empty, a validation alert will appear.

View Totals: The balance and totals will update automatically at the top of the dashboard.

Filter Records: Use the navigation buttons (All / Income / Expense) to sort your transaction history.

Manage History: Click the X button next to any transaction to delete it.

## 🎨 Design Details

Theme: Dark modern UI with soft contrast colors to reduce eye strain.

Focus: Clean layout and high readability tailored for student users.

Color Logic:

Green: Indicates Income.

Red: Indicates Expenses.

## 📜 Technical Overview

### JavaScript Concepts Used:

DOM Manipulation: Dynamically updating the UI as data changes.

Event Handling & Delegation: Managing user interactions and button clicks efficiently.

setTimeout: Used for basic asynchronous behavior and UI feedback.

### Data Management:

Storage: Data is serialized into JSON format and stored in the browser's localStorage.

Logic: All transactions are managed within an array and rendered dynamically to the page.

## 🧩 Project Purpose This project was developed as an academic assignment to demonstrate proficiency in:

Vanilla JavaScript fundamentals.

DOM and Form handling.

Basic data validation logic.

Building frontend logic without external frameworks.

## 📌 Future Improvements

Implement an "Edit Transaction" feature.

Add a monthly financial summary report.

Integrate graphical representations (charts/graphs) for better expense visualization.

👨‍🎓 Created By: Student

(Academic Project)
