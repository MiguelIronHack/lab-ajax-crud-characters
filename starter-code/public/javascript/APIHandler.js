class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl + '/characters';
  }

  getFullList() {
    axios
      .get(this.BASE_URL)
      .then(res => {
        showData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  getOneRegister(id) {
    axios
      .get(`${this.BASE_URL}/${id}`)
      .then(res => {
        console.log('One register: ', res.data);
      })
      .catch(err => {
        console.error('The error is: ', err);
      });
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    axios
      .post(this.BASE_URL, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      })
      .then(req, res => {
        res.send('data sent');
      })
      .catch(err => {
        console.error('The error is: ', err);
      });
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    axios
      .patch(`${this.BASE_URL}/${id}`, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      })
      .then(res => {
        showData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(`${this.BASE_URL}/${id}`)
      .then(res => {
        showData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
