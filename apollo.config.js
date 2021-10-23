module.exports = {
  client: {
    service: {
      name: 'movie searcher',
      localSchemaFile: 'apollo/schema.graphql',
    },
    includes: ['apollo/queries.graphql'],
  },
}
