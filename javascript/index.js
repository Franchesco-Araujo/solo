var btn = document.querySelector('.btn');
var ul = document.querySelector('ul');

function buscaPerfil() {

  var input = document.querySelector('input').value;
  var li = document.createElement('li');
  console.log(input, '235');
  axios.get(`https://api.github.com/users/${input}`)

    .then((resultado) => {
      console.log(resultado, 'dentro');

    }).catch((erro) => {
      console.log(erro);
      console.log('erro');
    });
}

btn.onclick = buscaPerfil;