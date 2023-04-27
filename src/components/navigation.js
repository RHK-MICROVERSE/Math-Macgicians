// eslint-disable-next-line no-unused-vars
import { React, useState } from 'react';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies, import/extensions
import { MdClose } from 'react-icons/md';
// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies, import/extensions
import { FiMenu } from 'react-icons/fi';

const Navigation = () => {
  const [navOpen, setnavOpen] = useState(false);

  const handleToggle = () => {
    setnavOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setnavOpen(false);
  };

  const links = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/calculator', text: 'Calculator' },
    { id: 3, path: '/quotes', text: 'Quotes' },
  ];
  return (
    <nav className="nav">
      <h1>Math Magicians</h1>
      <div className="nav-links-cont">
        <button type="button" onClick={handleToggle}>
          {navOpen ? (
            <MdClose style={{ color: '#0166ff', width: '30px', height: '30px' }} />
          ) : (
            <FiMenu style={{ color: '#0166ff', width: '30px', height: '30px' }} />
          )}
        </button>
        <ul className={`menuNav ${navOpen ? ' showMenu' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                onClick={() => closeMenu()}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;