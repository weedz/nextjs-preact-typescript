FROM node:18 AS builder
RUN npm install -g pnpm

WORKDIR /usr/src/app

ENV NEXT_TELEMETRY_DISABLED 1

# RUN chown -hR node:node /usr/src/app
# USER node

COPY . .

RUN pnpm install

RUN patch --unified --input=patches/fix_nextjs.patch --strip=2

# ENV NODE_ENV production

RUN pnpm tsc --noEmit && pnpm run build


FROM nginx:alpine

WORKDIR /usr/app

RUN apk add nodejs-current npm supervisor
RUN mkdir mkdir -p /var/log/supervisor && mkdir -p /etc/supervisor/conf.d

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# We need some custom nginx configuration, which we import here
# You can even configure more if you use a nginx.conf.sigil file (http://dokku.viewdocs.io/dokku/configuration/nginx/#customizing-the-nginx-configuration)
COPY nginx/nginx.default.conf /etc/nginx/conf.d/default.conf
# COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

# Copy our production build from the first step to nginx's html directory

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
# COPY --from=builder /usr/src/app/public ./public
# COPY --from=builder /usr/src/app/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

# COPY --from=builder /usr/src/app/.next ./.next
# COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static

COPY nginx/test.html .

ADD nginx/supervisor.conf /etc/supervisor.conf

CMD supervisord -c /etc/supervisor.conf
