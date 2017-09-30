'use strict';

// had enabled by egg
// exports.static = true;

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.weappSDK = {
  enable: true,
  package: 'egg-weapp-sdk',
};

exports.rest = {
  enable: true,
  package: 'egg-rest',
};
