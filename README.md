# praplanilha  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("teste")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
      alert('Foi Caraai')
    });
  });
projeto de uso do google planilhas como servidor
