pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    

  }
  environment {
        PATH = "$PATH:/usr/local/bin/docker-compose"
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
