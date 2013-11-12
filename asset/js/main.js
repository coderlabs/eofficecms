/* 
 *  Document   : main.js
 *  Author     : pixelcave
 *  Description: Custom javascript
 */
var webApp=function(){var e=function(){var e=$("#page-content");e.css("min-height",$(window).height()-111+"px");$(window).resize(function(){e.css("min-height",$(window).height()-111+"px")});if($("header").hasClass("navbar-fixed-top")){$("#page-container").css("padding","40px 0 0")}$('[data-toggle="gallery-options"] > li').mouseover(function(){$(this).find(".thumbnails-options").show()}).mouseout(function(){$(this).find(".thumbnails-options").hide()});$(".scrollable").slimScroll({height:"100px"});$(".scrollable-tile").slimScroll({height:"130px"});$(".scrollable-tile-2x").slimScroll({height:"330px"});$('[data-toggle="tooltip"]').tooltip({container:"body",animation:false});$('[data-toggle="popover"]').popover({container:"body",animation:false});$(".select-chosen").chosen();$(".input-switch").bootstrapSwitch();$("textarea.textarea-elastic").elastic();$("textarea.textarea-editor").wysihtml5();$(".input-colorpicker").colorpicker();$(".input-timepicker").timepicker();$(".input-datepicker").datepicker();$(".input-daterangepicker").daterangepicker()};var t=function(){$(".loading-on").click(function(){var e=$("#loading");e.fadeIn(250);$("#widgets > li > a > .badge").hide(250);setTimeout(function(){e.fadeOut(250);$("#rss-widget > a > .badge").show(250).html("5");$("#twitter-widget > a > .badge").show(250).html("4")},1e3)});var e=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","CÃ´te d'Ivoire","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Faeroe Islands","Falkland Islands","Fiji","Finland","Former Yugoslav Republic of Macedonia","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Marianas","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","RÃ©union","Romania","Russia","Rwanda","SÃ£o TomÃ© and PrÃ­ncipe","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","The Bahamas","The Gambia","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","US Virgin Islands","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"];$(".example-typeahead").typeahead({items:5,source:e});$("#example-user-tabs a").click(function(e){e.preventDefault();$(this).tab("show")});var t=$("#example-advanced-daterangepicker");var n=$("#example-advanced-daterangepicker span");t.daterangepicker({ranges:{Today:["today","today"],Yesterday:["yesterday","yesterday"],"Last 7 Days":[Date.today().add({days:-6}),"today"],"Last 30 Days":[Date.today().add({days:-29}),"today"],"This Month":[Date.today().moveToFirstDayOfMonth(),Date.today().moveToLastDayOfMonth()],"Last Month":[Date.today().moveToFirstDayOfMonth().add({months:-1}),Date.today().moveToFirstDayOfMonth().add({days:-1})]}},function(e,t){n.html(e.toString("MMMM d, yy")+" - "+t.toString("MMMM d, yy"))});n.html(Date.today().toString("MMMM d, yy")+" - "+Date.today().toString("MMMM d, yy"))};var n=function(){var e=$("#primary-nav > ul > li > a");e.filter(function(){return $(this).next().is("ul")}).each(function(e,t){$(t).append("<span>"+$(t).next("ul").children().length+"</span>")});e.click(function(){var e=$(this);if(e.next("ul").length>0){if(e.parent().hasClass("active")!==true){if(e.hasClass("open")){e.removeClass("open").next().slideUp(300)}else{$("#primary-nav li > a.open").removeClass("open").next().slideUp(300);e.addClass("open").next().slideDown(300)}}return false}return true})};var r=function(){var e=$("#to-top");$(window).scroll(function(){if($(this).scrollTop()>150){e.css("opacity",.2).fadeIn(150)}else{e.fadeOut(150)}});e.mouseover(function(){$(this).animate({opacity:1},150)}).mouseout(function(){$(this).animate({opacity:.3},150)});e.click(function(){$("html, body").animate({scrollTop:0},300);return false})};var i=function(){var e=$("#topt-fixed-header-top");var t=$("#topt-fixed-header-bottom");var n=$("#topt-fixed-layout");var r=$("header");$(".btn-theme-options").click(function(){$("#theme-options-content").slideToggle(200);return false});e.on("switch-change",function(e,n){if(n.value===true){t.bootstrapSwitch("setState",false);r.addClass("navbar-fixed-top");if($(window).width()>980){$("#page-container").css("padding","40px 0 0")}}else{r.removeClass("navbar-fixed-top");$("#page-container").css("padding","0")}});t.on("switch-change",function(t,n){if(n.value===true){e.bootstrapSwitch("setState",false);r.addClass("navbar-fixed-bottom")}else{r.removeClass("navbar-fixed-bottom")}});n.on("switch-change",function(e,t){if(t.value===true){$("body").addClass("fixed")}else{$("body").removeClass("fixed")}})};var s=function(){if(!Modernizr.input.placeholder){$("[placeholder]").focus(function(){var e=$(this);if(e.val()===e.attr("placeholder")){e.val("");e.removeClass("ph")}}).blur(function(){var e=$(this);if(e.val()===""||e.val()===e.attr("placeholder")){e.addClass("ph");e.val(e.attr("placeholder"))}}).blur().parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var e=$(this);if(e.val()===e.attr("placeholder")){e.val("")}})})}};var o=function(){$.extend(true,$.fn.dataTable.defaults,{sDom:"<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span5'i><'span7'p>>",sPaginationType:"bootstrap",oLanguage:{sLengthMenu:"_MENU_",sSearch:'<div class="input-prepend"><span class="add-on"><i class="icon-search"></i></span>_INPUT_</div>',sInfo:"<strong>_START_</strong>-<strong>_END_</strong> of <strong>_TOTAL_</strong>",oPaginate:{sPrevious:"",sNext:""}}});$.extend($.fn.dataTableExt.oStdClasses,{sWrapper:"dataTables_wrapper form-inline"});$.fn.dataTableExt.oApi.fnPagingInfo=function(e){return{iStart:e._iDisplayStart,iEnd:e.fnDisplayEnd(),iLength:e._iDisplayLength,iTotal:e.fnRecordsTotal(),iFilteredTotal:e.fnRecordsDisplay(),iPage:Math.ceil(e._iDisplayStart/e._iDisplayLength),iTotalPages:Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength)}};$.extend($.fn.dataTableExt.oPagination,{bootstrap:{fnInit:function(e,t,n){var r=e.oLanguage.oPaginate;var i=function(t){t.preventDefault();if(e.oApi._fnPageChange(e,t.data.action)){n(e)}};$(t).addClass("pagination").append("<ul>"+'<li class="prev disabled"><a href="javascript:void(0)"><i class="icon-chevron-left"></i> '+r.sPrevious+"</a></li>"+'<li class="next disabled"><a href="javascript:void(0)">'+r.sNext+' <i class="icon-chevron-right"></i></a></li>'+"</ul>");var s=$("a",t);$(s[0]).bind("click.DT",{action:"previous"},i);$(s[1]).bind("click.DT",{action:"next"},i)},fnUpdate:function(e,t){var n=5;var r=e.oInstance.fnPagingInfo();var i=e.aanFeatures.p;var s,o,u,a,f,l=Math.floor(n/2);if(r.iTotalPages<n){a=1;f=r.iTotalPages}else if(r.iPage<=l){a=1;f=n}else if(r.iPage>=r.iTotalPages-l){a=r.iTotalPages-n+1;f=r.iTotalPages}else{a=r.iPage-l+1;f=a+n-1}for(s=0,iLen=i.length;s<iLen;s++){$("li:gt(0)",i[s]).filter(":not(:last)").remove();for(o=a;o<=f;o++){u=o===r.iPage+1?'class="active"':"";$("<li "+u+'><a href="javascript:void(0)">'+o+"</a></li>").insertBefore($("li:last",i[s])[0]).bind("click",function(n){n.preventDefault();e._iDisplayStart=(parseInt($("a",this).text(),10)-1)*r.iLength;t(e)})}if(r.iPage===0){$("li:first",i[s]).addClass("disabled")}else{$("li:first",i[s]).removeClass("disabled")}if(r.iPage===r.iTotalPages-1||r.iTotalPages===0){$("li:last",i[s]).addClass("disabled")}else{$("li:last",i[s]).removeClass("disabled")}}}}})};return{init:function(){e();t();n();r();i();s();o()}}}();$(function(){webApp.init()});