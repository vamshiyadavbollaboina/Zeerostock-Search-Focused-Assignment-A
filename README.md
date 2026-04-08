# README: Part A – Inventory Search API + UI

## 🚀 Project Overview
This project is a simplified inventory search engine for **Zeerostock**. It allows buyers to browse surplus stock across various suppliers with real-time filtering by name, category, and price range.

## 🛠 Tech Stack
* **Frontend:** Vanilla JavaScript, HTML5, CSS3
* **Backend:** Node.js with Express.js
* **Data Source:** Static JSON / In-memory array

## 📋 Features
* **Case-Insensitive Search:** Finds products regardless of capitalization.
* **Dynamic Filtering:** Combine category selection and price ranges.
* **Error Handling:** Validates price ranges (Min < Max) and handles "No Results" gracefully.
* **Responsive UI:** Clean table/list view for inventory results.

## ⚙️ How to Run Locally
1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/vamshiyadavbollaboina/Zeerostock-Search-Focused-Assignment-A.git
    cd inventory-search-project
    ```
2.  **Install Dependencies:**
    ```bash
    cd backend
    npm install
    ```
3.  **Start the Server:**
    ```bash
    node server.js
    ```
4.  **Launch the UI:**
    Open `frontend/index.html` in any modern web browser.

---

## 🧠 Search Logic Explanation
The search functionality is handled via a single `GET /search` endpoint. The logic follows these steps:
1.  **Initial State:** Starts with the full inventory array.
2.  **Product Name (`q`):** Uses `.filter()` and `.includes()` on lowercase strings to provide partial, case-insensitive matching.
3.  **Category:** If a category is selected, the list is filtered to match the exact category string.
4.  **Price Range:** The system checks if `minPrice` and `maxPrice` parameters exist, converts them to numbers, and ensures the product price falls within that inclusive range.
5.  **Edge Cases:** If `minPrice` is greater than `maxPrice`, the API returns a `400 Bad Request` to prevent logical errors.

## 📈 Performance Improvement for Large Datasets
**Full-Text Search Indexing (e.g., FlexSearch or ElasticSearch):**
For datasets with millions of records, standard array filtering (`.filter()`) becomes slow ($O(n)$ complexity). I would implement a **Full-Text Search Index**. By indexing product names and descriptions, the system can perform searches with $O(1)$ or $O(\log n)$ complexity, providing near-instant results even as the inventory grows. Additionally, implementing **Pagination** would ensure the frontend only renders a manageable number of items at once.
