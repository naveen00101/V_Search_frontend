import React from "react";

import "./index.css";

const Result = (props) => {
  const { result, searchText } = props;
  const { customers, people, users } = result || {};
  //   console.log(props);
  //   console.log(result);
  //   console.log(customers);
  //   console.log(people);
  //   console.log(users);

  const c = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="info-container">
          <p className="result-info">{`${customers.length} results from Customers Data`}</p>
          <p className="result-src-info">source : Raw_1</p>
        </div>
        <hr />
        <div className="header">
          <h4>Name</h4>
          <h4>Age</h4>
          <h4>City</h4>
          <h4>Last Purchase amount</h4>
        </div>
        <div className="result">
          <div>
            {customers.map((customer) => (
              <p>{customer.name}</p>
            ))}
          </div>
          <div>
            {customers.map((customer) => (
              <p>{customer.age}</p>
            ))}
          </div>
          <div>
            {customers.map((customer) => (
              <p>{customer.city}</p>
            ))}
          </div>
          <div>
            {customers.map((customer) => (
              <p>{customer.last_purchase_amount}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const p = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="info-container">
          <p className="result-info">{`${people.length} results from People Data`}</p>
          <p className="result-src-info">source : Raw_2</p>
        </div>

        <hr />
        <div className="header-3">
          <h4>Name</h4>
          <h4>Age</h4>
          <h4>City</h4>
          <h4>Occupation</h4>
          <h4>Phone</h4>
        </div>
        <div className="result-3">
          <div
            style={{ display: "flex", flexDirection: "column", width: "100px" }}
          >
            {people.map((person) => (
              <p>{person.name}</p>
            ))}
          </div>
          <div>
            {people.map((person) => (
              <p>{person.age}</p>
            ))}
          </div>
          <div>
            {people.map((person) => (
              <p>{person.city}</p>
            ))}
          </div>
          <div>
            {people.map((person) => (
              <p>{person.occupation}</p>
            ))}
          </div>
          <div>
            {people.map((person) => (
              <p>{person.phone}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const u = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="info-container">
          <p className="result-info">{`${users.length} results from Users Data`}</p>
          <p className="result-src-info">source : NxtWave_Raw</p>
        </div>

        <hr />
        <div className="header-3">
          <h4>Name</h4>
          <h4>Age</h4>
          <h4>Country</h4>
          <h4>Email</h4>
          <h4>Phone</h4>
        </div>
        <div className="result-3">
          <div>
            {users.map((user) => (
              <p>{user.name}</p>
            ))}
          </div>
          <div>
            {users.map((user) => (
              <p>{user.age}</p>
            ))}
          </div>
          <div>
            {users.map((user) => (
              <p>{user.country}</p>
            ))}
          </div>
          <div>
            {users.map((user) => (
              <p>{user.email}</p>
            ))}
          </div>
          <div>
            {users.map((user) => (
              <p>{user.mobile}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {searchText !== "" &&
      result.customers.length !== 0 &&
      result.people.length !== 0 &&
      result.users.length !== 0 ? (
        <h1 className="result-heading">Results for "{searchText}"</h1>
      ) : (
        <></>
      )}

      {searchText !== "" ? (
        <></>
      ) : (
        <div className="result-heading-2">
          <h1>Search Results here</h1>
        </div>
      )}

      {searchText !== "" &&
      customers.length === 0 &&
      users.length === 0 &&
      people.length === 0 ? (
        <div className="result-heading-3">
          <img
            src="https://component.gallery/static/8d36eaa25b6dcb026685101ebc379022/Empty%20state%20icon..svg"
            alt="not found"
            className="not-found"
          />
          <h4 className="nothing-text">Nothing Found for "{searchText}"</h4>
        </div>
      ) : (
        <></>
      )}

      {result && customers.length !== 0 && c()}
      {result && users.length !== 0 && u()}
      {result && people.length !== 0 && p()}
    </>
  );
};

export default Result;
