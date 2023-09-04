# Étape de build
FROM node:18 as build

WORKDIR /app

# Copie du package.json et du package-lock.json pour installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers
COPY . .

# Build du projet
EXPOSE 4173

CMD ["npm", "run", "dev"]
