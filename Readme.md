# Create Image

## docker build -t hello-docker

=>> It means we build an image file with tagline hello-docker

## docker images/docker image ls

=>> It checks the images

# Now we can upload it into docker hub

## docker login

=>> login in the docker hub

## docker tag imageId repo-name

=>> here I create an repository name with the imageId.

## docker push [repository name]

=>> with this i can push it in the docker hub

# Docker File

1. FROM node:alpine
   =>> It means it will run with node and linux alpine.alpine is lightweight.

2. COPY . /app
   =>> it means it coping files in app folder of linux

3. WORKDIR /app

=>> it is indicating the current workdirectory

4. CMD node app.js
   =>> here it will run this file

## docker pull

1.  docker pull repository name
