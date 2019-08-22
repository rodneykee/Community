﻿// The initialize function must be run each time a new page is loaded.
(function() {
	Office.initialize = function(reason) {
		// If you need to initialize something you can do so here.
		//  loadProps();
	};
})();

let accessToken = "";

function loadProps() {
	var dfd = jQuery.Deferred();

	if (Office.context.requirements.isSetSupported("IdentityAPI", 1.1)) {
		// Request an SSO Token

		if (accessToken) {
			dfd.resolve("success");
		} else {
			Office.context.auth.getAccessTokenAsync({ forceConsent: false }, function(
				result
			) {
				if (result.status === "succeeded") {
					// Use this token to call Web API
					var ssoToken = result.value;
					accessToken = result.value;
					dfd.resolve("success");
				} else {
					console.log(result.error);
					// alert(result.error)
					if (result.error.code === 13003) {
						// SSO is not supported for domain user accounts, only
						// work or school (Office 365) or Microsoft Account IDs.
					} else {
						// Handle error
					}
					dfd.resolve("error");
				}
			});
		}
	} else {
		dfd.resolve("error");
	}
	return dfd.promise();
}

function getRoot() {
	let appPath = config.MY_PATH;

	let root = location.origin.endsWith("/")
		? location.origin
		: location.origin + "/";

	root = root + (appPath === "/" ? "" : appPath);

	root = root.endsWith("/") ? root : root + "/";

	return root;
}

function openHelp(event) {
	const root = getRoot();

	open(root + "home/help.html", "_help");
	event.completed();
}
function openFromTrim(event) {
	$.when(loadProps()).then(function(status) {
		if (status === "success") {
			const root = getRoot();
			Office.context.ui.displayDialogAsync(
				root +
					"?searchdialog=true&accessToken=" +
					accessToken +
					"&rnd=" +
					Math.random(),
				{ height: 55, width: 50, displayInIframe: true },
				function(asyncResult) {
					dialog = asyncResult.value;
					dialog.addEventHandler(
						Office.EventType.DialogMessageReceived,
						processCreateMessage
					);
				}
			);
			event.completed();
		} else {
			event.completed();
		}
	});

	function processCreateMessage(args) {
		if (args.message !== "0") {
			open(args.message, "_blank");
		}
		dialog.close();
	}
}
