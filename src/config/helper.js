import { pool } from './connection.js'

export const helperValidationsProducts = callback => (req, res, next) => {
  try {
    const { params, body } = req
    callback({ params, body })
    next()
  }
  catch(error) { next(error) }
}

export const helperQuery = (next, query, data, callback) => {
  const callbackQuery = (err, result) => {
    try {
      if( err ) throw { status: 500, name: 'SQLError', field: null, message: 'error in your SQL syntax' }
      callback(result)
    } catch(error) { next(error) }
  }

  const sql = {
    true: pool.query(query, data, callbackQuery),
    false: pool.query(query, callbackQuery)
  }

  return sql[!!data.length]
}
