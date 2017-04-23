export default {
  getThing: (url) => {
    return fetch(url)
      .then(
        (response) => {
          return response.json()
        },
        (err) => {
          console.log(err);
        })
      .then((data) => {
        return Promise.resolve(data)
      })
  }
}
