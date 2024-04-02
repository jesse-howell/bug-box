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
    addBug(bug: String!): User
    removeUser(userId: ID!): User
    removeBug(bug: String!): User
  }
  #may need delete bug 
 
`;

module.exports = typeDefs;
