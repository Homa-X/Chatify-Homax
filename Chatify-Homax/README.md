# 💬 HKH-Chatify

A simple chat application built with **React + Vite** for educational purposes.  
This project is implemented according to the **assignment requirements (Grade G)**.

## 🚀 Features

- 🔑 Register & Login (stored in localStorage/sessionStorage)
- 💬 Simple chat (messages saved in localStorage)
- 👤 Profile page (shows user info)
- 🛡️ Protected routes (only logged-in users can access Chat & Profile)
- 🎨 Minimal clean UI with custom CSS

## 📂 Project Structure

src/
┣ 📂 pages/
┃ ┣ Chat.jsx
┃ ┣ Login.jsx
┃ ┣ Profile.jsx
┃ ┗ Register.jsx
┣ 📂 lib/
┃ ┗ auth.js
┣ App.jsx
┣ main.jsx
┗ styles.css

## 🛠️ Installation

1. Clone or download this repo.
2. Install dependencies:
   ```bash
   npm install
   ```

## ▶️ Run the project

```bash
npm run dev

Open in browser → http://localhost:5173

## 🧪 How to use
- ➕ Go to **Register** and create an account (any fake email works).
- 🔐 Log in with the same email & password.
- 💬 Start chatting in the Chat page.
- 👤 View your details in the Profile page.
- 🚪 Logout anytime.

## ⚠️ Notes
- All data is stored locally (no backend).
- Closing the browser tab will log you out.
- For a new account, clear `localStorage` or use a different email.

## 📸 Screenshot
Add a screenshot here, e.g.:
![HKH-Chatify Screenshot](./screenshot.png)

## 📚 Assignment
- This version is made for **Grade G** criteria.
- Includes: React, Router, Register/Login, Chat, Profile, Basic UI.
```
