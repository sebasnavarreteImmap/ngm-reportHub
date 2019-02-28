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
     	"download_google_chrome":"Download Google Chrome",
     	"google_chrome_is_the_required_browser_for_reporthub":"Google Chrome is the required browser for ReportHub",
     	"language":"LANGUAGE",
     	"download":"Download",
     	"welcome":"Welcome",
     	"welcome_to":"Welcome to",
     	"welcome_to ReportHub":"Welcome to ReportHub",
     	"register":"Register",
     	"please_login_or_register_to_continue":"please LOGIN or REGISTER to continue",
     	"please register to continue":"please register to continue",
     	"login_mayus" : "LOGIN",
     	"logout_mayus" : "LOGOUT",
     	"my_home" : "MY HOME",
     	"immap_home" : "iMMAP HOME",
     	"my_admin" : "MY ADMIN",
     	"my_team" : "MY TEAM",
     	"my_profile" : "MY PROFILE",
     	"my_projects" : "MY PROJECTS",
     	"my_stocks" : "MY STOCKS",
     	"my_products" : "MY PRODUCTS",
     	"assessments_mayus" : "ASSESSMENTS",
     	"nutrition_weekly" : "NUTRITION WEEKLY",
     	"drought" : "DROUGHT",
     	"contact_mayus" : "CONTACT",
     	"contact":"Contact",
     	"username_mayus" : "USERNAME",
     	"password_mayus" : "PASSWORD",
       "register_mayus" : "REGISTER",
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
       "organization_mayus" : "ORGANIZATION",
       "organization" : "Organization",
       "country" : "Country",
       "select_country" : "Select Country",
       "select_organization" : "Select Organization",
       "sectors_mayus":"Sectors",
       "select_sector" : "Select Sector",
       "select_station":"Select Station",
       "agriculture" : "Agriculture",
       "education":"Education",
       "health": "Health",
       "nutrition" : "Nutrition",
       "protection" : "Protection",
       "wash" : "WASH",
       "multi_purpose_cash" : "s Cash",
       "next" : "Next",
      
       "full_name" : "Full Name",
       "position" : "Position",
       "phone" : "Phone",
       "email" : "Email",
       "email_mayus" : "EMAIL",
       "back" : "Back",
       "login_details" : "LOGIN DETAILS",
       "username" : "Username",
       "password" : "Password",
       "immap_programme" : "iMMAP PROGRAMME",
       "select_programme" : "Select Programme",
       "programme" : "Programme",
       "contract_start_date" : "Contract Start Date",
       "contract_end_date" : "Contract End Date",
       "select_duty_station" : "Select Duty Station",
       "duty_station" : "Estación de Servicio",
       "profile" : "Profile",
       "go_to" : "Go to",
       "team" : "Team",
       "view_team" : "View Team",
       "projects_mayus1":"Projects",
       "project_mayus1":"Project",
       "project":"project",
       "projects":"projects",
       "active":"Active",
       "back_to_organization":"Back to Organization",
       "add_new_project":"Add New Project",
       "projects_for":"projects for",
       "download_project_summaries_as_CSV":"Download Project Summaries as CSV",
       "download_dashboard_as_pdf":"Download Dashboard as PDF",
       "download_cluster_contact__list_as_csv":"Download Cluster Contact List as CSV",
       "for":"for",
       "all_provinces":"ALL Provinces",
       "province":"Province",
       "district":"District",
       "active_organizations":"Active Organizations",
       "active_projects":"Active Projects",
       "active_locations":"Active Locations",
       "services_to_beneficiaries":"Services to Beneficiaries",
       "reset":"Reset",

       "all_mayus":"ALL",
       "update_project":"Update project",
       "updated":"Updated",

       //Helper
       "please_complete_project_details_and_enter_a_project_summary_description_including_objectives":"Please complete Project Details and enter a project summary description including objectives...",
       
       //ngm-list
       "you_have":"You have",

       //TEAM
       "active_sctaff":"Active Staff",
       "active_users":"Active Users",
        "desactivated_users":"Desactivated Users ",
        "name_mayus":"Name",
        "update_photo":"Update Photo",


       // NEW PROJECT
        "project_details":"Project Details",
        "project_title":"Project Title",
        "project_code":"Project Code",
        "start_date":"Start Date",
        "end_date":"End Date",
        "project_budget":"project_budget",
        "project_budget_currency":"Project Budget Currency",
        "select_project_budget_currency":"Select Project Budget Currency",
        "non_hrp_project":"Non-HRP Project",
        "hrp_project":"HRP Project",
        "hrp_project_code":"HRP Project Code",
        "activity_type":"Activity Type",
        "other_implementing_partners":"Other Implementing Partners",
        "other_activities_in_addition_to":"Other activities in addition to",
        "cash_intended_for_even_if_unrestricted":"Cash intended for (even if unrestricted)",
        "project_donor":"Project Donor",
        "list_other_donors":"List Other Donors",
        "list_project_partners":"List Project Partners",
        "project_partners":"Project Partners",
        "project_description_objetives":"Project Description & Objectives",
        "project_focal_point":"Project Focal Point",
        "target_population":"Target Population",
        "project_target_locations":"Project Target Locations",
        "select_focal_point_of_your_project_in_the_form_below":"Select FOCAL POINT of your PROJECT in the form below",
        "enter_the_target_beneficiaries_of_your_project_in_the_form_below":"Enter the TARGET BENEFICIARIES of your PROJECT in the form below",
        "save_project":"Save Project",

        "do_you_want_to_save_this_project":"Do you want to Save this project",
        "yes":"Yes",
        "cancel_new_project":"Cancel New Project",
        "are_you_sure_you_want_to_return_to_projects":"Are you sure you want to return to Projects",
        "cancel_project_update":"Cancel Project Update",
        "return_to_project_summary":"Return to Project Summary",
        "yes_cancel_update":"Yes, Cancel Update",
        "remove_people_in_need":"Remove People in Need",
        "remove_people_in_need_from_project":"Remove People in Need from Project",
        "yes_remove_people_in_need":"Yes, Remove People in Need",
        "remove_project_location":"Remove Project Location",
        "this_will_affect_any_existing_monthly_beneficiary_reports":"This will effect any existing monthly beneficiary reports",
        "yes_remove_location":"Yes, Remove location",
        "back_to_projects":"Back to Projects",
        "back_to_project_summary":"Back to Project Summary",
        "last_updated":"Last Updated",
        "refresh_data":"Refresh Data",
        "project_locations":"PROJECT LOCATIONS",
        "children":"Children",
        "adult":"Adult",
        "elderly":"Elderly",
        "new_project":"New Project",
        "as":"as",
        "processing":"Processing...",
        "project_moved_to_active":"Project moved to Active!",
        "project_market_as_complete_congratulations":"Project marked as Complete, Congratulations!",
         "project_delete_error_please_try_again":"Project delete error! Please try again",
        "project_delete":"Project Deleted!",
        "objetives_mayus":"OBJETIVES",
        "select_the_objetives_that_your_project_will":"Select the Objectives that your project will",
        "relates_to":"Relates to",
        "there_are_no_strategic_objetives_for":"There are no Strategic Objectives for",
        //project details.js

        "actual_monthly_beneficiaries_report_for":"Actual Monthly Beneficiaries Report for",
        "cash_intented_for_even_if_unrestricted":"Cash intented for event if unrestricted",
        //reports list
         "download_monthly_reports_as_csv":"Download Monthly Reports as CSV",
         "update":"Update",
         "report_submitted":"Report Submitted",
         "report_due_date":"Report Due Date",
         "download_monthly_activity_report_as_csv":"Download Monthly Acvitiy Report as CSV",
         
         //Report
         "back_to_project_reports":"Back to Project Reports",
         "submit_monthly_report":"Submit Monthly Report",
          "cancel_montly_report":"Cancel Monthly Report",
          "return_to_monthly_report_list":"Return to Monthly Report List",
         "remove_beneficiary":"Remove Beneficiary",
          "remove_this_beneficiary_from_your_report":"Remove this Beneficiary from your Report",
          "yes_remove_beneficiary":"Yes, Remove Beneficiary",
          "remove_borehole":"Remove Borehole",
         "remove_this_borehol_from_your_report":"Remove this Borehole from your Report",
         "yes_remove_borehole":"Yes, Remove Borehole",

        //Beneficiaries
      
        "remarks":"Remarks",
        "add_partial_kits": "Add Partial Kits",
        "add_kit_details":"Add Kit Details",
        "add_beneficiaries":"Add Beneficiaries",
        "monthly_beneficiaries_report_for":"Monthly Beneficiaries Report for",
        "select":"Select...",

        //Notes
        "monthly_notes_&_comments":"Monthly Notes & Comments",
        "save_notes":"Save Notes",





        //DASHBOARD ADMIN
        "download_admin_as_pdf":"Download Admin as PDF",
        "download_project_summaries_as_csv":"Download Project Summaries as CSV",
        "reports_todo":"Reports ToDo",
        "reports_due":"Reports Due",
        "reports_complete":"Reports Complete",
        "download_projects_financials_as_csv":"Download Projects Financials as CSV",
        "download_beneficiary_data_as_csv":"Download Beneficiary Data as CSV",
        "download_stock_data_as_csv":"Download Stock Data as CSV",
        "download_accountabiliry_data_as_csv":"Download Accountability Data as CSV",
         "download_borehol_data_as_csv":"Download Borehole Data as CSV",
        "download_cash_programming_data_as_csv":"Download Cash Programming Data as CSV",
        "download_hygiene_data_as_csv":"Download Hygiene Data as CSV",
       "download_sanitation_data_as_csv":"Download Sanitation Data as CSV",
        "download_water_data_as_csv":"Download Water Data as CSV",

        //dashboard.cluster

        "download_ocha_hrp_report_as_csv":"Download OCHA HRP Report as CSV",
        "download_ocha_financial_report_as_csv":"Download OCHA Financial Report as CSV",
        "download_training_participants_as_csv":"Download Training Participants as CSV",
        "download_beneficiary_data_as_csv":"Download Beneficiary Data as CSV",

        "admin_dashboard_for":"ADMIN Dashboard for",
        "all_clusters":"ALL clusters",
        "all_organizations":"ALL organizations",
        "activity_mayus":"ACTIVITY",
        "report_mayus":"REPORT",
        "country_mayus":"Country",
        "countries_mayus":"Countries",
         "reports_completed":"Reports Completed",

        "organizations":"Organizations",
        "total_projects":"Total Projects",
        "lastest_report_update":"Lastest Report Update",
        "by":"by",
        "previous_month":"Previous Month",
        "current_month":"Current Month",
        "current_reporting":"Current Reporting",
        "from":"from",
        "to":"to",
        "projects_progress":"Projects Progress",




        //TARGET POPULATION

        "activity":"Activity",
        "description":"Description",
        "details":"Details",
        "delivery":"Delivery",
        "mechanism":"Mechanism",
        "package":"Package",
        "category":"Category",
        "beneficiary":"Beneficiary",
        "population":"Population",
        "amount":"Amount",
        "units":"Units",
        "transfers":"Transfers",
        "families":"Families",
        "boys":"Boys",
        "girls":"Girls",
        "men":"Men",
        "women":"Women",
        "treatment_same_province":"Treatment Same Province",
        "edit":"Edit",

        //FILTER
        "region":"REGION",

        //LOCATION

        "enter_the_target_locations_of_your_project_in_the_form_below":"Enter the TARGET LOCATIONS of your PROJECT in the form below",
        "reporter":"Reporter",
        "implementation":"Implementation",
        "type":"Type",
        "from_list":"From List",
        "site_name":"Site Name",
        "save":"save",
        "delete":"delete",
        "delete_mayus1":"Delete",
        "add_row":"Add Row",
        "save_mayus":"Save",
        "cancel_mayus":"Cancel",
        "complete":"Complete",


        //PROYECT SUMMARY
        'are_you_sure_you_want_to_mark_this_project_as_complete':'Are you sure you want to mark this PROJECT as "COMPLETE"',
        "yes_project_complete":"Yes, project complete",
        "delete_project":"Delete Project",
        "are_you_sure_you_want_to_delete_this_project_and_all_its_associated_data":"Are you sure you want to DELETE this PROJECT and all its associated data",
        "yes_delete_project":"Yes, delete project",
        'are_you_sure_you_want_to_move_this_project_to_active':'Are you sure you want to move this project to "Active"',
        "yes_move_project_to_active":"Yes, move project to active",
        "financial_reports":"Financial Reports",
        "monthly_reports":"Monthly Reports",
        "mark_project_as_complete":"Mark Project as Complete",
        "mark_project_as_active":"Mark Project as Active",

        //FINANCIAL
        "project_budget_progress":"Project Budget Progress",
        "add_new_row_of_financial_details_to_your_project_for_each_payment_recieved":"Add a NEW ROW of financial details to your project for EACH PAYMENT recieved",
        "donor":"Donor",
        "activity":"Activity",
        "grant":"Grant",
        "amount":"Amount",
        "currency":"Currency",
        "funds":"Funds",
        "programming":"Programming",
        "recieved":"Recieved",
        "multi_year_funding":"Multi-Year Funding",
        "funding":"Funding",
        "on":"on",
        "notes":"Notes",
        "notes_for":"Notes for",
        "remove_budget":"Remove Budget",
        "are_you_sure_you_want_remove_this_budget_item_from_your_project":"Are you sure you want to remove this Budget Item from your project",
        "yes_remove":"Yes, remove",
        "back_to_project_summary":"Back to Project Summary",
        "financial_reports_for":"Financial Reports for",
        "download_project_financial_report_as_csv":"Download Project Financial Report as CSV",
        

        //locations
        "note":"Note",
        "to_report":"To Report",
        "drought":"DROUGHT",
        "activities_please_select_from":"activities, please select from",
        "drop_down_beneficiary_types":"drop down beneficiary types",
        "drought_affected_displaced":"Drought Affected Displaced",
        "or":"or",
        "drought_affected_non_displaced": "Drought Affected Non Displaced",
        "selected_locations":"Selected Locations",
        "edit_report":"Edit Report",
        "please_enter_the_amount_per":"Please enter the amount per",
        "household_hh":"HOUSEHOLD ( HH )",
        "per":"per",
        "transfer_mayus":"TRANSFER",
        "please_enter_the":"Please enter the",
        "number_of_planned_transfer_for_the":"number of planned transfers for the",
        "entire":"ENTIRE",
                "number_of_transfers_made":"number  of transfers made",
                "this":"this",
                "month":"month",
                "add_trainings":"Add Trainings",
                "add_location":"Add Location",


        //USER PROFILE

        "desactive_user":"Desactive User",
        "desactive":"Desactive",
        "yes_desactive_user":"Yes, Desactive User",
        "activate_user":"Activate User",
        "activate":"Activate",
        "yes_activate_user":"Yes, Activate User",
        "delete_user":"Delete User",
         "delete_profile":"Delete",
         "warning_mayus":"WARNING",
        "this_action_can_not_be_undone":"This action can not be undone",
        "yes_delete_user":"Yes, Delete User",
        "profile_mayus":"PROFILE",
        "select_programme":"Select Programme",
        "update_mayus":"UPDATE",
        "delete_mayus":"DELETE",


        //STOCKS
        "save_monthly_stock_report":"Save Monthly Stock Report",
        "has been saved":"has been saved",
        "cancel_stock_report":"Cancel Stock Report",
        "submit_stock_report_for":"Submit Stock Report for",
        "submit_monthly_stock_report_for":"Submit monthly stock report for",
        "yes_submit_report":"Yes, submit report",
        "back_to_stock_reports":"Back to Stock Reports",
        "form_not_completed":"FORM NOT COMPLETED",
        "form_not_completed_min":"Form Not Completed",
        "return_to_stock_reports_list":"Return to Stock Reports List",
        "stock_purpose":"Stock Purpose",
        "targeted_groups":"Targeted Groups",
        "stock_type":"Stock Type",
        "status_mayus":"Status",
        "pipeline":"Pipeline",
        "beneficiary_coverage":"Beneficiary Coverage",
        "stock_report_for":"Stock Report for",
        "copy_last_month":"Copy Last Month",
        "beneficiaries_covered":"Beneficiaries Covered",
        "stock_report":"Stock Report",
        "donwload_monthly_stock_report_as_csv":"Download Monthly Stock Report as CSV",
        "in":"in",
        "monthly_stock_report_for":"Monthly Stock Report for",
        "stock_reports_for":"Stock Reports for",
        "stock_reports_todo":"Stock Reports ToDo",
        "stock_reports_complete":"Stock Reports Complete",
        "remove_warehouse_location":"Remove Warehouse Location",
        "warehouse_locations":"Warehouse Locations",
        "choose":"Choose",
        "warehouse_name":"Warehouse Name",
        "selected_warehouses":"Selected Warehouses",



        //ASSESSMENTS (afghanistan)
        "assessments":"Assessments",
        "assessment":"Assessment",
        "please_select_an_assesments_from_the_options_below":"Please select an assessments from the options below",
        "view_projects":"View Projects",
        "nutrition_weekly_assessment":"Nutrition Weekly Assessment",
        "complete_survey":"Complete Survey",
        "nutrition_admin_dashboard":"Nutrition Admin Dashboard",
        "new_mayus1":"New",
        "please_complete_an_assessment_in_the_form_below":"Please complete an assessment in the form below",
        "form":"form",
        "nutrition_weekly_reporting":"Nutrition Weekly Reporting",
        "download_reports_data_as_csv":"Download Reports Data as CSV",
        "download_beneficiaries_as_csv":"Download Beneficiaries as CSV",
        "refreshing_data":"Refreshing data",
        "nutrition_reports_data_updated":"Nutrition Reports data updated",
        "beneficiaries":"Beneficiaries",
        "beneficiaries_mayus":"BENEFICIARIES",
        "reports":"Reports",
        "activities":"Activities",
        "locations":"Locations",
        "report_week":"Report Week",
        "nutrition_mayus":"Nutrition",
        "monitoring_assesment":"Monitoring Assessment",
        "view":"View",


        //MODULES IMMAP

        "view_briefing_package":"View Briefing Package",
        "monthly_report":"Monthly Report"





     });
  
  $translateProvider.translations('es',{

  	"download_google_chrome":"Descargar Google Chrome",
  	"google_chrome_is_the_required_browser_for_reporthub":"Google Chrome es el navegador requerido para ReportHub",
    "download":"Descargar",

  	"language":"IDIOMA",
  	"welcome":"Bienvenido",
  	"welcome_to":"Bienvenido a",
  	"welcome_to_reporthub": "Bienvenido a ReportHub",
  	"register":"Registro",
  	"please_login_or_register_to_continue":"por favor INICIE SESIÓN o REGISTRESE para continuar",
  	"please register to continue":"por favor registrese para continuar",
  	"login_mayus" : "INICIO DE SESIÓN",
  	"logout_mayus" : "CERRAR SESIÓN",
  	"my_home" : "MI INICIO",
  	"immap_home" : "iMMAP INICIO",
  	"my_admin" : "MI ADMIN",
  	"my_team" : "MI EQUIPO",
  	"my_profile":"MI PERFIL",
  	"my_projects" : "MIS PROYECTOS",
  	"my_stocks" : "MIS STOCKS",
  	"my_products" : "MIS PRODUCTOS",
  	"nutrition_weekly" : "NUTRICIÓN SEMANAL",
  	"drought" : "SEQUÍA",
  	"assessments_mayus" : "EVALUACIONES",
  	"contact_mayus" : "CONTACTO",
  	"contact":"Contacto",
  	"username_mayus" : "NOMBRE DE USUARIO",
    "password_mayus" : "CONTRASEÑA",
    "register_mayus" : "REGISTRO",
    "forgot_password" : "OLVIDASTE LA CONTRASEÑA"  ,
    "sign_in" : "Iniciar sesión",
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
    "back_to_login":"REGRESAR A INICIO DE SESIÓN",
    "organization_mayus" : "ORGANIZACIÓN",
    "organization" : "Organización",
    "country" : "País",
    "select_country" : "Seleccionar País",
    "select_organization" : "Seleccionar Organización",
    "sectors_mayus":"Sectores",
    "select_sector" : "Seleccionar Sector",
    "select_station":"Seleccionar Estación",
    "multi_purpose_cash" : "Dinero Multi-Propósito",
    "agriculture" : "Agricultura",
    "education" : "Educación",
    "health" : "Salud",
    "nutrition" : "Nutrición",
    "protection" : "Protección",
    "wash" : "WASH - Agua, Saneamiento e Higiene",

    "next" : "Siguiente",
   
       "full_name" : "Nombre Completo",
       "position" : "Cargo",
       "phone" : "Teléfono",
       "email" : "Correo",
       "email_mayus":"CORREO",


       "back" : "Atrás",
       "login_details" : "DETALLES DE INICIO DE SESIÓN",
       "username" : "Nombre de Usuario",
       "password" : "Contraseña",
       "immap_programme" : "PROGRAMA iMMAP",
       "select_programme" : "Seleccionar Programa",
       "programme" : "Programa",
       "contract_start_date" : "Fecha Inicio del Contrato",
       "contract_end_date" : "Fecha Finalización del Contrato",
       "select_duty_station" : "Seleccionar Estación de Servicio",
       "duty_station" : "Estación de servicio",
       "profile" : "Perfil",
       "projects_mayus1" : "Proyectos",
       "projects" : "proyectos",
       "project_mayus1":"Proyecto",
       "project":"proyecto",
       "go_to" : "Ir a",
       "team" : "Equipo",
       "view_team" : "Ver Equipo",
       "back_to_organization":"Regresar a Organización",
       "add_new_project":"Agregar Nuevo Proyecto",
       "projects_for":"proyectos para",
       "download_project_summaries_as_CSV":"Descargar Resúmenes de Proyectos como CSV",
       "download_dashboard_as_pdf":"Descargar Dashboard como PDF",
       "download_cluster_contact_list_as_csv":"Descargar Lista de Contactos del Cluster como CSV",
       "for":"para",
       "all_provinces":"TODAS las provincias",
       "province":"Provincia",
       "district":"Distrito",
       "active_organizations":"Organizaciones Activas",
       "active_projects":"Proyectos Activos",
       "active_locations":"Ubicaciones Activas",
       "services_to_beneficiaries":"Servicios a Beneficiarios",
       "reset":"Restaurar",
       "all_mayus":"TODO",
       "update_project":"Actualización de proyecto",
       "updated":"Actualizado",

       //Helper
       "please_complete_project_details_and_enter_a_project_summary_description_including_objectives":"Por favor complete los Detalles del Proyecto e ingrese un resumen de la descripción del proyecto incluyendo objetivos...",
       //ngm-list
       "you_have":"Usted tiene",

       //team

       "active_staff":"Personal Activo",
       "active_users":"Usuarios Activos",
       "desactivated_users":"Usuarios Desactivados",
       "name_mayus":"Nombre",
       "update_photo":"Actualizar Foto",
        //NEW PROJECT
        "project_details":"Detalles del Proyecto",
        "project_title":"Título del Proyecto",
        "project_code":"Código del Proyecto",
        "start_date":"Fecha de Inicio",
        "end_date":"Fecha de Finalización",
        "project_budget":"Presupuesto del Proyecto",
        "project_budget_currency":"Moneda Presupuesto del Proyecto",
        "select_project_budget_currency":"Seleccionar Moneda del Presupuesto del Proyecto",
        "non_hrp_project":"No es un Proyecto HRP",
        "hrp_project":"Proyecto HRP",
        "hrp_project_code":"Código del Proyecto HRP",
        "activity_type":"Tipo de Actividad",
        "other_activities_in_addition_to":"Otras actividades además de",
        "cash_intended_for_even_if_unrestricted":"Efectivo destinado a (incluso si no está restringido)",
        "project_donor":"Donante del Proyecto",
        "list_other_donors":"Lista de Otros Donantes",
        "list_project_partners":"Lista de Socios del Proyecto",
        "project_partners":"Socios del Proyecto",
        "other_implementing_partners":"Otros Socios Implementadores",
        "project_description_objetives":"Descripción y Objetivos del Proyecto",
        "project_focal_point":"Punto Focal del Proyecto",
        "target_population":"Población Objetivo",
        "project_target_locations":"Ubicaciones Objetivo del Proyecto",
         "select_focal_point_of_your_project_in_the_form_below":"Seleccione el PUNTO FOCAL de su PROYECTO en el siguiente formulario",
         "enter_the_target_beneficiaries_of_your_project_in_the_form_below":"Ingrese los BENEFICIARIOS OBJETIVO de su PROYECTO en el siguiente formulario",
         "save_project":"Guardar Proyecto",
         "do_you_want_to_save_this_project":"Quieres Guardar este proyecto",
         "yes":"Si",
         "cancel_new_project":"Cancelar Nuevo Proyecto",
         "are_you_sure_you_want_to_return_to_projects":"Seguro que quieres regresar a Proyectos",
         "cancel_project_update":"Cancelar Actualización del Proyecto",
         "return_to_project_summary":"Regresar al Resumen del Proyecto",
         "yes_cancel_update":"Si, Cancelar Actualización",
         "remove_people_in_need":"Eliminar Personas con Necesidad",
         "remove_people_in_need_from_project":"Eliminar Personas con Necesidad del Proyecto",
         "yes_remove_people_in_need":"Si, Eliminar Personas con Necesidad",
         "remove_project_location":"Eliminar Ubicación del Proyecto",
         "this_will_affect_any_existing_monthly_beneficiary_reports":"Esto afectará cualquier informe mensual de beneficiarios existente",
         "yes_remove_location":"Si, Eliminar ubicación",
         "back_to_projects":"Volver a Proyectos",
         "last_updated":"Última Actualización",
         "refresh_data":"Refrescar Datos",
         "project_locations":"UBICACIONES DE PROYECTOS",
         "children":"Niños",
         "adult":"Adultos",
         "elderly":"Mayores",
         "new_project":"Nuevo Proyecto",
         "as":"como",
         "processing":"Procesando...",
         "project_moved_to_active":"Prouecto movido a Activo!",
         "project_market_as_complete_congratulations":"Projectp marcado como Completo, Felicitaciones!",
         "project_delete_error_please_try_again":"Error al Eliminar Proyecto! Por favor intente de nuevo",
         "project_delete":"Proyecto Eliminado!",
         "objetives_mayus":"OBJETIVOS",
         "select_the_objetives_that_your_project_will_target":"Seleccionar los Objetivos de su proyecto",
         "relates_to":"Relacionado con",
         "there_are_no_strategic_objetives_for":"No hay Objetivos Estratégicos para",

        
         //project details

         "actual_monthly_beneficiaries_report_for":"Actual Reporte Mensual de Beneficiarios para",
          "cash_intented_for_even_if_unrestricted":"Cash intented for event if unrestricted",

         //Reports list

         "back_to_project_summary":"Regresar a Resumen del Proyecto",
         "download_monthly_reports_as_csv":"Descargar Reportes Mensuales como CSV",
         "update":"Actualizar",
         "report_submitted":"Reporte Enviado",
         "report_due_date":"Fecha de Vencimiento del Reporte",
         "download_monthly_activity_report_as_csv":"Descargar Reporte de Actividad Mensual como CSV",

        //Report
         "back_to_project_reports":"Regresar a Reportes del Proyecto",
         "submit_monthly_report":"Enviar Reporte Mensual",
         "cancel_montly_report":"Cancelar Reporte Mensual",
         "return_to_monthly_report_list":"Regresar a Lista de Reportes Mensuales",
         "remove_beneficiary":"Eliminar Beneficiario",
         "remove_this_beneficiary_from_your_report":"Eliminar este Beneficiario de su Reporte",
         "yes_remove_beneficiary":"Si, Eliminar Beneficiario",
         "remove_borehole":"Eliminar Pozo",
         "remove_this_borehol_from_your_report":"Eliminar este Pozo de su Reporte",
         "yes_remove_borehole":"Si, Eliminar Pozo",

         //Notes
        "monthly_notes_&_comments":"Notas Mensuales y Comentarios",
        "save_notes":"Guardar Notas",

         //DASHBOARD ADMIN

         "lastest_report_update":"Última Actualización de Reporte",
         "by":"por",
         "previous_month":"Mes Anterior",
         "current_month":"Mes Actual",
         "current_reporting":"Current Reporting",

         "download_admin_as_pdf":"Descargar Admin como PDF",
         "download_project_summaries_as_csv":"Descargar Resumen de Proyectos como CSV",
         "reports_todo":"Reportes para Realizar",
         "reports_complete":"Reportes Completados",
         "reports_due":"Reportes Pendiente",
         "download_projects_financials_as_csv":"Descargar Proyectos Financieros como CSV",
         "download_beneficiary_data_as_csv":"Descargar Datos de Beneficiarios como CSV",
         "download_stock_data_as_csv":"Descargar Datos de Stock como CSV",
         "download_accuntabiliry_data_as_csv":"Descargar Datos de Responsabilidad como CSV",
         "download_borehol_data_as_csv":"Descargar Datos de Pozos como CSV",
         "download_cash_programming_data_as_csv":"Descargar Datos del Programa Dinero en Efectivo como CSV",
         "download_hygiene_data_as_csv":"Descargar Datos de Higiene como CSV",
         "download_sanitation_data_as_csv":"Descargar Datos de Download Saneamiento Data as CSV",
         "download_water_data_as_csv":"Descargar Datos de Agua como CSV",
         
         //dashboard.cluster

         "download_ocha_hrp_report_as_csv":"Descargar Reporte HRP de OCHA como CSV",
        "download_ocha_financial_report_as_csv":"Descargar Reporte Financiero de OCHA como CSV",
        "download_training_participants_as_csv":"Descargar Participantes de Entrenamiento como CSV",
         "download_beneficiary_data_as_csv":"Descargar Datos de Beneficiarios como CSV",


         "admin_dashboard_for":"ADMIN Dashboard para",
         "all_clusters":"TODOS los clusters",
         "all_organizations":"TODAS las organizaciones",
         "activity_mayus":"ACTIVIDAD",
         "report_mayus":"REPORTE",
         "country_mayus":"País",
          "countries_mayus":"Países",
          "reports_completed":"Reportes Completados",

         "organizations":"Organizaciones",
         "total_projects":"Total de Proyectos",
         "from":"desde",
         "to":"hasta",
         "projects_progress":"Proyectos en Progreso",



        //TARGET POPULATION

        "activity":"Actividad",

        "description":"Descripción",
        "details":"Detalles",
        "delivery":"Entrega",
        "mechanism":"Mecanismo",
        "package":"Paquete",
        "category":"Categoría",
        "beneficiary":"Beneficiario",
        "population":"Población",
        "amount":"Monto",
        "units":"Unidades",
        "transfers":"Transferencias",
        "families":"Familias",
        "boys":"Niños",
        "girls":"Niñas",
        "men":"Hombre",
        "women":"Mujer",
        "treatment_same_province":"Tratamiento en la Misma Provincia",
        "edit":"Editar",

        //FILTER
        "region":"REGIÓN",


        //LOCATION
        "enter_the_target_locations_of_your_project_in_the_form_below":"Ingrese la LOCACIÓN OBJETIVO de su PROYECTO en el siguiente formulario",
        "reporter":"Reportero",
        "implementation":"Implementación",
        "type":"Tipo",
        "from_list":"Lista de Origenes",
        "site_name":"Nombre del Sitio",
        "save":"Guardar",
        "delete_mayus1":"Eliminar",
        "add_row":"Agregar fila",
        "save_mayus":"Guardar",
        "cancel_mayus":"Cancelar",
        "active":"Activo",
        "complete":"Completo",


        //PROYECT SUMMARY
        "mark_project_as_complete":"Marcar Proyecto como COMPLETO",
        'are_you_sure_you_want_to_mark_this_project_as_complete':'Está seguro que quiere marcar este PROYECTO como "COMPlETO"',
        "yes_project_complete":"Si, proyecto completo",
        "delete_project":"Eliminar Proyecto",
        "are_you_sure_you_want_to_delete_this_project_and_all_its_associated_data":"Está seguro que quiere ELIMINAR este PROYECTO y todos los datos asociados",
        "yes_delete_project":"Si, eliminar proyecto",
        "mark_project_as_active":"Marcar proyecto como Activo",
        'are_you_sure_you_want_to_move_this_project_to_active':'Está seguro que quiere mover este proyecto a "Activo"',
        "yes_move_project_to_active":"Si, mover proyecto a activo",
        "financial_reports":"Reportes Financieros",
        "monthly_reports":"Reportes Mensuales",
       


        //FINANCIAL
        "project_budget_progress":"Progreso Presupuesto del Proyecto",
        "add_new_row_of_financial_details_to_your_project_for_each_payment_recieved":"Agregar una NUEVA FILA de detalles financieros a su proyecto por CADA PAGO recivido",
        "donor":"Donante",
        "activity":"Actividad",
        "grant":"Donante",
        "amount":"Monto",
        "currency":"Moneda",
        "funds":"Fondos",
        "programming":"Programación",
        "recieved":"Recibido",
        "multi_year_funding":"Financiación Munti-anual",
        "funding":"Financiación",
        "on":"en",
        "notes":"Notas",
        "notes_for":"Notas para",
        "remove_budget":"Eliminar Presupuesto",
        "are_you_sure_you_want_remove_this_budget_item_from_your_project":"Está seguro que quiere Eliminar este Presupuesto de su proyecto",
        "yes_remove":"Si, eliminar",
        "financial_reports_for":"Reportes Financieros para",
        "download_project_financial_report_as_csv":"Descargar Reporte Financiero como CSV",



        //REPORTS
        //Beneficiaries
        "remarks":"Observaciones",
        "add_partial_kits": "Agregar Kits Parciales ",
        "add_kit_details":"Agregar Detalles del Kit",
        "add_beneficiaries":"Agregar Beneficiarios",
        "monthly_beneficiaries_report_for":"Reporte Mensual para Beneficiarios",
        "reports":"Reportes",
        "select":"Seleccionar...",

        //locations
        "note":"Nota",
        "to_report":"A Reportar",
        "drought":"SEQUÍA",
        "activities_please_select_from":"actividades, por favor seleccione el origen",
        "drop_down_beneficiary_types":"desplegar tipo de beneficiarios",
        "drought_affected_displaced":"Afectados por Sequía Desplazados",
        "or":"ó",
        "drought_affected_non_displaced": "Afectados por la Sequía No Desplazados",
        "selected_locations":"Ubicaciones Seleccionadas",
        "edit_report":"Editar Reporte",
        "please_enter_the_amount_per":"Por favor ingrese la cantidad por",
        "household_hh":"GRUPOFAMILIAR",
        "per":"por",
        "transfer_mayus":"TRANSFERENCIA",
        "please_enter_the":"Por favor ingrese la",
        "number_of_planned_transfers_for_the":"número de transferencias previstas para el",
        "ENTERE":"TODO",
        "number_of_transfers_made":"número de transferencias realizadas",
                "this":"este",
                "month":"mes",
                "add_trainings":"Agregar Practicantes",
                "add_location":"Agregar Ubicación",



                //USER PROFILE

        "desactive_user":"Desactivar Usuario",
        "desactive":"Desactivar",
        "yes_desactive_user":"Si, Desactivar Usuario",
        "activate_user":"Activar Usuario",
        "activate":"Activar",
        "yes_activate_user":"Si, Activar Usuario",
        "delete_user":"Eliminar Usuario",
        "delete_profile":"Eliminar",
        "warning_mayus":"ADVERTENCIA",
        "this_action_can_not_be_undone":"Esta acción no se puede deshacer",
        "yes_delete_user":"Si, Eliminar Usuario",
        "profile_mayus":"PERFIL",
        "select_programme":"Seleccionar Programa",
        "update_mayus":"ACTUALIZAR",
        "delete_mayus":"ELIMINAR",

        //STOCKS

        "save_monthly_stock_report":"Guardar Reporte Mensual de Stock",
        "has been saved":"ha sido guardado",
        "cancel_stock_report":"Cancel Stock Report",
        "submit_stock_report_for":"Enviar Reporte de Stock para",
        "submit_monthly_stock_report_for":"Enviar reporte mensual de stock para",
        "yes_submit_report":"Si, enviar reporte",
        "back_to_stock_reports":"Regresar a Reportes de Stock",
        "form_not_completed":"FORMULARIO SIN COMPLETAR",
        "form_not_completed_min":"Formulario Sin Completar",

        "return_to_stock_reports_list":"Regresar a Lista de Reportes de Stock",
        "stock_purpose":"Propósito del Stock",
        "targeted_groups":"Grupos Objetivo",
        "stock_type":"Tipo de Stock",
        "status_mayus":"Estado",
        "pipeline":"Transporte",
        "beneficiary_coverage":"Cobertura de Beneficiarios",
        "stock_report_for":"Reporte de Stock para",
        "copy_last_month":"Copiar Mes Anterior",
        "beneficiaries_covered":"Beneficiarios Cubiertos",
        "stock_report":"Reporte de Stock",
        "donwload_monthly_stock_report_as_csv":"Descargar Reporte Mensual de Stock como CSV",
        "in":"en",
        "monthly_stock_report_for":"Reporte Mensual de Stock para",
        "stock_reports_for":"Reportes de Stock para",
        "stock_reports_todo":"Reportes de Stock para Realizar",
        "stock_reports_complete":"Reportes de Stock Completados",
        "remove_warehouse_location":"Eliminar Ubicación de Bodega",
        "warehouse_locations":"Ubicaciones de Bodegas",
        "choose":"Seleccionar",
        "warehouse_name":"Nombre de Bodega",
        "selected_warehouses":"Bodegas Seleccionadas",



        //ASSESSMENTS (afghanistan)
        "assessments":"Evaluaciones",
        "assessment":"Evaluación",
        "please_select_an_assessments_from_the_options_below":"Por favor seleccione una evaluación de las siguientes opciones",
        "view_projects":"Ver Proyectos",
        "nutrition_weekly_assessment":"Evaluación Semanal Nutrición",
        "complete_survey":"Completar Encuesta",
        "nutrition_admin_dashboard":"Dashboard Administración de Nutrición",
        "new_mayus1":"Nuevo",
        "please_complete_an_assessment_in_the_form_below":"Por favor complete una evaluación en el siguiente formulario",
        "form":"formulario",
        "nutrition_weekly_reporting":"Nutrición Reportes Semanales",
        "download_reports_data_as_csv":"Descargar Datos de Reportes como CSV",
        "download_beneficiaries_as_csv":"Descargar Beneficiarios como CSV",
        "refreshing_data":"Actualizando datos",
        "nutrition_reports_data_updated":"Reportes de Datos de Nutrición Actualizados",
        "beneficiaries":"Beneficiarios",
        "beneficiaries_mayus":"BENEFICIARIOS",
        "reports_mayus1":"Reportes",
        "activities":"Actividades",
        "locations":"Ubicaciones",
        "report_week":"Reporte Semanal",
        "nutrition_mayus":"NUTRICIÓN",
        "monitoring_assesment":"Evaluación de Monitoreo",
        "view":"Ver",


        //MODULES IMMAP

          "view_briefing_package":"Ver Paquete de Instrucciones",
           "monthly_report":"Reporte Mensual"













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
	.controller('ngmReportHubCrtl', ['$scope', '$route', '$location', '$http', '$timeout', 'ngmAuth', 'ngmUser','$translate','$filter', function ($scope, $route, $location, $http, $timeout, ngmAuth, ngmUser,$translate,$filter) {
   


       changeFunction = function ($key) {
			  	//console.log($key);
			   $translate.preferredLanguage(key);
			  };
        
		// ngm object
		$scope.ngm = {


			// app name
			title: $filter('translate')('welcome'), 

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
