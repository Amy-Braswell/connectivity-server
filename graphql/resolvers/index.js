const commentsResolvers = require('./comments');
const photosResolvers = require('./photos')
const postsResolvers = require('./posts');
const usersResolvers = require('./users');


module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length
  },
  Query: {
    ...photosResolvers.Query,
    ...postsResolvers.Query,
    ...usersResolvers.Query,
  },
  Mutation: {
    ...commentsResolvers.Mutation,
    ...photosResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...usersResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription
  }
};