var button = document.getElementById('sub');

if (document.getElementById('error').innerHTML == '') {
  document.getElementById('error').style.display = 'none';
}

button.addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('error').style.display = 'none';
  let title = document.getElementById('track').value;
  let price = document.getElementById('price').value;
  let author = document.getElementById('artistname').value;

  if (title == '') {
    displayRequired('track');
    return false;
  }

  if (author == '') {
    displayRequired('artistname');
    return false;
  }

  if (price == '') {
    displayRequired('price');
    return false;
  }

  function displayRequired(field) {
    document.getElementById('error').style.display = 'block';
    document.getElementById('error').innerHTML = `${field} field is required.`;
  }

  if (isNaN(parseFloat(price))) {
    document.getElementById('error').style.display = 'block';
    document.getElementById('error').innerHTML = `Enter a number in price`;
    return false;
  } else {
    let form = document.getElementById('songformdata');
    form.submit();
  }
});
