# LinkedIn Clone

A full-stack LinkedIn clone built with React (frontend) and Node.js/Express (backend). This project replicates core LinkedIn features such as authentication, posting, connections, notifications, and user profiles, with a modern UI and responsive design.

## Live Demo

[Live URL](https://your-live-demo-url.com)

---

## Features

- **User Authentication**: Sign up, login, and secure session management.
- **Profile Management**: Edit profile details, upload profile pictures.
- **Posts**: Create, view, and interact with posts.
- **Connections**: Connect with other users, manage your network.
- **Notifications**: Real-time notifications for connection requests and other activities.
- **Responsive UI**: Modern, mobile-friendly design using Tailwind CSS.

---

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Other**: Axios, Cloudinary (for image uploads)

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**

   ```powershell
   git clone https://github.com/your-username/linkedin-clone.git
   cd linkedin-clone
   ```

2. **Install dependencies**

   - Frontend:
     ```powershell
     cd frontend
     npm install
     ```
   - Backend:
     ```powershell
     cd ../backend
     npm install
     ```

3. **Configure Environment Variables**

   - Create a `.env` file in the `backend` folder with your MongoDB URI and other secrets:
     ```env
     MONGO_URI=your_mongodb_uri
     CLOUDINARY_API_KEY=your_cloudinary_key
     CLOUDINARY_API_SECRET=your_cloudinary_secret
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the servers**

   - Backend:
     ```powershell
     npm start
     ```
   - Frontend (in a new terminal):
     ```powershell
     cd ../frontend
     npm run dev
     ```

5. **Access the app**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:5000](http://localhost:5000)

---

## Folder Structure

```
linkedin-clone/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── assets/
│   └── index.html
```

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
