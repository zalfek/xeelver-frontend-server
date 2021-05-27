import './app-contacts.css';
import instagram from './instagram.svg';
import facebook from './facebook.svg';

function Contacts() {
  return (
    <div>
            <div className="sidepanel">
                    <div className="sidepanel__text"><span>Social Media</span></div>
                    <div className="sidepanel__divider"></div>
                    <a href="#" className="sidepanel__icon">
                        <img src= {instagram} alt="instagram"/>
                    </a>
                    <a href="#" className="sidepanel__icon">
                        <img src={facebook} alt="facebook"/>
                    </a>
                </div>
    </div>
  );
}

export default Contacts;
