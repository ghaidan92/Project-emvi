function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle('active');
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})