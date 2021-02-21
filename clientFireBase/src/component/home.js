import React from 'react';
import Menu from './menu'
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import './style.css'
function mapStateToProps(state) {
  return {
    user: state.userReduser.user
  }
}
export default connect(mapStateToProps)(function Home(props) {
  const { user } = props
  let name = user.firstName + " " + user.lastName
  return (
    <div id="bodym">
      <Menu />
      <div className="row mt-5">
        <div className="col-1">

          <Avatar className="top" name={name} size="55" round={true} color={Avatar.getRandomColor('blue')} />
        </div>
        <div className="col-11">
          <h1 className="mt-5">Welcome  {user.firstName} {user.lastName} </h1>
          <p  className="p">in this project you can add ,edit and delete posts
          <br></br>
             and read alot shared posts
            </p>
        </div>
      </div>

    </div >
  )
})
