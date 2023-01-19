// function submitData(name, email) {
//     const data = { name, email };
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify(data)
//     };
  
//     fetch('http://localhost:3000/users', options)
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error('Error:', error));
//   }

  //

  function submitData(name, email) {
    const data = { name, email };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    };
  
    fetch('http://localhost:3000/users', options)
      .then(response => response.json())
      .then(data => {
        const newId = data._id;
        const idContainer = document.getElementById("newId");
        idContainer.innerText = newId;
      })
      .catch(error => {
        const errorContainer = document.getElementById("error");
        errorContainer.innerText = error.message;
      });
  }
  
  
  
  
  
  
  
  
  
  
