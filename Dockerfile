# Use the official Apache HTTP server as a parent image
FROM httpd:2.4

# Copy your static website files into the container
WORKDIR /usr/local/apache2/htdocs/
COPY ./dist/ ./

# Expose port 80 to the outside world
EXPOSE 80

# Start Apache server
CMD ["httpd-foreground"]