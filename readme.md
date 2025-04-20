# Bike Servicing Management System API

A backend API for managing customers, bikes, and service records for a bike servicing center. Supports CRUD operations and special endpoints for handling service jobs.

## Live Backend Link

The API is deployed and accessible at:  
**https://assignment-8-jade.vercel.app**

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL (with Prisma ORM)
- **Deployment**: Vercel

## Key Features

1. **Customer Management**  
   Create, read, update, and delete customers with validation.
2. **Bike Management**  
   Add bikes linked to customers and retrieve bike details.
3. **Service Records**  
   Track service history, update service status, and mark jobs as completed.
4. **Pending/Overdue Services**  
   Fetch services with `pending` or `in-progress` status older than 7 days.
5. **Error Handling**  
   Standardized error responses for easy debugging.

## Setup Guide

### Prerequisites

- Node.js v18+
- PostgreSQL database
- Git

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Joy43/CarService_api.git
   cd CarService_api

2. **Install Dependencies**
   ```bash
   yarn install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
   ```

4. **Run Database Migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the Server**
   ```bash
   yarn run dev  # For development
   yarn start    # For production
   ```

6. **Test Endpoints**  
   Use tools like Postman or Thunder Client to interact with the API.  
   Base URL: `http://localhost:3000` (locally) or the provided live link.

---

## API Endpoints

### Customers
- `POST /api/customers` – Create a customer
- `GET /api/customers` – Get all customers
- `GET /api/customers/:id` – Get a customer by ID
- `PUT /api/customers/:id` – Update a customer
- `DELETE /api/customers/:id` – Delete a customer

### Bikes
- `POST /api/bikes` – Add a bike
- `GET /api/bikes` – Get all bikes
- `GET /api/bikes/:id` – Get a bike by ID

### Services
- `POST /api/services` – Create a service record
- `GET /api/services` – Get all service records
- `GET /api/services/:id` – Get a service by ID
- `PUT /api/services/:id/complete` – Mark service as completed
- `GET /api/services/status` – Get overdue/pending services

---

## Error Responses

Example error format:
```json
{
  "success": false,
  "status": 404,
  "message": "Customer not found",
  "stack": "..."
}
```

---

## License

ssjoy. See `LICENSE` for details.