import './App.css';

function App() {
  const subdomain = window.location.host.split('.')[0];

  return (
    <div className="App">
      <h1>Hello, детки! {subdomain}</h1>
    </div>
  );
}

export default App;
