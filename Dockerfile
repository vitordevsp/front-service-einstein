# Dockerfile for Node application
# Author: Ricardo Faccioli


FROM node:18-alpine
RUN apk add --no-cache bash
WORKDIR /app

# Copiando arquivos necessários
COPY package*.json ./
RUN npm install --silent

# Copiando o diretório src inteiro
COPY src ./src  

# Expondo a porta e configurando variáveis de ambiente
EXPOSE 3000
ENV ADDRESS=0.0.0.0 PORT=3000

# Comando para iniciar a aplicação
CMD ["node", "src/server.js"]