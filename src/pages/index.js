import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/about/">About</Link>
        <h1>I like the way you work it!</h1>
        <h2>(No diggity!)</h2>
        <p>I like to bag it up! (Bag it up!)</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)