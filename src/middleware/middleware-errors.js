export const endPointNotFound = (req, res, next) => {
  next({
    status: 404,
    error: 'endPointNotFound',
    message: 'endpoint not found',
    field: null,
  })
}

export const errors = (err, req, res, next) => {
  const { status, sql } = err
  if(sql) return res.status(500).json({ status: 500, error: 'SQLError', field: null, message: 'error in database' })
  res.status(status).json(err)
}
