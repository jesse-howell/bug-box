const { GraphQLError } = require('graphql');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new GraphQLError('You need to be logged in!');
    },
  },

  Mutation: {
    //For adding user
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    updateUsername: async (parent, { userId, username }, context) => {
      // if (context.user) {
      return User.findOneAndUpdate(
        // { _id: context.user._id },
        {
          _id: userId
        },
        {
          $set: { username: username },
        },
        {
          new: true,
          runValidators: true,
        },
      );
      // }
      throw new GraphQLError('User not authorized');
    },

    //Remove a user RS 040124
    // need to implement a tab/button somewhere on pg or user dashboard to facilitate this
    // need to change so that only a user can delete their own profile - ck module 21 act 25 for details
    // removeUser: async (parent, { userId }) => {
    //   return User.findOneAndDelete(
    //     { _id: userId });
    // },

    //For add bug
    // TODO: remove userId field from {} to limit who can remove
    addBug: async (parent, { userId, bug }, context) => {
      // if (context.user) {
      return User.findOneAndUpdate(
        // { _id: context.user._id },
        {
          _id: userId
        },
        {
          $addToSet: { bugs: bug },
        },
        {
          new: true,
          runValidators: true,
        },
      );
      // }
      throw new GraphQLError('User not authorized');
    },

    // For delete bug
    // TODO: remove userId field from {} to limit who can remove
    removeBug: async (parent, { userId, bug }, context) => {
      // if (context.user) {
      return User.findOneAndUpdate(
        // { _id: context.user._id },
        {
          _id: userId
        },
        {
          $pull: { bugs: bug },
        },
        {
          new: true,
        },
      );
      // }
      throw new GraphQLError('User not authorized');
    }
  }
};

module.exports = resolvers;
