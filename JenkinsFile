pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('DockerHub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://amritj7@bitbucket.org/amigos-6/hall-of-fame-ui.git'
			}
		}

		stage('Build') {

			steps {
				sh 'docker build -t amritj7/hall-of-fame-ui:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push amritj7/hall-of-fame-ui:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}