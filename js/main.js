document.getElementById('btn-enviar').addEventListener('click', () => {
    

    const saudacoes = document.getElementById('saudacoes').value;
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    // const genero = document.getElementById('genero').value;
    const data_nascimento = document.getElementById('data_nascimento').value;
    const email = document.getElementById('email').value;
    const obs = document.getElementById('obs').value;
    
    const dataToSend = {
        saudacoes: saudacoes,
        nome: nome,
        sobrenome: sobrenome,
        // genero: genero,
        data_nascimento: data_nascimento,
        email: email,
        obs: obs

    };
    
    alert(JSON.stringify(dataToSend));



});