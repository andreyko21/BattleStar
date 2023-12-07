import $ from "jquery";

$(document).ready(function () {
  $("#passwordShowCheckbox").change(function () {
    if ($(this).is(":checked")) {
      $(".partner-auth-page__login-input").attr("type", "text");
      $(".partner-input-block__input-show-password").hide();
      $(".partner-input-block__input-hiden-password").show();
    } else {
      $(".partner-auth-page__login-input").attr("type", "password");
      $(".partner-input-block__input-show-password").show();
      $(".partner-input-block__input-hiden-password").hide();
    }
  });
});
