Projet Platz/Projet Dynamique
=============================

Réalisé avec Laravel,Voyager & VueJS pour le cours de projet web dynamique
--------------------------------------------------------------------------

*** installation de laravel via composer + installation de Laravel/UI + installation de Vue CLI

* Lier la base de données dans le fichier .env
* MOFIFIER LE APP_URL avec => http://localhost:8000 Pour afficher l'icon d'admin
* Etape cruciale pour pas recommencer 10 fois l'install.
pour ne pas avoir l'erreur : Error apres l'install 1071 Specified key was too long;
  * Modifier le AppServiceProvider.php  (app/Providers/AppServiceProvider.php)
  * use Illuminate\Support\Facades\Schema;

public function boot()
{
    Schema::defaultStringLength(191);
}

*** Installation de Voyager

* composer require tcg/voyager
* php artisan voyager:install
* php artisan serve

*** rendez vous sur l'adresse de votre serveur

* adresse mail : *********************
* password : **********************
