'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const WorkSchema = new mongoose.Schema({
    title: String,
    cover: String,
    type: { type: Number, default: 0 },
    count: { type: Number, default: 1 },
    countRange: [ Number ],
    content: String,
    teamworkPeriod: String,
    price: String,
    priceUnit: String,
    contactPerson: String,
    contactEmail: String,
    contactPhone: String,
    contactQQ: String,
    contactWechat: String,
    address: String,
    location: String,
    longitude: Number,
    latitude: Number,
    remoteAvailable: Boolean,
    requirements: [ String ],
    teamName: String,
    teamLogo: String,
    likes: { type: Number, default: 0 },
  });

  return mongoose.model('Work', WorkSchema);
};
