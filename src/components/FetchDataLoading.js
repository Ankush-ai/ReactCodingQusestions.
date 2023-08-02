import React, { useState, useEffect } from "react";
export default function UsersData() {
  const [Users, fetchUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://fake-hotel-api.herokuapp.com/api/hotels")
      .then((res) => res.json())
      .then((res) => {console.log(res); fetchUsers(res); setIsLoaded(true) },
            (error) => {setError("Error!!"); setIsLoaded(true) });
  }, []);
  const containsErrorMessage = () => { return <div>Error: {error.message}</div>};
  const isLoading = () => { return <div>Loading...</div>};
  const results = () => {
    return (
      <>
        <ul>
          {Users.map((result) => (
            <li key={result.id}>
              <b>Id</b>: {result.id} <br />
              <b>Name</b>:: {result.name} <br />
              <b>Description</b>:: {result.description} <hr />
            </li>
          ))}
        </ul>
      </>
    );
  };
  if (error) return containsErrorMessage();
  return !isLoaded ? isLoading() : results()};