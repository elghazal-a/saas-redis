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
  var cmd_nameInstances = docker_path + 'docker ps | grep "redis" | awk \'{print $11}\'';
  var cmd_portInstances = docker_path + 'docker ps | grep "redis" | awk \'{print $10}\'';
  var namesArr = exec(cmd_nameInstances).split('\n');
  console.log(namesArr);
  var portsArr = exec(cmd_portInstances).split('\n');
  console.log(portsArr);
  var list = [];
  for (var i = 0; i < namesArr.length; i++) {
    list.push({
      name: namesArr[i],
      port: parseInt(portsArr[i].match(/\d*->/gi)[0], 10)
    });
  };
  console.log(list);
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