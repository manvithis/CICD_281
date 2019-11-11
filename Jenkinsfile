pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'docker-compose build web'
        sh 'docker-compose up web'
      }
    }

  }
}