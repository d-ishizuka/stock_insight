FROM node:21.6.0 as base

WORKDIR /frontend

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

ENTRYPOINT npm install --frozen-lockfile && npm run dev
