<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Http\Models\Ressource;



class RessourcesController extends Controller
{
  /**
   * [show description]
   * @param  int    $id     [l'id de la créature]
   * @param  string $slug   [slug du nom]
   * @return [View]         [Vue Crétures/show.blade.php]
   */

   public function index(){
     return response()->json(Ressource::with('categorie')->get()); // renvoie le résultat de la requete sous format Json.
     // Faire le store etc...
   }


}
