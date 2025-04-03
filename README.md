# Personal Portfolio Website

A MERN stack portfolio website with GitHub integration, dark mode support, and responsive design.

## Features

- Dynamic project display from GitHub repositories
- Project search functionality
- Dark/Light mode toggle
- Responsive design with Bootstrap
- Contact form
- Skills & experience showcase

## Technologies Used

- **Frontend**: React, Bootstrap, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Ready for platforms like Heroku, Vercel, etc.

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB account (for database)

### Installation

1. Clone the repository
```bash
git clone https://github.com/WilsonRIP/Personal-Portfolio-Website.git
cd Personal-Portfolio-Website
```

2. Install dependencies
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

3. Create a .env file in the root directory with the following:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. Start development servers
```bash
# Start both frontend and backend (from root directory)
npm run dev

# Or start them separately
# Backend only
npm run server

# Frontend only
npm run client
```

5. Open your browser and navigate to http://localhost:3000

## Deployment

This project is ready for deployment on platforms like Heroku, Vercel, or Netlify.

## License

MIT

## Author

Created by WilsonRIP 