(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  const getCommand = (message, errorCB) => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      success: function (data){
        console.log(data);
        if (typeof data === 'string'){
          SwimTeam.move(data);
         } else {
           //console.log(data);
       }

      },
      error: errorCB
    })
  }

  setInterval(getCommand, 5000);

//   const getBackground = (message, errorCB) => {
//     $.ajax({
//       type: 'GET',
//       url: serverUrl + '/background',
//       success: function (data){
//         background.add(data.img);
//       },
//       error: errorCB
//     })
//   }

// $('button').on('click', getBackground)


  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'FILL_ME_IN',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
