pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'your-registry-url'
        KUBECONFIG_CREDENTIAL_ID = 'k8s-config'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build API Image') {
            steps {
                dir('api') {
                    sh 'docker build -t bazrah/api:latest .'
                }
            }
        }
        
        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t bazrah/frontend:latest .'
                }
            }
        }
        
        stage('Push Images') {
            steps {
                // In a real scenario, you'd log in to a registry first
                // sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
                sh 'docker push bazrah/api:latest || echo "Tag and push to actual registry"'
                sh 'docker push bazrah/frontend:latest || echo "Tag and push to actual registry"'
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                withKubeConfig([credentialsId: env.KUBECONFIG_CREDENTIAL_ID]) {
                    sh 'kubectl apply -f k8s/'
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed. Please check the logs.'
        }
    }
}
