module.exports = (request, response, next) => {
  return response.status(404).send({ error: 'unknown endpoint' })
}
