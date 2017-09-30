'use strict';

module.exports = app => {
  class UserService extends app.Service {

    constructor(ctx) {
      super(ctx);
      this.models = this.ctx.model;
    }

    async checkWeappUser() {
      const { app, request, response } = this.ctx;
      const loginService = app.weapp.LoginService.create(request, response);
      const weapp_user = await loginService.check();
      return weapp_user.userInfo;
    }

    async getOauthUser(userInfo, site = 'WEAPP') {
      const oauth_user = await this.models.SocialOauth.findOne({
        where: {
          site_uid: userInfo.openId,
        },
      });
      if (!oauth_user) {
        const user = await this.createUser(site, userInfo);
        return user;
      }
      const user = await this.models.User.findOne({
        attributes: [ 'id', 'name', 'avatar' ],
        where: {
          id: oauth_user.userId,
        },
      });
      user.oauth = oauth_user;
      return user;
    }

    async createUser(site, userInfo) {
      const user = await this.models.User.create({
        name: userInfo.nickName,
        avatar: userInfo.avatarUrl,
      });
      const oauth = await this.models.SocialOauth.create({
        site,
        site_uid: userInfo.openId,
        site_uname: userInfo.nickName,
        unionid: userInfo.unionId,
        userId: user.id,
      });
      await this.models.Userprofile.create({
        sex: userInfo.gender,
        city: userInfo.city,
        province: userInfo.province,
        country: userInfo.country,
        userId: user.id,
      });
      user.oauth = oauth;
      return user;

    }

  }
  return UserService;
};
