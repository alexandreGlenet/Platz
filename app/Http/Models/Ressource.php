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

   }
