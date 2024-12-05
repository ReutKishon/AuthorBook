# Author-Book Management System

This is a web application for displaying authors and their books, built with **NestJS** (backend) and **React** (frontend).

---

## **How to run the project**

### **1. Install dependencies**

```bash

npm run install-all
```

### **2. Generate sample data**

```bash
cd backend && npm run generate-test-data
```




### **3. Run both backend and frontend**
```bash
cd backend && npm start
cd frontend && npm start
```


## **Local development**
 Make sure you have the following .env file in the backend folder with the following environment variables:

```bash
DATABASE_HOST=localhost
DATABASE_PORT=5433
DATABASE_USER=postgres
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=author_book_system
```

as well as .env file in the frontend folder

```bash
PORT=4000
```


<br/>

Finally, the application is served on:

Frontend: http://localhost:4000

The API is served on:


Backend: http://localhost:3000


## Testing

Still in progress

Run the tests using
```bash
cd backend && npm test
```


## Deployment

TBD