var btn = document.querySelector('.btn');
var ul = document.querySelector('ul');
var avatar = document.querySelector('.foto');
var nomeUser = document.querySelector('#nome');
var loginUser = document.querySelector('#login');
var users = [];




//função click do botão
function buscaPerfil(event) {
  event.preventDefault();

  var input = document.querySelector('input').value;

  //linha provisória para testes
  input = "Franchesco-Araujo"
  //armazenando ids em um array
  console.log(users.push(input));

  console.log(users);
  axios.get(`https://api.github.com/users/${input}`)

    .then((resultado) => {
      console.log(resultado, 'dentro');
      return perfil =
        [
          nomeUser.innerHTML = resultado.data.name,
          loginUser.innerHTML = resultado.data.login,
          avatar.innerHTML = resultado.data.id

        ]


    }).catch((erro) => {
      console.log(erro);
      console.log('erro');
    });
}




btn.onclick = buscaPerfil;