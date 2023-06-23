FROM node:18-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

# Adding a new base image will let docker that this is a separate set of commands
FROM nginx

# Exposing port 3000, so that outer traffic can use it
EXPOSE 3000

# Copying the newly created conf from local to inside the container
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copying the built artifacts and providing it to nginx
COPY --from=builder /app/build /usr/share/nginx/html