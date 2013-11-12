<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Home extends MX_Controller {

    function __construct() {
        parent::__construct();
        $this->load->library(array('ion_auth','form_validation','session'));
        $this->load->helper(array('url', 'form','text'));
        //$this->load->model('model_*', '', true);
    }

    function index() {
        die();
    }

}

/*
 * Modul        : Home
 * Path         : /application/modules/home/controllers/home.php
 * Maintainer   : Taufik Sulaeman P
 * Email        : taufiksu@gmail.com 
 */