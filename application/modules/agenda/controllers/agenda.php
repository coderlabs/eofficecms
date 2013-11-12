<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Agenda extends MX_Controller {

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
 * Modul        : Agenda
 * Path         : /application/modules/agenda/controllers/agenda.php
 * Maintainer   : Taufik Sulaeman P
 * Email        : taufiksu@gmail.com 
 */