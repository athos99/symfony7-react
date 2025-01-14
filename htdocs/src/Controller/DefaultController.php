<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class DefaultController extends AbstractController
{
    #[Route('/{sub}', name: 'homepage', requirements: ['sub'=>'.*'])]
    public function index($sub=null)
    {
        return $this->render('homepage.html.twig');
    }

}
