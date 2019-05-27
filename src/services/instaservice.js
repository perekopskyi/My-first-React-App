export default class InstaService {
  constructor() {
    this._apiBase = 'http://localhost:3000/'
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) { // .ok встроенный в fetch метод 
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return res.json(); // .json() встроенный в fetch метод 
  }

  getAllPosts = async () => {
    const res = await this.getResource('posts/');
    return res;
  }

  
}