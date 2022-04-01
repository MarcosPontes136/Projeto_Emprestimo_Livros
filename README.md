#Enunciado

Você foi contratado para desenvolver um sistema de empréstimo de livro para uma biblioteca, esse sistema já tinha sido iniciado por outro desenvolvedor que já tinha feito Listar Clientes tanto no frontend quanto no backend, foi feito também um componente de mensagens, use ele para gerar mensagens de alerta, erro e sucesso!

Você deve desenvolver as seguintes funcionalidades respeitando as regras, fazer o CRUD (Cadastrar, Listar, Atualizar e Deletar) do Autor, o CRUD de Livros, o CRUD de cliente.

Deve também ser feita uma tela para que seja possível emprestar um livro, também deve ser possível listar todos os empréstimos, nessa tabela deve existir uma coluna chamada ações, que vai exibir um botão chamado “Devolver” este botão deve fazer a devolução sem sair da página e atualizar a listagem.

Funcionalidades:

CRUD de Autor

1. Campos Obrigatórios:
   1. Nome
   1. ISNI
   1. E-mail
   1. Data de Nascimento
   1. Biografia
1. Regras:
   1. É permitido o Cadastro de apenas um autor por código ISNI
   1. Validar se o e-mail tem pelo menos um ponto e apenas um @ ex: <autor@livro.abc>
   1. Permitir Apenas Data de nascimento passadas, não podendo conter a data atual nem futura.
   1. Não permitir mais que 200 caracteres na Biografia.
   1. Não permitir mais que 50 caracteres no Nome.

CRUD de Livros

1. Campos Obrigatórios:
   1. Nome
   1. Autor (um a partir dos autores cadastrados)
   1. Ano de Publicação
   1. Editora
   1. Código ISBN (validar em API externa)
   1. Quantidade de exemplares
1. Regras:
   1. É permitido o Cadastro de apenas um livro por código ISBN
   1. Apenas um autor por livro
   1. Não permitir mais que 50 caracteres no Nome
   1. Não permitir mais que 50 caracteres na Editora
   1. Permitir o Cadastro somente do ano Atual ou passado em Ano de Publicação
   1. Permitir apenas valores positivos em Quantidade de exemplares

CRUD de cliente

1. Campos Obrigatórios:
   1. Nome
   1. E-mail
   1. Telefone
1. Regras:
   1. É permitido o Cadastro de apenas um cliente por e-mail
   1. Validar se o e-mail tem pelo menos um ponto e apenas um @ ex: <autor@livro.abc>
   1. Não permitir mais que 50 caracteres no Nome
   1. Usar componente de formatação no campo Telefone com o padrão (XX) XXX – XXX – XXX

Cadastro de empréstimos

1. Campos Obrigatórios:
   1. Livro
   1. Cliente
   1. Data de início
1. Campos Opcionais:
   1. Data de Entrega

1. Regras:
   1. Permitir a busca do cliente por parte do nome ou e-mail completo
   1. Permitir a busca do livro por parte do nome do livro ou código ISBN completo
   1. É permitido o empréstimo de somente um exemplar do mesmo título
   1. O cliente pode fazer no máximo 3 empréstimos sem ter que devolver um antes
   1. Validar se um título já teve todos os seus exemplares emprestados antes de emprestar um
   1. Registrar a Data de entrega apenas quando o título for devolvido

Observação:

1. Usar qualquer API externa para validar o ISBN do livro cadastrado, API sugerida: <https://openlibrary.org/dev/docs/api/books>
   Exemplo de uso: <https://openlibrary.org/books/OL7353617M.json>
1. Use a data de início e data de entrega para determinar se um livro se encontra emprestado ou não. Use também essa informação aliada da quantidade de exemplares para saber se todos os livros estão emprestados.

Bônus

1. O cliente não solicitou, mas ficaria muito feliz que ao preencher o código ISBN já viesse preenchido o máximo de informações possível
1. O cliente gostava bastante do trabalho do último Dev, pois ele fazia 100% de teste de integração/unitário

Alguns Exemplos de livros e seus respectivos códigos, para mais livros e código pode ser usado o link abaixo ou qualquer outro de sua preferência.
https://openlibrary.org/search?q=Angular&mode=everything

| Nome | Open Library | ISBN 10 | ISBN 13 |
| --- | --- | --- | --- |
| Angular 4 | OL26414423M | 3864903572 | 9783864903571 |
| Angular Statistics | OL33776374M | - | 9781000739787 |
| Angular Momentum | OL29039186M | - | 9783527617838 |