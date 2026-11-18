import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      name,
      email,
      age,
    };

    try {
      const response = await fetch("http://localhost:5000/add-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Student registered successfully!");

        setName("");
        setEmail("");
        setAge("");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Server connection failed!");
      console.error(error);
    }
  };

  return (
    <div className="student-page">

      <div className="student-card">

        <div className="form-header">
          <div className="form-icon">✦</div>

          <p className="form-subtitle">STUDENT PORTAL</p>

          <h1>Student Registration</h1>

          <p className="form-description">
            Create your student profile by entering your details below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="student-form">

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Age</label>

            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Register Student
            <span>→</span>
          </button>

        </form>

        <div className="form-footer">
          <span className="footer-line"></span>
          <p>STUDENT INFORMATION SYSTEM</p>
          <span className="footer-line"></span>
        </div>

      </div>

    </div>
  );
}

export default App;