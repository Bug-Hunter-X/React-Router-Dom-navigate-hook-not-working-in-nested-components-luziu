```javascript
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <MyButton to="/about" />
    </div>
  );
}

function MyButton({to}) {
  const navigate = useNavigate();
  return <button onClick={() => navigate(to)}>Go to About</button>;
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export default App;
```