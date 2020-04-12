<?php
   namespace App\Http\Models;
   use Illuminate\Database\Eloquent\Model;
   use TCG\Voyager\Traits\Resizable;

   class Platzer extends Model {

     /**
      * [La table associée au modèle]
      * @var [string]
      */

     protected $table = 'platzers';
     use Resizable;

     public function ressource()
       {
         return $this->hasMany('App\Http\Models\Ressource');
       }

     public function commentaire()
      {
        return $this->hasMany('App\Http\Models\Commetaire');
      }
     // public function categorie(){
     //   return $this->belongsTo('App\Http\Models\Categorie');
     // }
     // public function commentaire(){
     //   return $this->hasMany('App\Http\Models\Commentaire');
     // }

   }
