function submitForm(message) {
    let form = document.querySelector("form");
    Swal.fire({
        title: message,
        // text: "You won't be able to revert this!",
        // icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
        allowOutsideClick: "false",
        background: "var(--primary)",
    }).then((result) => {
        if (result.isConfirmed) {
            // Swal.fire("Deleted!", "Your file has been deleted.", "success");
            form.submit();
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            // Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
    });
}