import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        < User 
        src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
        alt="John"
        name="John_Woodman" />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          заглушка заглушка заглушка заглушка заглушка
        </div>
      </div>
    )
  }
}