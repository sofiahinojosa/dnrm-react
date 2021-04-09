/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "../styles/users.css";

export default function Effect() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://faunadb.herokuapp.com/get-users")
      .then((data) => data.json())
      .then((items) => setData(items["data"]));
  }, []);

  const deleteUser = (e) => {
    let id = e.target.parentNode.value
    return fetch("https://faunadb.herokuapp.com/delete-user/" + id, {
      method: 'delete'
    }).then(response => response.json());
  };

  const isAdmin = () => {
    let key = localStorage.getItem('key');
    if (key === 'admin') {
      return true;
    }
    return false;
  }

  return (
    <div>
      <Helmet>
        <title>useEffect | Daniel Medina</title>
      </Helmet>
      {data ? (
        <>
          <h1 style={{ fontSize: "3em" }}>Users</h1>
          <br />
          <hr />
          <br />
          {data.map((i) => {
            let name = i["data"]["name"] + " " + i["data"]["lastname"];
            let ref = i["ref"]["@ref"]["id"];

            return (
              <>
                <div className="user" key={ref}>
                  <div className="image">
                    <img
                      src={i["data"]["img"]}
                      alt={`${name}'s profile picture.`}
                      className="profile-pic"
                    />
                  </div>
                  <div className="text">
                    <h1>
                      <Link to={`/details/${ref}`} className="details">
                        {name}
                      </Link>
                    </h1>
                    <h3>{i["data"]["birthDate"]}</h3>
                  </div>
                  {isAdmin() && <button className="delete-button" value={ref} onClick={(e) => deleteUser(e)}><i className="fas fa-trash"></i></button>}
                </div>
                <br />
              </>
            );
          })}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
