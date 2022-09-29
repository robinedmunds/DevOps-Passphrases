#!/bin/sh
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker push roblobob/passphrases-proxy:$TRAVIS_COMMIT
docker push roblobob/passphrases-proxy:latest

docker push roblobob/passphrases-api:$TRAVIS_COMMIT
docker push roblobob/passphrases-api:latest

docker push roblobob/passphrases-frontend:$TRAVIS_COMMIT
docker push roblobob/passphrases-frontend:latest
