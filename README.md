# Author-Book Management System

This is a web application for displaying authors and their books, built with **NestJS** (backend) and **React** (frontend).

---

## **How to run the project**

### **1. Generate sample data**

```bash
cd backend/
npm run generate-test-data
```



### **2. Install dependencies**

```bash

npm run install-all
```
### **3. Run backend and frontend**
```bash
npm run start-all
```
The appliction is served under:

Frontend: http://localhost:4000

The API is served under:


Backend: http://localhost:3000

## **Local development**
 insure you have the following .env file in you root folder with the following environment variables:

```bash
DATABASE_HOST=localhost
DATABASE_PORT=5433
DATABASE_USER=postgres
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=author_book_system
```
