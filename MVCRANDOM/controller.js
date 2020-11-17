// Controlador (Controller) de um usuário
//
// Sua função é ser o ponto de entrada da plataforma e mediar as models e as views.
class UserController
{
        // Também não precisamos de propriedades nessa controller
        constructor() { console.log("Controller: Fui criada!"); }

        // Função chamada quando queremos adicionar um usuário
        adicionaUsuario()
    {
        console.log( "Controller: Vou adicionar um usuário..." );

        // Criamos uma model e buscamos dados
        let user = new UserModel();
        user.buscaUsuario();

        // Passamos os dados para a view
        let view = new UserView();
        view.render( user );
    }
}
    
let controller = new UserController();
    
document.getElementById( "btn" ).addEventListener( "click", controller.adicionaUsuario );

