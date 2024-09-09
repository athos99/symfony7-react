# symfony7-react
Symfony 7 ux react


---Installation


    composer create-project symfony/skeleton:"7.1.*" htdocs
    cd htdocs
    composer require webapp symfony/apache-pack symfony/orm-pack symfony/monolog-bundle 
    composer require symfony/twig-pack symfony/webpack-encore-bundle
    composer require symfony/maker-bundle symfony/profiler-pack --dev






composer require --dev orm-fixtures

Browser Ouvrir http://localhost/symfony/restapi/public/api

Changer dans fichier D:\www\symfony\restapi.env DATABASE_URL="postgresql://postgres:root@postgres:5432/app?serverVersion=15&charset=utf8"

Creer la base donnee app console docker php bin/console doctrine:database:create php bin/console make:migration yes

Creer fixtures php bin/console doctrine:fixtures:load

#generer une entité php bin/console make:entity

