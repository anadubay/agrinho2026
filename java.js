```javascript
function mostrarDica() {
  const dicas = [
    "💧 Economize água na irrigação.",
    "☀️ Use energia solar na fazenda.",
    "🌾 Faça rotação de culturas.",
    "♻️ Evite desperdício de alimentos.",
    "🌱 Use adubos naturais."
  ];

  const indice = Math.floor(Math.random() * dicas.length);

  document.getElementById("dica").textContent = dicas[indice];
}
```
