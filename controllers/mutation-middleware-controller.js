require('dotenv').config();
const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const User = require('../models/User')


// Controller to verify user for New Posts, Likes, Comments and Delete Button
module.exports = async (context) => {
  const authHeader = context.req.headers.authorization; 
  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];
    if (token) {
      try {
        let user = jwt.decode(token, process.env.SECRET_KEY);
        return user
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired token');
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error('Authorization header must be provided');
};




























