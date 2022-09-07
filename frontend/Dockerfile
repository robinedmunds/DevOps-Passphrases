# build stage
FROM node:lts-alpine
WORKDIR /app
COPY package.json .
RUN ["yarn", "install"]
COPY . .
RUN ["yarn", "build"]

# run stage
FROM nginx:alpine
EXPOSE 80
WORKDIR /usr/share/nginx/html
COPY --from=0 /app/out .
