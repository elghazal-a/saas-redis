'use strict';

var _ = require('lodash');
var exec = require('exec-sync');

function spawnRedisInstance(name){
  var docker_path = '/usr/bin/';
  var cmd_runRedis = docker_path + 'docker run -d -P --name="' + name + '" redis';
  var container_id = exec(cmd_runRedis);
  var cmd_inspect = docker_path + 'docker inspect ' + container_id;
  var json_inspect = exec(cmd_inspect);
  try{
    json_inspect = JSON.parse(json_inspect);
  }catch(err){
    return port = null;
  }
  var port = json_inspect[0].NetworkSettings.Ports["11211/tcp"][0].HostPort;
  return port;
};

function getRedisInstances(){
  var docker_path = '/usr/bin/';
  var cmd_listInstances = docker_path + 'docker ps | grep "redis"';
  console.log(exec(cmd_listInstances).split('\n'));
}

exports.new = function(req, res) {
  var ip = "176.31.119.123";
  var port = spawnRedisInstance(req.body.name);
  res.json({
    ip: ip,
    port: port
  });
};

exports.list = function(req, res) {
  var instances = getRedisInstances();
  res.json(instances);
};