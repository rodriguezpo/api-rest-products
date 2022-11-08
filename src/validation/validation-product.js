export const validateProduct = data => {
  const { params: { id }, body } = data

  if ( id ) validateIDProduct( id )
  if ( !Object.keys(body).length ) return null

  const { price, description } = body

  validateDescriptionProduct( description )
  validatePriceProduct( price )
}

const validateIDProduct = id => {
  const error = { status: 404, error: 'IDError', field: 'id' }

  if ( isNaN(id) ) throw { ...error, message: 'product ID must be a number' }
  if ( Number(id) <= 0 ) throw { ...error, message: 'product ID must be greater than zero' }
  if ( !(/^\d+$/.test(id)) ) throw { ...error, message: 'product ID must be an integer' }
}

const validateDescriptionProduct = description => {
  const error = { status: 404, error: 'DescriptionError', field: 'description' }

  if( description.length < 3 ) throw { ...error, message: 'description must contain at least 3 letters' }
  if ( !(/^[a-zA-Z]{3,}$/.test(description)) ) throw { ...error, message: 'product description must be alphabetical' }
}

const validatePriceProduct = price => {
  const error = { status: 404, error: 'PriceError', field: 'price' }

  if ( isNaN(price) ) throw { ...error, message: 'product price must be a number' }
  if ( Number(price) <= 0 ) throw { ...error, message: 'product price must be greater than zero' }
}
