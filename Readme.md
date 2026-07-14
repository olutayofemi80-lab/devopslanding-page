# ☕ DevOps Landing Page

A modern, responsive landing page built with **HTML, CSS, and JavaScript**, containerized with **Docker**, and designed to be deployed through a complete **CI/CD pipeline** using **Jenkins** and **AWS Elastic Beanstalk**.

This project demonstrates how a simple frontend application can be packaged, automated, and deployed using industry-standard DevOps practices.

---

## 📖 Project Overview

The application is a responsive coffee shop landing page named **Ember & Ash Roasters**. While the frontend is intentionally simple, the focus of this project is the DevOps workflow used to build, containerize, automate, and deploy the application.

---

## 🚀 Features

* Responsive landing page
* Clean and modern user interface
* Interactive JavaScript button
* Dockerized with Nginx
* Ready for Jenkins CI/CD pipeline
* Ready for deployment to AWS Elastic Beanstalk

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### DevOps

* Docker
* Nginx
* Git
* GitHub
* Jenkins
* Trivy (planned)
* Docker Hub
* AWS Elastic Beanstalk

---

## 📁 Project Structure

```text
Devopslanding Page/
│
├── index.html
├── style.css
├── script.js
│
├── Dockerfile
├── Jenkinsfile
├── nginx.conf
├── Dockerrun.aws.json
│
├── .dockerignore
├── .gitignore
├── README.md
│
└── screenshots/
```

---

## 🏗️ Architecture

```text
Developer
     │
     ▼
GitHub Repository
     │
     ▼
Jenkins Pipeline
     │
     ├── Checkout Source
     ├── Build Docker Image
     ├── Security Scan (Trivy)
     ├── Push Docker Image
     └── Deploy
             │
             ▼
AWS Elastic Beanstalk
             │
             ▼
Live Website
```

---

## 🐳 Build the Docker Image

```bash
docker build -t devopslanding:portfolio .
```

---

## ▶️ Run the Docker Container

```bash
docker run -d -p 8080:80 --name devopslanding devopslanding:portfolio
```

---

## 🌐 Access the Application

Open your browser and visit:

```text
http://localhost:8080
```

---

## 📦 Docker Commands

### List Images

```bash
docker images
```

### List Running Containers

```bash
docker ps
```

### Stop Container

```bash
docker stop devopslanding
```

### Remove Container

```bash
docker rm -f devopslanding
```

---

## ⚙️ Planned CI/CD Pipeline

The Jenkins pipeline will automate the following tasks:

* Checkout source code from GitHub
* Build Docker image
* Run Trivy filesystem scan
* Run Trivy image scan
* Push Docker image to Docker Hub
* Deploy to AWS Elastic Beanstalk
* Verify deployment

---

## 📸 Screenshots

The following screenshots are added in the screenshsts folder:

* Homepage
* Docker Build
* Running Docker Container
* Jenkins Pipeline
* Docker Hub Repository
* Elastic Beanstalk Deployment
* Live Website

---

## 📚 Learning Objectives

This project demonstrates practical experience with:

* Docker containerization
* Nginx web server
* Git and GitHub workflow
* Jenkins CI/CD pipelines
* Docker image management
* AWS Elastic Beanstalk deployment
* DevOps automation

---

## 🔮 Future Improvements

* GitHub Webhooks
* SonarQube Code Analysis
* Trivy Security Scanning
* Docker Hub Automated Versioning
* HTTPS with SSL
* Custom Domain
* Monitoring and Logging
* GitHub Actions workflow

---

## 👨‍💻 Author

**Oluwafemi Moses Olutayo**

DevOps Engineer passionate about cloud computing, automation, containerization, and CI/CD.

---

## 📄 License

This project is for educational and portfolio purposes.
