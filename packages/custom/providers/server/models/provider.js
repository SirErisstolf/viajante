'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Provider Schema
 */
var ProviderSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  contentImages: [{
    type: String
  }],
  servicesImages: [{
    type: String
  }],
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  permissions: {
    type: Array
  },
  updated: {
    type: Array
  },
  bannerImg: {
    type: String//,
    //required: true,
    //trim: true
  },
  bgColorSection: {
    type: String//,
    //required: true,
    //trim: true
  },
  textColor: {
    type: String//,
    //required: true,
    //trim: true
  },
  lodgingType: {
    type: String//,
    //required: true,
    //trim: true
  },
  cabin: [{
    name: String,
    capacity: Number,
    price: Number,
    image: String
  }],
  service: [{
    name: String,
    capacity: Number,
    description: String
  }],
  location: [{
    address: String,
    lat: Number,
    lon: Number,
    city: String
  }],
  contact: [{
    person: String,
    phone: Number,
    website: String,
    email: String
  }],
  notifications: [{
    visible: Boolean,
    message: {
      type: String,
      required: true,
      trim: true
    },
    tipo: String
  }]
});

/**
 * Validations
 */
ProviderSchema.path('title').validate(function (title) {
  return !!title;
}, 'Title cannot be blank');

ProviderSchema.path('content').validate(function (content) {
  return !!content;
}, 'Content cannot be blank');

/**
 * Statics
 */
ProviderSchema.statics.load = function (id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Provider', ProviderSchema);

