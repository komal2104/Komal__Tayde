document.getElementById('registerBtn').addEventListener('click', function() {
    document.body.classList.add('blur');
    document.getElementById('registerSection').style.display = 'block';
  });

  document.getElementById('loginBtn').addEventListener('click', function() {
    document.body.classList.remove('blur');
    document.getElementById('registerSection').style.display = 'none';
  });

  document.addEventListener('click', function(event) {
    if (event.target !== document.getElementById('registerSection') && !document.getElementById('registerSection').contains(event.target) && event.target.id !== 'registerBtn') {
      document.body.classList.remove('blur');
      document.getElementById('registerSection').style.display = 'none';
    }
  });

  document.getElementById('registerSection').addEventListener('click', function(event) {
    event.stopPropagation();
  });


  
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('register') === 'true') {
    
    document.body.classList.add('blur');
    document.getElementById('registerSection').style.display = 'block';
}