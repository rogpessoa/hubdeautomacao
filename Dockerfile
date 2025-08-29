# Use a imagem oficial do Node.js
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Build do projeto React
RUN npm run build

# Expor a porta 80 para servir o site
EXPOSE 80
EXPOSE 3000
EXPOSE 8080
# Comando para rodar o projeto
CMD ["npm", "start"]
