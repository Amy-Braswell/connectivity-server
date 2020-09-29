const { AuthenticationError, UserInputError } = require('apollo-server');

const Banner = require('../../models/Banner')
const Photo = require('../../models/Photo');
const checkAuth = require('../../controllers/mutation-middleware-controller');

module.exports = {
  Query: {
    async getPhotos() {
      try {
        const photos = await Photo.find().sort({ createdAt: -1 });
        return photos;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPhoto(_, { photoId }) {
      try {
        const photo = await Photo.findById(photoId);
        if (photo) {
          return photo;
        } else {
          throw new Error('Photo not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createPhoto(_, { picture }, context) {

      if (picture.trim() === '') {
        throw new Error('Photo must not be empty');
      }

      const newPhoto = await new Photo({
        picture,
        createdAt: new Date().toISOString()
      })

      const uploadedPhoto = await newPhoto.save();

      return uploadedPhoto;
    },

    async createBanner(_, { banner }, context) {

      if (banner.trim() === '') {
        throw new Error('Banner must not be empty');
      }

      const newBanner = await new Banner({
        banner,
        createdAt: new Date().toISOString()
      })

      const uploadedBanner = await newBanner.save();

      return uploadedBanner;
    } 
  },
  Subscription: {
    newPost: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_POST')
    }
  }
};