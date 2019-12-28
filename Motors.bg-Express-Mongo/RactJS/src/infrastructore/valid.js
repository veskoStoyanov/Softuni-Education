import * as yup from 'yup';
class Valid {

  static login(username, password) {

    let schema = yup.object().shape({
      username: yup.string().required().min(2),
      password: yup.string().min(6).required(),
    });

    return schema.validate({ username: username, password: password })
      .then(() => {
        let error = false;
        return error
      })
      .catch((err) => {
        let error = err.errors[0].split(',')[0];
        return error

      })
  }

  static filldsAreRequired(input) {
    let data = Object.keys(input)
    let err = '';

    for (let index = 0; index < data.length; index++) {

      if (input[data[index]] === "") {
        err = data[index]
        break;
      }
    }
    return err;

  }

  static register(username, password, repeatPass, image) {

    if (!image.startsWith('http')) {
      return 'Url should start with http';
    } else if (username === 'Admin' && password !== '1234567') {
      return 'You Are Not Admin!'
    }

    let schema = yup.object().shape({
      username: yup.string().required().min(2),
      password: yup.string().min(6).required(),
      repeatPass: yup.string().min(6).required().oneOf([yup.ref('password'), null]),
      image: yup.string().required().min(5)
    });

    return schema.validate({ username: username, password: password, repeatPass: repeatPass, image: image })
      .then(() => {
        let error = false;
        return error
      })
      .catch((err) => {
        let error = err.errors[0].split(',')[0];
        return error

      })
  }

  static video(model, url) {
    if (!url.startsWith('https://www.youtube.com/')) {
      return 'Url address should be from YouTube';
    }

    let schema = yup.object().shape({
      model: yup.string().required().min(2),
      url: yup.string().required(),

    });

    return schema.validate({ model: model, url: url })
      .then(() => {
        let error = false;
        return error
      })
      .catch((err) => {
        let error = err.errors[0].split(',')[0];
        return error

      })
  }

  static motor(city, price, model, image, description) {
    if (!image.startsWith('http')) {
      return 'Url address should starts with http...!';
    }

    let schema = yup.object().shape({
      city: yup.string().required(),
      price: yup.number().integer().positive().required(),
      image: yup.string().required(),
      model: yup.string().required().min(2),
      description: yup.string().required().min(10),
    });

    return schema.validate({ city: city, price: price, model: model, image: image, description: description })
      .then(() => {
        let error = false;
        return error
      })
      .catch((err) => {
        let error = err.errors[0].split(',')[0];
        return error

      })
  }

  static hotel(city, price, name, image) {
    if (!image.startsWith('http')) {
      return 'Url address should starts with http...!';
    }

    let schema = yup.object().shape({
      city: yup.string().required(),
      price: yup.number().integer().positive().required(),
      image: yup.string().required(),
      name: yup.string().required().min(2),
     
    });

    return schema.validate({ city: city, price: price, name: name, image: image})
      .then(() => {
        let error = false;
        return error
      })
      .catch((err) => {
        let error = err.errors[0].split(',')[0];
        return error

      })
  }

}




export default Valid;
