'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async list() {
    const { ctx } = this;
    ctx.body = '<h1>Mars blog list</h1>'
  }
}

module.exports = HomeController;

// restful  好处： 简单 约束性
// 请求方式 get post put delete