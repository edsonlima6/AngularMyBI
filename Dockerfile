FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install --silent 
RUN npm install --silent -D @angular/cli@latest
RUN npm install --silent -g @angular/cli@latest
RUN npm run build 

FROM nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node app/dist/MyBI /usr/share/nginx/html