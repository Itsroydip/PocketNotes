import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! Page not found</p>
        <p className="error-description">The page you're looking for doesn't exist or has been moved.</p>
        
        <div className="error-image">
          <svg viewBox="0 0 24 24" className="confused-face">
            <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <button onClick={() => navigate(-1)} className="go-back-button">
          <svg viewBox="0 0 24 24" className="arrow-left">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go Back
        </button>
      </div>
      
      <style jsx>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom, #e6f2ff, #b3d9ff);
          padding: 1rem;
          font-family: Arial, sans-serif;
        }

        .error-content {
          max-width: 400px;
          width: 100%;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          padding: 2rem;
          text-align: center;
        }

        .error-title {
          font-size: 6rem;
          font-weight: bold;
          color: #3b82f6;
          margin: 0;
          animation: bounce 1s infinite;
        }

        .error-message {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-top: 1rem;
        }

        .error-description {
          color: #6b7280;
          margin-top: 0.5rem;
        }

        .error-image {
          margin-top: 2rem;
        }

        .confused-face {
          width: 150px;
          height: 150px;
          fill: none;
          stroke: #3b82f6;
          stroke-width: 0.5;
          animation: pulse 2s infinite;
        }

        .go-back-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 2rem;
        }

        .go-back-button:hover {
          background-color: #2563eb;
        }

        .arrow-left {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          margin-right: 0.5rem;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;