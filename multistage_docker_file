FROM node:22-alpine AS builder

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-alpine

COPY --from=builder /dist ./dist
COPY --from=builder /package*.json ./

RUN npm install --omit=dev

EXPOSE 3232

ENV NODE_ENV=production

CMD ["node", "dist/main"]
