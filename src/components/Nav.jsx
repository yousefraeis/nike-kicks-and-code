import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header className="absolute w-full sx py-8 z-10">
            <nav className="flex justify-between items-center wide-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={129}
                        height={29}
                        className="m-0 w-[129px] h-[29px]"
                    />
                </a>

                <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-sansMontserrat leading-normal text-lg text-mutedSlate"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-2 text-lg leading-normal font-sansMontserrat  max-lg:hidden wide:mr-24">
                    <a href="/">Sign in</a>
                    <span>/</span>
                    <a href="/">Explore now</a>
                </div>

                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="hamburger icon"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
