const Title = () => (
    <div>
    <a href="/">
  
      <img id ="logome" className="logo" alt ="noimage" src="https://www.theknowhowlib.com/wp-content/uploads/2020/05/Swiggy-2.png"/>
    </a>
    </div>
  );
  
  
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i className="fa-solid fa-cart-shopping"><span className="material-symbols-outlined">
  local_mall
  </span></i></li>
            
          </ul>
        </div>
      </div>
    );
  };

export default Header;
  