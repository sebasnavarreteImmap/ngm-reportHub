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
        "Activity Type":"Activity Type",
        "Other Implementing Partners":"Other Implementing Partners",
        "Other activities in addition to ":"Other activities in addition to",
        "Project Donor":"Project Donor",
        "Project Parners":"Project Parners",
        "Project Description & Objectives":"Project Description & Objectives",
        "Project Focal Point":"Project Focal Point",
        "Target Population":"Target Population",
        "Project Target Locations":"Project Target Locations"


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
        "Activity Type":"Tipo de Actividad",
        "Other activities in addition to ":"Otras actividades además de",
        "Project Donor":"Donante del Proyecto",
        "Project Parners":"Socios del Proyecto",
        "Other Implementing Partners":"Otros Socios Implementadores",
        "Project Description & Objectives":"Descripción y Objetivos del Proyecto",
        "Project Focal Point":"Punto Focal del Proyecto",
        "Target Population":"Población Objetivo",
        "Project Target Locations":"Locaciones Objetivo del Proyecto"


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
