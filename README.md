# E-Commerce Payment Gateway:

This is a virtual internship project for an Samskruta Vahini Foundation based in West Bengal. The goal was to build an e-commerce website to help the NGO sell their products online. Our team was responsible for creating a secure and functional **payment gateway** using **Razorpay** with **MongoDB** as the backend. The payment gateway supports **cards, netbanking, wallets, and paylater options**. Currently, it is running in **test mode** for dummy transactions.

We even uploaded a video demo showcasing how the payment gateway works.

 Features:
 
* Secure payments through Razorpay.
* Supports multiple payment options: cards, netbanking, wallets, paylater.
* Displays a success page with order ID, payment ID, and amount.
* Allows users to view their transaction history.
* Backend integrated with MongoDB for storing payment records.
* Test mode enabled for safe trial transactions.

 Division of Tasks:

* **Siri** – UI design and layout.
* **Keerthana** – Frontend development and integration.
* **Naailah & Akshitha** – Backend development including payment verification and database integration.
* **Pooja & Sathwika** – Gathering resources, testing, and documentation.
* Coordinated daily standups to track progress and ensure timely completion.
* Assisted in debugging issues and refining the payment flow for better user experience.

## Project Structure

# Client Folder (`client/`)

Contains the frontend files:

1. **`index.html`** – Main page for initiating payments.
2. **`history.html`** – Displays the transaction history of the user.
3. **`success.html`** – Shows payment success details using `localStorage` data: order ID, payment ID, and amount.
4. **`thankyou.html`** – Alternative success page that shows order ID and payment ID from URL query parameters and allows navigation to make another payment or view history.

# Server Folder (`server/`)

Contains the backend files:

* **`models/payment.js`** – Defines the payment schema for MongoDB.
* **`routes/history.js`** – Handles fetching the user's payment history.
* **`routes/order.js`** – Handles creating a new Razorpay order.
* **`routes/verify.js`** – Handles verifying payment signatures for security.

Other files/folders:

* **`node_modules/`** – Dependencies installed via npm (e.g., `@mongodb-js`, `dotenv`).
* **`index.js`** – Main server entry point.
* **`package.json`** – Contains project dependencies and scripts.
* **`package-lock.json`** – Ensures consistent dependency versions.

# Installation & Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Navigate to the server folder and install dependencies:

   ```bash
   cd server
   npm install
   ```

3. Create a `.env` file in the server folder and add your Razorpay API keys:

   ```
   RAZORPAY_KEY_ID=your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   MONGO_URI=your_mongo_connection_string
   ```

4. Start the backend server:

   ```bash
   node index.js
   ```

5. Open the frontend by opening `client/index.html` in your browser.

# Usage

* Make a payment using the options provided (cards, netbanking, wallets, paylater).
* On successful payment, the **success page** or **thankyou page** will display order details.
* Visit **history.html** to see the transaction history.

# Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Payment Gateway:** Razorpay

---

# Payment Gateway Flow Diagram

    A[User opens index.html] --> B[Selects product & payment option]
    B --> C[Frontend sends order request to server/order.js]
    C --> D[Razorpay creates order & opens Checkout]
    D --> E[User enters payment details]
    E --> F[Razorpay returns payment_id & order_id]
    F --> G[Server verifies payment via verify.js]
    G --> H[Payment details saved in MongoDB]
    H --> I[Success page displayed (success.html / thankyou.html)]
    I --> J[User can view payment history in history.html]

> This diagram visually explains the end-to-end payment process, from selecting a product to storing and viewing payment records.

## Notes

* Currently running in **test mode** with dummy transactions.
* Secure payment verification implemented using Razorpay’s signature verification.
