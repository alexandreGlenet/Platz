<?php
   namespace App\Http\Models;
   use Illuminate\Database\Eloquent\Model;
   use TCG\Voyager\Traits\Resizable;

   class Commentaire extends Model {

     /**
      * [La table associée au modèle]
      * @var [string]
      */

     protected $table = 'commentaires';
     use Resizable;

     // public function tags()
     //   {
     //     return $this->belongsToMany('App\Http\Models\Tag');
     //   }
     public function ressource(){
       return $this->belongsTo('App\Http\Models\Ressource');
     }
     public function user(){
       return $this->belongsTo('App\User');
     }


   }
