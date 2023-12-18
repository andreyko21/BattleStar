import $ from "jquery";

$(document).ready(() => {
  $("#loadBanner").on("click", function () {
    const fileInput = document.getElementById("loadBanner") as any;

    if (fileInput && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append("files", file);

      const jwt =
        "73d285b888be102cfcacdd444be3c7e935608d1c703339d5515ab43355598fbfd837843f7df61c17434553a700ab7db8f41807ec0ffed88f5702bc72d02177f5777461c895620f6f463523a811c2ec57e8ceeb66e332dfeb11fac3362b889c43098de39518b54ac705e95fa2f9834c5d736c18bf234829b8dff48205071c4e1e";
      const url = "https://battle-star-app.onrender.com/api/upload";

      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
          console.log("File uploaded successfully:", data);
        },
        error: function (_jqXHR, textStatus, errorThrown) {
          console.error("Error uploading file:", textStatus, errorThrown);
        },
      });
    } else {
      console.error("No file selected or file input element not found");
    }
  });
});
