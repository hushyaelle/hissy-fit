import * as React from "react"
import { Link } from "gatsby"
import Navigation from './navigation';

const mainStyles = {
  backgroundColor: "#e3c5fc",
  
}

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const footerStyle = {
  position: "fixed",
  left: 60,
  bottom: 0,
  right: 0,
}

const IndexPage = () => {
  return (
    <main style={mainStyles}>
      <head>
        <title>
          Hissy Fit
        </title>
      </head>
      <body style={pageStyles}>
      <h1 style={headingStyles}>
        Hissy Fit
        <br />
        <span style={headingAccentStyles}>— tech . punk . feminists.</span>
      </h1>
        <Navigation />
      </body>
      <footer style={footerStyle}>
      <ul style={listStyles}>
          <li style={linkStyle}> 
            <Link to="/about/">About</Link>
          </li>
      </ul>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
