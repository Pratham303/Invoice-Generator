# Invoice Generator


## 📌 Overview

Invoice Generator is a simple and efficient web application for creating, managing, and organizing invoices. The app utilizes **localStorage** to persist data, ensuring that invoices remain available even after refreshing the page. Users can create, edit, delete, and filter invoices based on their payment status. Additionally, invoices can be downloaded as PDFs.

## ✨ Features

- 📝 **Add Invoice**: Create a new invoice with item details, due date, and status.
- ✏️ **Edit Invoice**: Modify an existing invoice.
- 🗑️ **Delete Invoice**: Remove an invoice from the list.
- 🔄 **Change Invoice Status**: Mark invoices as **Paid**, **Pending**, or **Draft**.
- 📂 **Filter Invoices**: View invoices based on status (**Paid**, **Pending**, **Draft**, or **All**).
- 📄 **Download Invoice PDF**: Generate and download a PDF version of an invoice.
- 💾 **LocalStorage Integration**: Ensures all invoices are saved locally and persist across sessions.

## 🛠 Technologies Used

- ⚛️ **React.js**
- 📦 **Redux Toolkit** (for state management)
- ⚡ **Vite** (for fast development)
- 💾 **LocalStorage** (for data persistence)
- 🖨 **React-PDF** (for generating invoice PDFs)

## 🚀 Installation

```sh
# Clone the repository
git clone https://github.com/yourusername/invoice-generator.git

# Navigate to the project folder
cd invoice-generator

# Install dependencies
npm install

# Start the development server
npm run dev

