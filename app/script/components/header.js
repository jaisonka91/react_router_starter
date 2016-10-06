import React from "react";
import { Link } from 'react-router'

export default class Header extends React.Component {
  render(){
    return(
      <div style={Styles.header}>
        <div style={{textAlign: 'center', padding: 10}}>
          <Link to="home">
            <span style={{fontSize: 25, fontWeight: 600}}>
              {`GALE-TECH`}
            </span>
          </Link>
        </div>
      </div>
    )
  }
}

let Styles = {
  header: {
    height: 50,
    background: '#f2f2f2',
    width: '100%',
    overflow: 'hidden'
  }
}
