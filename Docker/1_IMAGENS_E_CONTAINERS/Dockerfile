#puxa imagem base (no caso node)
FROM node 

#Instrui o diretorio que vai ser utilizado para executar a aplicação no container
WORKDIR /src

#copia o arquivo para o diretorio de trabalho (ele esta copiando o package.json e o package-lock.json com o *)
COPY package*.json /app

#apos copiar o package ele roda o npm install
RUN npm install

#apos rodar tudo copia os demais arquivos que seria o app.js para o container
COPY . .

# por fim expoe a porta 
EXPOSE 3000

#comando pra rodar a aplicação
CMD ["node", "app.js"]