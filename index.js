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

  // function submitData(name, email) {
  //   const data = { name, email };
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify(data)
  //   };
  
  //   fetch('http://localhost:3000/users', options)
  //     .then(response => response.json())
  //     .then(data => {
  //       const newId = data._id;
  //       const idContainer = document.getElementById("newId");
  //       idContainer.innerText = newId;
  //     })
  //     .catch(error => {
  //       const errorContainer = document.getElementById("error");
  //       errorContainer.innerText = error.message;
  //     });
  // }





  function submitData(username, userEmail) {
    return fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: username, email: userEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        document.body.innerHTML = data["id"];
      })
      .catch((error) => {
        document.body.innerHTML = error.message;
      });
  };

//   fetch("http://localhost:3000/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     name: submitData.name,
//     email: submitData.email
//   })
// })
//   .then(response => response.json())
//   .then(data => {
//     const newId = data.id;
//     document.getElementById("output").innerHTML = newId;
//   });
  
  
  
  
  
  
  
  
  
  
  
