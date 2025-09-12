import React from 'react';
import "./Right.css"
function Right() {
  return (
    <div className="container">
      <h3>📧 Email me for jobs</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae soluta,
        perspiciatis enim facilis harum maiores minus necessitatibus nesciunt,
        qui nam esse laboriosam nihil eligendi doloribus rem? Illum, eveniet quisquam!
      </p>

      <input type="email" placeholder="name@mail.com" />
      <button className="light">Subscribe</button>

      <h3>🚀 Get noticed faster</h3>
      <p>Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</p>
      <button className="light">Upload your resume</button>
    </div>
  );
}

export default Right;
