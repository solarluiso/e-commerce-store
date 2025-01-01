# E-Commerce Platform

An advanced, full-featured e-commerce platform designed to provide a seamless shopping experience. This project includes robust authentication, MongoDB & Redis integration, and Stripe-powered payments.

## Features

- **MongoDB & Redis Integration**: Efficient database and caching solutions.
- **Caching with Redis**: Improved performance and scalability.
- **Stripe Payment Setup**: Secure payment processing.
- **Robust Authentication System**: Signup, login, and session management with JWT (access & refresh tokens).
- **E-Commerce Core**: Product and category management.
- **Shopping Cart Functionality**: Add, update, and remove items.
- **Checkout with Stripe**: Simplified payment flow.
- **Coupon Code System**: Apply discount codes during checkout.
- **Admin Dashboard**: Manage products, categories, and orders.
- **Sales Analytics**: Gain insights into sales performance.
- **Tailwind Design**: Modern and responsive UI.
- **Security and Data Protection**: Advanced measures to protect user data.

## Setup

### Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
PORT=3000
MONGO_URI=your_mongo_uri

UPSTASH_REDIS_URL=your_redis_url

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### Install Dependencies

Install the necessary dependencies:

```bash
npm install
```

### Build the App

Prepare the application for production:

```bash
npm run build
```

### Start the App

Run the application:

```bash
npm run start
```

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Caching**: Redis
- **Authentication**: JWT (Access/Refresh Tokens)
- **Payments**: Stripe
- **Frontend**: React, TailwindCSS
- **State Management**: Zustand
- **HTTP Requests**: Axios
- **Animations**: Framer Motion
- **Other**: Cloudinary for media uploads

## Contribution

Feel free to submit issues or pull requests for improvements.

## License

This project is licensed under the MIT License.
