document.getElementById('form').addEventListener('submit', async function (e) {
  e.preventDefault()


  let firstName = document.getElementById('firstName').value
  let secondName = document.getElementById('secondName').value
  let thirdName = document.getElementById('thirdName').value
  let fourthName = document.getElementById('fourthName').value
  let fifthName = document.getElementById('fifthName').value
  let groupHistory = document.getElementById('groupHistory').value

  const data = {
      "names": [firstName, secondName, thirdName, fourthName, fifthName],
      "message": groupHistory
  }

  try {
      const resposta = await fetch('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact',
          {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
          }
      )

      if (resposta.ok) {
          const jsonResposta = await resposta.json()
          console.log('Successo!', jsonResposta);
          alert('Formulário enviado com sucesso!!!')
      } else {
          alert('Houve um problema ao enviar o formulário!!!');
      }

  }
  catch (error) {
      alert('Houve um problema ao enviar o formulário!!!');
  }
})