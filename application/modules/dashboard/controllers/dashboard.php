<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Dashboard extends MX_Controller {

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
 * Modul        : Dashboard
 * Path         : /application/modules/dashboard/controllers/dashboard.php
 * Maintainer   : Taufik Sulaeman P
 * Email        : taufiksu@gmail.com 
 */