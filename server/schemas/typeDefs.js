const typeDefs = `
type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
    type Query {
        books: [Book]
    }
`;
module.exports = typeDefs;
