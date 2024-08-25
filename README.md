# Radware Assignment (React and Express)

This repository contains a full-stack application with a React frontend and an Express backend. The application is containerized using Docker and Docker Compose to ensure seamless development and deployment.

## Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Ensure the correct files are in place**:
   - `Dockerfile` in both the `server` and `client` directories.
   - `docker-compose.yml` in the root directory.

## Running the Application

To run the application, follow these steps:

1. **Build and Start the Containers**:

   Run the following command from the root directory of the project:

   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build Docker images for both the server and the client.
   - Start the server container first.
   - The client container will wait for the server to be fully operational before starting.

2. **Wait for the Setup**:

   Docker will pull base images, install dependencies, and start the services. This might take a few minutes the first time.

## Stopping the Application

To stop the application, use the following command:

```bash
docker-compose down
```

This command stops and removes the containers, but the Docker images remain cached for faster startup next time.

## Accessing the Application

Once the application is running, you can access it via your web browser:

- **React Frontend**: Available at `http://localhost:3000`.
- **Express Backend API**: Available at `http://localhost:5000`.
