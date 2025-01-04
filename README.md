# Next.js Authentication Project

A modern Next.js application with Google authentication, dark/light theme support, and Material UI components.

## Features

- 🔐 Google Authentication
- 🌓 Dark/Light Theme
- 📱 Responsive Design
- 🎨 Material UI Components
- 📝 Contact Form with Server Actions
- 🔒 Secure Environment Configuration

## Getting Started

1. Clone the repository:

```bash
git clone <your-repo-url>
cd next-authentication
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

   - Copy `.env.example` to `.env.local`
   - Fill in your Google OAuth credentials
   - Generate a secure NEXTAUTH_SECRET using:
     ```bash
     openssl rand -base64 32
     ```

4. Set up Google OAuth:

   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth credentials
   - Add authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `http://localhost:3000/api/auth/signin/google`

5. Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Tech Stack

- Next.js 14
- TypeScript
- Material UI
- NextAuth.js
- React Server Actions
