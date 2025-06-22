# Use the official Apache HTTP Server image as base
FROM httpd:2.4

# Copy the static web application files into Apache's web directory
COPY ./index2.html /usr/local/apache2/htdocs/index.html
COPY ./style2.css /usr/local/apache2/htdocs/style2.css
COPY ./java.js /usr/local/apache2/htdocs/java.js

# Expose port 80 so it can be accessed from the host
EXPOSE 80
