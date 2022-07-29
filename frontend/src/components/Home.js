// 1. Components are JavaScript Functions.
// 2. Function name should start with uppercase letter.
// 3. Function should contain a top-level return statement.
// 4. Function should exported in order to add in App.js

import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";
import React from "react";


const Home = () => {
  const creator = "Facebook";
  const item = <li>Apple</li>;
  const loginStatus = false;
  const subscribed = true;

  const showCard = (title) => {
    return (
      <div className="card mt-5">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <h3>Card Body</h3>
        </div>
      </div>
    );
  };

  return (
    <div style={{ background: "#eee" }}>
      <h1 style={{ backgroundColor: "yellow", color: "red" }}>
        Home component
      </h1>

      <div className="container mt-5">
        <h2>React was created by {creator}</h2>
        {showCard("First Card")}
        {showCard("Second Card")}
        <button className="btn btn-primary">
          {loginStatus ? "Logout" : "Login Now"}
        </button>

        <button disabled={subscribed} style={styles.subsBtn} className="btn">
          {subscribed ? "Subscribed" : "Subscribe"}&nbsp;
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </button>

        {item}
        {item}
        {item}
        {item}
        <div className="container mt-5">
          <Button>MUI button 1 </Button>
          <Button variant= "contained" color="primary"> MUI Button 2 </Button>
          <Button variant= "outlined" color="error"> MUI Button 3 </Button>

          <Card className="mt-5">
            <CardHeader title="Card Header"></CardHeader>
            <CardContent>
              <h2>Material UI Card</h2>
            </CardContent>
            <CardActions>
              <Button color="error" variant ="contained">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

const styles = {
  subsBtn: {
    backgroundColor: "red",
    color: "white",
  },
};

export default Home;