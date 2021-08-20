/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Micro Focus Content Manager SDK 10.0", "index.html", [
    [ "Welcome to the Content Manager SDK Documentation", "index.html", [
      [ "Overview", "index.html#autotoc_md124", null ],
      [ "Important", "index.html#autotoc_md125", null ],
      [ "Older Versions", "index.html#autotoc_md126", null ],
      [ "More Help", "index.html#autotoc_md127", null ]
    ] ],
    [ "Supporting Information", "md_doc_00____legal.html", [
      [ "Legal Notices", "md_doc_00____legal.html#legal", [
        [ "Trademark notices", "md_doc_00____legal.html#trademark", null ],
        [ "Copyright Notice", "md_doc_00____legal.html#copyright", null ]
      ] ],
      [ "Support", "md_doc_00____legal.html#support", null ]
    ] ],
    [ "Release Notes", "release_notes.html", [
      [ "Content Manager 10.0", "release_notes.html#rn_100", [
        [ "Content Manager SDK assembly and namespace renamed", "release_notes.html#rn_10_SdkRename", null ],
        [ "Deleted methods and properties:", "release_notes.html#autotoc_md1", null ],
        [ "Get the field definition for this word", "release_notes.html#autotoc_md2", null ],
        [ "Create External Link from SDK", "release_notes.html#autotoc_md3", null ],
        [ "Monitor event processor", "release_notes.html#rn_10_EventProcessor", null ],
        [ "Get a string listing all the record types to which this classification is allowed to be attached", "release_notes.html#rn_10_OnlyRecordTypes", null ],
        [ "Get the Location object which is the assignee of the first activity in this workflow", "release_notes.html#rn_10_InitialAssignee", null ],
        [ "A boolean property indicating whether the current user can view all the details of this location", "release_notes.html#rn_10_CanViewAllDetails", null ],
        [ "Gets a number indicating how many times the electronic document attached to this record has been viewed", "release_notes.html#rn_10_ViewCounter", null ],
        [ "Get a string which represents the global default for user preferences for the nominated application", "release_notes.html#rn_10_AppConfig", null ],
        [ "Support aggregated search results", "release_notes.html#rn_10_CR_304037", null ],
        [ "Suppress document extract logging", "release_notes.html#rn_10_CR_321043", null ],
        [ "New search clause to do a raw elastic query", "release_notes.html#rn_10_CR_241863", null ],
        [ "New search clauses to find all ancestors recursively", "release_notes.html#rn_10_CR_243144", null ],
        [ "UserLabel Owner now a modifiable property", "release_notes.html#rn_10_lbl_owner", null ],
        [ "Copy security annotations to email headers", "release_notes.html#rn_10_CR_282059", null ],
        [ "Enhancements to Record recycle and restore", "release_notes.html#rn_10_CR_333019", null ],
        [ "Custom Icons", "release_notes.html#rn_10_CR_343044", null ],
        [ "Add saved search as a filter to Search Form", "release_notes.html#rn_10_CR_345008", null ],
        [ "Superseded by information in Schedule", "release_notes.html#rn_10_Schedule", null ],
        [ "Option to set how to deal with the situation when new contents get added to this container and it has a different scheduled disposal type", "release_notes.html#rn_10_CR_317155", null ],
        [ "Manually delete a single Record from the recycle bin", "release_notes.html#rn_10_CR_324026", null ],
        [ "Attach 'Workflow' template or 'Action Tracking' Procedure to Classification as default to be applied to record when attaching Classification to record", "release_notes.html#rn_10_CR_333029", null ],
        [ "Link non Record objects to a ToDo item", "release_notes.html#rn_10_CR_324012", null ],
        [ "New search method for Location Job Title", "release_notes.html#rn_10_CR_355002", null ],
        [ "Make Icon files available in the SDK", "release_notes.html#rn_10_Icons", null ],
        [ "Find Saved Searches that have not been recently used", "release_notes.html#rn_10_CR_3234339", null ],
        [ "System option to update Record Number on change of Classification", "release_notes.html#rn_10_CLS_UPD", null ],
        [ "Improve display of decimal field values", "release_notes.html#rn_10_CR_358003", null ],
        [ "Search by Edit Status", "release_notes.html#rn_10_CR_356058", null ],
        [ "Workflow Templates provide ability to activate Additional fields per template", "release_notes.html#rn_10_CR_353024", null ],
        [ "Control whether clauses are added to recent search methods", "release_notes.html#rn_10_RecentClauses", null ],
        [ "Get blocked file extensions", "release_notes.html#rn_10_CR_362022", null ],
        [ "Additions to FormDefinition", "release_notes.html#rn_10_CR_373046", null ],
        [ "Include Tags in the metadata options of electronic records", "release_notes.html#rn_10_CR_373007", null ],
        [ "Introduce a UDF that can be updated once disposition is Destroyed", "release_notes.html#rn_10_CR_379030", null ],
        [ "Ability to suppress legal hold designation", "release_notes.html#rn_10_CR_242100", null ],
        [ "Light weight Records", "release_notes.html#rn_10_CR_379045", [
          [ "Example", "release_notes.html#autotoc_md4", null ]
        ] ],
        [ "Indicator on a record when Notes have been added", "release_notes.html#rn_10_CR_384012", null ],
        [ "Provide a version of TransferStorage just for older revisions", "release_notes.html#rn_10_CR_335066", null ],
        [ "New DocumentStoreIncrementalCheckTask", "release_notes.html#rn_10_CR_373041", null ],
        [ "Changes to Consignment processing", "release_notes.html#rn_10_CR_387008", null ],
        [ "Unknown Location type validation", "release_notes.html#autotoc_md5", null ],
        [ "Display Child lists in the .Net SDK", "release_notes.html#autotoc_md6", [
          [ "Sample Code", "release_notes.html#autotoc_md7", null ]
        ] ],
        [ "Provide a way of limiting users from extracting and printing sensitive documents", "release_notes.html#rn_10_CR_339007", null ],
        [ "Make Notes user stamp mandatory", "release_notes.html#rn_10_CR_394004", null ],
        [ "Detect whether a search is using the user's default sort and filters", "release_notes.html#rn_10_CR_401078", null ],
        [ "Improve performance and stability of document integrity check", "release_notes.html#rn_10_CR_421003", null ],
        [ "InputDocument.SetAsAlreadyStoredItem SDK function sets record Date Modified to current date rather than Date Modified from document profile", "release_notes.html#rn_10_CR_398052", null ],
        [ "Allow content index updates of missing Records using the SDK so that users can automate the process", "release_notes.html#rn_10_CR_360002", null ],
        [ "More user-friendly style of displaying record types for selection", "release_notes.html#rn_10_CR_343056", [
          [ "Sample Code", "release_notes.html#autotoc_md8", null ]
        ] ],
        [ "More control on copying a record using Record.CreateNewCopy() method", "release_notes.html#rn_100_CreateNewCopy", null ]
      ] ],
      [ "Content Manager 9.4", "release_notes.html#rn_94", [
        [ "BREAKING CHANGE - History.EventType changed enum type", "release_notes.html#rn_94_History_Event_Type", null ],
        [ "Unrestricted file upload vulnerability", "release_notes.html#rn_94_CR_68008", null ],
        [ "Refine a search to returned the current or latest version of documents", "release_notes.html#rn_94_CR_40696", null ],
        [ "Include more functionality to handle deleted and cancelled record requests and audit all actions", "release_notes.html#rn_94_CR_68155", null ],
        [ "Record Title as column in historical event search", "release_notes.html#rn_94_CR_68162", null ],
        [ "No email notifications for requested records located in Space Management", "release_notes.html#rn_94_235932", null ],
        [ "Online Audit log - The audit history does not include all changes when a person location is associated to a position", "release_notes.html#rn_94_240852", null ],
        [ "Provide a default for the author property for a Document Queue", "release_notes.html#rn_94_242619", null ],
        [ "Automatic Sub folders sort order for Record Types", "release_notes.html#rn_94_243471", null ],
        [ "Search for records has no Hold returns records has Hold", "release_notes.html#rn_94_243890", null ],
        [ "Expose RestartDocumentReview to the SDK", "release_notes.html#rn_94_RestartDocumentReview", null ],
        [ "Searching Browse Via Classification - ability to select a sort method for listed records under Classifications", "release_notes.html#rn_94_243330", null ],
        [ "HasMore property on TrimMainObjectSearch", "release_notes.html#rn_94_244326", null ],
        [ "Expose ChangeMatter and ChangeClient functionality in SDK", "release_notes.html#rn_94_275049", null ],
        [ "Knowledge workers can't request Pickup Requests", "release_notes.html#rn_94_276062", null ],
        [ "Implement a generic origin type for third party applications to use for bulk loading", "release_notes.html#rn_94_281059", null ],
        [ "SDK available as NuGet package", "release_notes.html#rn_94_sdk_nuget", null ],
        [ "Provide a way of doing server side updates in a custom event processor and preserving the lastUpdatedBy (and dateLastUpdated) fields", "release_notes.html#rn_94_254005", null ],
        [ "Expose SDK connection pool configuration", "release_notes.html#rn_94_244672", null ],
        [ "Auto Profiling - provide a per-record option to choose the record title from the document properties or the document file name", "release_notes.html#rn_94_242263", null ],
        [ "Add access control to User Labels", "release_notes.html#rn_94_237243", null ],
        [ "Resolve ambiguities as to who can see a classification", "release_notes.html#rn_94_241217", null ],
        [ "Issues with \"Due Date for completion of review process\" and \"Due Date for the reviewer to complete their work\" fields.", "release_notes.html#rn_94_237708", null ],
        [ "Allocate a custom title to an alert.", "release_notes.html#rn_94_236524", null ],
        [ "Unable to send more than 100 Records at a time to External Link", "release_notes.html#rn_94_237958", null ],
        [ "Specify which record type is allowed to be placed into closed containers", "release_notes.html#rn_94_263031", null ],
        [ "Add Notes to User Labels", "release_notes.html#rn_94_270010", null ],
        [ "Check-in Styles and Document Queues to include additional options", "release_notes.html#rn_94_237525", null ],
        [ "Send to Recycle Bin - Soft delete for Records", "release_notes.html#rn_94_237934", null ],
        [ "Hide custom record types from search response", "release_notes.html#rn_94_CR_68013", null ],
        [ "Folder Synchronization - provide a way of detecting when content is removed from a folder for offline synchronization purposes", "release_notes.html#rn_94_Folder_Sync", null ],
        [ "Provide a data stream capability to avoid delays caused by object cache instantiation", "release_notes.html#rn_94_CR_68152", null ],
        [ "Implement new Record methods for closing (and reopening) containers", "release_notes.html#rn_94_CR_68065", null ],
        [ "Searches to be able to filter / clause based on enum", "release_notes.html#rn_94_CR_43842", null ],
        [ "Need a way to inform SDK applications of object change notifications and other system messages", "release_notes.html#rn_94_notifications", null ]
      ] ],
      [ "Content Manager 9.3", "release_notes.html#rn_93", [
        [ "SDK no longer installed in GAC", "release_notes.html#rn_sdk_GAC", null ],
        [ "Removed properties", "release_notes.html#autotoc_md9", null ],
        [ "Audits - Unable to see the Audit log for the records placed on hold as a group", "release_notes.html#rn_93_audits", null ],
        [ "Record import not working when lookup item additional field is on a record", "release_notes.html#rn_93_lookupset", null ],
        [ "Property on Offline Record object to tell us whether auto checkin has is enabled", "release_notes.html#rn_93_offlinerecord", null ],
        [ "Consignments", "release_notes.html#rn_93_consignment", null ],
        [ "History", "release_notes.html#rn_93_history", null ],
        [ "RecordAction", "release_notes.html#rn_93_recordaction", null ],
        [ "Retention Schedules - provide support for event based scheduling", "release_notes.html#rn_93_archive", null ],
        [ "View Panel - Add the To Do items in record View Panel", "release_notes.html#rn_93_todoitems", null ],
        [ "Record Type", "release_notes.html#rn_93_recordtype", null ],
        [ "Database", "release_notes.html#rn_93_database", null ],
        [ "Request", "release_notes.html#rn_93_request", null ],
        [ "UserLabel", "release_notes.html#rn_93_userlabel", null ],
        [ "DroppedFileUserOptions", "release_notes.html#rn_93_droppedfileuseroptions", null ],
        [ "Ability to manage favourite and recent search clauses in user profile", "release_notes.html#rn_93_favoritesearchmethodsuseroptions", null ],
        [ "Providing a custom sort order specifically for Tray searches", "release_notes.html#rn_93_TraySortAndFilterUserOptions", null ]
      ] ],
      [ "Content Manager 9.2", "release_notes.html#rn_92", [
        [ "Checking for duplicate documents by hash", "release_notes.html#rn_92_hashing", null ],
        [ "Searching for Record types: 'can contain' and 'can be contained in'", "release_notes.html#rn_92_rt_contains_searching", null ],
        [ "Updates to Lookupsets", "release_notes.html#rn_92_lookupsets", null ],
        [ "Issues with constructors", "release_notes.html#rn_92_constructors", null ],
        [ "IsValidFor throws an exception rather than returning false with information", "release_notes.html#rn_92_IsValidFor", null ],
        [ "Promote Revision function that works like the functions inside trim.exe", "release_notes.html#rn_92_PromoteRevision", null ],
        [ "Database pool built into SDK", "release_notes.html#rn_92_DatabasePool", null ],
        [ "Provide a HasPermission function for the TRIM main object", "release_notes.html#rn_92_HasPermission", null ],
        [ "Prevent invalid extensions from interfering with the checkout process", "release_notes.html#rn_92_InvalidExtensions", null ],
        [ "SDK methods to support field sorting", "release_notes.html#rn_92_FieldSorting", null ],
        [ "SDK methods to support blocking of search methods", "release_notes.html#rn_92_BlockedSearchMethods", null ],
        [ "Exposing the Initiating Workflow template concept in the SDK", "release_notes.html#autotoc_md10", null ],
        [ "Provide a way of \"crawling\" the repository without tripping the LastUpdatedOn date", "release_notes.html#autotoc_md11", null ]
      ] ]
    ] ],
    [ "Start here", "start_here.html", [
      [ "Using the Content Manager .NET SDK", "start_here.html#using_the_sdk", [
        [ "Technical Prerequisites and Assumptions", "start_here.html#tech_prereq", null ],
        [ "Binary compatibility", "start_here.html#bin_compat", null ]
      ] ],
      [ "Content Manager .NET SDK", "start_here.html#sdkIntro", null ],
      [ "Using the Content Manager .NET SDK", "start_here.html#usingTheSDK", null ],
      [ "Getting started", "start_here.html#sdkGettingStarted", [
        [ "Creating a reference to the .NET SDK", "start_here.html#createRef", null ],
        [ "Downloading the .NET SDK from NuGet", "start_here.html#autotoc_md12", null ],
        [ "Finding Content Manager libraries at runtime", "start_here.html#findingAssemblies", [
          [ "Code Example (with explicit initialization)", "start_here.html#autotoc_md13", null ],
          [ "Code Example (without explicit initialization)", "start_here.html#autotoc_md14", null ]
        ] ],
        [ "Loading TRIM.SDK.dll assembly dynamically", "start_here.html#dynamicSdkLoading", null ],
        [ "Memory Management", "start_here.html#memory_management", [
          [ "Examples", "start_here.html#autotoc_md15", null ],
          [ "Using statement", "start_here.html#autotoc_md16", null ],
          [ "Try/Finally", "start_here.html#autotoc_md17", null ]
        ] ],
        [ "Leak tracking", "start_here.html#autotoc_md18", null ]
      ] ]
    ] ],
    [ "Open ID Connect Authentication", "oidc.html", [
      [ "Authentication overview", "oidc.html#auth_overview", null ],
      [ "ADFS for WebClient and ServiceAPI", "oidc.html#oidc_adfs", [
        [ "Create the AD FS  Application", "oidc.html#autotoc_md19", [
          [ "Examples", "oidc.html#autotoc_md20", [
            [ "New AD FS application", "oidc.html#autotoc_md21", null ],
            [ "Add Redirect URI", "oidc.html#autotoc_md22", null ],
            [ "Generate Secret", "oidc.html#autotoc_md23", null ],
            [ "Specify Web API identifier", "oidc.html#autotoc_md24", null ]
          ] ]
        ] ],
        [ "Add the settings to the Web Client", "oidc.html#autotoc_md25", [
          [ "Example", "oidc.html#autotoc_md26", null ]
        ] ],
        [ "Configure AD FS for Office Integration access", "oidc.html#autotoc_md27", [
          [ "Examples", "oidc.html#autotoc_md28", [
            [ "Add native application", "oidc.html#autotoc_md29", null ],
            [ "Add permissions for native application", "oidc.html#autotoc_md30", null ],
            [ "Specifiy claims to be included in token", "oidc.html#autotoc_md31", null ]
          ] ]
        ] ],
        [ "Add office integration the settings to the Web Client", "oidc.html#autotoc_md32", null ]
      ] ],
      [ "AzureAD for WebClient and ServiceAPI", "oidc.html#oidc_azuread", [
        [ "Create the Azure AD Application", "oidc.html#autotoc_md33", [
          [ "Example", "oidc.html#autotoc_md34", null ]
        ] ],
        [ "Add a secret", "oidc.html#autotoc_md35", [
          [ "Example", "oidc.html#autotoc_md36", null ]
        ] ],
        [ "Configure Tokens", "oidc.html#autotoc_md37", null ],
        [ "Configure permissions", "oidc.html#autotoc_md38", [
          [ "Example", "oidc.html#autotoc_md39", null ]
        ] ],
        [ "Configure authentication in hptrim.config", "oidc.html#autotoc_md40", [
          [ "Example config", "oidc.html#autotoc_md41", null ]
        ] ],
        [ "Enable redirect", "oidc.html#autotoc_md42", null ],
        [ "Logout", "oidc.html#autotoc_md43", [
          [ "Example", "oidc.html#autotoc_md44", null ]
        ] ],
        [ "Allow anonymous access in the IIS", "oidc.html#autotoc_md45", null ]
      ] ],
      [ "Google authentication for WebClient and ServiceAPI", "oidc.html#oidc_google", [
        [ "Create the Google Credentials", "oidc.html#autotoc_md46", [
          [ "Example", "oidc.html#autotoc_md47", null ]
        ] ],
        [ "Configure authentication in hptrim.config", "oidc.html#autotoc_md48", [
          [ "Example config", "oidc.html#autotoc_md49", null ]
        ] ],
        [ "Enable redirect", "oidc.html#autotoc_md50", null ],
        [ "Logout", "oidc.html#autotoc_md51", [
          [ "Example", "oidc.html#autotoc_md52", null ]
        ] ],
        [ "Allow anonymous access in the IIS", "oidc.html#autotoc_md53", null ]
      ] ],
      [ "AzureAD for Content Manager Desktop", "oidc.html#oidc_azuread_desktop", [
        [ "Create the Azure AD Application", "oidc.html#autotoc_md54", [
          [ "Example", "oidc.html#autotoc_md55", null ]
        ] ],
        [ "Configure permissions", "oidc.html#autotoc_md56", [
          [ "Example", "oidc.html#autotoc_md57", null ]
        ] ],
        [ "Configure authentication in Content Manager Enterprise Studio", "oidc.html#autotoc_md58", [
          [ "Example", "oidc.html#autotoc_md59", null ]
        ] ],
        [ "Configure Azure AD for Office Integration access", "oidc.html#autotoc_md60", [
          [ "Example Config.xml", "oidc.html#autotoc_md61", null ]
        ] ],
        [ "Troubleshooting Azure AD for Office Integration access", "oidc.html#autotoc_md62", [
          [ "Error AADSTS500011: The resource principal named https://MYSERVER/contentmanager/ was not found in the tenant named XXXX-XXXX-XXXXX-XXXXXX.", "oidc.html#autotoc_md63", null ]
        ] ]
      ] ]
    ] ],
    [ "Zero Footprint Office Integration", "zero_office.html", [
      [ "Components", "zero_office.html#autotoc_md64", null ],
      [ "Requirements", "zero_office.html#autotoc_md65", null ],
      [ "ServiceAPI", "zero_office.html#autotoc_md66", [
        [ "ServiceAPI Configuration", "zero_office.html#autotoc_md67", null ],
        [ "ServiceAPI Authentication Permissions", "zero_office.html#autotoc_md69", null ],
        [ "ServiceAPI Authentication Application ID", "zero_office.html#autotoc_md70", null ],
        [ "ServiceAPI Authorized Client Applications", "zero_office.html#autotoc_md71", null ]
      ] ],
      [ "Manifests", "zero_office.html#zero_manifests", null ],
      [ "Browser Cookies", "zero_office.html#autotoc_md72", null ],
      [ "Email Link", "zero_office.html#autotoc_md73", null ]
    ] ],
    [ "Programming in Content Manager", "programming_guide.html", [
      [ "Introduction", "programming_guide.html#programming_in", [
        [ "The main objects", "programming_guide.html#main_objects", null ],
        [ "Using the TrimApplication object", "programming_guide.html#application_object", null ],
        [ "Using the Database object", "programming_guide.html#database_object", [
          [ "Code Example", "programming_guide.html#autotoc_md74", null ]
        ] ],
        [ "Database pooling", "programming_guide.html#database_pooling", [
          [ "Code Example", "programming_guide.html#autotoc_md75", null ]
        ] ]
      ] ],
      [ "Creating and modifying Records", "programming_guide.html#creating_records", [
        [ "Creating new Records", "programming_guide.html#new_record", [
          [ "Code example", "programming_guide.html#autotoc_md76", null ]
        ] ],
        [ "Setting the Container and Classification", "programming_guide.html#creating_records_container", null ],
        [ "Accessing existing records", "programming_guide.html#access_existing_record", null ],
        [ "Getting a record by record number", "programming_guide.html#get_existing_record", [
          [ "Code Example", "programming_guide.html#autotoc_md77", null ]
        ] ],
        [ "Getting a Record by URI", "programming_guide.html#record_by_uri", [
          [ "Code Example", "programming_guide.html#autotoc_md78", null ]
        ] ]
      ] ],
      [ "Reading record data", "programming_guide.html#reading_record_data", [
        [ "Basic properties", "programming_guide.html#reading_basic_properties", [
          [ "Examples of basic readable properties of a record are:", "programming_guide.html#autotoc_md79", null ],
          [ "Code Example", "programming_guide.html#autotoc_md80", null ]
        ] ],
        [ "Accessing related objects", "programming_guide.html#related_objects", [
          [ "Code Example", "programming_guide.html#autotoc_md81", null ]
        ] ],
        [ "Accessing record Location information", "programming_guide.html#record_Location_info", [
          [ "Code Example", "programming_guide.html#autotoc_md82", null ]
        ] ]
      ] ],
      [ "Updating records", "programming_guide.html#updating_records", [
        [ "Modifying properties", "programming_guide.html#modifying_properties", [
          [ "Code Example", "programming_guide.html#autotoc_md83", null ]
        ] ],
        [ "Calling update methods", "programming_guide.html#update_methods", [
          [ "Code Example", "programming_guide.html#autotoc_md84", null ],
          [ "Code Example", "programming_guide.html#autotoc_md85", null ]
        ] ],
        [ "Updating properties using SetProperty", "programming_guide.html#updating_properties", [
          [ "Code Example", "programming_guide.html#autotoc_md86", null ]
        ] ],
        [ "User Defined Fields", "programming_guide.html#update_user_defined_fields", [
          [ "Code Example (GetFieldValue())", "programming_guide.html#autotoc_md87", null ],
          [ "Code Example (SetFieldValue())", "programming_guide.html#autotoc_md88", null ]
        ] ]
      ] ],
      [ "Verifying and error trapping", "programming_guide.html#Verifying_and_error_trapping", [
        [ "The Verify() method", "programming_guide.html#The_Verify_method", [
          [ "Code Example", "programming_guide.html#autotoc_md89", null ]
        ] ],
        [ "The Verified property", "programming_guide.html#The_Verified_property", null ],
        [ "Trapping run-time errors", "programming_guide.html#Trapping_run-time_errors", null ],
        [ "Saving the record to the database", "programming_guide.html#Saving_the_record_to_the_database", null ]
      ] ],
      [ "New records and electronic documents", "programming_guide.html#New_records_and_electronic_documents", [
        [ "Creating a container file", "programming_guide.html#autotoc_md90", null ],
        [ "Creating a record of a given type", "programming_guide.html#Creating_a_record_of_a_given_type", null ],
        [ "Controlled and free text titling", "programming_guide.html#Controlled_and_free_text_titling", [
          [ "Code Example", "programming_guide.html#autotoc_md91", null ]
        ] ],
        [ "Security Levels and Caveats", "programming_guide.html#Security_Levels_and_Caveats", [
          [ "Code Example", "programming_guide.html#autotoc_md92", null ],
          [ "Code Example", "programming_guide.html#autotoc_md93", null ]
        ] ],
        [ "Record Locations", "programming_guide.html#Record_Locations", [
          [ "Code Example", "programming_guide.html#autotoc_md94", null ]
        ] ],
        [ "Record Contacts", "programming_guide.html#Record_Contacts", [
          [ "Code Example", "programming_guide.html#autotoc_md95", null ]
        ] ],
        [ "Creating a Document", "programming_guide.html#Creating_a_Document", null ],
        [ "Titling and numbering", "programming_guide.html#Titling_and_numbering", [
          [ "Code Example", "programming_guide.html#autotoc_md96", null ]
        ] ],
        [ "Assigning to a container", "programming_guide.html#Assigning_to_a_container", [
          [ "Code Example", "programming_guide.html#autotoc_md97", null ]
        ] ],
        [ "Attaching an electronic document", "programming_guide.html#Attaching_an_electronic_document", [
          [ "Code Example", "programming_guide.html#autotoc_md98", null ]
        ] ],
        [ "Document Author", "programming_guide.html#Document_Author", null ]
      ] ],
      [ "Locations", "programming_guide.html#Locations", [
        [ "Working with Locations", "programming_guide.html#Working_with_Locations", null ],
        [ "Finding a Person by Name", "programming_guide.html#Finding_a_Person_by_Name", [
          [ "Code Example", "programming_guide.html#autotoc_md99", null ]
        ] ],
        [ "Creating a new Staff Member", "programming_guide.html#Creating_a_new_Staff_Member", [
          [ "Code Example", "programming_guide.html#autotoc_md100", null ],
          [ "Code Example", "programming_guide.html#autotoc_md101", null ],
          [ "Code Example", "programming_guide.html#autotoc_md102", null ]
        ] ]
      ] ],
      [ "Searching Content Manager using the .NET SDK", "programming_guide.html#Searching_Content_Manager", [
        [ "Searching for Content Manager objects", "programming_guide.html#Searching_for_Records_Manager_objects", [
          [ "Code Example", "programming_guide.html#autotoc_md103", null ]
        ] ],
        [ "Specifying the search criteria", "programming_guide.html#Specifying_the_search_criteria", [
          [ "Code Example", "programming_guide.html#autotoc_md104", null ],
          [ "Code Example", "programming_guide.html#autotoc_md105", null ]
        ] ],
        [ "Retrieving the results of the search", "programming_guide.html#Retrieving_the_results", [
          [ "Code Example", "programming_guide.html#autotoc_md106", null ]
        ] ]
      ] ],
      [ "Other search features", "programming_guide.html#Other_search_features", [
        [ "Return paged results", "programming_guide.html#search_paged_results", null ],
        [ "Filtering/searching by enum value", "programming_guide.html#enum_filtering", null ],
        [ "Purpose filtering", "programming_guide.html#Purpose_filtering", null ],
        [ "Persisting a search", "programming_guide.html#Persisting_a_search", null ],
        [ "Item matching", "programming_guide.html#autotoc_md107", null ],
        [ "Result counts", "programming_guide.html#search_count", null ],
        [ "Sorting by User Defined Fields", "programming_guide.html#sort_by_field", null ]
      ] ],
      [ "Stream searching", "programming_guide.html#stream_search", [
        [ "Example", "programming_guide.html#example_stream_search", null ],
        [ "Sample JSON", "programming_guide.html#example_stream_search_json", null ]
      ] ],
      [ "Document integrity checker", "programming_guide.html#document_integrity_checker", [
        [ "Example: Running Document Store Integrity Check", "programming_guide.html#example_running_document_store_integrity_check", null ]
      ] ],
      [ "Global object change notifications", "programming_guide.html#change_notifications", [
        [ "Example", "programming_guide.html#example_change_notifications", null ]
      ] ],
      [ "Progress notifications while communicating with a workgroup server", "programming_guide.html#wgs_progress_notifications", null ]
    ] ],
    [ "﻿Search Clauses", "sc_using.html", [
      [ "Using Search Clauses", "sc_using.html#search_clause_using", [
        [ "Interrogating metadata", "sc_using.html#autotoc_md108", [
          [ "Code Sample", "sc_using.html#autotoc_md109", null ]
        ] ]
      ] ],
      [ "List of search clauses by object type", "sc_using.html#searcg_clauses_by_object_type", [
        [ "ActionDef", "sc_using.html#search_clauses_ActionDef", null ],
        [ "Activity", "sc_using.html#search_clauses_Activity", null ],
        [ "AgendaItem", "sc_using.html#search_clauses_AgendaItem", null ],
        [ "AgendaItemType", "sc_using.html#search_clauses_AgendaItemType", null ],
        [ "Alert", "sc_using.html#search_clauses_Alert", null ],
        [ "ArchiveEvent", "sc_using.html#search_clauses_ArchiveEvent", null ],
        [ "AutoPartRule", "sc_using.html#search_clauses_AutoPartRule", null ],
        [ "Census", "sc_using.html#search_clauses_Census", null ],
        [ "CheckinStyle", "sc_using.html#search_clauses_CheckinStyle", null ],
        [ "Classification", "sc_using.html#search_clauses_Classification", null ],
        [ "Communication", "sc_using.html#search_clauses_Communication", null ],
        [ "Consignment", "sc_using.html#search_clauses_Consignment", null ],
        [ "ConsignmentApprover", "sc_using.html#search_clauses_ConsignmentApprover", null ],
        [ "ConsignmentIssue", "sc_using.html#search_clauses_ConsignmentIssue", null ],
        [ "ConsignmentRejection", "sc_using.html#search_clauses_ConsignmentRejection", null ],
        [ "DocumentQueue", "sc_using.html#search_clauses_DocumentQueue", null ],
        [ "ElectronicStore", "sc_using.html#search_clauses_ElectronicStore", null ],
        [ "ExternalIcon", "sc_using.html#search_clauses_ExternalIcon", null ],
        [ "ExternalLink", "sc_using.html#search_clauses_ExternalLink", null ],
        [ "ExternalWorkflow", "sc_using.html#search_clauses_ExternalWorkflow", null ],
        [ "ExternalWorkflowTask", "sc_using.html#search_clauses_ExternalWorkflowTask", null ],
        [ "ExternalWorkflowType", "sc_using.html#search_clauses_ExternalWorkflowType", null ],
        [ "FieldDefinition", "sc_using.html#search_clauses_FieldDefinition", null ],
        [ "History", "sc_using.html#search_clauses_History", null ],
        [ "Hold", "sc_using.html#search_clauses_Hold", null ],
        [ "HtmlLayout", "sc_using.html#search_clauses_HtmlLayout", null ],
        [ "Jurisdiction", "sc_using.html#search_clauses_Jurisdiction", null ],
        [ "Keyword", "sc_using.html#search_clauses_Keyword", null ],
        [ "Location", "sc_using.html#search_clauses_Location", null ],
        [ "LookupSet", "sc_using.html#search_clauses_LookupSet", null ],
        [ "MailTemplate", "sc_using.html#search_clauses_MailTemplate", null ],
        [ "Meeting", "sc_using.html#search_clauses_Meeting", null ],
        [ "MeetingType", "sc_using.html#search_clauses_MeetingType", null ],
        [ "MetadataRule", "sc_using.html#search_clauses_MetadataRule", null ],
        [ "MinuteItem", "sc_using.html#search_clauses_MinuteItem", null ],
        [ "MinuteItemType", "sc_using.html#search_clauses_MinuteItemType", null ],
        [ "OfflineRecord", "sc_using.html#search_clauses_OfflineRecord", null ],
        [ "Origin", "sc_using.html#search_clauses_Origin", null ],
        [ "OriginHistory", "sc_using.html#search_clauses_OriginHistory", null ],
        [ "Record", "sc_using.html#search_clauses_Record", null ],
        [ "RecordAction", "sc_using.html#search_clauses_RecordAction", null ],
        [ "RecordType", "sc_using.html#search_clauses_RecordType", null ],
        [ "Report", "sc_using.html#search_clauses_Report", null ],
        [ "ReportBitmap", "sc_using.html#search_clauses_ReportBitmap", null ],
        [ "Request", "sc_using.html#search_clauses_Request", null ],
        [ "SavedSearch", "sc_using.html#search_clauses_SavedSearch", null ],
        [ "Schedule", "sc_using.html#search_clauses_Schedule", null ],
        [ "ScheduledTask", "sc_using.html#search_clauses_ScheduledTask", null ],
        [ "SearchForm", "sc_using.html#search_clauses_SearchForm", null ],
        [ "SecurityCaveat", "sc_using.html#search_clauses_SecurityCaveat", null ],
        [ "SecurityLevel", "sc_using.html#search_clauses_SecurityLevel", null ],
        [ "SharePointItem", "sc_using.html#search_clauses_SharePointItem", null ],
        [ "Space", "sc_using.html#search_clauses_Space", null ],
        [ "StopWord", "sc_using.html#search_clauses_StopWord", null ],
        [ "TodoItem", "sc_using.html#search_clauses_TodoItem", null ],
        [ "UserLabel", "sc_using.html#search_clauses_UserLabel", null ],
        [ "Word", "sc_using.html#search_clauses_Word", null ],
        [ "Workflow", "sc_using.html#search_clauses_Workflow", null ],
        [ "WorkflowTemplate", "sc_using.html#search_clauses_WorkflowTemplate", null ],
        [ "ZipCode", "sc_using.html#search_clauses_ZipCode", null ]
      ] ]
    ] ],
    [ "﻿Enum Items", "enum_metadata.html", [
      [ "Using Enums", "enum_metadata.html#enums_using", [
        [ "Interrogating metadata", "enum_metadata.html#autotoc_md110", [
          [ "Code Sample", "enum_metadata.html#autotoc_md111", null ]
        ] ]
      ] ],
      [ "List of enum items by Enum", "enum_metadata.html#enum_item_by_enum_type_type", [
        [ "Database Type", "enum_metadata.html#enum_help_databaseTypes", null ],
        [ "User Access Type", "enum_metadata.html#enum_help_userTypes", null ],
        [ "Generic Usage Purpose", "enum_metadata.html#enum_help_genericPurposes", null ],
        [ "Access Control Setting", "enum_metadata.html#enum_help_accessControlSettings", null ],
        [ "Titling Method", "enum_metadata.html#enum_help_titlingMethods", null ],
        [ "Numbering Method", "enum_metadata.html#enum_help_numberingMethods", null ],
        [ "Behavior", "enum_metadata.html#enum_help_recordBehaviour", null ],
        [ "Record Class", "enum_metadata.html#enum_help_recordClass", null ],
        [ "Disposition", "enum_metadata.html#enum_help_recordDisp", null ],
        [ "Schedule trigger", "enum_metadata.html#enum_help_triggerTypes", null ],
        [ "Document Store Type", "enum_metadata.html#enum_help_estoreTypes", null ],
        [ "Word Type", "enum_metadata.html#enum_help_wordTypes", null ],
        [ "Numbering Type", "enum_metadata.html#enum_help_nbrTypes", null ],
        [ "Methods to Attach thesaurus term", "enum_metadata.html#enum_help_keywordAttachMethod", null ],
        [ "Record location Type", "enum_metadata.html#enum_help_recordLocationType", null ],
        [ "Contact Type", "enum_metadata.html#enum_help_contactType", null ],
        [ "Search contact Type", "enum_metadata.html#enum_help_searchContactType", null ],
        [ "Thesaurus Term Relationship", "enum_metadata.html#enum_help_keywordRelationship", null ],
        [ "Record Relationship", "enum_metadata.html#enum_help_recordRelationshipType", null ],
        [ "Reverse record Relationship", "enum_metadata.html#enum_help_revRecRelationship", null ],
        [ "Rendition Type", "enum_metadata.html#enum_help_renditionType", null ],
        [ "Record Type Filter", "enum_metadata.html#enum_help_recordTypeFilter", null ],
        [ "Event", "enum_metadata.html#enum_help_events", null ],
        [ "Event Process Type", "enum_metadata.html#enum_help_eventProcessType", null ],
        [ "Tray Type", "enum_metadata.html#enum_help_trayType", null ],
        [ "Location Type", "enum_metadata.html#enum_help_locationType", null ],
        [ "Search location Type", "enum_metadata.html#enum_help_searchLocationType", null ],
        [ "Electronic Address Type", "enum_metadata.html#enum_help_eAddressType", null ],
        [ "Location Usage Purpose", "enum_metadata.html#enum_help_locationPurpose", null ],
        [ "Property Format", "enum_metadata.html#enum_help_propertyFormats", null ],
        [ "Additional Field Format", "enum_metadata.html#enum_help_userFieldFormats", null ],
        [ "Search Filter", "enum_metadata.html#enum_help_searchFilterTypes", null ],
        [ "Sort Field", "enum_metadata.html#enum_help_recordSortFields", null ],
        [ "Barcode userLabels Type", "enum_metadata.html#enum_help_barcodeLabelType", null ],
        [ "Barcode Control Label", "enum_metadata.html#enum_help_controlLabelType", null ],
        [ "Barcode Error", "enum_metadata.html#enum_help_barcodeError", null ],
        [ "String Format", "enum_metadata.html#enum_help_stringFormat", null ],
        [ "Text Object Type", "enum_metadata.html#enum_help_textObjectType", null ],
        [ "Record location Sub Types", "enum_metadata.html#enum_help_recLocSubTypes", null ],
        [ "Date Interval", "enum_metadata.html#enum_help_dateInterval", null ],
        [ "Document Link Type", "enum_metadata.html#enum_help_documentLinkType", null ],
        [ "General Error Handling", "enum_metadata.html#enum_help_generalExceptionHandling", null ],
        [ "Container Security Type", "enum_metadata.html#enum_help_containerSecurityHandling", null ],
        [ "Barcode Printing Option", "enum_metadata.html#enum_help_barcodePrintOption", null ],
        [ "Location Default", "enum_metadata.html#enum_help_locationDefault", null ],
        [ "Uses Store", "enum_metadata.html#enum_help_useStoreType", null ],
        [ "Address Type", "enum_metadata.html#enum_help_addressTypes", null ],
        [ "Location Relationship Type", "enum_metadata.html#enum_help_locRelationshipType", null ],
        [ "Type of PropertiesAsStrings", "enum_metadata.html#enum_help_propertiesStringType", null ],
        [ "Classification Usage Purpose", "enum_metadata.html#enum_help_classificationPurpose", null ],
        [ "Hashing Algorithm", "enum_metadata.html#enum_help_hashingAlgorithms", null ],
        [ "General Access Control", "enum_metadata.html#enum_help_generalAccess", null ],
        [ "Workflow Access Control", "enum_metadata.html#enum_help_workflowAccess", null ],
        [ "Record Access Control", "enum_metadata.html#enum_help_recordAccess", null ],
        [ "Access Transfer Style", "enum_metadata.html#enum_help_accessReferenceStyle", null ],
        [ "Assignee Default", "enum_metadata.html#enum_help_currLocDef", null ],
        [ "Flow Control Type", "enum_metadata.html#enum_help_flowControl", null ],
        [ "Space Level", "enum_metadata.html#enum_help_spaceLevel", null ],
        [ "Space Purpose", "enum_metadata.html#enum_help_spacePurposes", null ],
        [ "Space record Selection", "enum_metadata.html#enum_help_spaceRecordsSelection", null ],
        [ "Space Allocation Method", "enum_metadata.html#enum_help_spaceAllocation", null ],
        [ "Date Interval Singular", "enum_metadata.html#enum_help_dateIntervalSing", null ],
        [ "Record Finalized Filter", "enum_metadata.html#enum_help_finalizedFilter", null ],
        [ "Census record", "enum_metadata.html#enum_help_censusRecords", null ],
        [ "Workflow Lock Operation", "enum_metadata.html#enum_help_workflowLockOperation", null ],
        [ "Record Purpose", "enum_metadata.html#enum_help_recordPurposes", null ],
        [ "Disposition Pending", "enum_metadata.html#enum_help_recordDispPending", null ],
        [ "Mail Recipient Type", "enum_metadata.html#enum_help_mailRecipientType", null ],
        [ "XML Document Export Type", "enum_metadata.html#enum_help_xmlDocumentExportType", null ],
        [ "Dataset availability", "enum_metadata.html#enum_help_databaseAvailability", null ],
        [ "Layout Purpose", "enum_metadata.html#enum_help_layoutPurpose", null ],
        [ "Property String Display Type", "enum_metadata.html#enum_help_stringDisplayType", null ],
        [ "Language", "enum_metadata.html#enum_help_language", null ],
        [ "Document Store Usage Type", "enum_metadata.html#enum_help_storeUsageType", null ],
        [ "Review Filter", "enum_metadata.html#enum_help_pendingEventReviewFilter", null ],
        [ "Less Secure Document Security Type", "enum_metadata.html#enum_help_documentSecurityHandling", null ],
        [ "Document Queue Type", "enum_metadata.html#enum_help_queueTypes", null ],
        [ "Statistical Select By", "enum_metadata.html#enum_help_statTypes", null ],
        [ "Queue Usage Type", "enum_metadata.html#enum_help_queueUsageType", null ],
        [ "Statistical Grouping", "enum_metadata.html#enum_help_statGroupByType", null ],
        [ "Queue Item Attribute", "enum_metadata.html#enum_help_queueItemAttributes", null ],
        [ "Queue Property", "enum_metadata.html#enum_help_queueCapability", null ],
        [ "Server Message Type", "enum_metadata.html#enum_help_serverMessageTypes", null ],
        [ "Native Mail Capture Style", "enum_metadata.html#enum_help_nativeMailStyles", null ],
        [ "Declassify Option", "enum_metadata.html#enum_help_declassifyType", null ],
        [ "Scheduled Task Status", "enum_metadata.html#enum_help_taskStatus", null ],
        [ "Security Update Type", "enum_metadata.html#enum_help_securityUpdateTypes", null ],
        [ "URL Format", "enum_metadata.html#enum_help_objectURLformats", null ],
        [ "Plugin Page Type", "enum_metadata.html#enum_help_pluginPageType", null ],
        [ "Notes Update Type", "enum_metadata.html#enum_help_notesUpdateType", null ],
        [ "Lock Down Type", "enum_metadata.html#enum_help_lockdownStyles", null ],
        [ "Runtime Environment", "enum_metadata.html#enum_help_environments", null ],
        [ "Notes Insert Style", "enum_metadata.html#enum_help_notesInsertStyles", null ],
        [ "Meeting Document Type", "enum_metadata.html#enum_help_meetingDocumentType", null ],
        [ "Type of Participant", "enum_metadata.html#enum_help_invitationType", null ],
        [ "Meeting Attendance Type", "enum_metadata.html#enum_help_attendanceType", null ],
        [ "Lookup Set Type", "enum_metadata.html#enum_help_lookupSetType", null ],
        [ "Automated Part Type", "enum_metadata.html#enum_help_aprType", null ],
        [ "Automated Part Rule Trigger", "enum_metadata.html#enum_help_aprDateTypes", null ],
        [ "Document Selection Type", "enum_metadata.html#enum_help_documentSelectionType", null ],
        [ "XML Schema Type", "enum_metadata.html#enum_help_xmlSchemaTypes", null ],
        [ "Alert Type", "enum_metadata.html#enum_help_alertType", null ],
        [ "Gender", "enum_metadata.html#enum_help_gender", null ],
        [ "Cache type", "enum_metadata.html#enum_help_wgsCacheType", null ],
        [ "Property or Field Format", "enum_metadata.html#enum_help_propertyOrFieldFormat", null ],
        [ "Priority", "enum_metadata.html#enum_help_priority", null ],
        [ "User Label Type", "enum_metadata.html#enum_help_userLabelType", null ],
        [ "Physical Storage Action Type", "enum_metadata.html#enum_help_psoActionType", null ],
        [ "Email Event Type", "enum_metadata.html#enum_help_mailEventType", null ],
        [ "Communication Medium", "enum_metadata.html#enum_help_communicationMedium", null ],
        [ "Communication Direction", "enum_metadata.html#enum_help_communicationDirection", null ],
        [ "Communicator Type", "enum_metadata.html#enum_help_communicatorType", null ],
        [ "Offline Status", "enum_metadata.html#enum_help_offlineStatus", null ],
        [ "Address Type Used", "enum_metadata.html#enum_help_snapAddressType", null ],
        [ "Electronic Storage Action Type", "enum_metadata.html#enum_help_esoActionType", null ],
        [ "Trigger Rounding Type", "enum_metadata.html#enum_help_triggerRounding", null ],
        [ "Month", "enum_metadata.html#enum_help_months", null ],
        [ "Desktop Startup State", "enum_metadata.html#enum_help_desktopStartStates", null ],
        [ "Day of the Week", "enum_metadata.html#enum_help_dayOfTheWeek", null ],
        [ "Time Interval", "enum_metadata.html#enum_help_timeInterval", null ],
        [ "Meeting Access Control", "enum_metadata.html#enum_help_meetingAccess", null ],
        [ "Email Security Mode", "enum_metadata.html#enum_help_emailSecurityMode", null ],
        [ "Motion Outcome", "enum_metadata.html#enum_help_motionOutcome", null ],
        [ "Reference Type", "enum_metadata.html#enum_help_todoReferenceType", null ],
        [ "Outline Number Type", "enum_metadata.html#enum_help_outlineNumberType", null ],
        [ "Notification Type", "enum_metadata.html#enum_help_notificationType", null ],
        [ "Document Usage Type", "enum_metadata.html#enum_help_activityDocumentUsage", null ],
        [ "Document Placeholder Type", "enum_metadata.html#enum_help_workflowDocumentPlaceholderType", null ],
        [ "Activity State", "enum_metadata.html#enum_help_activityStates", null ],
        [ "Initiating Record Behavior", "enum_metadata.html#enum_help_initiatingRecordBehavior", null ],
        [ "Automatic Rendition Status", "enum_metadata.html#enum_help_autoRenditionStatus", null ],
        [ "Auto Rendering Error", "enum_metadata.html#enum_help_autoRenderError", null ],
        [ "Cached Table Notification Type", "enum_metadata.html#enum_help_cachedTableNotificationType", null ],
        [ "Agenda Item Access Control", "enum_metadata.html#enum_help_agendaItemAccess", null ],
        [ "Gender Salutation", "enum_metadata.html#enum_help_genderSalutation", null ],
        [ "Agenda Print Style", "enum_metadata.html#enum_help_agendaPrintStyles", null ],
        [ "Command Refresh Type", "enum_metadata.html#enum_help_commandRefreshTypes", null ],
        [ "Document Action", "enum_metadata.html#enum_help_activityDocumentAction", null ],
        [ "Document Origin", "enum_metadata.html#enum_help_activityDocumentOrigin", null ],
        [ "Document Status", "enum_metadata.html#enum_help_activityDocumentStatus", null ],
        [ "Word Processor Merge Format", "enum_metadata.html#enum_help_wordProcessorMergeFormats", null ],
        [ "Content Manager Path Type", "enum_metadata.html#enum_help_trimPathType", null ],
        [ "Alert Condition Type", "enum_metadata.html#enum_help_alertConditionTypes", null ],
        [ "Favorite Type", "enum_metadata.html#enum_help_favoriteType", null ],
        [ "Origin Type", "enum_metadata.html#enum_help_originType", null ],
        [ "Document Update Style", "enum_metadata.html#enum_help_documentUpdateStyles", null ],
        [ "Email Update Style", "enum_metadata.html#enum_help_emailUpdateStyles", null ],
        [ "Icon Display Mode", "enum_metadata.html#enum_help_iconDisplayMode", null ],
        [ "Icon Usage Type", "enum_metadata.html#enum_help_iconUsage", null ],
        [ "String Display Alignment", "enum_metadata.html#enum_help_stringDisplayAlignment", null ],
        [ "Property Sort Mode", "enum_metadata.html#enum_help_propertySortMode", null ],
        [ "Prefetch Style", "enum_metadata.html#enum_help_prefetchStyles", null ],
        [ "Data Entry Page Type", "enum_metadata.html#enum_help_dataEntryPageType", null ],
        [ "Search Clause Group", "enum_metadata.html#enum_help_searchClauseGroup", null ],
        [ "Product String", "enum_metadata.html#enum_help_productString", null ],
        [ "Action Purpose", "enum_metadata.html#enum_help_actionPurpose", null ],
        [ "Meeting Purpose", "enum_metadata.html#enum_help_meetingPurpose", null ],
        [ "Offline Record Purpose", "enum_metadata.html#enum_help_offlineRecordPurpose", null ],
        [ "Saved Search Purpose", "enum_metadata.html#enum_help_searchPurposes", null ],
        [ "Document Store Purpose", "enum_metadata.html#enum_help_storePurposes", null ],
        [ "Special Date String", "enum_metadata.html#enum_help_specialDates", null ],
        [ "User Label Purpose", "enum_metadata.html#enum_help_labelPurposes", null ],
        [ "Thesaurus Term Purpose", "enum_metadata.html#enum_help_keywordPurposes", null ],
        [ "Event Processor Status", "enum_metadata.html#enum_help_eventProcessorStatus", null ],
        [ "Activity Purpose", "enum_metadata.html#enum_help_activityPurposes", null ],
        [ "Authentication Method", "enum_metadata.html#enum_help_authenticationMethod", null ],
        [ "List Item Orginator", "enum_metadata.html#enum_help_spListItemOriginator", null ],
        [ "Managed List Item Status", "enum_metadata.html#enum_help_spManagedItemStatus", null ],
        [ "SharePoint Element Type", "enum_metadata.html#enum_help_spElementType", null ],
        [ "Search Time Period (Singular)", "enum_metadata.html#enum_help_searchTimePeriodSingular", null ],
        [ "Search Time Period (Plural)", "enum_metadata.html#enum_help_searchTimePeriodPlural", null ],
        [ "Search Time Tense", "enum_metadata.html#enum_help_searchTimeTense", null ],
        [ "Search Grammar Item", "enum_metadata.html#enum_help_searchGrammarItem", null ],
        [ "Search Editor", "enum_metadata.html#enum_help_searchEditor", null ],
        [ "Reference File Application", "enum_metadata.html#enum_help_referenceFileApplication", null ],
        [ "Font Style", "enum_metadata.html#enum_help_fontStyle", null ],
        [ "Location Field Type", "enum_metadata.html#enum_help_locationFieldType", null ],
        [ "Record Security Declassification Type", "enum_metadata.html#enum_help_recordDeclassifyTypes", null ],
        [ "Search Starting Point", "enum_metadata.html#enum_help_searchStartPoint", null ],
        [ "Reporter Font", "enum_metadata.html#enum_help_reporterFonts", null ],
        [ "Tab Bar Style", "enum_metadata.html#enum_help_tabBarStyle", null ],
        [ "Skin Style", "enum_metadata.html#enum_help_skinStyle", null ],
        [ "Frame Type", "enum_metadata.html#enum_help_windowsFrameType", null ],
        [ "Column Index Type", "enum_metadata.html#enum_help_columnIndexType", null ],
        [ "Migration Type", "enum_metadata.html#enum_help_migrationType", null ],
        [ "Microsoft Word File Type", "enum_metadata.html#enum_help_wordFileTypes", null ],
        [ "Microsoft Excel File Type", "enum_metadata.html#enum_help_excelFileTypes", null ],
        [ "Microsoft PowerPoint File Type", "enum_metadata.html#enum_help_powerpointFileTypes", null ],
        [ "Microsoft Project File Type", "enum_metadata.html#enum_help_projectFileTypes", null ],
        [ "Microsoft Office 2003 Word File Type", "enum_metadata.html#enum_help_word11FileTypes", null ],
        [ "Microsoft Office 2003 Excel File Type", "enum_metadata.html#enum_help_excel11FileTypes", null ],
        [ "Microsoft Office 2003 PowerPoint File Type", "enum_metadata.html#enum_help_powerpoint11FileTypes", null ],
        [ "Microsoft Office 2003 Project File Type", "enum_metadata.html#enum_help_project11FileTypes", null ],
        [ "Microsoft Open Word File Type", "enum_metadata.html#enum_help_wordOpenFileTypes", null ],
        [ "Microsoft Open Excel File Type", "enum_metadata.html#enum_help_excelOpenFileTypes", null ],
        [ "Microsoft Open PowerPoint File Type", "enum_metadata.html#enum_help_powerpointOpenFileTypes", null ],
        [ "Microsoft Open Project File Type", "enum_metadata.html#enum_help_projectOpenFileTypes", null ],
        [ "Location Import Type", "enum_metadata.html#enum_help_locationMatchType", null ],
        [ "Path Type", "enum_metadata.html#enum_help_pathTypes", null ],
        [ "IDOL Index Type", "enum_metadata.html#enum_help_idolIndexType", null ],
        [ "Content Index Status", "enum_metadata.html#enum_help_idolIndexStatus", null ],
        [ "Edit Notes Style", "enum_metadata.html#enum_help_editNotesStyle", null ],
        [ "Document Store Status", "enum_metadata.html#enum_help_storeStatus", null ],
        [ "File Size Unit", "enum_metadata.html#enum_help_fileSizeUnits", null ],
        [ "Media Type", "enum_metadata.html#enum_help_mediaTypes", null ],
        [ "Statistics Output Type", "enum_metadata.html#enum_help_statisticsOutputType", null ],
        [ "Database Lock Type", "enum_metadata.html#enum_help_databaseLockType", null ],
        [ "Search parameter format", "enum_metadata.html#enum_help_searchParameterFormats", null ],
        [ "Jurisdiction Type", "enum_metadata.html#enum_help_jurisdictionTypes", null ],
        [ "Record Creation Statistics Primary Grouping", "enum_metadata.html#enum_help_primaryRecordStatisticsGrouping", null ],
        [ "Record Creation Statistics Location Grouping", "enum_metadata.html#enum_help_locationGrouping", null ],
        [ "Event Statistics Group", "enum_metadata.html#enum_help_eventStatisticsGroup", null ],
        [ "Content Manager Event Counter", "enum_metadata.html#enum_help_trimEventCounters", null ],
        [ "Document Event Counter", "enum_metadata.html#enum_help_documentEventCounters", null ],
        [ "Workflow Event Counter", "enum_metadata.html#enum_help_workflowEventCounters", null ],
        [ "Audit Event Counter", "enum_metadata.html#enum_help_auditEventCounters", null ],
        [ "Record Creation Statistics Date Range Type", "enum_metadata.html#enum_help_statisticalDateRangeTypes", null ],
        [ "Product Feature", "enum_metadata.html#enum_help_productFeatures", null ],
        [ "Open Document Status", "enum_metadata.html#enum_help_openDocumentStatus", null ],
        [ "BulkLoader Document Transfer Mode", "enum_metadata.html#enum_help_bulkLoaderCopyMode", null ],
        [ "Additional Field Access Control", "enum_metadata.html#enum_help_fieldAccess", null ],
        [ "Duplicate Email Option", "enum_metadata.html#enum_help_duplicateEmailOptions", null ],
        [ "License Type", "enum_metadata.html#enum_help_licenseTypes", null ],
        [ "Feature State", "enum_metadata.html#enum_help_featureState", null ],
        [ "User License Type", "enum_metadata.html#enum_help_userLicenseTypes", null ],
        [ "Old Version Purge Style", "enum_metadata.html#enum_help_oldVersionPurgeOptions", null ],
        [ "Object Capability", "enum_metadata.html#enum_help_objectCapabilities", null ],
        [ "Content Index Search Style", "enum_metadata.html#enum_help_idolSearchStyles", null ],
        [ "RM Grammar Item", "enum_metadata.html#enum_help_rmGrammarItem", null ],
        [ "RM Terminology Type", "enum_metadata.html#enum_help_rmTerminologyType", null ],
        [ "Tiered Storage Type", "enum_metadata.html#enum_help_tieredStorageType", null ],
        [ "Request Purpose", "enum_metadata.html#enum_help_requestPurposes", null ],
        [ "Request Type", "enum_metadata.html#enum_help_requestTypes", null ],
        [ "Request Priority", "enum_metadata.html#enum_help_requestPriority", null ],
        [ "Request Status", "enum_metadata.html#enum_help_requestStatus", null ],
        [ "SQL Error Type", "enum_metadata.html#enum_help_sqlErrorTypes", null ],
        [ "Retain Option", "enum_metadata.html#enum_help_retainOptions", null ],
        [ "Disposal Type", "enum_metadata.html#enum_help_disposalType", null ],
        [ "Disposition Calculation Status", "enum_metadata.html#enum_help_disposalScheduleStatus", null ],
        [ "Interest Type", "enum_metadata.html#enum_help_clientMatterInterestTypes", null ],
        [ "Consignment Item Status", "enum_metadata.html#enum_help_consignmentItemApprovalStatus", null ],
        [ "Consignment Issue Type", "enum_metadata.html#enum_help_consignmentItemIssueType", null ],
        [ "Consignent Picklist Format", "enum_metadata.html#enum_help_consignmentPickListFormat", null ],
        [ "Consignment Disposal Type", "enum_metadata.html#enum_help_consignmentDisposalType", null ],
        [ "Additional Field Purpose Type", "enum_metadata.html#enum_help_fieldPurposeType", null ],
        [ "Unregistered User Option", "enum_metadata.html#enum_help_unregisteredUsers", null ],
        [ "Mail Format", "enum_metadata.html#enum_help_mailFormat", null ],
        [ "Lookup Item Purpose Type", "enum_metadata.html#enum_help_lookupItemPurposeType", null ],
        [ "Client Server Protocol", "enum_metadata.html#enum_help_clientServerProtocol", null ],
        [ "Connection Type", "enum_metadata.html#enum_help_ipConnectionType", null ],
        [ "Startup Pane Type", "enum_metadata.html#enum_help_startupPaneType", null ],
        [ "Jurisdiction Purpose", "enum_metadata.html#enum_help_jurisdictionPurposes", null ],
        [ "OAuth Implementation Type", "enum_metadata.html#enum_help_oauthImplementationType", null ],
        [ "Client Authentication Mechanism", "enum_metadata.html#enum_help_clientAuthenticationMechanism", null ],
        [ "Frame Appearance", "enum_metadata.html#enum_help_frameAppearance", null ],
        [ "Physical Inactive Record Selection Date Type", "enum_metadata.html#enum_help_psoDateType", null ],
        [ "Electronic Inactive Record Selection Date Type", "enum_metadata.html#enum_help_esoDateType", null ],
        [ "Date Search Type", "enum_metadata.html#enum_help_dateSearchType", null ],
        [ "Geography Distance Unit", "enum_metadata.html#enum_help_geographyDistanceUnit", null ],
        [ "Geography Search Type", "enum_metadata.html#enum_help_geographySearchType", null ],
        [ "Check In Place Type", "enum_metadata.html#enum_help_checkinPlaceTypes", null ],
        [ "Authorization Method", "enum_metadata.html#enum_help_authorizationMethods", null ],
        [ "Location Access Control", "enum_metadata.html#enum_help_locationAccess", null ],
        [ "Document Review State", "enum_metadata.html#enum_help_documentReviewStates", null ],
        [ "Encryption Algorithm", "enum_metadata.html#enum_help_encryptionAlgorithm", null ],
        [ "Label Position Change Type", "enum_metadata.html#enum_help_labelPositionChange", null ],
        [ "ContainmentRule", "enum_metadata.html#enum_help_containmentRule", null ],
        [ "Double Click Style", "enum_metadata.html#enum_help_dblClickStyle", null ],
        [ "Double Click Container Style", "enum_metadata.html#enum_help_dblClickContainerStyle", null ],
        [ "Mail Folder Type", "enum_metadata.html#enum_help_mailFolderTypes", null ],
        [ "LDAP Attribute Matching Type", "enum_metadata.html#enum_help_ldapMatchingType", null ],
        [ "LDAP Search Scope", "enum_metadata.html#enum_help_ldapSearchScope", null ],
        [ "LDAP Authentication Method", "enum_metadata.html#enum_help_ldapAuthMethod", null ],
        [ "Schedule Usage Purpose", "enum_metadata.html#enum_help_schedulePurposes", null ],
        [ "Trigger Delay Type", "enum_metadata.html#enum_help_triggerDelayTypes", null ],
        [ "Cusp Date Display Type", "enum_metadata.html#enum_help_cuspDateDisplayType", null ],
        [ "Log Level", "enum_metadata.html#enum_help_logLevels", null ],
        [ "Output Path Type", "enum_metadata.html#enum_help_outputPathTypes", null ],
        [ "Lookup Item Display Style", "enum_metadata.html#enum_help_lookupItemFieldStyle", null ],
        [ "Check In Style/Place Purpose", "enum_metadata.html#enum_help_checkinToolPurposes", null ],
        [ "Generic Permission", "enum_metadata.html#enum_help_genericPermissions", null ],
        [ "Checkout Style", "enum_metadata.html#enum_help_checkOutStyles", null ],
        [ "SSL Mode", "enum_metadata.html#enum_help_sslMode", null ],
        [ "Mail Persistence Style", "enum_metadata.html#enum_help_mailPersistence", null ],
        [ "Consignment State", "enum_metadata.html#enum_help_consignmentState", null ],
        [ "View Pane Style", "enum_metadata.html#enum_help_viewPaneStyle", null ],
        [ "Auto Render Select Option", "enum_metadata.html#enum_help_autoRenderSelectOption", null ],
        [ "Document Store Integrity Check Counter Type", "enum_metadata.html#enum_help_documentStoreIntegrityCheckCounter", null ],
        [ "Content Engine Type", "enum_metadata.html#enum_help_contentEngineType", null ],
        [ "Asynchronous Task Status", "enum_metadata.html#enum_help_asynchTaskStatus", null ],
        [ "Active Audit Event", "enum_metadata.html#enum_help_historyPurposes", null ],
        [ "Access Control Custom Add Menu Item", "enum_metadata.html#enum_help_aclMenuItems", null ],
        [ "Activity Access Control", "enum_metadata.html#enum_help_activityAccess", null ],
        [ "String Verification Type", "enum_metadata.html#enum_help_stringVerificationTypes", null ],
        [ "Address History Option", "enum_metadata.html#enum_help_addressHistoryOption", null ],
        [ "Web Service Cache Setting", "enum_metadata.html#enum_help_webServiceCacheSettings", null ],
        [ "Event Occurrence Type", "enum_metadata.html#enum_help_occurrenceTypes", null ],
        [ "Result Post Processing Methods", "enum_metadata.html#enum_help_resultPostProcessingMethod", null ],
        [ "External Workflow Type Purpose", "enum_metadata.html#enum_help_externalWorkflowTypePurposes", null ],
        [ "To Do Item Access Control", "enum_metadata.html#enum_help_todoItemAccess", null ],
        [ "Diagnostic Logging Category", "enum_metadata.html#enum_help_loggingCategories", null ],
        [ "User Dashboard Item", "enum_metadata.html#enum_help_userDashboardItem", null ],
        [ "Document Auto Profiling Title Option", "enum_metadata.html#enum_help_autoProfilingTitleOptions", null ],
        [ "User Label Access Control", "enum_metadata.html#enum_help_labelAccess", null ],
        [ "Office Integration Menu Caption", "enum_metadata.html#enum_help_officeIntegrationMenuCaptions", null ],
        [ "Set Author Option", "enum_metadata.html#enum_help_setAuthorOptions", null ],
        [ "Recycle Reason", "enum_metadata.html#enum_help_recycleReasons", null ],
        [ "External Link Type", "enum_metadata.html#enum_help_externalLinkType", null ],
        [ "Date Aggregation Type", "enum_metadata.html#enum_help_dateAggregationType", null ],
        [ "Aggrehation Sort Order", "enum_metadata.html#enum_help_aggregationSortOrder", null ],
        [ "External Link Special Parameter", "enum_metadata.html#enum_help_externalLinkSpecialParameters", null ],
        [ "Copy Relationship", "enum_metadata.html#enum_help_copyRelationship", null ],
        [ "Explorer Top Level Category", "enum_metadata.html#enum_help_explorerCategory", null ],
        [ "Icon Size", "enum_metadata.html#enum_help_iconSizes", null ],
        [ "Stored Procedure", "enum_metadata.html#enum_help_storedProcedures", null ],
        [ "Stored Function", "enum_metadata.html#enum_help_storedFunctions", null ],
        [ "Dots per Inch", "enum_metadata.html#enum_help_dotsPerInch", null ],
        [ "Content Index Document Status", "enum_metadata.html#enum_help_contentIndexDocumentStatus", null ],
        [ "Document Edit Status", "enum_metadata.html#enum_help_documentEditStatus", null ],
        [ "Hold Access Control", "enum_metadata.html#enum_help_holdAccess", null ],
        [ "TRIM Object", "enum_metadata.html#enum_help_baseObjectTypes", null ],
        [ "Selector", "enum_metadata.html#enum_help_selectors", null ],
        [ "Enumeration", "enum_metadata.html#enum_help_enumerations", null ],
        [ "Command", "enum_metadata.html#enum_help_commandIds", null ],
        [ "User Permission", "enum_metadata.html#enum_help_userPermissions", null ],
        [ "Permission Group", "enum_metadata.html#enum_help_permissionGroups", null ],
        [ "Property", "enum_metadata.html#enum_help_propertyIds", null ],
        [ "Icon", "enum_metadata.html#enum_help_icons", null ],
        [ "Search Clause", "enum_metadata.html#enum_help_searchClauseIds", null ],
        [ "User Option Set", "enum_metadata.html#enum_help_userOptionSetIds", null ],
        [ "Menu", "enum_metadata.html#enum_help_menuIds", null ],
        [ "Menu Item", "enum_metadata.html#enum_help_menuItemIds", null ],
        [ "Menu Popup", "enum_metadata.html#enum_help_menuPopupIds", null ]
      ] ]
    ] ],
    [ "﻿Object Purposes", "object_purposes.html", [
      [ "Using object purposes", "object_purposes.html#object_purposes", [
        [ "About", "object_purposes.html#object_purposes_about", null ],
        [ "Warning", "object_purposes.html#object_purposes_warning", null ],
        [ "Extra information", "object_purposes.html#object_purposes_extra", null ],
        [ "Purpose metadata", "object_purposes.html#object_purposes_metadata", [
          [ "Code sample - searching", "object_purposes.html#autotoc_md112", null ],
          [ "Code sample - post search", "object_purposes.html#autotoc_md113", null ],
          [ "Code sample - object definition", "object_purposes.html#autotoc_md114", null ]
        ] ]
      ] ],
      [ "List of objects with related purpose enum", "object_purposes.html#object_with_purpose_enum", [
        [ "TRIM.SDK.ActionDef", "object_purposes.html#purpose_enum_ActionDef", null ],
        [ "TRIM.SDK.Activity", "object_purposes.html#purpose_enum_Activity", null ],
        [ "TRIM.SDK.AgendaItem", "object_purposes.html#purpose_enum_AgendaItem", null ],
        [ "TRIM.SDK.AgendaItemType", "object_purposes.html#purpose_enum_AgendaItemType", null ],
        [ "TRIM.SDK.AutoPartRule", "object_purposes.html#purpose_enum_AutoPartRule", null ],
        [ "TRIM.SDK.CheckinPlace", "object_purposes.html#purpose_enum_CheckinPlace", null ],
        [ "TRIM.SDK.CheckinStyle", "object_purposes.html#purpose_enum_CheckinStyle", null ],
        [ "TRIM.SDK.Classification", "object_purposes.html#purpose_enum_Classification", null ],
        [ "TRIM.SDK.DocumentQueue", "object_purposes.html#purpose_enum_DocumentQueue", null ],
        [ "TRIM.SDK.ElectronicStore", "object_purposes.html#purpose_enum_ElectronicStore", null ],
        [ "TRIM.SDK.ExternalLink", "object_purposes.html#purpose_enum_ExternalLink", null ],
        [ "TRIM.SDK.ExternalWorkflowType", "object_purposes.html#purpose_enum_ExternalWorkflowType", null ],
        [ "TRIM.SDK.FieldDefinition", "object_purposes.html#purpose_enum_FieldDefinition", null ],
        [ "TRIM.SDK.History", "object_purposes.html#purpose_enum_History", null ],
        [ "TRIM.SDK.Hold", "object_purposes.html#purpose_enum_Hold", null ],
        [ "TRIM.SDK.HtmlLayout", "object_purposes.html#purpose_enum_HtmlLayout", null ],
        [ "TRIM.SDK.Jurisdiction", "object_purposes.html#purpose_enum_Jurisdiction", null ],
        [ "TRIM.SDK.Keyword", "object_purposes.html#purpose_enum_Keyword", null ],
        [ "TRIM.SDK.Location", "object_purposes.html#purpose_enum_Location", null ],
        [ "TRIM.SDK.LookupItem", "object_purposes.html#purpose_enum_LookupItem", null ],
        [ "TRIM.SDK.LookupSet", "object_purposes.html#purpose_enum_LookupSet", null ],
        [ "TRIM.SDK.Meeting", "object_purposes.html#purpose_enum_Meeting", null ],
        [ "TRIM.SDK.MeetingType", "object_purposes.html#purpose_enum_MeetingType", null ],
        [ "TRIM.SDK.MinuteItemType", "object_purposes.html#purpose_enum_MinuteItemType", null ],
        [ "TRIM.SDK.OfflineRecord", "object_purposes.html#purpose_enum_OfflineRecord", null ],
        [ "TRIM.SDK.Origin", "object_purposes.html#purpose_enum_Origin", null ],
        [ "TRIM.SDK.Record", "object_purposes.html#purpose_enum_Record", null ],
        [ "TRIM.SDK.RecordType", "object_purposes.html#purpose_enum_RecordType", null ],
        [ "TRIM.SDK.Report", "object_purposes.html#purpose_enum_Report", null ],
        [ "TRIM.SDK.Request", "object_purposes.html#purpose_enum_Request", null ],
        [ "TRIM.SDK.SavedSearch", "object_purposes.html#purpose_enum_SavedSearch", null ],
        [ "TRIM.SDK.Schedule", "object_purposes.html#purpose_enum_Schedule", null ],
        [ "TRIM.SDK.ScheduledTask", "object_purposes.html#purpose_enum_ScheduledTask", null ],
        [ "TRIM.SDK.SearchForm", "object_purposes.html#purpose_enum_SearchForm", null ],
        [ "TRIM.SDK.SecurityCaveat", "object_purposes.html#purpose_enum_SecurityCaveat", null ],
        [ "TRIM.SDK.SecurityGuide", "object_purposes.html#purpose_enum_SecurityGuide", null ],
        [ "TRIM.SDK.SecurityLevel", "object_purposes.html#purpose_enum_SecurityLevel", null ],
        [ "TRIM.SDK.Space", "object_purposes.html#purpose_enum_Space", null ],
        [ "TRIM.SDK.TodoItem", "object_purposes.html#purpose_enum_TodoItem", null ],
        [ "TRIM.SDK.UserLabel", "object_purposes.html#purpose_enum_UserLabel", null ],
        [ "TRIM.SDK.Workflow", "object_purposes.html#purpose_enum_Workflow", null ],
        [ "TRIM.SDK.WorkflowTemplate", "object_purposes.html#purpose_enum_WorkflowTemplate", null ],
        [ "TRIM.SDK.WorkingCopy", "object_purposes.html#purpose_enum_WorkingCopy", null ]
      ] ]
    ] ],
    [ "﻿Property Definitions", "property_definition_metadata.html", [
      [ "Using Property Definitions", "property_definition_metadata.html#property_definitions_using", null ],
      [ "List of property definitions by object type", "property_definition_metadata.html#property_definitions_by_object_type", [
        [ "ActionDef", "property_definition_metadata.html#property_definitions_ActionDef", null ],
        [ "Activity", "property_definition_metadata.html#property_definitions_Activity", null ],
        [ "AgendaItem", "property_definition_metadata.html#property_definitions_AgendaItem", null ],
        [ "AgendaItemType", "property_definition_metadata.html#property_definitions_AgendaItemType", null ],
        [ "Alert", "property_definition_metadata.html#property_definitions_Alert", null ],
        [ "ArchiveEvent", "property_definition_metadata.html#property_definitions_ArchiveEvent", null ],
        [ "AutoPartRule", "property_definition_metadata.html#property_definitions_AutoPartRule", null ],
        [ "Census", "property_definition_metadata.html#property_definitions_Census", null ],
        [ "CheckinStyle", "property_definition_metadata.html#property_definitions_CheckinStyle", null ],
        [ "Classification", "property_definition_metadata.html#property_definitions_Classification", null ],
        [ "Communication", "property_definition_metadata.html#property_definitions_Communication", null ],
        [ "Consignment", "property_definition_metadata.html#property_definitions_Consignment", null ],
        [ "ConsignmentApprover", "property_definition_metadata.html#property_definitions_ConsignmentApprover", null ],
        [ "ConsignmentIssue", "property_definition_metadata.html#property_definitions_ConsignmentIssue", null ],
        [ "ConsignmentRejection", "property_definition_metadata.html#property_definitions_ConsignmentRejection", null ],
        [ "DocumentQueue", "property_definition_metadata.html#property_definitions_DocumentQueue", null ],
        [ "ElectronicStore", "property_definition_metadata.html#property_definitions_ElectronicStore", null ],
        [ "ExternalIcon", "property_definition_metadata.html#property_definitions_ExternalIcon", null ],
        [ "ExternalLink", "property_definition_metadata.html#property_definitions_ExternalLink", null ],
        [ "ExternalWorkflow", "property_definition_metadata.html#property_definitions_ExternalWorkflow", null ],
        [ "ExternalWorkflowTask", "property_definition_metadata.html#property_definitions_ExternalWorkflowTask", null ],
        [ "ExternalWorkflowType", "property_definition_metadata.html#property_definitions_ExternalWorkflowType", null ],
        [ "FieldDefinition", "property_definition_metadata.html#property_definitions_FieldDefinition", null ],
        [ "History", "property_definition_metadata.html#property_definitions_History", null ],
        [ "Hold", "property_definition_metadata.html#property_definitions_Hold", null ],
        [ "HtmlLayout", "property_definition_metadata.html#property_definitions_HtmlLayout", null ],
        [ "Jurisdiction", "property_definition_metadata.html#property_definitions_Jurisdiction", null ],
        [ "Keyword", "property_definition_metadata.html#property_definitions_Keyword", null ],
        [ "Location", "property_definition_metadata.html#property_definitions_Location", null ],
        [ "LookupSet", "property_definition_metadata.html#property_definitions_LookupSet", null ],
        [ "MailTemplate", "property_definition_metadata.html#property_definitions_MailTemplate", null ],
        [ "Meeting", "property_definition_metadata.html#property_definitions_Meeting", null ],
        [ "MeetingType", "property_definition_metadata.html#property_definitions_MeetingType", null ],
        [ "MetadataRule", "property_definition_metadata.html#property_definitions_MetadataRule", null ],
        [ "MinuteItem", "property_definition_metadata.html#property_definitions_MinuteItem", null ],
        [ "MinuteItemType", "property_definition_metadata.html#property_definitions_MinuteItemType", null ],
        [ "OfflineRecord", "property_definition_metadata.html#property_definitions_OfflineRecord", null ],
        [ "Origin", "property_definition_metadata.html#property_definitions_Origin", null ],
        [ "OriginHistory", "property_definition_metadata.html#property_definitions_OriginHistory", null ],
        [ "Record", "property_definition_metadata.html#property_definitions_Record", null ],
        [ "RecordAction", "property_definition_metadata.html#property_definitions_RecordAction", null ],
        [ "RecordType", "property_definition_metadata.html#property_definitions_RecordType", null ],
        [ "Report", "property_definition_metadata.html#property_definitions_Report", null ],
        [ "ReportBitmap", "property_definition_metadata.html#property_definitions_ReportBitmap", null ],
        [ "Request", "property_definition_metadata.html#property_definitions_Request", null ],
        [ "SavedSearch", "property_definition_metadata.html#property_definitions_SavedSearch", null ],
        [ "Schedule", "property_definition_metadata.html#property_definitions_Schedule", null ],
        [ "ScheduledTask", "property_definition_metadata.html#property_definitions_ScheduledTask", null ],
        [ "SearchForm", "property_definition_metadata.html#property_definitions_SearchForm", null ],
        [ "SecurityCaveat", "property_definition_metadata.html#property_definitions_SecurityCaveat", null ],
        [ "SecurityLevel", "property_definition_metadata.html#property_definitions_SecurityLevel", null ],
        [ "SharePointItem", "property_definition_metadata.html#property_definitions_SharePointItem", null ],
        [ "Space", "property_definition_metadata.html#property_definitions_Space", null ],
        [ "StopWord", "property_definition_metadata.html#property_definitions_StopWord", null ],
        [ "TodoItem", "property_definition_metadata.html#property_definitions_TodoItem", null ],
        [ "UserLabel", "property_definition_metadata.html#property_definitions_UserLabel", null ],
        [ "Word", "property_definition_metadata.html#property_definitions_Word", null ],
        [ "Workflow", "property_definition_metadata.html#property_definitions_Workflow", null ],
        [ "WorkflowTemplate", "property_definition_metadata.html#property_definitions_WorkflowTemplate", null ],
        [ "ZipCode", "property_definition_metadata.html#property_definitions_ZipCode", null ]
      ] ]
    ] ],
    [ "Advanced Topics", "advanced_topics.html", [
      [ "Different ways to fetch a TrimMainObject", "advanced_topics.html#ways_To_Fetch_a_TrimMainObject", [
        [ "Object constructor by Name", "advanced_topics.html#fetch_by_constructorand_name", [
          [ "Code example", "advanced_topics.html#autotoc_md115", null ]
        ] ],
        [ "Object name properties", "advanced_topics.html#object_name_properties", null ],
        [ "Database find methods", "advanced_topics.html#fetch_by_database", [
          [ "Code samples", "advanced_topics.html#autotoc_md116", null ]
        ] ],
        [ "TrimMainObjectSearch", "advanced_topics.html#fetch_by_search", [
          [ "Code sample", "advanced_topics.html#autotoc_md117", null ]
        ] ]
      ] ],
      [ "Document access alternatives", "advanced_topics.html#fetchDoc", [
        [ "Overview", "advanced_topics.html#doc_access_overview", null ],
        [ "Record.GetDocument()", "advanced_topics.html#getDoc", [
          [ "Checkout without getting the document", "advanced_topics.html#autotoc_md119", null ]
        ] ],
        [ "DocumentPathInClientCache", "advanced_topics.html#clientCache", [
          [ "Example", "advanced_topics.html#autotoc_md120", null ]
        ] ],
        [ "DocumentPathInWGSCache", "advanced_topics.html#wgsCache", [
          [ "Example", "advanced_topics.html#autotoc_md121", null ]
        ] ],
        [ "DownloadNotifier", "advanced_topics.html#downloadNotifier", [
          [ "Example", "advanced_topics.html#autotoc_md122", null ]
        ] ],
        [ "Other object types", "advanced_topics.html#dowload_other_object_types", null ]
      ] ],
      [ "Localised strings", "advanced_topics.html#localisedStrings", [
        [ "TrimMessages", "advanced_topics.html#trimMEssages", [
          [ "Code Sample", "advanced_topics.html#autotoc_md123", null ]
        ] ],
        [ "Captions", "advanced_topics.html#objectCaptions", [
          [ "Enum captions", "advanced_topics.html#enumCaptions", null ],
          [ "Property Captions", "advanced_topics.html#propertyCaptions", null ],
          [ "Search Clause Captions", "advanced_topics.html#searchClauseCaptions", null ],
          [ "Menu items", "advanced_topics.html#menuItemCaptions", null ]
        ] ],
        [ "FormDefinition", "advanced_topics.html#formDefinitionCaptions", null ]
      ] ],
      [ "Fetching LookupSet Items", "advanced_topics.html#lookupset_Items", [
        [ "Example: Adding a new LookupItem", "advanced_topics.html#new_lookupitem", null ],
        [ "Example: Fetching lookup items", "advanced_topics.html#fetching_lookup_items", null ]
      ] ],
      [ "Create a Record using manual numbering", "advanced_topics.html#create_record_manual_number", [
        [ "Example: Manual Record Number", "advanced_topics.html#example_manual_record_number", null ]
      ] ]
    ] ],
    [ "Packages", "namespaces.html", [
      [ "Packages", "namespaces.html", "namespaces_dup" ],
      [ "Package Functions", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Enumerations", "namespacemembers_enum.html", "namespacemembers_enum" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Properties", "functions_prop.html", "functions_prop" ],
        [ "Events", "functions_evnt.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"advanced_topics.html",
"class_t_r_i_m_1_1_s_d_k_1_1_agenda_item.html#a25748f807fd9a9d51bd2509573433b57",
"class_t_r_i_m_1_1_s_d_k_1_1_census.html",
"class_t_r_i_m_1_1_s_d_k_1_1_communication.html#a22c206c21468434c582bc1a5f693f91f",
"class_t_r_i_m_1_1_s_d_k_1_1_database.html#a22379c99976db31384a637220f35aec8",
"class_t_r_i_m_1_1_s_d_k_1_1_database.html#aff121ba0fa0ce077713f2db31a25a10e",
"class_t_r_i_m_1_1_s_d_k_1_1_email_attachment_list_1_1_email_attachment_list_enumerator.html#a7a350a58a56d29bc6a12e2d33f400d38",
"class_t_r_i_m_1_1_s_d_k_1_1_explorer_category_list.html#a2c3f234c3dfbbcae4be6d157120cb22c",
"class_t_r_i_m_1_1_s_d_k_1_1_field_definition.html#a772803c147aab3a1bf2c022b08519287",
"class_t_r_i_m_1_1_s_d_k_1_1_int_list.html#a3856b2f8b31312d1ce4a65d81cbfdb18",
"class_t_r_i_m_1_1_s_d_k_1_1_location_e_address.html#a197d8032a6d6d4e46a53ad7b48d460da",
"class_t_r_i_m_1_1_s_d_k_1_1_meeting_type.html#af4b0a90051152e274aef805378f289ea",
"class_t_r_i_m_1_1_s_d_k_1_1_offline_record.html#a96c5dd694376b3c0699fb716392e410d",
"class_t_r_i_m_1_1_s_d_k_1_1_property_def.html#a9891625530200b84dcf0bc053ef89970",
"class_t_r_i_m_1_1_s_d_k_1_1_record.html#a11efbdccfdb9e4a82c14ab17b88331d7",
"class_t_r_i_m_1_1_s_d_k_1_1_record.html#abe8156982b3ca14560f1a11a8ea8da3e",
"class_t_r_i_m_1_1_s_d_k_1_1_record_location.html#a986a756105b4e164947d7a7efb812aa4",
"class_t_r_i_m_1_1_s_d_k_1_1_record_type.html#abc5681ca0b24d8f0ed504456fe3b1547",
"class_t_r_i_m_1_1_s_d_k_1_1_schedule.html#af4b5128a721d512ca9bb497d2e50c23b",
"class_t_r_i_m_1_1_s_d_k_1_1_security_caveat.html#aab8500fef5b8e6655baad3684e5d86ab",
"class_t_r_i_m_1_1_s_d_k_1_1_string_array.html#ad77baaf10f4abe757583feca23e18e4a",
"class_t_r_i_m_1_1_s_d_k_1_1_trim_decimal.html#a640c373c7a266bc1588974cd38ca61b8",
"class_t_r_i_m_1_1_s_d_k_1_1_trim_menu_link_list_1_1_trim_menu_link_list_enumerator.html#ac6b0a441d389e76ec1373630efbf8b73",
"class_t_r_i_m_1_1_s_d_k_1_1_trim_search_sort_item_list.html#a14c1aac9d21f153644a1f250bde72997",
"class_t_r_i_m_1_1_s_d_k_1_1_wgs_progress_info.html#ab3bd1131f5d00aaa1ec6abfdd1e1b4ec",
"enum_metadata.html#enum_help_controlLabelType",
"enum_metadata.html#enum_help_unregisteredUsers",
"namespace_t_r_i_m_1_1_s_d_k.html#a0193b3b41a16f67d107228cdc4c92739a1fc5884251ca9f20a4fd5f79a458f94f",
"namespace_t_r_i_m_1_1_s_d_k.html#a0193b3b41a16f67d107228cdc4c92739a893d031c33d55e59b810596012a04c07",
"namespace_t_r_i_m_1_1_s_d_k.html#a0193b3b41a16f67d107228cdc4c92739aef8ee04c55eaf3f9e12839ae685b3fb5",
"namespace_t_r_i_m_1_1_s_d_k.html#a08466ea06e2ccb31ab04adb5c300934baacbadebf2dc4813608b850ccaacbe800",
"namespace_t_r_i_m_1_1_s_d_k.html#a1aab9a69ed75aa9bbfc361908bc3eb48",
"namespace_t_r_i_m_1_1_s_d_k.html#a28c22b416faea10d468bcbecf632f5bfa819453534665c162edb2107283f20ff6",
"namespace_t_r_i_m_1_1_s_d_k.html#a2e313f89c105683826d40daeeac724bbab206a1b4ea1097761f78e8876f6da779",
"namespace_t_r_i_m_1_1_s_d_k.html#a49400c8361c5cf69b67b70c6408ffc85",
"namespace_t_r_i_m_1_1_s_d_k.html#a563760e8f42fa60ac770970a65f595f3a73125fe448cc254214d4969b7869beee",
"namespace_t_r_i_m_1_1_s_d_k.html#a5d3ef5f1ed54efc1530ce7ba740c6cefa7372c74833f8a45813f1ff356736bc2e",
"namespace_t_r_i_m_1_1_s_d_k.html#a6688581b60dea6b8108117df844d0bc3a10ff8b0e4bca4f39a2c52af626afd0ca",
"namespace_t_r_i_m_1_1_s_d_k.html#a753711ce2302f9a98b7fbca2c79cb33ba26d824427b505952ed4ac4c19be05a5b",
"namespace_t_r_i_m_1_1_s_d_k.html#a753711ce2302f9a98b7fbca2c79cb33ba6d8bed39ed6b99d8db51f3f5f2d635ae",
"namespace_t_r_i_m_1_1_s_d_k.html#a753711ce2302f9a98b7fbca2c79cb33babc0b5be876f8e511fcd4cc6bdbdd5612",
"namespace_t_r_i_m_1_1_s_d_k.html#a7851db70054f962b98c7523068e5b973af73b999b40e3896ef25bb6d0f7d239fb",
"namespace_t_r_i_m_1_1_s_d_k.html#a8365d4848a1d591c9d414bdcdf180d3fa60817eed64cf1e26af3d928b7a4c20ec",
"namespace_t_r_i_m_1_1_s_d_k.html#a88fdad9803136a31cabbe34e628acc57aec5a22291e8c093eb0f92ecdf6d0a328",
"namespace_t_r_i_m_1_1_s_d_k.html#ab00975e0947347d36dca72d67fdf0b23a745ef75fb0adad4ed69eb0f8a63b2523",
"namespace_t_r_i_m_1_1_s_d_k.html#ac2d1b9923c582181bdf5c8dbda09e09cab951f3558625fe108c3b556a0f93ee1a",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a195793d49c42ef7b0bc971087e48d30e",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a3511465d762d4e427a767e63edd69bbf",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a4fc6f3259927f9de9a662be23c1524af",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a6a5628b8dadb643252e68214acdb39ff",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a886b8e5060492dd34ff5cc07c050dc9c",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394aa1ade6f0227f5536d970ec12d72ce5ab",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394abdb7e017056e10d43292f6e2d981a6cd",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394adc87c7cea2740ab7b94a28ac7211f2ea",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394af922b40afe67906ab72bb56a15ba1bb7",
"namespace_t_r_i_m_1_1_s_d_k.html#ad7258f615e4cb35d7f8642a3fe8cd06fab6ec7abeb6ae29cc35a4b47475e12afe",
"namespace_t_r_i_m_1_1_s_d_k.html#af33254e6ddf46b290bd5eb7c480ce427a038e648f69b23b2a59daf262d8122a24",
"namespace_t_r_i_m_1_1_s_d_k.html#af7e058b1d73a0123587a52d773c2ad6ba49cdf9fc54e9eb222629464f8a232bf0",
"namespace_t_r_i_m_1_1_s_d_k.html#af7e058b1d73a0123587a52d773c2ad6bacdec849ac5386f809be37651228da2fb",
"oidc.html#autotoc_md44",
"release_notes.html#rn_92_constructors"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';