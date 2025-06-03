import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // ✅ Import the CSS

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    localStorage.setItem('loggedInEmail', email); // Save email
    navigate('/addEmployee'); // Redirect
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
