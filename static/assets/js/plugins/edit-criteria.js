document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".btn-primary.btn-sm");

  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Mengambil data dari atribut data-parameter dan data-criteria pada tombol
      const parameter = button.getAttribute("data-parameter");
      const criteria = button.getAttribute("data-criteria");

      console.log(parameter, criteria)

      // Memasukkan data ke dalam form
      document.getElementById("parameter").value = parameter; // Mengisi Parameter
      document.getElementById("criteria").value = criteria; // Mengisi Criteria
      document.getElementById("criteria_id").value = criteria; // Mengisi Criteria
    });
  });
});
