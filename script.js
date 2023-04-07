var campo = document.getElementById('itarefa')
var botao = document.getElementById('botao')
var tarefas = document.getElementById('tarefas')

botao.addEventListener('click', function() {
    let paragrafo = document.createElement('p')
    paragrafo.classList.add('estilo-tarefa')
    paragrafo.innerHTML = campo.value
    tarefas.appendChild(paragrafo)
    paragrafo.addEventListener('click', function() {
        paragrafo.style.textDecoration = 'line-through'
    })
    paragrafo.addEventListener('dblclick', function() {
        tarefas.removeChild(paragrafo)
    })
})

