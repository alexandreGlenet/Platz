<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Http\Models\Commentaire;



class CommentairesController extends Controller
{
  /**
   * [show description]
   * @param  int    $id     [l'id de la créature]
   * @param  string $slug   [slug du nom]
   * @return [View]         [Vue Crétures/show.blade.php]
   */

   public function index(){
     public function index(){
       return response()->json(Commentaire::with('user')->get()); // renvoie le résultat de la requete sous format Json.
       // Faire le store etc...
     }
   //
   //  public function show(int $id = 1, string $slug = null)
   //  {
   //    $article = Article::find($id);
   //    return View::make('articles.show', compact('article'));
   //  }
   //
   //  public function search()
   //  {
   //
   //  }

}
