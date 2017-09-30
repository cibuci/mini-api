'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1503476888723_7809';

  config.mongoose = {
    url: 'mongodb://localhost:27017/mini-api',
    options: {},
  };

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: '1',
    },
  };

  // replace your appId and appSecret of WEAPP
  config.weappSDK = {
    appId: 'wxbe5f6fcda54919ad',
    appSecret: 'eca08bf561db79e939d631663d009df4',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
