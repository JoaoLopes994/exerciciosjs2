 // Visualização (View) de um usuário
//
// Sua função é lidar com a disponibilização de dados para o usuário final.
    class UserView
    {
        // Construtor vazio: nossa view não tem atributos!
        constructor() { console.log("View: Fui criada!"); }

        // Método encarregado de pegar os dados da model de usuário
        // e mostrar na tela de alguma forma
        render( model )
        {
            

            // Criamos uma div
            let card = document.createElement( "div" );
            
            // Colocamos foto e nome
            card.innerHTML = `
                <img src=${ model.getImagem() }>
                <p>${ model.getNome() }</p>
            `
            // Adicionamos a div ao nosso documento
            document.body.appendChild( card );
        }
    }