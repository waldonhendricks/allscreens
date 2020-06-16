'use strict';
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

const server = awsServerlessExpress.createServer(app, null);

exports.handler = async(event, context) => awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;