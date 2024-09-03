# Blogging App

This project is a Medium-like application built with a modern tech stack, featuring a frontend in React, a backend powered by Cloudflare Workers, and a PostgreSQL database managed through Prisma. The application supports user authentication, blog creation, updating, and retrieval functionalities.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Backend Initialization](#backend-initialization)
- [Database Setup](#database-setup)
- [Routes](#routes)
- [Frontend Initialization](#frontend-initialization)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Frontend**: React
- **Backend**: Cloudflare Workers
- **Validation**: Zod
- **Language**: TypeScript
- **ORM**: Prisma with connection pooling
- **Database**: PostgreSQL
- **Authentication**: JWT

## Project Structure

```
.
├── backend
│   ├── src
│   │   ├── routes
│   │   │   ├── blog.ts
│   │   │   └── user.ts
│   │   ├── index.ts
│   │   └── prisma
│   └── wrangler.toml
├── common
│   ├── src
│   └── package.json
└── frontend
    ├── src
    ├── public
    └── package.json
```

## Setup and Installation

### Backend Initialization

1. Clone the repository and navigate to the `backend` folder:
   ```bash
   mkdir medium
   cd medium
   npm create hono@latest
   ```
2. Choose `cloudflare-workers` as the template.

### Database Setup

1. Set up Prisma and configure your database URL:
   ```bash
   npm install prisma
   npx prisma init
   ```
2. Update your `.env` and `wrangler.toml` with the `DATABASE_URL`.
3. Initialize and migrate the database schema:
   ```bash
   npx prisma migrate dev --name init_schema
   ```

### Routes

- **User Routes**:
  - `POST /api/v1/user/signup` - Sign up a new user
  - `POST /api/v1/user/signin` - Sign in an existing user
- **Blog Routes**:
  - `POST /api/v1/blog` - Create a new blog post
  - `PUT /api/v1/blog` - Update a blog post
  - `GET /api/v1/blog/:id` - Get a specific blog post by ID
  - `GET /api/v1/blog/bulk` - Get all blog posts

### Frontend Initialization

1. Navigate to the `frontend` folder and initialize a React app using Vite:
   ```bash
   npm create vite@latest
   ```
2. Set up Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
3. Add routes for Signup, Signin, and Blog pages using `react-router-dom`.

### Environment Variables

The application requires the following environment variables:

- `DATABASE_URL` - PostgreSQL database connection URL.
- `JWT_SECRET` - Secret key for JWT authentication.

Ensure that sensitive information is not committed to version control by listing `.env` in `.gitignore`.

### Deployment

1. Log in to Cloudflare using Wrangler:
   ```bash
   npx wrangler login
   ```
2. Deploy the backend:
   ```bash
   npm run deploy
   ```
3. Update environment variables through the Cloudflare dashboard as needed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Feel free to adjust sections as per your specific needs or any additional details you'd like to include!


