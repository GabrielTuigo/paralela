function adicionarItem() {
  const input = document.getElementById('nova-compra');
  const lista = document.getElementById('lista-mercado');
  const textoTarefa = input.value.trim();

  if (textoTarefa !== "") {
    const novoItem = document.createElement('li');

    novoItem.textContent = textoTarefa;

    lista.appendChild(novoItem);

    input.value = "";
    input.focus();
  } else {
    alert("Por favor, digite uma tarefa!");
  }
}
