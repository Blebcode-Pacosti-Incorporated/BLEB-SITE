import './App.css';

import Messenger from './messenger/Messenger.js';
import MainSite from './main/MainSite.js';

function App() {
  const domen = "exp-of-betrayal"
  return (
    <>
      <DomenRoute domain={domen} element={<MainSite />} />
      <DomenRoute domain={"messenger." + domen} element={<Messenger />} />
    </>
  );
}

function DomenRoute ({ domain, element }) {
  const subdomain = window.location.host.replace('.ru', '');

  if (subdomain === domain)
    return element
}

export default App;
