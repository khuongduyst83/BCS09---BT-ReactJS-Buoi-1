import React, { Component } from "react";
import "./style.scss";
export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="banner">
            <h1>A warm welcome!</h1>
            <p>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <button>Call to action</button>
          </div>
          <div className="text-center d-flex justify-content-between">
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="" className="card-img-top" alt="500x352" /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="" className="card-img-top" alt="500x352" /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="" className="card-img-top" alt="500x352" /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="" className="card-img-top" alt="500x352" /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="" className="card-img-top" alt="500x352" /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="" className="card-img-top" alt="500x352" /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
