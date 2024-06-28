# run 
```
docker compose up
```

[1](https://stackoverflow.com/questions/62522151/how-to-execute-docker-compose-from-outside-the-directory)

If you've pushed your application images to Docker Hub, you need to, all in the web service:

Add the image: name of your Docker Hub image
Remove the build: section
Delete the volumes: that overwrite the image's code
Delete the command: overriding the image's CMD (consider adding the rm -f server.pid command to your startup.sh entrypoint script)
Delete the archaic links: setting