import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false
  }

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded) // обрабатываем промис, если работает
      .catch(this.onError) // обрабатываем промис, если ошибка
  }

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true
    })
  }

  renderItems(arr) {
    return arr.map(item => {
      const {name, altname, photo, id} = item;

      return (
        < div key = {id}>
          <User 
            src={photo} 
            alt={altname}
            name={name}
            min
          />
        </div>
      )
    })
  }

  render() {
    const {error, posts} = this.state;
    if (error) {
      return <ErrorMessage/>
    }

    const items = this.renderItems(posts);

    return(
      < div className = "right" >
        {items}
      </div>
    )
  }


  // return (
  //   <div className="right">
  //     <User
  //       src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
  //       alt="John"
  //       name="John_Woodman"
  //     />
  //     <div className="users__block">
  //       <User
  //         src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
  //         alt="John"
  //         name="John_Woodman" 
  //         min
  //       />
  //       <User
  //         src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
  //         alt="John"
  //         name="John_Woodman"
  //         min
  //       />
  //       <User
  //         src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
  //         alt="John"
  //         name="John_Woodman"
  //         min
  //       />
  //       <User
  //         src="https://lady-rf.ru/wp-content/uploads/2018/02/o-BEARD-facebook-e1520204759147-1000x500-1-e1531818498814.jpg"
  //         alt="John"
  //         name="John_Woodman"
  //         min
  //       />
  //     </div>
  //   </div>
  // )
}
