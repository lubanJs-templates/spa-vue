export default class Storage {
  constructor(type = 'localStorage') {
    this.storage = type === 'localStorage' ? localStorage : sessionStorage
  }
  set = (key, value) => {
    try {
      if (typeof value === 'string') {
        this.storage.setItem(key, value)
      } else {
        value = JSON.stringify(value)
        this.storage.setItem(key, value)
      }
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  get = (key) => {
    const data = this.storage.getItem(key)
    try {
      const value = JSON.parse(data)
      return value
    } catch (error) {
      return data
    }
  }
  remove = (key) => {
    try {
      this.storage.removeItem(key)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  clearAll = () => {
    try {
      window.localStorage.clear()
      return true
    } catch (e) {
      return false
    }
  }
  getAll = () => {
    const array = []
    for (let i = 0; i < this.storage.length; i++) {
      let key = this.storage.key(i)
      array.push(this.get(key))
    }
    return array
  }
}
