import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import CommonApis from "./Routes/CommonApis";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "./Store/UserSlice";
const Banner = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CommonApis.getUsers();
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData(); // Call the async function immediately
  }, []);

  return (
    <>
      <div
        style={{
          display: "block",
          width: "120em",
          padding: 20,
        }}
      >
        <Carousel>
          {user.map((item) => {
            return (
              <Carousel.Item
                interval={1500}
                key={item.id}
                style={{
                  width: "100%",
                  height: "70vh",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      backgroundColor: "#f2f2f2",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                  <div
                    style={{
                      marginLeft: "20px",
                      textAlign: "center",
                      color: "wheat",
                    }}
                  >
                    <h2 style={{ whiteSpace: "pre-wrap" }}>{item.title}</h2>
                    <p>Price: ${item.price}</p>
                    <p
                      style={{
                        width: "20rem",
                        color: "orangered", // Button text color
                        padding: "10px 20px", // Button padding
                        border: "1px solid orange", // Remove button border
                        borderRadius: "116px 13px 136px 13px",
                        boxShadow:
                          "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 15px 15px",
                        cursor: "pointer",
                      }}
                      onClick={() => dispatch(addtoCart(item))}
                    >
                      <Link to={`/ProductsView/${item.id}`}>Buy Now</Link>
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
