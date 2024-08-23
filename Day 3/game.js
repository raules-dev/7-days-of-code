let technologies = [];

function escogerArea(area) {
    document.getElementById('Q1').classList.add('hidden');
    document.getElementById('Q2').classList.remove('hidden');

    if (area === 'Front-End') {
        document.getElementById('preguntaEspecializacion').innerText = '¿Qué te gustaría aprender: React o Vue?';
        document.getElementById('op1').innerText = 'React';
        document.getElementById('op2').innerText = 'Vue';
    } else {
        document.getElementById('preguntaEspecializacion').innerText = '¿Qué te gustaría aprender: C# o Java?';
        document.getElementById('op1').innerText = 'C#';
        document.getElementById('op2').innerText = 'Java';
    }

    document.getElementById('op1').onclick = function() { escogerEspecializacion(document.getElementById('op1').innerText); };
    document.getElementById('op2').onclick = function() { escogerEspecializacion(document.getElementById('op2').innerText); };
}

function escogerEspecializacion(especializacion) {
    alert(`Elegiste aprender ${especializacion}.`);
    document.getElementById('Q2').classList.add('hidden');
    document.getElementById('Q3').classList.remove('hidden');
}

function escogerCamino(camino) {
    alert(`Decidiste ${camino}.`);
    document.getElementById('Q3').classList.add('hidden');
    document.getElementById('Q4').classList.remove('hidden');
}

function preguntarOtraTecnologia(respuesta) {
    if (respuesta === 'si') {
        document.getElementById('techInputContainer').classList.remove('hidden');
    } else {
        document.getElementById('Q4').classList.add('hidden');
        document.getElementById('mensajeFinal').classList.remove('hidden');
        
        const finalText = document.getElementById('textoFinal');
        if (technologies.length > 0) {
            finalText.innerText = `¡Qué interesante, quieres aprender ${technologies.join(', ')}!`;
        } else {
            finalText.innerText = '¡Qué lástima 😢!';
        }
    }
}

function addTechnology() {
    const tech = document.getElementById('techInput').value.trim();
    if (tech) {
        technologies.push(tech);
        const li = document.createElement('li');
        li.innerText = tech;
        document.getElementById('listaTecnologias').appendChild(li);
        alert(`Te gustaría aprender más sobre ${tech}.`);
        document.getElementById('techInput').value = '';
    }
}