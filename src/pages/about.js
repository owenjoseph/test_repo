import React from "react"
import Header from "../components/header"
import { Link } from "gatsby";

export default () => (
  <div>
    <Header headerText="About Gatsby" />
    <p>Such wow. Very React.</p>
    <Link to="/">Home</Link>
  </div>
)