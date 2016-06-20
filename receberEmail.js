var inbox = require("inbox");

var client = inbox.createConnection(false, "imap.gmail.com", {
    secureConnection: true,
    debug: true,
    auth:{
        user: "usuario@gmail.com",
        pass: "senha"
    }
});

// criando conexao
client.connect();

//
client.on("connect", function(){
    client.openMailbox("INBOX", function(error, info){
        if(error) throw error;
        var ex;
        client.listMessages(-10, function(err, messages){
            messages.forEach(function(message){
                console.log(message.UID + ": " + message.title);
            });
        });

    });

    // escutando novas mensagens
    client.on("new", function(message){
      console.log("Nova mensagem recebida " + message.title);
    });
});
