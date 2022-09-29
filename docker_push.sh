#!/bin/sh
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push roblobob/devops-passphrases-proxy
docker push roblobob/devops-passphrases-api
docker push roblobob/devops-passphrases-frontend
