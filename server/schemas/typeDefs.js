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
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
    login(email:String!, password:String!): Auth
    updateUsername(userId: ID!, username: String!): User
    # TODO: remove userId value when make other context.user changes
    addBug(userId: ID!, bug: String!): User
    removeUser(userId: ID!): User
    # TODO: remove userId value when make other context.user changes
    removeBug(bug: String!): User
    # TODO: need to add a updateBug mutation???
  }
`;

module.exports = typeDefs;
