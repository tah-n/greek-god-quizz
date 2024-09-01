"use client"
import React from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Notifications = () => {
  return (
    <div>
       <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
       />
    </div>
  )
}

export default Notifications;
