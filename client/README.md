Mini LinkedIn-like Community Platform
This project is a simplified version of a LinkedIn-like community platform, built as an assignment for the Full Stack Development Intern position at CIAAN Cyber Tech Pvt Ltd. It features user authentication, public post feed functionality, and individual user profile pages.

Live Demo
🔗 Live Demo URL: [https://mini-linkedin-frontend-l695.onrender.com]

GitHub Repository
💻 GitHub Repo Link: [https://github.com/adnaniZ00/mini-linkedin.git]

Tech Stack Used
Frontend: React.js

Backend: Node.js with Express.js

Database: MongoDB (via Mongoose ODM)

Deployment: Render (for both client and server)

Required Features Implemented
User Authentication:

Users can register with email and password.

Existing users can log in.

User profiles include name, email, and a customizable bio.

Public Post Feed:

Users can create new text-only posts.

All posts are displayed in a public home feed.

Each post shows the author's name and a timestamp.

Profile Page:

Users can view their own profile.

Users can click on an author's name in the home feed to view that user's public profile and all their posts.

Setup Instructions (Local Development)
To run this project locally, follow these steps:

Prerequisites
Node.js (v14 or higher recommended)

npm or Yarn

MongoDB (running locally or accessible via a cloud service like MongoDB Atlas)

1. Clone the Repository
   git clone [https://github.com/adnaniZ00/mini-linkedin.git]
   cd mini-linkedin-platform # Or whatever your root folder is named

2. Backend Setup (Server)
   Navigate to the server directory, install dependencies, and start the server.

cd server
npm install # or yarn install

Create a .env file in the server directory:

MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_key_here
PORT=5000

Replace your_mongodb_connection_string_here with your MongoDB connection string (e.g., mongodb://localhost:27017/minilinkedin for local or an Atlas URI).

Replace your_jwt_secret_key_here with a strong, random string (e.g., generated from node -e "console.log(require('crypto').randomBytes(32).toString('hex'))").

Start the Backend Server:

npm start # or yarn start

The server should start on http://localhost:5000.

3. Frontend Setup (Client)
   Open a new terminal window, navigate to the client directory, install dependencies, and start the frontend.

cd ../client # Go back to root, then into client
npm install # or yarn install

Create a .env file in the client directory:

REACT_APP_API_URL=http://localhost:5000

This points your local frontend to your local backend.

Start the Frontend Development Server:

npm start # or yarn start

The frontend should open in your browser at http://localhost:3000 (or another available port).

Deployment Details
Both the frontend and backend are deployed on Render for seamless full-stack hosting.

Backend (Web Service):

Deployed at: https://mini-linkedin-api-adnan.onrender.com

Build Command: npm install

Start Command: npm start

Environment Variables: MONGO_URI, JWT_SECRET, PORT (configured on Render dashboard)

Frontend (Static Site):

Deployed at: [https://mini-linkedin-frontend-l695.onrender.com]

Root Directory: client

Build Command: npm install && npm run build

Publish Directory: build

Environment Variables: REACT_APP_API_URL (configured on Render dashboard, pointing to the backend URL)

Admin/Demo User Logins (if applicable)
For evaluation purposes, you can use the following credentials:

Email: demo@example.com

Password: password123

(You should create this user in your local MongoDB or directly via your deployed backend's registration endpoint before submission if you want to provide pre-made credentials.)

Extra Features (Optional)
(If you implemented any features beyond the requirements, list them here. Examples:)

User profile editing.

"Like" or "Comment" functionality on posts.

Real-time updates for new posts (e.g., using WebSockets).

Search functionality for users or posts.

Improved UI/UX details (e.g., loading spinners, error messages).

Responsive design considerations for various screen sizes.

Evaluation Notes
Code Quality: Focus on clean, readable, and maintainable code.

Responsiveness: The application is designed to be responsive across different devices.

UI/UX: Efforts have been made to create an intuitive and visually appealing user interface.

Functionality: All required features are fully implemented and functional.
