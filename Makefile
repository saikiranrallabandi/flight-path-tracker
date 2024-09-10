# Define your variables
DOCKER_COMPOSE=docker-compose
CONTAINER_NAME=flight-path-tracker

# Run Docker Compose in the background
dev:
	$(DOCKER_COMPOSE) up

# Follow the Docker Compose logs
logs:
	$(DOCKER_COMPOSE) logs -f

# Stop and remove the Docker container
nodev:
	$(DOCKER_COMPOSE) down

# Rebuild the Docker image and restart the container
devrebuild:
	$(DOCKER_COMPOSE) up --build -d

# Run your Node.js application locally
run:
	node app.js

# Install npm dependencies
install:
	npm install

# Run tests
test:
	npm test

# Lint your code
lint:
	npm run lint

# Clean up node_modules
clean:
	rm -rf node_modules
