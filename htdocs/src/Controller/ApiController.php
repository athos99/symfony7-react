<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api')]
class ApiController extends AbstractController
{
    #[Route('/list', name: 'api_list')]
    public function list($sub = null)
    {

        return $this->json(
            [
                ['id' => '1', 'name' => 'John'],
                ['id' => '2', 'name' => 'Bill'],
                ['id' => '3', 'name' => 'Mary'],
                ['id' => '4', 'name' => 'Jane'],
                ['id' => '5', 'name' => 'Robert'],
                ['id' => '6', 'name' => 'Donald'],
            ],
        );
    }
}
