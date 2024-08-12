import React from 'react'

function Protected() {
  const token = localStorage.getItem("token");
  console.log(token);
  
  return (
    <div>
      <h2>Protected Content</h2>
      <p>This content is only visible to authenticated users.</p>
    </div>
  );
}

export default Protected