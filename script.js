function addRow() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contactno = document.getElementById("contactno").value;
  var age = document.getElementById("age").value;
  var image = document.getElementById("image").files[0];
  
  var reader = new FileReader();
  reader.onload = function (event) {
    var imgSrc = event.target.result;

    var table = document.getElementById("imageTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var nameCell = newRow.insertCell(0);
    var emailCell = newRow.insertCell(1);
    var contactCell = newRow.insertCell(2);
    var ageCell = newRow.insertCell(3);
    var imageCell = newRow.insertCell(4);

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    contactCell.innerHTML = contactno;
    ageCell.innerHTML = age;
    imageCell.innerHTML = '<img src="' + imgSrc + '" width="100" height="100">';

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("contactno").value ='';
    document.getElementById("age").value = '';
    document.getElementById("image").value = '';
  };

  reader.readAsDataURL(image);
}