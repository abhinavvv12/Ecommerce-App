# 🛍️ Forever - Full Stack MERN E-Commerce Platform

A modern and fully responsive **MERN Stack E-Commerce Website** with a dedicated **Customer Store** and **Admin Dashboard**. The platform supports secure authentication, online payments, product management, and order tracking.

## 🚀 Live Demo

### 🛒 Customer Website
https://forever-frontend-vert-two.vercel.app

### ⚙️ Admin Dashboard
https://forever-admin-three-chi.vercel.app

---

# 📖 Features

## 👤 Customer

- User Registration & Login
- JWT Authentication
- Browse Products
- Product Categories
- Search Products
- Add to Cart
- Update Cart Quantity
- Place Orders
- Cash on Delivery
- Stripe Payment Integration
- Razorpay Payment Integration
- View Order History
- Responsive Design

## 🛠️ Admin

- Secure Admin Login
- Add New Products
- Upload Product Images
- Delete Products
- View All Orders
- Update Order Status
- Inventory Management

---

# 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify

### Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- Cloudinary

### Database

- MongoDB Atlas
- Mongoose

### Payment Gateway

- Stripe
- Razorpay

### Deployment

- Vercel
- MongoDB Atlas
- Cloudinary

---

# 📂 Project Structure

```
Ecommerce-App
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── admin
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/abhinavvv12/Ecommerce-App.git

cd Ecommerce-App
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=4000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_JWT_SECRET

ADMIN_EMAIL=YOUR_ADMIN_EMAIL
ADMIN_PASSWORD=YOUR_ADMIN_PASSWORD

CLOUDINARY_NAME=YOUR_CLOUDINARY_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_SECRET_KEY=YOUR_CLOUDINARY_SECRET

STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY

RAZORPAY_KEY_ID=YOUR_RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_RAZORPAY_KEY_SECRET
```

Start the backend

```bash
npm run server
```

---

## 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

Run

```bash
npm run dev
```

---

## 4. Admin Dashboard Setup

```bash
cd admin
npm install
```

Create `.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

Run

```bash
npm run dev
```

---

# 🌐 Deployment

### Customer Website

https://forever-frontend-vert-two.vercel.app

### Admin Dashboard

https://forever-admin-three-chi.vercel.app

### Backend API

https://forever-backend-eight-sigma.vercel.app

---

# 📌 API Endpoints

## User

```
POST /api/user/register
POST /api/user/login
POST /api/user/admin
```

## Product

```
GET  /api/product/list
POST /api/product/add
POST /api/product/remove
GET  /api/product/single
```

## Cart

```
POST /api/cart/add
POST /api/cart/update
POST /api/cart/get
```

## Orders

```
POST /api/order/place
POST /api/order/stripe
POST /api/order/razorpay
POST /api/order/userorders
POST /api/order/list
POST /api/order/status
```

---

# 📸 Screenshots

> Add screenshots of your application here.

- Home Page
- Collection Page
- Product Details
- Shopping Cart
- Checkout
- Orders
- Admin Dashboard
- Add Product
- Product List
- Order Management

---

# 🎯 Future Enhancements

- Wishlist
- Product Reviews & Ratings
- Coupons & Discount Codes
- Email Verification
- Forgot Password
- Product Filters
- Dark Mode
- Sales Analytics
- Inventory Alerts
- Multi-language Support

---

# 📚 What I Learned

- MERN Stack Development
- REST API Design
- JWT Authentication
- MongoDB & Mongoose
- Cloudinary Image Upload
- Stripe & Razorpay Integration
- Environment Variables
- CORS Configuration
- Deployment with Vercel
- Debugging Production Issues

---

# 👨‍💻 Author

**Abhinav Raparthi**

GitHub: https://github.com/abhinavvv12

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub!

---

## 📄 License

This project is licensed under the **MIT License**.
