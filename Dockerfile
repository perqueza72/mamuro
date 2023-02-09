FROM node:18-alpine3.16
RUN mkdir /mamuro_front
COPY . /mamuro_front/
WORKDIR /mamuro_front
RUN npm install
RUN npm install -g serve
RUN npm run build
CMD ["serve", "-s", "dist"]
EXPOSE 3000

