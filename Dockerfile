FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html index.md robots.txt sitemap.xml favicon.svg /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY design/ink-lattice-contemplation.md design/poster.svg /usr/share/nginx/html/design/
COPY design/artifact.png design/artifact.webp /usr/share/nginx/html/design/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
