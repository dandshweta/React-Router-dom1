import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Productmain() {
  const [data, setdata] = useState([]);
  const [loneoutput, setloneoutput] = useState([]);
  const [input, setinput] = useState([
    {
      label: "laptops",
      ischecked: false,
      value: "laptops",
      products: [],
    },
    {
      label: "jewlery",
      ischecked: false,
      value: "womens-jewellery",
      products: [],
    },
    { label: "groceries", ischecked: false, value: "groceries", products: [] },
    {
      label: "fragrances ",
      ischecked: false,
      value: "fragrances ",
      products: [],
    },
    {
      label: "automotive",
      ischecked: false,
      value: "automotive",
      products: [],
    },
  ]);
  const submitfn = (e) => {
    e.preventDefault();
  };

  const inputchange = (e) => {
    let newinput = [...input];

    const { name, value } = e.target;
    for (let i = 0; i < newinput.length; i++) {
      if (newinput[i].label === name) {
        newinput[i].ischecked = !newinput[i].ischecked;

        fetchdatanext(value);
        setinput(newinput);
      }
    }
  };
  console.log("rerender", input);

  let fetchdatanext = async (value) => {
    let data = await fetch(`https://dummyjson.com/products/category/${value}`);
    let jsondata = await data.json();
    console.log(jsondata);
    setloneoutput(jsondata.products);
  };

  let fetchdata = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let jsondata = await data.json();
    console.log(jsondata);
    setdata(jsondata.products);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    let newinput = [...input];
    for (let i = 0; i < newinput.length; i++) {
      if (newinput[i].ischecked === true && newinput[i].products.length === 0) {
        newinput[i].products = loneoutput;
      } else if (!newinput[i].ischecked) {
        newinput[i].products = [];
      }
      setinput(newinput);
    }
  }, [loneoutput]);
  useEffect(() => {
    let newlist = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].ischecked === true) {
        newlist = [...newlist, ...input[i].products];
      }
    }
    setdata(newlist);
  }, [input]);
  return (
    <div>
      {data.length === 0 ? (
        <div>still loading</div>
      ) : (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <form action="" onSubmit={(e) => submitfn(e)}>
              {input.map((elm) => {
                return (
                  <span key={elm.label}>
                    <input
                      key={elm.label}
                      name={elm.label}
                      type="checkbox"
                      value={elm.value}
                      checked={elm.ischecked}
                      onChange={(e) => inputchange(e)}
                    />
                    <label htmlFor="">{elm.label}</label>
                  </span>
                );
              })}

              <input type="text" />
              <input type="submit" />
            </form>
          </div>
          {data.map((elm) => {
            return (
              <Link
                key={elm.id}
                to={`/product/${elm.id}?productId=${elm.id}&title=${elm.title}`}
              >
                <div
                  style={{
                    padding: 12,
                    width: "200px",
                    overflow: "hidden",
                    border: "1px solid black",
                  }}
                >
                  <div>{elm.title}</div>
                  <div>Price:{elm.price}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
