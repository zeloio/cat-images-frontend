# Use the official Apache HTTP server as a parent image
FROM httpd:2.4

# Copy your static website files into the container
COPY ./dist/cat-images-frontend/* /usr/local/apache2/htdocs/

# Expose port 80 to the outside world
EXPOSE 80

# Start Apache server
CMD ["httpd-foreground"]