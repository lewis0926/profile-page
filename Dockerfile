FROM nginx:alpine

COPY index.html index.css script.js robots.txt llms.txt /usr/share/nginx/html/
COPY images /usr/share/nginx/html/images
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
