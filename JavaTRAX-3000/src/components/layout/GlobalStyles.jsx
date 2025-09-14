import React from 'react'

const GlobalStyles = () => {
  return (
    <style>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
      
      #root {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(5deg); }
      }
      
      table tbody tr:hover {
        background-color: rgba(139, 69, 19, 0.1) !important;
      }
      
      button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      }
    `}</style>
  )
}

export default GlobalStyles