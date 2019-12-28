const notifications = (() => {
  $(document).on({
    ajaxStart: () => $('#loadingNotification').fadeIn(),
    ajaxStop: () => $('#loadingNotification').fadeOut()
  })

  function showSuccess(message) {
    let successBox = $('#successNotification');
    successBox.text(message);
    successBox.fadeIn();
    successBox.fadeOut(5000);
  }

  function showError(message) {
    let errorBox = $('#errorNotification');
    errorBox.text(message);
    errorBox.fadeIn();
    errorBox.on('click', function () {
      errorBox.fadeOut();
    })

  }


  return {
    showSuccess,
    showError,
  }
})()