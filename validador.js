function validarEmail(email) {
    // Expressão regular para validar email
    const padrao2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return padrao.test(email);
  }
  
  function validarCPF(cpf) {
    // Expressão regular para validar CPF
    const padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return padrao.test(cpf);
  }
  
  function validarTelefone(telefone) {
    // Expressão regular para validar número de telefone
    const padrao = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return padrao.test(telefone);
  }
  
  // Testando os validadores
  const emailValido = validarEmail('exemplo@email.com');
  const cpfValido = validarCPF('123.456.789-10');
  const telefoneValido = validarTelefone('(99) 99999-9999');
  
  if (emailValido) {
    console.log('Email válido!');
  } else {
    console.log('Email inválido1')
  }
  
  //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  


