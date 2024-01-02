import './App.css';

import Messanger from './messanger/Messanger.js';
import MainSite from './main/MainSite.js';

function App() {
  const domen = "exp-of-betrayal"
  return (
    <>
      <DomenRoute domain={domen} element={<MainSite />} />
      <DomenRoute domain={"messanger." + domen} element={<Messanger />} />
    </>
  );
}


function DomenRoute ({ domain, element }) {
  const subdomain = window.location.host.replace('.ru', '');

  if (subdomain === domain)
    return element
}

export default App;
