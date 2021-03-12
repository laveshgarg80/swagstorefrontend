import React from 'react'
import Menu from './Menu';

const Base = ({
  title="My Title",
  description="My description",
  className="#343a40 text-white p-4 my-3",
  children
}) => (
    <div>
        <Menu/>
        <div className="container-fluid">
            <div className="jumbotron #343a40 text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead ">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer #343a40 mt-auto py-3">
          <div className="container-fluid bg-success text-white text-center py-3 my-4">
              <h4>If you Have any questions, Feel free to reach out</h4>
              <button className="btn btn-warning btn-lg">Contact us</button>
          </div>
          <div className="container">
              <span className="text-muted">
                  An Amazing <span className="text-white">mern</span> Bootcamp
              </span>
          </div>
        </footer>
    </div>
)

export default Base;