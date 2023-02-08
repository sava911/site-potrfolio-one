import React from 'react';
import sun from './sun.svg';
import moon from './moon.svg';
import {useLocalStorage} from './../../utils/useLocalSorage';
import './styles.css';



function BtnMode() {
  const [modeThem, setModeThem] = useLocalStorage('modeThem', 'light')

  const btnRef = React.useRef(null)
  React.useEffect(() => {
    if (modeThem === 'dark') {
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark')
      btnRef.current.classList.remove('dark-mode-btn--active')
    }




  }, [modeThem]);

  const clickMode = () => {
    setModeThem(
      (currentValue) => {
        return currentValue === 'light' ? 'dark' : 'light'
      }
    )
  }

  return (
    <>
      <button ref={btnRef} className="dark-mode-btn" onClick={clickMode}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>

    </>
  )
}

export default BtnMode