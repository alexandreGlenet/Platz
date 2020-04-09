<?php
   namespace App\Http\Models;
   use Illuminate\Database\Eloquent\Model;
   use TCG\Voyager\Traits\Resizable;

   class Ressource extends Model {

     /**
      * [La table associée au modèle]
      * @var [string]
      */

     protected $table = 'ressources';
     use Resizable;

     // public function tags()
     //   {
     //     return $this->belongsToMany('App\Http\Models\Tag');
     //   }
     public function categorie(){
       return $this->belongsTo('App\Http\Models\Categorie');
     }
     public function commentaire(){
       return $this->hasMany('App\Http\Models\Commentaire');
     }
     public function platzer (){
       return $this->belongsTo('App\Http\Models\Platzer');
     }

   }
