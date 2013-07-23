
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

$ parse deploy

curl -X POST \
  -H "X-Parse-Application-Id: PA7BfkExP7IaOfVlMGPO7PsMn04YA6DrryTvUFNv" \
  -H "X-Parse-REST-API-Key: gXAan8suu8ZbFqnsPhVNWRphM7q2xoeyDLZVRka2" \
  -H "Content-Type: application/json" \
  -d '{}' \
  https://api.parse.com/1/functions/hello