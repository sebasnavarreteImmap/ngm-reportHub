/**
 * @ngdoc overview
 * @name ngmReportHubApp
 * @description
 * # ngmReportHubApp
 *
 * Main module of the application.
 */
angular
	.module('ngmCluster',[])
	.config([ '$routeProvider', '$compileProvider','$translateProvider', function ( $routeProvider, $compileProvider, $translateProvider) {

		// https://medium.com/swlh/improving-angular-performance-with-1-line-of-code-a1fb814a6476#.ufea9sjt1
		$compileProvider.debugInfoEnabled( false );


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
       "View Team" : "View Team"

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
       "View Team" : "Ver Equipo"


  });

  $translateProvider.preferredLanguage('es');


		this.page = {
			start_date: function() {
				var date;
				if ( moment.utc().date() <= 20 ) {
					date = moment.utc().startOf( 'M' ).subtract( 1, 'M').format( 'YYYY-MM-DD' )
				} else {
					date = moment.utc().startOf( 'M' ).format( 'YYYY-MM-DD' );
				}
				return date;
			},
			end_date: function() {
				var date;
				if ( moment.utc().date() <= 20 ) {
					date = moment.utc().endOf( 'M' ).subtract( 1, 'M').format( 'YYYY-MM-DD' )
				} else {
					date = moment.utc().endOf( 'M' ).format( 'YYYY-MM-DD' );
				}
				return date;
			},
		}

		// app routes with access rights
		$routeProvider
			// login
			.when( '/cluster/login', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardLoginCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAnonymous();
					}],
				}
			})
			// register
			.when( '/cluster/register', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardRegisterCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAnonymous();
					}],
				}
			})
			// reset with token
			.when( '/cluster/find/:token', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardResetCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAnonymous();
					}],
				}
			})
			// forbidden
			.when( '/cluster/forbidden', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardForbiddenCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
							return !ngmAuth.isAuthenticated();
					}],
				}
			})
			// guides
			.when( '/cluster/guides', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardGuidesMenuCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
							return ngmAuth.grantPublicAccess();
					}],
				}
			})		
			// feedback
			.when( '/cluster/guides/feedback', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardGuidesFeedbackCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
							return ngmAuth.grantPublicAccess();
					}],
				}
			})
			// screencasts
			.when( '/cluster/guides/screens', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardGuidesScreenCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
							return ngmAuth.grantPublicAccess();
					}],
				}
			})			
			// organization
			.when( '/cluster/organization', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterAppCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})
			// project list by organization
			.when( '/cluster/organization/:organization_id', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterAppCtrl',
				resolve: {
					access: [ 'ngmAuth', function( ngmAuth ) {
						return ngmAuth.hasRole( 'ADMIN' );
					}],
				}
			})
			// stock reports
			.when( '/cluster/stocks', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterOrganizationStocksListCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})
			// stock reports list by organization
			.when( '/cluster/stocks/:organization_id', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterOrganizationStocksListCtrl',
				resolve: {
					access: [ 'ngmAuth', function( ngmAuth ) {
						return ngmAuth.hasRole( 'ADMIN' );
					}],
				}
			})
			// stock report
			.when( '/cluster/stocks/report/:organization_id/:report_id', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterOrganizationStockReportCtrl',
				resolve: {
					access: [ 'ngmAuth', function( ngmAuth ) {
						return ngmAuth.isAuthenticated();
					}],
				}
			})

			// Syria FSAC Demo
			.when( '/cluster/syria/fsac', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterSyriaDashboard',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})

			// project list
			.when( '/cluster/projects', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterProjectProjectsCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})
			// project list by organization
			.when( '/cluster/projects/:organization_id', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterProjectProjectsCtrl',
				resolve: {
					access: [ 'ngmAuth', function( ngmAuth ) {
						return ngmAuth.hasRole( 'ADMIN' );
					}],
				}
			})			
			// project summary
			.when( '/cluster/projects/summary/:project', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterProjectSummaryCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})
			// project details
			.when( '/cluster/projects/details/:project', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterProjectDetailsCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})
			// project reports
			.when( '/cluster/projects/report/:project', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterProjectReportsListCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})
			// project reports
			.when( '/cluster/projects/report/:project/:report', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterProjectReportCtrl',
				resolve: {
					access: [ 'ngmAuth', function( ngmAuth ) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})			
			// project financials
			.when( '/cluster/projects/financials/:project', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'ClusterProjectFinancialsCtrl',
				resolve: {
					access: [ 'ngmAuth', function( ngmAuth ) { 
						return ngmAuth.isAuthenticated();
					}],
				}
			})

			// DEFAULT
			.when( '/cluster/admin', {
				redirectTo: '/cluster/admin/all/all/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})

			// HQ SUPERADMIN BY CLUSTER
			.when( '/cluster/admin/all/all/agriculture', {
				redirectTo: '/cluster/admin/all/all/all/agriculture/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/all/all/education', {
				redirectTo: '/cluster/admin/all/all/all/education/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/all/all/esnfi', {
				redirectTo: '/cluster/admin/all/all/all/esnfi/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/all/all/fsac', {
				redirectTo: '/cluster/admin/all/all/all/fsac/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/all/all/health', {
				redirectTo: '/cluster/admin/all/all/all/health/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/all/all/nutrition', {
				redirectTo: '/cluster/admin/all/all/all/nutrition/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/all/all/cvwg', {
				redirectTo: '/cluster/admin/all/all/all/cvwg/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/all/all/protection', {
				redirectTo: '/cluster/admin/all/all/all/protection/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/all/all/wash', {
				redirectTo: '/cluster/admin/all/all/all/wash/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			
			// AFRO
			.when( '/cluster/admin/afro', {
				redirectTo: '/cluster/admin/afro/all/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/afro/cd', {
				redirectTo: '/cluster/admin/afro/cd/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/afro/et', {
				redirectTo: '/cluster/admin/afro/et/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/afro/ng', {
				redirectTo: '/cluster/admin/afro/ng/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/afro/ss', {
				redirectTo: '/cluster/admin/afro/ss/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})

			// EMRO
			.when( '/cluster/admin/emro', {
				redirectTo: '/cluster/admin/emro/all/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/emro/af', {
				redirectTo: '/cluster/admin/emro/af/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/emro/so', {
				redirectTo: '/cluster/admin/emro/so/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/emro/sy', {
				redirectTo: '/cluster/admin/emro/sy/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/emro/ur', {
				redirectTo: '/cluster/admin/emro/ur/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})

			// EURO
			.when( '/cluster/admin/euro', {
				redirectTo: '/cluster/admin/euro/all/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/euro/ua', {
				redirectTo: '/cluster/admin/euro/ua/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})

			// SEARO
			.when( '/cluster/admin/searo', {
				redirectTo: '/cluster/admin/searo/all/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/searo/bd', {
				redirectTo: '/cluster/admin/searo/bd/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when( '/cluster/admin/searo/cb', {
				redirectTo: '/cluster/admin/searo/cb/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})

			//AMER
			.when('/cluster/admin/amer',{
				redirectTo:'/cluster/admin/amer/all/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})
			.when('/cluster/admin/amer/col',{
				redirectTo: '/cluster/admin/amer/col/all/all/all/activity/' + this.page.start_date() + '/' + this.page.end_date()
			})

			// ADMIN
			.when( '/cluster/admin/:adminRpcode/:admin0pcode/:cluster_id/:activity_type_id/:organization_tag/:report_type/:start/:end', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardClusterAdminCtrl',
				resolve: {
					access: [ 'ngmAuth', function( ngmAuth ) {
						// return ngmAuth.hasRole( 'ADMIN' );
						return ngmAuth.isAuthenticated();
					}],
				}
			})

			// hct dashboard 2017
			.when( '/cluster/health/hct', {
				redirectTo: '/cluster/health/hct/all'
			})
			.when( '/cluster/health/hct/:province', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardHctCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.grantPublicAccess();
					}],
				}
			})

			// cluster dashboard default
			.when( '/cluster/4w', {
				redirectTo: '/cluster/5w'
			})
			.when( '/cluster/5w', {
				resolve: {
					access: [ '$location', 'ngmUser', function( $location, ngmUser ) {
						var adminRpcode =ngmUser.get() && ngmUser.get().adminRpcode ? ngmUser.get().adminRpcode.toLowerCase() : 'hq';
						var admin0pcode =ngmUser.get() && ngmUser.get().admin0pcode ? ngmUser.get().admin0pcode.toLowerCase() : 'all'; 
						var cluster_id = ngmUser.get() && ngmUser.get().cluster_id ? ngmUser.get().cluster_id : 'all';
						var url = '/cluster/5w/' + adminRpcode + '/' + admin0pcode + '/all/all/' + cluster_id + '/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD');
						$location.path( url );
					}]
				},
			})
			.when( '/cluster/5w//', {
				resolve: {
					access: [ '$location', 'ngmUser', function( $location, ngmUser ) {
						var adminRpcode =ngmUser.get() && ngmUser.get().adminRpcode ? ngmUser.get().adminRpcode.toLowerCase() : 'hq';
						var admin0pcode =ngmUser.get() && ngmUser.get().admin0pcode ? ngmUser.get().admin0pcode.toLowerCase() : 'all'; 
						var cluster_id = ngmUser.get() && ngmUser.get().cluster_id ? ngmUser.get().cluster_id : 'all';
						var url = '/cluster/5w/' + adminRpcode + '/' + admin0pcode + '/all/all/' + cluster_id + '/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD');
						$location.path( url );
					}]
				},
			})

			// cluster dashboard default
			// .when( '/cluster/5w/', {
			// 	redirectTo: '/cluster/5w/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			// })
			// // cluster dashboard AFRO
			// .when( '/cluster/5w//', {
			// 	redirectTo: '/cluster/5w/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			// })

			// cluster dashboard HQ
			.when( '/cluster/5w/hq', {
				redirectTo: '/cluster/5w/hq/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/hq/all', {
				redirectTo: '/cluster/5w/hq/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			
			// cluster dashboard AFRO
			.when( '/cluster/5w/afro', {
				redirectTo: '/cluster/5w/afro/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/afro/all', {
				redirectTo: '/cluster/5w/afro/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/afro/cd', {
				redirectTo: '/cluster/5w/afro/cd/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/afro/et', {
				redirectTo: '/cluster/5w/afro/et/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/afro/ng', {
				redirectTo: '/cluster/5w/afro/ng/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/afro/ss', {
				redirectTo: '/cluster/5w/afro/ss/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})

			// EURO
			.when( '/cluster/5w/euro', {
				redirectTo: '/cluster/5w/euro/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/euro/all', {
				redirectTo: '/cluster/5w/euro/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/euro/ua', {
				redirectTo: '/cluster/5w/euro/ua/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			
			// cluster dashboard EMRO
			.when( '/cluster/5w/emro', {
				redirectTo: '/cluster/5w/emro/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/emro/all', {
				redirectTo: '/cluster/5w/emro/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/emro/af', {
				redirectTo: '/cluster/5w/emro/af/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/emro/so', {
				redirectTo: '/cluster/5w/emro/so/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/emro/sy', {
				redirectTo: '/cluster/5w/emro/sy/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/emro/ur', {
				redirectTo: '/cluster/5w/emro/ur/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})

			// SEARO
			.when( '/cluster/5w/searo', {
				redirectTo: '/cluster/5w/searo/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/searo/all', {
				redirectTo: '/cluster/5w/searo/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/searo/bd', {
				redirectTo: '/cluster/5w/searo/bd/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when( '/cluster/5w/searo/cb', {
				redirectTo: '/cluster/5w/searo/cb/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})

			//AMER
			.when('/cluster/5w/amer', {
				redirectTo: '/cluster/5w/amer/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when('/cluster/5w/amer/all', {
				redirectTo: '/cluster/5w/amer/all/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})
			.when('/cluster/5w/amer/col',{
				redirectTo: '/cluster/5w/amer/col/all/all/all/all/all/all/2018-01-01/' + moment().format('YYYY-MM-DD')
			})

			// health dashboard
			.when( '/cluster/5w/:adminRpcode/:admin0pcode/:admin1pcode/:admin2pcode/:cluster_id/:activity_type_id/:organization_tag/:beneficiaries/:start/:end', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardClusterCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.grantPublicAccess();
					}],
				}
			})

			// health dashboard
			.when( '/cluster/health', {
				// redirectTo: '/cluster/health/5w/hq/all/all/all/all/all/all/2016-01-01/' + moment().format('YYYY-MM-DD')
				redirectTo: '/cluster/health/4w/hq/all/all/all/all/all/all/2016-01-01/2016-12-31'
			})
			// health dashboard
			.when( '/cluster/health/4w', {
				// redirectTo: '/cluster/health/4w/hq/all/all/all/all/all/all/2016-01-01/' + moment().format('YYYY-MM-DD')
				redirectTo: '/cluster/health/4w/hq/all/all/all/all/all/all/2016-01-01/2016-12-31'
			})
			// health dashboard
			.when( '/cluster/health/4w/:adminR/:admin0/:organization_tag/:admin1/:admin2/:project/:beneficiaries/:start/:end', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardHealthCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return ngmAuth.grantPublicAccess();
					}],
				}
			})
			// FORBIDDEN
			.when( '/cluster/forbidden', {
				templateUrl: '/views/app/dashboard.html',
				controller: 'DashboardForbiddenCtrl',
				resolve: {
					access: [ 'ngmAuth', function(ngmAuth) { 
						return !ngmAuth.isAuthenticated();
					}],
				}
			})
			// CLUSTER HOME
			.when( '/cluster', {
				redirectTo: '/cluster/organization'
			})
			// DEFAULT
			// .otherwise({
			// 	redirectTo: '/cluster/organization'
			// });

	}]);
