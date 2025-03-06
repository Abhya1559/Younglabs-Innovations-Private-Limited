# Younglabs Greeting App

A full-stack web application that demonstrates a simple greeting functionality with a beautiful, modern UI. Built with React, Express, and Node.js.

![Younglabs Greeting App](https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=1200&h=400)

## Features

- 🎨 Modern, responsive UI with gradient background and glass-morphism effects
- ⚡ Real-time greeting generation through API
- 🔄 Smooth animations using Framer Motion
- 🛡️ Error handling and loading states
- 🎯 Input validation
- 📱 Mobile-friendly design

## Tech Stack

- **Frontend:**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Lucide React Icons

- **Backend:**
  - Node.js
  - Express
  - CORS
  - dotenv

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd younglabs-greeting-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=3000
   VITE_API_URL=http://localhost:3000
   ```

### Running the Application

1. Start the backend server:
   ```bash
   npm run server
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit:
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:3000](http://localhost:3001)

## API Endpoints

### GET `/api/greet`

Returns a greeting message for the provided name.

**Parameters:**
- `name` (query string): The name to include in the greeting

**Success Response:**
```json
{
  "message": "Hello, YourName! Welcome to Younglabs."
}
```

**Error Response:**
```json
{
  "error": "Name is required."
}
```

## Project Structure

```
younglabs-greeting-app/
├── src/                    # Frontend source files
│   ├── App.tsx            # Main React component
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── server/                # Backend source files
│   └── index.js          # Express server setup
├── public/               # Static assets
└── package.json         # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start the frontend development server
- `npm run server` - Start the backend server
- `npm run build` - Build the frontend for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/) - Frontend build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Beautiful icons
