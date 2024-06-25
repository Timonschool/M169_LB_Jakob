#!/bin/bash

source .env

DOCKER_USERNAME=$(echo $DOCKER_USERNAME | tr -d '\r')
IMAGE_NAME="modul-347"
TAG="v1.0"
REGISTRY_URL="docker.io"

docker build -t $IMAGE_NAME .

echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin


if [ $? -eq 0 ]; then
    docker tag $IMAGE_NAME $DOCKER_USERNAME/$IMAGE_NAME:$TAG

    docker push $DOCKER_USERNAME/$IMAGE_NAME:$TAG
else
    echo "Failed to login to Docker registry."
fi
