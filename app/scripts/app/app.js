/**
 * @ngdoc overview
 * @name ngmReportHubApp
 * @description
 * # ngmReportHubApp
 *
 * Main module of the application.
 */
angular
	.module('ngmReportHub', [
		// vendor
	    'pascalprecht.translate',
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ngTable',
		'ngCsv',
		'ngDropzone',
		'ngCountTo',
		'highcharts-ng',
		'leaflet-directive',
		'xeditable',
		// ngm
		'ngm',
		'ngm.widget.form.authentication',
		'ngm.widget.project.details',
		'ngm.widget.project.financials',
		// 'ngm.widget.project.reports.list',
		'ngm.widget.project.report',
		'ngm.widget.organization.stocks.list',
		'ngm.widget.organization.stock',
		// modules
		'ngmCluster',
		'ngmEthiopia',
		'ngmDews',
		'ngmDrr',
    'ngmEpr',
    'ngmSbp',
		'ngmiMMAP',
		'ngmNutrition',
		'ngmDrought',
		// utils
		'angularUtils.directives.dirPagination',
		// widgets
		'ngm.widget.calHeatmap',
		'ngm.widget.dropzone',
		'ngm.widget.highchart',
		'ngm.widget.html',
		'ngm.widget.leaflet',
		'ngm.widget.list',
		'ngm.widget.modal',
		'ngm.widget.stats',
		'ngm.widget.table'
	])
	.config([ '$routeProvider', '$locationProvider', '$compileProvider','$translateProvider', function ( $routeProvider, $locationProvider, $compileProvider,$translateProvider ) {
      

     $translateProvider.translations('en',{
     	"LANGUAGE":"LANGUAGE",
     	"Welcome":"Welcome",
     	"Welcome to":"Welcome",
     	"Welcome to ReportHub":"Welcome to ReportHub",
     	"Register":"Register",
     	"please LOGIN or REGISTER to continue":"please LOGIN or REGISTER to continue",
     	"please register to continue":"please register to continue",
     	"LOGIN" : "LOGIN",
     	"LOGOUT" : "LOGOUT",
     	"my_home" : "MY HOME",
     	"immap_home" : "iMMAP HOME",
     	"my_admin" : "MY ADMIN",
     	"my_team" : "MY TEAM",
     	"my_profile" : "MY PROFILE",
     	"my_projects" : "MY PROJECTS",
     	"my_stocks" : "MY STOCKS",
     	"my_products" : "MY PRODUCTS",
     	"ASSESSMENTS" : "ASSESSMENTS",
     	"nutrition_weekly" : "NUTRITION WEEKLY",
     	"DROUGHT" : "DROUGHT",
     	"CONTACT" : "CONTACT",
     	"Contact" : "Contact",
     	"USERNAME" : "USERNAME",
     	"PASSWORD" : "PASSWORD",
       "REGISTER" : "REGISTER",
       "forgot_password" : "FORGOT PASSWORD",
       "sign_in" : "Sign in",
       "reminder_sent" : "REMINDER SENT",
       "please_check_your_ReportHub_email_account_to_reset_your_password":"Please check your ReportHub email account to reset your password",
       "the_email_will_contain_a_secure_link_to_reset_your_password_so_you_can_close_this_window.":"The email will contain a secure link to reset your password, so you can close this window.",
       "reset_password":"RESET PASSWORD",
       "passwords_do_not_match":"Passwords do not match",
       "new_password":"NEW PASSWORD",
       "confirm_password":"CONFIRM PASSWORD",
       "update_password":"Update Password",
       "back_to_login":"BACK TO LOGIN",
       "having_trouble_finding_your_account":"Having trouble finding your account", 
       "send_me_a_reminder":"Send Me a Reminder",
       "ORGANIZATION" : "ORGANIZATION",
       "Organization" : "Organization",
       "Country" : "Country",
       "select_country" : "Select Country",
       "select_organization" : "Select Organization",
       "Sector" : "Sector",
       "select_sector" : "Select Sector",
       "select_station":"Select Station",
       "Agriculture" : "Agriculture",
       "Education":"Education",
       "Health": "Health",
       "Nutrition" : "Nutrition",
       "Protection" : "Protection",
       "WASH" : "WASH",
       "multi_purpose_cash" : "s Cash",
       "Next" : "Next",
      
       "full_name" : "Full Name",
       "Position" : "Position",
       "Phone" : "Phone",
       "Email" : "Email",
       "EMAIL" : "EMAIL",
       "Back" : "Back",
       "login_details" : "LOGIN DETAILS",
       "Username" : "Username",
       "Password" : "Password",
       "Register" : "Register",
       "immap_programme" : "iMMAP PROGRAMME",
       "select_programme" : "Select Programme",
       "Programme" : "Programme",
       "contract_start_date" : "Contract Start Date",
       "contract_end_date" : "Contract End Date",
       "select_duty_station" : "Select Duty Station",
       "duty_station" : "Estación de Servicio",
       "Profile" : "Profile",
       "go_to" : "Go to",
       "Team" : "Team",
       "view_team" : "View Team",
       "Projects":"Projects",
       "Project":"Project",
       "project":"project",
       "projects":"projects",
       "Active":"Active",
       "Team":"Team",
       "View Team":"View Team",
       "Back to Organization":"Back to Organization",
       "Add New Project":"Add New Project",
       "projects for":"projects for",
       "Download Project Summaries as CSV":"Download Project Summaries as CSV",
       "update_project":"Update project",
       "updated":"Updated",

       // NEW PROYECT
        "Project Details":"Project Details",
        "Project Title":"Project Title",
        "Project Code":"Project Code",
        "Start Date":"Start Date",
        "End Date":"End Date",
        "Project Budget":"Project Budget",
        "Project Budget Currency":"Project Budget Currency",
        "Select Project Budget Currency":"Select Project Budget Currency",
        "Non-HRP Project":"Non-HRP Project",
        "HRP Project":"HRP Project",
        "HRP Project Code":"HRP Project Code",
        "Activity Type":"Activity Type",
        "Other Implementing Partners":"Other Implementing Partners",
        "Other activities in addition to":"Other activities in addition to",
        "Project Donor":"Project Donor",
        "Project Partners":"Project Parners",
        "Project Description & Objectives":"Project Description & Objectives",
        "Project Focal Point":"Project Focal Point",
        "Target Population":"Target Population",
        "Project Target Locations":"Project Target Locations",
        "Select FOCAL POINT of your PROJECT in the form below":"Select FOCAL POINT of your PROJECT in the form below",
        "Enter the TARGET BENEFICIARIES of your PROJECT in the form below":"Enter the TARGET BENEFICIARIES of your PROJECT in the form below",
        "Save Project":"Save Project",
        "Do you want to Save this project":"Do you want to Save this project",
        "Yes":"Yes",
        "Cancel New Project":"Cancel New Project",
        "Are you sure you want to return to Projects":"Are you sure you want to return to Projects",
        "Cancel Project Update":"Cancel Project Update",
        "Return to Project Summary":"Return to Project Summary",
        "Yes, Cancel Update":"Yes, Cancel Update",
        "Remove People in Need":"Remove People in Need",
        "Remove People in Need from Project":"Remove People in Need from Project",
        "Yes, Remove People in Need":"Yes, Remove People in Need",
        "Remove Project Location":"Remove Project Location",
        "This will effect any existing monthly beneficiary reports":"This will effect any existing monthly beneficiary reports",
        "Yes, Remove location":"Yes, Remove location",
        "Back to Projects":"Back to Projects",
        "Back to Project Summary":"Back to Project Summary",
        "Last Updated":"Last Updated",

        //TARGET POPULATION

        "Activity":"Activity",
        "Description":"Description",
        "Details":"Details",
        "Delivery":"Delivery",
        "Mechanism":"Mechanism",
        "Package":"Package",
        "Category":"Category",
        "Beneficiary":"Beneficiary",
        "Population":"Population",
        "Amount":"Amount",
        "Units":"Units",
        "Transfers":"Transfers",
        "Families":"Families",
        "Boys":"Boys",
        "Girls":"Girls",
        "Men":"Men",
        "Women":"Women",
        "Treatment Same Province":"reatment Same Province",
        "Edit":"Edit",

        //LOCATION
        "Enter the TARGET LOCATIONS of your PROJECT in the form below":"Enter the TARGET LOCATIONS of your PROJECT in the form below",
        "Reporter":"Reporter",
        "Implementation":"Implementation",
        "Type":"Type",
        "From List":"From List",
        "Site Name":"Site Name",
        "save":"save",
        "delete":"delete",
        "Add Row":"Add Row",
        "Save":"Save",
        "Cancel":"Cancel",
        "Complete":"Complete",


        //PROYECT SUMMARY
        "Mark Project as Complete":"Mark Project as Complete",
        'Are you sure you want to mark this PROJECT as "COMPLETE"':'Are you sure you want to mark this PROJECT as "COMPLETE"',
        "Yes, project complete":"Yes, project complete",
        "Delete Project":"Delete Project",
        "Are you sure you want to DELETE this PROJECT and all its associated data":"Are you sure you want to DELETE this PROJECT and all its associated data",
        "Yes, delete project":"Yes, delete project",
        "Mark Project as Active":"Mark Project as Active",
        'Are you sure you want to move this project to "Active"':'Are you sure you want to move this project to "Active"',
        "Yes, move project to active":"Yes, move project to active",
        "Go to Project Details":"Go to Project Details",
        "Financial Reports":"Financial Reports",
        "Go to Financial Reports":"Go to Financial Reports",
        "Monthly Reports":"Monthly Reports",
        "Go to Monthly Reports":"Go to Monthly Reports",
        "Mark Project as Complete":"Mark Project as Complete",
        "Mark Project as Active":"Mark Project as Active",

        //FINANCIAL
        "Project Budget Progress":"Project Budget Progress",
        "Add a NEW ROW of financial details to your project for EACH PAYMENT recieved":"Add a NEW ROW of financial details to your project for EACH PAYMENT recieved",
        "Donor":"Donor",
        "Activity":"Activity",
        "Grant":"Grant",
        "Amount":"Amount",
        "Currency":"Currency",
        "Funds":"Funds",
        "Programming":"Programming",
        "Recieved":"Recieved",
        "Multi-Year Funding":"Multi-Year Funding",
        "Funding":"Funding",
        "Notes":"Notes",

        //REPORT:
        //Beneficiaries
      
        "Remarks":"Remarks",
        "Add Partial Kits": "Add Partial Kits",
        "Add Kit Details":"Add Kit Details",
        "Add Beneficiaries":"Add Beneficiaries",
        "monthly_beneficiaries_report_for":"Monthly Beneficiaries Report for",

        //locations
        "Note":"Note",
        "DROUGHT":"DROUGHT",
        "activities, please select from":"activities, please select from",
        "drop down beneficiary types":"drop down beneficiary types",
        "Drought Affected Displaced":"Drought Affected Displaced",
        "or":"or",
        "Drought Affected Non Displaced": "Drought Affected Non Displaced",
        "Selected Locations":"Selected Locations",
        "Edit Report":"Edit Report",
        "Please enter the amount per":"Please enter the amount per",
        "HOUSEHOLD ( HH )":"HOUSEHOLD ( HH )",
        "per":"per",
        "TRANSFER":"TRANSFER",
        "Please enter the":"Please enter the",
                "number  of transfers made":"number  of transfers made",
                "this":"this",
                "month":"month",
                "Add Trainings":"Add Trainings",
                "Add Location":"Add Location"



     });
  
  $translateProvider.translations('es',{

  	"LANGUAGE":"IDIOMA",
  	"Welcome":"Bienvenido",
  	"Welcome to":"Bienvenido a",
  	"Welcome to ReportHub": "Bienvenido a ReportHub",
  	"Register":"Registro",
  	"please LOGIN or REGISTER to continue":"por favor INICIE SESIÓN o REGISTRESE para continuar",
  	"please register to continue":"por favor registrese para continuar",
  	"LOGIN" : "INICIO DE SESIÓN",
  	"LOGOUT" : "CERRAR SESIÓN",
  	"my_home" : "MI INICIO",
  	"immap_home" : "iMMAP INICIO",
  	"my_admin" : "MI ADMIN",
  	"my_team" : "MI EQUIPO",
  	"my_profile":"MI PERFIL",
  	"my_projects" : "MIS PROYECTOS",
  	"my_stocks" : "MIS STOCKS",
  	"my_products" : "MIS PRODUCTOS",
  	"nutrition_weekly" : "NUTRICIÓN SEMANAL",
  	"DROUGHT" : "SEQUÍA",
  	"ASSESSMENTS" : "EVALUACIONES",
  	"CONTACT" : "CONTACTO",
  	"Contact":"Contacto",
  	"USERNAME" : "NOMBRE DE USUARIO",
    "PASSWORD" : "CONTRASEÑA",
    "REGISTER" : "REGISTRO",
    "forgot_password" : "OLVIDASTE LA CONTRASEÑA"  ,
    "sign_in" : "Inicar sesión",
    "reminder_sent": "RECORDATORIO ENVIADO",
    "please_check_your_ReportHub_email_account_to_reset_your_password":"Por favor revise su cuenta de email de ReportHub para reestablecer su contraseña",
    "the_email_will_contain_a_secure_link_to_reset_your_password_so_you_can_close_this_window.":"El email contendrá un enlace seguro para restablecer su contraseña, puede cerrar esta ventana.",
    "reset_password":"REESTABLECER CONTRASEÑA",
    "passwords_do_not_match":"Los password no coinciden",
    "new_password":"NUEVA CONTRASEÑA",
    "confirm_password":"CONFIRMAR CONTRASEÑA",
    "update_password":"Actualizar Contraseña",
    "having_trouble_finding_your_account":"Tienes problema para encontrar tu cuenta ", 
    "send_me_a_reminder":"Enviarme un Recordatorio",
    "back_to_login":"REGRESAR A LOGIN",
    "ORGANIZATION" : "ORGANIZACIÓN",
    "Organization" : "Organización",
    "Country" : "País",
    "select_country" : "Seleccionar País",
    "select_organization" : "Seleccionar Organización",
    "Sector" : "Sector",
    "select_sector" : "Seleccionar Sector",
    "select_station":"Seleccionar Estación",
    "multi_purpose_cash" : "Dinero Multi-Propósito",
    "Agriculture" : "Agricultura",
    "Education" : "Educación",
    "Health" : "Salud",
    "Nutrition" : "Nutrición",
    "Protection" : "Protección",
    "WASH" : "WASH - Agua, Saneamiento e Higiene",

    "Next" : "Siguiente",
   
       "full_name" : "Nombre Completo",
       "Position" : "Cargo",
       "Phone" : "Teléfono",
       "Email" : "Email",
       "EMAIL":"EMAIL",


       "Back" : "Atrás",
       "login_details" : "DETALLES DE INICIO DE SESIÓN",
       "Username" : "Nombre de Usuario",
       "Password" : "Contraseña",
       "Register" : "Registro",
       "immap_programme" : "PROGRAMA iMMAP",
       "select_programme" : "Seleccionar Programa",
       "Programme" : "Programa",
       "contract_start_date" : "Fecha Inicio del Contrato",
       "contract_end_date" : "Fecha Finalización del Contrato",
       "select_duty_station" : "Seleccionar Estación de Servicio",
       "duty_station" : "Estación de servicio",
       "Profile" : "Perfil",
       "Projects" : "Proyectos",
       "projects" : "proyectos",
       "Project":"Proyecto",
       "project":"proyecto",
       "go_to" : "Ir a",
       "Team" : "Equipo",
       "view_team" : "Ver Equipo",
       "Team":"Equipo",
       "Back to Organization":"Volver a Organización",
       "Add New Project":"Agregar Nuevo Proyecto",
       "projects for":"proyectos para",
       "Download Project Summaries as CSV":"Descargar Resúmenes de Proyectos como CSV",
       "update_project":"Actualización de proyecto",
       "updated":"Actualizado",

       //Helper
       "Please complete Project Details and enter a project summary description including objectives...":"Por favor  complete los Detalles del Proyecto y ingrese un resumen de la descripción del proyecto incluyendo objetivos...",
       
        //NEW PROJECT
        "Project Details":"Detalles del Proyecto nuevo",
        "Project Title":"Título del Proyecto",
        "Project Code":"Código del Proyecto",
        "Start Date":"Fecha de Inicio",
        "End Date":"Fecha de Finalización",
        "Project Budget":"Presupuesto del Proyecto",
        "Project Budget Currency":"Moneda del Presupuesto del Proyecto",
        "Select Project Budget Currency":"Seleccionar Moneda del Presupuesto del Proyecto",
        "Non-HRP Project":"No es un Proyecto HRP",
        "HRP Project":"Proyecto HRP",
        "HRP Project Code":"Código del Proyecto HRP",
        "Activity Type":"Tipo de Actividad",
        "Other activities in addition to":"Otras actividades además de",
        "Project Donor":"Donante del Proyecto",
        "Project Partners":"Socios del Proyecto",
        "Other Implementing Partners":"Otros Socios Implementadores",
        "Project Description & Objectives":"Descripción y Objetivos del Proyecto",
        "Project Focal Point":"Punto Focal del Proyecto",
        "Target Population":"Población Objetivo",
        "Project Target Locations":"Locaciones Objetivo del Proyecto",
         "Select FOCAL POINT of your PROJECT in the form below":"Seleccione el PUNTO FOCAL de su PROYECTO en el siguiente formulario",
         "Enter the TARGET BENEFICIARIES of your PROJECT in the form below":"Ingrese los BENEFICIARIOS OBJETIVO de su PROYECTO en el siguiente formulario",
         "Save Project":"Guardar Proyecto",
         "Do you want to Save this project":"Quieres Guardar este proyecto",
         "Yes":"Si",
         "Cancel New Project":"Cancelar Nuevo Proyecto",
         "Are you sure you want to return to Projects":"Seguro que quieres volver a Proyectos",
         "Cancel Project Update":"Cancelar Actualización del Proyecto",
         "Return to Project Summary":"Volver al Resumen del Proyecto",
         "Yes, Cancel Update":"Si, Cancelar Actualización",
         "Remove People in Need":"Eliminar Personas con Necesidad",
         "Remove People in Need from Project":"Eliminar Personas con Necesidad del Proyecto",
         "Yes, Remove People in Need":"Si, Eliminar Personas con Necesidad",
         "Remove Project Location":"Eliminar Ubicación del Proyecto",
         "This will effect any existing monthly beneficiary reports":"Esto afectará cualquier informe mensual de beneficiarios existente",
         "Yes, Remove location":"Si, Eliminar ubicación",
         "Back to Projects":"Volver a Proyectos",
         "Back to Project Summary":"Volver al Resumen del Proyecto",
         "Last Updated":"Última Actualización",
        //TARGET POPULATION

        "Activity":"Actividad",
        "Description":"Descripción",
        "Details":"Detalles",
        "Delivery":"Entrega",
        "Mechanism":"Mecanismo",
        "Package":"Paquete",
        "Category":"Categoría",
        "Beneficiary":"Beneficiario",
        "Population":"Población",
        "Amount":"Monto",
        "Units":"Unidades",
        "Transfers":"Transferencias",
        "Families":"Familias",
        "Boys":"Niños",
        "Girls":"Niñas",
        "Men":"Hombre",
        "Women":"Mujer",
        "Treatment Same Province":"Tratamiento en la Misma Provincia",
        "Edit":"Editar",

        //LOCATION
        "Enter the TARGET LOCATIONS of your PROJECT in the form below":"Ingrese la LOCACIÓN OBJETIVO de su PROYECTO en el siguiente formulario",
        "Reporter":"Reportero",
        "Implementation":"Implementación",
        "Type":"Tipo",
        "From List":"Lista de Origenes",
        "Site Name":"Nombre del Sitio",
        "save":"Guardar",
        "delete":"Eliminar",
        "Add Row":"Agregar fila",
        "Save":"Guardar",
        "Cancel":"Cancelar",
        "Active":"Activo",
        "Complete":"Completo",


        //PROYECT SUMMARY
        "Mark Project as Complete":"Marcar Proyecto como COMPLETO",
        'Are you sure you want to mark this PROJECT as "COMPLETE"':'Está seguro que quiere marcar este PROYECTO como "COMPlETO"',
        "Yes, project complete":"Si, proyecto completo",
        "Delete Project":"Eliminar Proyecto",
        "Are you sure you want to DELETE this PROJECT and all its associated data":"Está seguro que quiere ELIMINAR este PROYECTO y todos los datos asociados",
        "Yes, delete project":"Si, eliminar proyecto",
        "Mark Project as Active":"Marcar proyecto como Activo",
        'Are you sure you want to move this project to "Active"':'Está seguro que quiere mover este proyecto a "Activo"',
        "Yes, move project to active":"Si, mover proyecto a activo",
        "Go to Project Details":"Ir a Detalles del Proyecto",
        "Financial Reports":"Reportes Financieros",
        "Go to Financial Reports":"Ir a Reportes Financieros",
        "Monthly Reports":"Reportes Mensuales",
        "Go to Monthly Reports":"Ir a Reportes Mensuales",
        "Mark Project as Complete":"Marcar Proyecto como Completo",
        "Mark Project as Active":"Marcar Proyecto como Activo",


        //FINANCIAL
        "Project Budget Progress":"Progreso Presupuesto del Proyecto",
        "Add a NEW ROW of financial details to your project for EACH PAYMENT recieved":"Agregar una NUEVA FILA de detalles financieros a su proyecto por CADA PAGO recivido",
        "Donor":"Donante",
        "Activity":"Actividad",
        "Grant":"Donante",
        "Amount":"Monto",
        "Currency":"Moneda",
        "Funds":"Fondos",
        "Programming":"Programación",
        "Recieved":"Recibido",
        "Multi-Year Funding":"Financiación Munti-anual",
        "Funding":"Financiación",
        "Notes":"Notas",

        //REPORTS
        //Beneficiaries
        "Remarks":"Observaciones",
        "Add Partial Kits": "Agregar Kits Parciales ",
        "Add Kit Details":"Agregar Detalles del Kit",
        "Add Beneficiaries":"Agregar Beneficiarios",
        "monthly_beneficiaries_report_for":"Reporte Mensual para Beneficiarios",
        "reports":"Reportes",

        //locations
        "Note":"Nota",
        "DROUGHT":"SEQUÍA",
        "activities, please select from":"actividades, por favor seleccione el origen",
        "drop down beneficiary types":"desplegar tipo de beneficiarios",
        "Drought Affected Displaced":"Afectados por Sequía Desplazados",
        "or":"ó",
        "Drought Affected Non Displaced": "Afectados por la Sequía No Desplazados",
        "Selected Locations":"Ubicaciones Seleccionadas",
        "Edit Report":"Editar Reporte",
        "Please enter the amount per":"Por favor ingrese la cantidad por",
        "HOUSEHOLD ( HH )":"GRUPOFAMILIAR",
        "per":"por",
        "TRANSFER":"TRANSFERENCIA",
        "Please enter the":"Por favor ingrese la",
                "number  of transfers made":"número de transferencias realizadas",
                "this":"este",
                "month":"mes",
                "Add Trainings":"Agregar Practicantes",
                "Add Location":"Agregar Ubicación"



  });

  $translateProvider.preferredLanguage('es');

  

		// from http://mysite.com/#/notes/1 to http://mysite.com/notes/1
		// $locationProvider.html5Mode(true);

		// extend localstorage to set an object
		Storage.prototype.setObject = function( key, value ) {
			this.setItem( key, JSON.stringify( value ) );
		}

		// extend localstorage to get an object
		Storage.prototype.getObject = function( key ) {
			var value = this.getItem( key );
			return value && JSON.parse( value );
		}

		// https://medium.com/swlh/improving-angular-performance-with-1-line-of-code-a1fb814a6476#.ufea9sjt1
		$compileProvider.debugInfoEnabled( false );

		// all routes prescribed within specific module app.js files
		$routeProvider
			
			// LOGIN
			.when( '/login', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardLoginCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAnonymous();
					}],
				}
			})			
			// FORBIDDEN
			.when( '/forbidden', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardForbiddenCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return !ngmAuth.isAuthenticated();
					}],
				}
			})
			// TEAM
			.when( '/team', {
				redirectTo: '/team/all/all/all/all'
			})
			.when( '/team/:admin0pcode/:organization_tag/:project/:cluster_id', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardTeamCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})
			// PROFILE
			.when( '/profile', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardProfileCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})
			.when( '/profile/:username', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardProfileCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})
			// achievements
			.when( '/reporthub', {
				redirectTo: '/reporthub/2016'
			})
			.when( '/reporthub/login', {
				redirectTo: '/reporthub/2016'
			})
			// achievements
			.when( '/reporthub/:year', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardReportHubCtrl',
				resolve: {
					access: [ 'ngmAuth', function( ngmAuth ) {
						return ngmAuth.grantPublicAccess();
					}],
				}
			})
			// DEFAULT
			.otherwise({
				redirectTo: '/cluster/projects'
			});
	}])
	.run([ '$rootScope', '$window', '$location', 'ngmAuth', 'ngmUser', function( $rootScope, $window, $location, ngmAuth, ngmUser ) {

		// check session by last login
		ngmAuth.setSessionTimeout( ngmUser.get() );
		
		// new guest page visit
		if ( ngmUser.get() && ngmUser.get().guest ) {
			ngmUser.unset();
		}

		// check URL
		if ( $location.$$host.search('dev') > -1 ) {
			// add DEV message if necissary
			$('#print').append('<h4 class="grey-text text-lighten-2" style="position:absolute;top:0;right:0;padding-right:165px;padding-top:35px;">TEST VERSION</h4>');
		}

		// IE checks!!!!!!
		if (/MSIE 10/i.test($window.navigator.userAgent)) {
		   // This is internet explorer 10
		   openIeModal();
		}
		if (/MSIE 9/i.test($window.navigator.userAgent) || /rv:11.0/i.test($window.navigator.userAgent)) {
		    // This is internet explorer 9 or 11
		    openIeModal();
		}
		if (/Edge\/\d./i.test($window.navigator.userAgent)){
		   // This is Microsoft Edge
		   openIeModal();
		}
		// open modal
		function openIeModal() {
			$('#ngm-ie-modal').openModal({dismissible: false});
		}

		// when error on route update redirect
		$rootScope.$on( '$routeChangeError', function( event, current, previous, rejection ) {

			// get app
			var app = current.$$route.originalPath.split('/')[1];
			if ( rejection === ngmAuth.UNAUTHORIZED ) {
				$location.path( '/' + app + '/login' );
			} else if ( rejection === ngmAuth.FORBIDDEN ) {
				$location.path( '/' + app + '/forbidden' );
			}

		});

	}])
	.controller('ngmReportHubCrtl', ['$scope', '$route', '$location', '$http', '$timeout', 'ngmAuth', 'ngmUser','$translate', function ($scope, $route, $location, $http, $timeout, ngmAuth, ngmUser,$translate) {
   


       changeFunction = function ($key) {
			  	//console.log($key);
			   $translate.preferredLanguage(key);
			  };
        
		// ngm object
		$scope.ngm = {


			// app name
			title: 'Welcome',

			// current route
			route: $route,

			// active dashboard placeholder
			dashboard: {
				model: {}
			},

			// top navigation page menu
			navigationMenu: false,

			// left menu
			menu: {
				search: true,
				focused: false,
				query: []
			},

			// page height
			height: $( window ).height(),

			// dashboard footer
			footer: false,

			changeFunction : function ($key) {
			  	console.log($key);
			   $translate.use($key);
			  },

			// paint application
			setApplication: function( app ) {

				// set app colors based on 
				switch( app ){
					case 'who':
						// set style obj
						if ( $location.$$path.split('/')[2] === 'ethiopia' ) {
							$scope.ngm.style = {
								logo: 'logo-health.png',
								home: '#/who/ethiopia',
								darkPrimaryColor: '#1976D2',
								defaultPrimaryColor: '#2196F3',
								lightPrimaryColor: '#BBDEFB'
							}
						} else {
							$scope.ngm.style = {
								logo: 'logo-who.png',
								home: '#/who',
								darkPrimaryColor: '#1976D2',
								defaultPrimaryColor: '#2196F3',
								lightPrimaryColor: '#BBDEFB'
							}
						}
						break;
					case 'immap':
						// set style obj
						$scope.ngm.style = {
							logo: 'logo-immap.png',
							home: '#/immap',
							darkPrimaryColor: '#DE696E',
							defaultPrimaryColor: '#EE6E73',
							lightPrimaryColor: '#EF9A9A'
						}
						break;
          case 'epr':
            // set style obj
            $scope.ngm.style = {
              logo: 'logo-health.png',
              home: '#/epr',
              darkPrimaryColor: '#1976D2',
              defaultPrimaryColor: '#2196F3',
              lightPrimaryColor: '#BBDEFB'
            }
            break;
          case 'reporthub':
            // set style obj
            $scope.ngm.style = {
              logo: 'logo.png',
              home: '#/reporthub',
              darkPrimaryColor: '#1976D2',
              defaultPrimaryColor: '#2196F3',
              lightPrimaryColor: '#BBDEFB'
            }
            break;
          case 'snapshot':
            // set style obj
            if ( $location.$$path.split('/')[2] === 'immap' ) {
							$scope.ngm.style = {
								logo: 'logo-immap.png',
								home: '#/immap',
								darkPrimaryColor: '#DE696E',
								defaultPrimaryColor: '#EE6E73',
								lightPrimaryColor: '#EF9A9A'
							}
            } else {
							$scope.ngm.style = {
								logo: 'logo-health.png',
								home: '#/who/ethiopia',
								darkPrimaryColor: '#1976D2',
								defaultPrimaryColor: '#2196F3',
								lightPrimaryColor: '#BBDEFB'
							}
            }
            break;
					default:

						// logo
						var logo = 'logo.png';
						if ( ngmUser.get() && ngmUser.get().cluster_id ) {
							logo = 'logo-' + ngmUser.get().cluster_id + '.png';
						}

						// if WHO Ethiopia user!
						if ( ngmUser.get() && ngmUser.get().organization_tag === 'who' 
								&& ngmUser.get().admin0pcode === 'ET' ) {
							$scope.ngm.style = {
								logo: 'logo-health.png',
								home: '#/who/ethiopia',
								darkPrimaryColor: '#1976D2',
								defaultPrimaryColor: '#2196F3',
								lightPrimaryColor: '#BBDEFB'
							}
						} else {
							// default
							$scope.ngm.style = {
								logo: logo,
								home: '#/cluster',
								darkPrimaryColor: '#1976D2',
								defaultPrimaryColor: '#2196F3',
								lightPrimaryColor: '#BBDEFB'
							}
						}
				}

				// body footer
				$scope.ngm.footer = '<div>'
														+	'<div style="background: ' + $scope.ngm.style.lightPrimaryColor + '; height:20px;"></div>'
														+	'<div style="background: ' + $scope.ngm.style.defaultPrimaryColor + '; height:60px;">'
															+	'<p class="ngm-menu-footer-body" style="font-weight:300;">Supported by <a class="grey-text" href="http://immap.org"><b>iMMAP</b></a></p>'
															+ '<p id="ngm-contact" class="remove" style="display: block; float:right; padding-right:20px;"><a class="waves-effect waves-teal btn-flat" style="color:white;" onclick="contact()"><i class="material-icons left" style="color:white;">perm_contact_calendar</i>Contact</a></p>'
															+ '<p id="ngm-report-extracted" style="display: none; color:white; font-weight:100; float:right; padding-right:20px;">' +moment().format('DD MMM, YYYY @ h:mm a') + '</p>'													
														+	'</div>'
													+	'</div>';

			},


			  

			// user
			getUser: function() {
				// ngmUser
				return ngmUser.get();
			},


			// username
			getUserName: function() {
				// ngmUser
				if ( ngmUser.get() ) {
					return ngmUser.get().username;
				} else {
					return 'welcome';
				}
			},

			// app functions
			logout: function() {
				ngmAuth.logout();
			},

			// open contact modal
			contact: function() {
				// open modal
				$( '#ngm-contact-modal' ).openModal({ dismissible: false });
			},

			// Detect touch screen and enable scrollbar if necessary
			isTouchDevice: function () {
				try {
					document.createEvent( 'TouchEvent' );
					return true;
				} catch (e) {
					return false;
				}
			},

			// toggle search active
			toggleSearch: function(selector) {
				// toggle search input
				$( '#nav-' + selector ).slideToggle();
			},

			//
			toggleNavigationMenu: function() {
				// rotate icon
				$( '.ngm-profile-icon' ).toggleClass( 'rotate' );
				// set class
	    	$( '.ngm-profile' ).toggleClass( 'active' );
	    	$( '.ngm-profile-menu-content' ).toggleClass( 'active' );
	    	// toggle menu dropdown
				$( '.ngm-profile-menu-content' ).slideToggle();
			}		

		};

		// nav menu
		if ( $scope.ngm.isTouchDevice() ) {
			$( '#nav-mobile' ).css({ overflow: 'auto'});
		}

		// profile menu dropdown click
		$( '.ngm-profile-icon' ).click( function(){
				// on app load, toggle menu on click
				$scope.ngm.toggleNavigationMenu();
		});

		// paint application
		$scope.$on( '$routeChangeStart', function( next, current ) {

			// get application
			var app = $location.$$path.split('/')[1];
			// set application
			$scope.ngm.setApplication( app );

		});

		// annoying loading artifacts of left menu
    angular.element(document).ready(function () {
      // give a few seconds to render
      $timeout(function() {
				$( '.ngm-navigation-menu' ).css({ 'display': 'block' });
			}, 1000 );
    });

	}]);
