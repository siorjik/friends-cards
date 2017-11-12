import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import Friends from "./containers/Friends";

import {deleteFriend, addFriend, saveFriend} from "./actions/frendActions";

class App extends Component {
  render() {
    return (
      <div className='main-wrap'>
        <Friends friends={this.props.friends} delFriend={this.props.delFriend} addFriend={this.props.addFriend} saveFriend={this.props.saveFriend}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.getFriends
  }
}

function mapDispatchToProps(dispatch) {
  /*return {
    delFriend: (friendId)=>{
      dispatch(deleteFriend(friendId));
    }
  }*/
  return bindActionCreators({
    delFriend: deleteFriend,
    addFriend: addFriend,
    saveFriend: saveFriend
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
