import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Palette extends Component {
  InstaService = new InstaService();
  state = {
    photos: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded) // обрабатываем промис, если работает
      .catch(this.onError) // обрабатываем промис, если ошибка
  }

  onPhotosLoaded = (photos) => {
    this.setState({
      photos,
      loading: false,
      error: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true
    })
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {src, alt, id} = item;
      return (
        <img src={src} alt={alt} key={id}></img>
      )
    })
  }

  render() {
    const {error, photos} = this.state;
    if (error) {
      return <ErrorMessage/>
    }

    const items = this.renderItems(photos);

    return(
      <div className="palette">
        {items}
      </div>
    )
  }
} 