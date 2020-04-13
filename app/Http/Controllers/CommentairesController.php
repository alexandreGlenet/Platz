<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Http\Models\Commentaire;



class CommentairesController extends Controller
{

     public function index(){
       return response()->json(Commentaire::with('platzer')->with('ressource')->get()); // renvoie le résultat de la requete sous format Json.
       // Faire le store etc...
     }

     // -----------------------------------------------------

     public function store(){

       request()->validate([
         'autheur' => ['required'],
         'content' => ['required'],
         'ressource_id' => ['required'],
       ]);

       return Commentaire::create([ // créer le commentaire en db
         'autheur' => request('autheur'),//'invité',
         //'url' => 'url',
         'content' => request('content'),
         'ressource_id' => request('ressource_id'),

       ]);

        // return "Votre commentaire a bien été ajouté !";

     }


}
