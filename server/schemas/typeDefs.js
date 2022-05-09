const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        savedBooks: [Book]!
    }

    type Book {
        bookID: ID
        authors: [String]!
        description: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
      }
    
    type Query {
        users: [User]
        user(username: String!): User
        books(username: String): [Book]
        book(bookId: ID!): Book
        me: User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookId: ID!): Book
        deleteBook(bookId: ID!): Book
    }

`;

module.exports = typeDefs;
