const Header = () => {
  return (
    <nav className="navbar navbar-light mb-4 bg-success">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
              alt="logo"
              className="mr-2"
            />
            <div className="text-white">Mushroom Kingdom Web Wizards</div>
          </div>
        </a>
      </div>
    </nav>
  );
};
export default Header;
