import headerLogo from '../../public/favicon.ico';
// import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className='px-9 py-4'>
        <nav>
            <a href="/">
                <img src={headerLogo} alt="" width={30} height={25}/>
            </a>
        </nav>
    </header>
  )
}

export default Nav