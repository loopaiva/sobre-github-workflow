import re

def validar_email(email):
    padrao = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(padrao, email)

def validar_cpf(cpf):
    padrao = r'^\d{3}\.\d{3}\.\d{3}-\d{2}$'
    return re.match(padrao, cpf)

def validar_telefone(telefone):
    padrao = r'^\(\d{2}\)\s\d{4,5}-\d{4}$'
    return re.match(padrao, telefone)


email_valido = validar_email('exemplo@email.com')
cpf_valido = validar_cpf('123.456.789-10')
telefone_valido = validar_telefone('(99) 99999-9999')

if email_valido:
    print('Email válido!')
else:
    print('Email inválido!')

if cpf_valido:
    print('CPF válido!')
else:
    print('CPF inválido!')

if telefone_valido:
    print('Número de telefone válido!')
else:
    print('Número de telefone inválido!')