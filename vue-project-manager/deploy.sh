#!/usr/bin/env sh
# abort on errors set -e
# build

npm run build
# navega previamente hasta el directorio de salida de tus archivos para producción:

git init
git add -A
git commit -m 'deploy'

# si tu proyecto va como mi-usuario.github.io, habilita esta línea
# git push -f git@github.com: <USERNAME>/<USERNAME>.github.io.git master

# Si va como repositorio, habilita esta otra línea:
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
