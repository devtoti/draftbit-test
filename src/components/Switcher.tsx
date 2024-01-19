import { useState } from 'react';
import ChangeTheme from './ChangeTheme'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = ChangeTheme();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className='fixed top-2 left-2 z-10 bg-graybit-100 p-2 rounded-lg dark:bg-graybit-200'>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={28} />
      </div>
    </>
  );
}