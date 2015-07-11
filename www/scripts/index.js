//// For an introduction to the Blank template, see the following documentation:
//// http://go.microsoft.com/fwlink/?LinkID=397704
//// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
//// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    
//    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
//    nfc.addNdefListener(
//      function (nfcEvent) {
//          console.log('nfcEvent ' + JSON.stringify(nfcEvent));
//          var tag = nfcEvent.tag,
//            ndefMessage = tag.ndefMessage;

//          // dump the raw json of the message
//          // note: real code will need to decode
//          // the payload from each record
//          console.log(JSON.stringify(ndefMessage));

//          // assuming the first record in the message has 
//          // a payload that can be converted to a string.
//          console.log(nfc.bytesToString(ndefMessage[0].payload).substring(3));
//          alert(nfc.bytesToString(ndefMessage[0].payload).substring(3));
//      },
//      function () { // success callback
         
//          console.log("Waiting for NDEF tag");
//      },
//      function (error) { // error callback
//          console.log("Error adding NDEF listener " + JSON.stringify(error));
//      }
//    );

//    function onDeviceReady() {
//        // Handle the Cordova pause and resume events
//        document.addEventListener( 'pause', onPause.bind( this ), false );
//        document.addEventListener( 'resume', onResume.bind( this ), false );
        
//        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
//    };

//    function onPause() {
//        // TODO: This application has been suspended. Save application state here.
//    };

//    function onResume() {
//        // TODO: This application has been reactivated. Restore application state here.
//    };
//} )();

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        alert("start");
        nfc.addNdefListener(app.onNfc);
        alert(app.onNfc);
    },
    onNfc: function (nfcEvent) {
        // message is an array of records
        var message = [
            ndef.textRecord("hello, shay")
        ];
        alert(message);
        nfc.write(message, app.onWriteSuccess);
    },
    onWriteSuccess: function () {
        alert("Wrote message to tag.");
    }
};
})();