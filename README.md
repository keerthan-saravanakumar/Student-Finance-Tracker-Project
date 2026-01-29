💸 Student Finance Tracker
A simple and responsive finance tracking web application built using HTML, CSS and JavaScript.
This project helps students track their income and expenses and understand their spending habits.
The application runs completely on the browser and stores data using localStorage.
✨ Features
Automatic Balance Update: Calculates total income, total expense and balance in real time.
Income & Expense Tracking: Add transactions with amount, category and date.
Filtering Options: View all transactions or filter only income or expenses.
Delete Transaction: Remove any transaction from the list.
Data Persistence: Uses localStorage so data is not lost after refreshing.
Visual Indicators:
Green border for income
Red border for expense
Responsive Design: Works on both desktop and mobile screens.
🚀 Getting Started
Prerequisites
Any modern web browser such as Chrome, Edge, Firefox or Safari.
Installation
Download or copy the project files.
Make sure the folder structure is like this:
Copy code
Text
├── index.html
├── Project.css
└── Project.js
Open index.html in your browser.
🛠️ Usage
Enter Amount, Type, Category, and Date.
Click the Add button to save the transaction.
The totals and balance update automatically.
Use All / Income / Expense buttons to filter records.
Click X to delete a transaction.
If any field is empty, an alert message will be shown.
🎨 Design Details
Theme: Dark modern UI with soft contrast colors
Focus: Clean layout and easy readability
Color Logic:
Green → Income
Red → Expense
Designed to be simple and user friendly for students
📜 Technical Overview
JavaScript Concepts Used:
DOM manipulation
Event handling
Event delegation
setTimeout (basic asynchronous behavior)
Data Storage:
Transactions are stored in localStorage using JSON format.
Logic:
Transactions are stored in an array and rendered dynamically on the page.
