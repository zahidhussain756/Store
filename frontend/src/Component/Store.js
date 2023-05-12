import React, { useEffect, useState } from "react";
import "./Store.css";
import { Storehome } from "./Storehome";

function Store(props) {
  <Storehome />;
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    var value = await fetch("http://127.0.0.1:6100/forms");
    value = await value.json();
    setData(value);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const { onAdd } = props;
  return (
    //Store Home Screen start
    <div className="bg-dark mt-0 mt-2">
      {/* cart start */}

      <div className="container">
        <div className="row gx-1 gx-lg-1 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((item) => (
            <div className="col mb-5">
              <div className="card h-100" key={item._id}>
                {/* Product image*/}

                <img
                  className="card-img-top"
                  src={`http://127.0.0.1:6100/${item.image}`}
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h4 className="fw-bolder">{item.name} </h4> <br />
                    <h5> {item.description}</h5>
                    {item.price}
                  </div>
                </div>

                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      onClick={() => onAdd(item)}
                      className="btn btn-outline-dark mt-auto"
                      to="#"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
