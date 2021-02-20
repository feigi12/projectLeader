import React from 'react';
import Menu from './menu'
import { connect } from 'react-redux';
import Avatar from 'react-avatar';

function mapStateToProps(state) {
  return {
    user: state.userReduser.user
  }
}
export default connect(mapStateToProps)(function Home(props) {
  const { user } = props
  let name=user.firstName+" "+user.lastName
  return (
    <div id="bodym">
      <Menu />
      <div className="row mt-5">
        <div className="col-2">
      
          <Avatar className="top" name={name} size="55" round={true} color={Avatar.getRandomColor('blue')} />
        </div>
        <div className="col-10">
      <h2 className="mt-5">Welcome to {user.firstName} {user.lastName} </h2>

        </div>
      </div>

    </div >
  )
})
