import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

function Form() {
  // const [data, setData] = useState([]);
  // const Shipfetch = async () => {
  //   var value = await fetch("http://localhost:4000/gship");
  //   value = await value.json();
  //   setData(value);
  // };

  // useEffect(() => {
  //   Shipfetch();
  // });

  const empty = {
    name: "",
    description: "",
    price: "",
    image: null,
  };
  const [handle, setHandle] = useState(empty);
  const [formData, setFormData] = useState([]);
  const [getId, setGetId] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const handler = (e) => {
    setHandle({ ...handle, [e.target.name]: e.target.value });
    console.log(handle);
  };
  const fileHandler = (e) => {
    setHandle({ ...handle, [e.target.name]: e.target.files[0] });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const myFormData = new FormData();

    myFormData.append("name", handle.name);
    myFormData.append("description", handle.description);
    myFormData.append("price", handle.price);
    myFormData.append("image", handle.image);

    if (!isUpdating) {
      await fetch("http://127.0.0.1:6100/forms", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(handle),
        body: myFormData,
      });
      // console.log(myFormData);
      // console.log(JSON.stringify(myFormData));
    } else {
      await fetch(`http://127.0.0.1:6100/forms/${getId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(handle),
      });
      setIsUpdating(!isUpdating);
    }
    handle.name = "";
    handle.description = "";
    handle.price = "";
    handle.image = null;
    showData();
  };

  const showData = async () => {
    var data = await fetch("http://127.0.0.1:6100/forms");
    data = await data.json();
    setFormData(data);
    // console.log(data);
  };

  const editData = async (id) => {
    var data = await fetch(`http://127.0.0.1:6100/forms/${id}`);
    data = await data.json();
    setGetId(id);
    setIsUpdating(!isUpdating);
    setHandle(data);
    console.log(handle);
  };

  const deleteData = async (id) => {
    await fetch(`http://127.0.0.1:6100/forms/${id}`, { method: "Delete" });
    showData();
  };
  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="conatiner-fluid mt-5">
      <h2
        className="text-info display-4 text-center"
        style={{ marginTop: "120px" }}
      >
        Welcome to Admin Panel
      </h2>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <label>Enter Your Product Name</label>
            <input
              type="text"
              name="name"
              onChange={handler}
              value={handle.name}
              className="px-5 py-2 border border-black m-2"
            />
          </div>
          <div>
            <label>Enter Your Product Description</label>
            <input
              type="text"
              name="description"
              onChange={handler}
              value={handle.description}
              className="px-5 py-2 border border-black m-2"
            />
          </div>

          <div>
            <label>Enter Price</label>
            <input
              type="text"
              name="price"
              onChange={handler}
              value={handle.price}
              className="px-5 py-2 border border-black m-2"
            />
          </div>
          <div>
            <label>Upload picture</label>
            <input
              type="file"
              name="image"
              onChange={fileHandler}
              className="px-5 py-2 border border-black m-2"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary px-5 py-2  border-2 rounded-md border-black m-2"
          >
            Add Product
          </button>
        </form>
      </div>
      <div>
        <table className="table table-responsive ">
          <tbody>
            <tr>
              <th className="px-5 py-2 border border-black">Id</th>
              <th className="px-5 py-2 border border-black">Name</th>
              <th className="px-5 py-2 border border-black">Description</th>
              <th className="px-5 py-2 border border-black">Price</th>
              <th className="px-5 py-2 border border-black">Images</th>
            </tr>
            {formData.map((element) => {
              return (
                <tr key={element._id}>
                  <td className="px-5 py-2 border border-black">
                    {element._id}
                  </td>
                  <td className="px-5 py-2 border border-black">
                    {element.name}
                  </td>
                  <td className="px-5 py-2 border border-black">
                    {element.description}
                  </td>
                  <td className="px-5 py-2 border border-black">
                    {element.price}
                  </td>
                  <td className="px-5 py-2 border border-black">
                    <img
                      src={`http://127.0.0.1:6100/${element.image}`}
                      style={{ width: "300px", height: "200px" }}
                    />
                  </td>
                  <td>
                    <AiFillEdit
                      className="text-2xl hover:scale-110 transition duration-300 cursor-pointer mx-2 text-primary"
                      onClick={() => {
                        editData(element._id);
                      }}
                    />
                  </td>
                  <td>
                    <MdDelete
                      className="text-2xl hover:scale-110 transition duration-300 cursor-pointer mx-2 text-danger"
                      onClick={() => {
                        deleteData(element._id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
