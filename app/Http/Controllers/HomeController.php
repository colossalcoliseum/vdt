<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class HomeController extends Controller
{
    public function home(){

        return Inertia::render('Home/Home', []);
    }
}
