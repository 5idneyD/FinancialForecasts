function submitForm() {
    let form = document.querySelector("form");
    Swal.fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
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