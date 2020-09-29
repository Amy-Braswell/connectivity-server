const { gql } = require('apollo-server');

module.exports = gql`
  type Banner {
    id: ID!
    banner: String!
    createdAt: String!
  }
  type Comment {
    id: ID!
    createdAt: String!
    name: String
    picture: String
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    name: String
  }
  type Photo {
    id: ID!
    picture: String!
    createdAt: String!
  }
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    name: String
    userId: String
    picture: String
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type User {
    id: ID!
    name: String
    password: String
    email: String
    phone: String
    about: String
    relation: String
    picture: String
    banner: String
    city: String
    state: String
    token: String
    createdAt: String
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    updateProfile(updateInput: updateProfileInput): User!
    createBanner(banner: String!): Banner
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    likePost(postId: ID!): Post!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    createPhoto(picture: String!): Photo
    deletePhoto(photoId: ID!): Photo!
  }
  type Query {
    getPhotos: [Photo]
    getPhoto(photoId: ID!): Photo
    getPosts: [Post]
    getPost(postId: ID!): Post
    getUsers: [User]
    getUser(userId: ID!): User
    user: User
  }
  type Subscription {
    newPost: Post!
  }
  input RegisterInput {
    name: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  input updateProfileInput {
    email: String!
    phone: String
    city: String
    state: String
    about: String
    relation: String
    picture: String
    banner: String
  }
`






