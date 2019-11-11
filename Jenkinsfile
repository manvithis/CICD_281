pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'docker-compose build web'
                sh 'docker-compose up web'

            }
        }
    }
}
