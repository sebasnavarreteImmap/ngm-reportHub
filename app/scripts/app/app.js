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
     	"Welcome to ReportHub":"Welcome to ReportHub",
     	"Register":"Register",
     	"please LOGIN or REGISTER to continue":"please LOGIN or REGISTER to continue",
     	"please register to continue":"please register to continue",
     	"LOGIN" : "LOGIN",
     	"LOGOUT" : "LOGOUT",
     	"MY HOME" : "MY HOME",
     	"iMMAP HOME" : "iMMAP HOME",
     	"MY ADMIN" : "MY ADMIN",
     	"MY TEAM" : "MY TEAM",
     	"MY PROFILE" : "MY PROFILE",
     	"MY PROJECTS" : "MY PROJECTS",
     	"MY STOCKS" : "MY STOCKS",
     	"MY PRODUCTS" : "MY PRODUCTS",
     	"ASSESSMENTS" : "ASSESSMENTS",
     	"NUTRITION WEEKLY" : "NUTRITION WEEKLY",
     	"DROUGHT" : "DROUGHT",
     	"CONTACT" : "CONTACT",
     	"USERNAME" : "USERNAME",
     	"PASSWORD" : "PASSWORD",
       "REGISTER" : "REGISTER",
       "FORGOT PASSWORD" : "FORGOT PASSWORD",
       "Sign in" : "Sign in",
       "ORGANIZATION" : "ORGANIZATION",
       "Organization" : "Organization",
       "Country" : "Country",
       "Select Country" : "Select Country",
       "Select Organization" : "Select Organization",
       "Sector" : "Sector",
       "Select Sector" : "Select Sector",
       "Agriculture" : "Agriculture",
       "Education":"Education",
       "Health": "Health",
       "Nutrition" : "Nutrition",
       "Protection" : "Protection",
       "WASH" : "WASH",
       "Multi-Purpose Cash" : "Multi-Purpose Cash",
       "Next" : "Next",
       "CONTACT" : "CONTACT",
       "Full Name" : "Full Name",
       "Position" : "Position",
       "Phone" : "Phone",
       "Email" : "Email",
       "Back" : "Back",
       "LOGIN DETAILS" : "LOGIN DETAILS",
       "Username" : "Username",
       "Password" : "Password",
       "Register" : "Register",
       "iMMAP PROGRAMME" : "iMMAP PROGRAMME",
       "Select Programme" : "Select Programme",
       "Programme" : "Programme",
       "Contract Start Date" : "Contract Start Date",
       "Contract End Date" : "Contract End Date",
       "Select Duty Station" : "Select Duty Station",
       "Duty Station" : "Estación de Servicio",
       "Profile" : "Profile",
       "Go to" : "Go to",
       "Team" : "Team",
       "View Team" : "View Team",
       "Projects":"Projects",
       "Project":"Project",

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

     });
  
  $translateProvider.translations('es',{

  	"LANGUAGE":"IDIOMA",
  	"Welcome":"Bienvenido",
  	"Welcome to ReportHub": "Bienvenido a ReportHub",
  	"Register":"Registro",
  	"please LOGIN or REGISTER to continue":"por favor INICIE SESIÓN o REGISTRESE para continuar",
  	"please register to continue":"por favor registrese para continuar",
  	"LOGIN" : "INICIO DE SESIÓN",
  	"LOGOUT" : "CERRAR SESIÓN",
  	"MY HOME" : "MI INICIO",
  	"iMMAP HOME" : "iMMAP INICIO",
  	"MY ADMIN" : "MI ADMIN",
  	"MY TEAM" : "MI EQUIPO",
  	"MY PROFILE":"MI PERFIL",
  	"MY PROJECTS" : "MIS PROYECTOS",
  	"MY STOCKS" : "MIS STOCKS",
  	"MY PRODUCTS" : "MIS PRODUCTOS",
  	"NUTRITION WEEKLY" : "NUTRICIÓN SEMANAL",
  	"DROUGHT" : "SEQUÍA",
  	"ASSESSMENTS" : "EVALUACIONES",
  	"CONTACT" : "CONTACTO",
  	"USERNAME" : "NOMBRE DE USUARIO",
    "PASSWORD" : "CONTRASEÑA",
    "REGISTER" : "REGISTRO",
    "FORGOT PASSWORD" : "OLVIDASTE LA CONTRASEÑA"  ,
    "Sign in" : "Inicar sesión",
    "ORGANIZATION" : "ORGANIZACIÓN",
    "Organization" : "Organización",
    "Country" : "País",
    "Select Country" : "Seleccionar País",
    "Select Organization" : "Seleccionar Organización",
    "Sector" : "Sector",
    "Select Sector" : "Seleccionar Sector",
    "Multi-Purpose Cash" : "Dinero Multi-Propósito",
    "Agriculture" : "Agricultura",
    "Education" : "Educación",
    "Health" : "Salud",
    "Nutrition" : "Nutrición",
    "Protection" : "Protección",
    "WASH" : "WASH - Agua, Saneamiento e Higiene",

    "Next" : "Siguiente",
    "CONTACT" : "CONTACTO",
       "Full Name" : "Nombre Completo",
       "Position" : "Cargo",
       "Phone" : "Teléfono",
       "Email" : "Email",
       "Back" : "Atrás",
       "LOGIN DETAILS" : "DETALLES DE INICIO DE SESIÓN",
       "Username" : "Nombre de Usuario",
       "Password" : "Contraseña",
       "Register" : "Registro",
       "iMMAP PROGRAMME" : "PROGRAMA iMMAP",
       "Select Programme" : "Seleccionar Programa",
       "Programme" : "Programa",
       "Contract Start Date" : "Fecha Inicio del Contrato",
       "Contract End Date" : "Fecha Finalización del Contrato",
       "Select Duty Station" : "Seleccionar Estación de Servicio",
       "Duty Station" : "Estación de servicio",
       "Profile" : "Perfil",
       "Projects" : "Proyectos",
       "Project":"Proyecto",
       "Go to" : "Ir a",
       "Team" : "Equipo",
       "View Team" : "Ver Equipo",

       //NEW PROJECT
        "Project Details":"Detalles del Proyecto",
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
