<?php
   namespace App\Http\Models;
   use Illuminate\Database\Eloquent\Model;
   use TCG\Voyager\Traits\Resizable;

   class Categorie extends Model {

     /**
      * [La table associée au modèle]
      * @var [string]
      */

     protected $table = 'categories';
     use Resizable;

     // public function tags()
     //   {
     //     return $this->belongsToMany('App\Http\Models\Tag');
     //   }
     public function ressource(){
       return $this->hasMany('App\Http\Models\Ressource');
     }

   }
