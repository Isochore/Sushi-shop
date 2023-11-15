const Header = () => {
    return (
        <header>
            <nav className="header__nav">
            <div className="header__logo">
                <h4 data-aos="fade-down">Sushiman</h4>
                <div className="header__logo-overlay"></div>
            </div>
    
            <ul className="header__menu" data-aos="fade-down">
                <li>
                <a href="#menu">Menu</a>
                </li>
                <li>
                <a href="#food">Food</a>
                </li>
                <li>
                <a href="#services">Services</a>
                </li>
                <li>
                <a href="#about-us">About Us</a>
                </li>
                <li>
                </li>
            </ul>
    
            <ul className="header__menu-mobile" data-aos="fade-down">
                <li>
                <img src="/assets/menu.svg" alt="menu" />
                </li>
            </ul>
            </nav>
      </header>
    )
  }
  
  export default Header;