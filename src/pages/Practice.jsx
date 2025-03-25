import React from 'react'

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login & Signup
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (isSignup && !formData.username)) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log(isSignup ? "Signing Up..." : "Logging In...", formData);
  };

  return (
    <div className="auth-container" style={styles.container}>
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        {isSignup && ( 
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
      <p onClick={() => setIsSignup(!isSignup)} style={styles.toggleText}>
        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "8px 0",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  },
  toggleText: {
    marginTop: "10px",
    color: "#007bff",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
};

export default AuthForm;


// export default Practice