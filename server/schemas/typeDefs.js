const typeDefs = `#graphql
#maybe mandatory on username email password
#bugs was previously mandatory
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bugs: [String]!
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    # TODO: remove userId value when make other context.user changes
    addBug(userId: ID!, bug: String!): User
    removeUser(userId: ID!): User
    # TODO: remove userId value when make other context.user changes
    removeBug(userId: ID!, bug: String!): User
  }
`;

module.exports = typeDefs;
