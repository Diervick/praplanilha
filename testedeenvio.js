<form method="post" id="teste"
  action="https://sheetdb.io/api/v1/my8nga5lm5r3t">
    Nome: <input name="data[Nome]">
    CPF: <input name="data[CPF]">
    OS: <input name="data[OS]">
    <button type="submit">Enviar</button>
</form>

<script>
  var form = document.getElementById('teste');
  form.addEventListener("submit", e => {
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
</script>
