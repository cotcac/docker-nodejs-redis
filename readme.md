# reference
http://progressivecoder.com/docker-compose-nodejs-application-with-redis-integration/
https://stackoverflow.com/questions/62522151/how-to-execute-docker-compose-from-outside-the-directory

# rebuild a new image for container.

```
docker-compose up --build
```
http://localhost:4001/  

# To start Docker Compose
```
docker-compose up
```

# To start/stop up Docker Compose in the background

```
docker-compose up -d
docker-compose down
```

# Export docker image
```
docker-compose up # this command will create docker container.
docker container list
docker ps -a # list all docker containwe
docker export a03fbfe13fdd > nodejs-node-app1.zip
```

# Import docker image => it not works.
```
docker import - nodejs-node-app1 < nodejs-node-app1.zip
docker load  < nodejs-node-app1.zip # test
docker image list
docker tag nodejs-node-app1 nodejs-node-app1
docker run -it nodejs-node-app1
```
# docker save => this one works
```
docker save -o nodejs2.tar docker-nodejs-redis-node-app:latest
docker load -i nodejs2.tar
docker run -it docker-nodejs-redis-node-app
```
# save images one by one
```
docker save -o app-nodejs.tar app2/nodejs:v2
docker load -i app-nodejs.tar
docker save -o app-nginx.tar app2/nginx:v2
docker load -i app-nginx.tar
```
# docker run with environment variable
```
docker run -e EXPORT=3003 -it docker-nodejs-redis-node-app
docker-compose run -p 3008:3008 -it docker-nodejs-redis-node-app 
```
docker build . -t my-app
docker-compose run -p 3333:9080 my-app

Câu lệnh docker-compose run cho phép ta chạy 1 lần nhiều câu lệnh cho các services. Ví dụ để thấy các environment variables trên web service:

$ docker-compose run web env