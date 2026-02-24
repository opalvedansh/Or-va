# Oréva - Premium Digital Agency Website

A high-end digital agency website built with Next.js, Tailwind CSS, and Express.

## Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, Nodemailer
- **Design**: Premium European aesthetic, custom Tailwind theme

## Prerequisites

- Node.js 18+
- npm or yarn

## Local Setup

1.  **Clone the repository** (if applicable)

2.  **Frontend Setup**
    ```bash
    cd frontend
    npm install
    # Set up environment variables
    cp .env.example .env.local
    npm run dev
    ```
    Frontend will run on `http://localhost:3000`

3.  **Backend Setup**
    ```bash
    cd backend
    npm install
    # Set up environment variables
    cp .env.example .env
    npm run dev
    ```
    Backend will run on `http://localhost:5000`

## Deployment

### Frontend (Vercel)
1.  Push code to GitHub.
2.  Import `frontend` directory project into Vercel.
3.  Set Environment Variables (if any).
4.  Deploy.

### Backend (Render)
1.  Push code to GitHub.
2.  Create a new Web Service on Render.
3.  Connect repository and set Root Directory to `backend`.
4.  Set Build Command: `npm install`
5.  Set Start Command: `node index.js`
6.  Add Environment Variables from `.env.example`.
7.  Deploy.

## Environment Variables

See `.env.example` in both `frontend` and `backend` directories.
