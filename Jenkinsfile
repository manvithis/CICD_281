#!groovy
pipeline {
  agent none
  stages {
    stage('NPM Installs') {
      agent {
        docker {
           sh 'docker build .'
        }
      }
      environment { HOME="." }
      ...
    }
  }
}
