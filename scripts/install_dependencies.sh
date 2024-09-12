#!/bin/bash

# Navega até o diretório do projeto
cd /home/ec2-user/cumes-backend/backend

# Atualiza o sistema e instala Node.js e npm
sudo yum update -y
sudo yum install -y nodejs npm

# Instala as dependências do projeto
npm install
