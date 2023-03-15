const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

const deixarMaisculo = (obj) => {
  const newObjeto = {};
  // newObjeto.nome = "Anderson";
  // newObjeto["profissão"] = "Dev";
  // console.log(newObjeto);

  for (let prop in obj) {
    newObjeto[prop] = obj[prop].toUpperCase();
  }
  return newObjeto;
};

console.log(deixarMaisculo(objeto));

const retornaTexto = (obj) => {
  console.log(obj);

  return `O nome é ${obj.nome}, a profissão é ${obj.profissao}, o username é ${obj.username} e a senha é ${obj.senha}.`;
};

console.log(retornaTexto(objeto));

const funcaoTres = (obj, callback) => {
  const valor = callback(obj);
  console.log(valor);
};

funcaoTres(objeto, deixarMaisculo);
funcaoTres(objeto, retornaTexto);
