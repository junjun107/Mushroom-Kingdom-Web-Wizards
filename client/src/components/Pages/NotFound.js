import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    // <div className="d-flex flex-column justify-content-center align-items-center mt-5 ">
    //   {/* <img
    //     src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    //     alt="40"
    //   /> */}

    //   <p className="display-2">Sorry, this page does not exist</p>
    //   <Link to="/" className="btn btn-primary">
    //     Go Back
    //   </Link>
    // </div>

    // <div className="mw-100 bg-primary" src="..." alt="Max-width 100%">
    //   404
    // </div>

    <div className="d-flex h-100 text-center border  border-4 border-secondary rounded py-5">
      <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3">
          <h1>404</h1>
          <p className="lead">PAGE NOT FOUND</p>
          <p className="lead">
            <a href="/" className="btn btn-lg btn-info fw-bold  ">
              Home
            </a>
          </p>
        </main>
        {/* 
  <footer className="mt-auto text-white-50">
    <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
  </footer> */}
      </div>
    </div>
  );
}
