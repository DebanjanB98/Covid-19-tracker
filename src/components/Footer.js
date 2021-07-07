import {memo} from 'react';



function Footer() {
  

  return (
    <footer>
      <div className="link">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Covid-19 Tracker
        </a>
      </div>

      <h5>{('Awareness is the first step in our fight against COVID, let\'s do our part')}</h5>
    </footer>
  );
}

export default memo(Footer);
