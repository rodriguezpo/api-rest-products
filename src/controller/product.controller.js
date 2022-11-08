import { pool } from './../config/connection.js'

const error = {
  status: 404,
  error: 'SQLError'
}

export const getProducts = async (req, res) => {
  const [products] = await pool.query(`SELECT * FROM products`)
  res.json({ products })
}

export const getProduct = async (req, res) => {
  const { id } = req.params
  const [[rows]] = await pool.query(`SELECT * FROM products WHERE (id = ?)`, [id])

  if(!rows) throw {
    ...error,
    field: 'id',
    message: `product ${id} not found`
  }

  res.json({
    status: 200,
    info: `get product ${id}`,
    rows
  })
}

export const insertProduct = async (req, res) => {
  const { description, price } = req.body
  const [result] = await pool.query(`INSERT INTO products(description, price) VALUES(?, ?)`, [description, price])

  res.json({
    status: 200,
    info: 'insert product',
    rows: `product ${result.insertId} has been inserted`
  })
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const { description, price } = req.body

  const [result] = await pool.query(`UPDATE products SET description = IFNULL(?, description), price = IFNULL(?, price) WHERE (id = ?)`, [description, price, id])

  if(!result.affectedRows) throw {
    ...error,
    field: 'id',
    message: `product ${id} not found`
  }

  res.json({
    status: 200,
    info: 'update product',
    rows: `product ${id} has been updated`
  })
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params
  const [result] = await pool.query(`DELETE FROM products WHERE (id = ?)`, [id])

  if(!result.affectedRows) throw {
    ...error,
    field: 'id',
    message: `product ${id} not found`
  }

  res.json({
    status: 200,
    info: 'delete product',
    rows: `product ${id} has been removed`
  })
}
