<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Http\Models\Ressource;



class RessourcesController extends Controller
{


   public function index(){
     // dd(Ressource::with('categorie')->get());
     return response()->json(Ressource::with('categorie')->with('platzer')->get()); // renvoie le résultat de la requete sous format Json.
     // Faire le store etc...
   }


}
