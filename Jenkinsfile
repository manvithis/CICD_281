pipeline {
  agent any
    triggers {
        cron('0 12 * * 1-5')
    }
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
