Build the Docker image that runs your configuration using:
$ docker build -t envoy:v1 .

And now you can execute it with:
$ docker run -d --name envoy -p 9901:9901 -p 10000:10000 envoy:v1

And finally, test it using:
$ curl -v localhost:10000