 // Modelo (Model) de dados de um usuário
    //
    // Sua função é lidar com a busca, armazenamento e processamento de dados.
    class UserModel
    {
        // Definimos as propriedades do nosso objeto
        constructor() { console.log("Model: Fui criada!");

            this._nome = "";
            this._imagem = "";
        }

        // Buscamos um usuário na API
        buscaUsuario()
        {
            console.log("Model: Buscando um usuário...");

            // Criamos uma request
            let request = new XMLHttpRequest();
            
            // Dizemos o que fazer quando uma response chegar
            request.addEventListener( "load", () =>
            {
                // Se o status da response é 200 OK...
                if ( request.status == 200 )
                {
                    // Processamos os dados da response
                    let dados = this._processaResponse( request.responseText );
                    // e atualizamos as propriedades dessa model
                    this._atualiza( dados );
                }
            })

            // Configuramos a request para buscar de forma
            // síncrona os dados da API
            request.open( "GET", "https://randomuser.me/api", false );

            // Mandamos a request
            request.send();
        }

        // Como a response vem como uma string, nós precisamos
        // processar esses dados para que possamos trabalhar
        // com eles
        _processaResponse( responseString )
        {
            console.log("Model: Processando response...");

            let response = JSON.parse( responseString );
            return response.results[0];
        }

        // Atualizamos os dados da nossa model de acordo com os
        // dados da response da API
        _atualiza( dados )
        {
            console.log( "Model: Atualizando os meus dados" );

            this._nome = dados.name.first + " " + dados.name.last;
            this._imagem = dados.picture.large;
        }

        // Método para devolver o nome do usuário
        getNome()
        {
            return this._nome;
        }

        // Método para devolver a imagem do usuário
        getImagem()
        {
            return this._imagem;
        }
    }