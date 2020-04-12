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
     protected $fillable = ['autheur', 'url', 'content'];
     use Resizable;

     // public function tags()
     //   {
     //     return $this->belongsToMany('App\Http\Models\Tag');
     //   }
     public function ressource(){
       return $this->belongsTo('App\Http\Models\Ressource');
     }
     public function platzer(){
       return $this->belongsTo('App\Http\Models\Platzer');
     }


   }
