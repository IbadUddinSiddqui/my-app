import cssStyle from './header.module.css';
import Link from 'next/link';
const Header: React.FC = () => {
    return <header>
        <nav className={cssStyle.header}>
            <ul className={cssStyle.headbox}>
                <li className={cssStyle.headelement} >
                    <Link href="/">Home</Link>
                </li>
                <li className={cssStyle.headelement}>
                    <Link href='/services'>Services</Link>
                </li>
                <li className={cssStyle.headelement}>
                    <Link href="/about">About</Link>  {/* Linking to the About page */}
                </li>
                <li className={cssStyle.headcontact}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default Header;