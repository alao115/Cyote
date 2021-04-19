import mongoose from 'mongoose'
const { connect } = mongoose
import config from '../config'

export default () => {
  return new Promise((resolve, reject) => {
    connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
      .then(connection => resolve(connection))
      .catch(err => reject(err));
    })
}