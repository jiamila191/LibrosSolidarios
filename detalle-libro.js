window.onload = function() {
    mostrarDetallesLibro();
    mostrarDescripcion();
};

function mostrarDetallesLibro() {
    const urlParams = new URLSearchParams(window.location.search);
    const libroId = urlParams.get('id');

    const detallesLibro = obtenerDetallesLibro(libroId);

    const detallesLibroDiv = document.getElementById('detalles-libro');
    detallesLibroDiv.innerHTML = `
    <div class="row">
    <div class="col-md-4">
        <img src="${detallesLibro.imagen}" alt="${detallesLibro.titulo}">
    </div>
    <div class="col-md-8">
        <h2>${detallesLibro.titulo}</h2>
        <p id="precio"><strong>Precio:</strong> $${detallesLibro.precio}</p>
        <p id="autor"><strong>Autor:</strong> ${detallesLibro.autor}</p>
        <p id="descripcion" class="descripcion-corta"><strong>Descripción:</strong> ${detallesLibro.descripcion}</p>
        <button class="mostrar-mas" onclick="mostrarDescripcion()">Mostrar más</button>
        <p id="categoria"><strong>Categoría:</strong> ${detallesLibro.categoria}</p>
    </div>
</div>
`;
}

function mostrarDescripcion() {
    const descripcion = document.getElementById('descripcion');
    const boton = document.querySelector('.mostrar-mas');

    if (!descripcion.classList.contains('descripcion-corta')) {
        descripcion.classList.add('descripcion-corta');
        descripcion.style.maxHeight = '100px'; 
        boton.textContent = 'Mostrar más';
    }

    boton.addEventListener('click', function() {
        if (descripcion.classList.contains('descripcion-corta')) {
            descripcion.classList.remove('descripcion-corta');
            descripcion.style.maxHeight = null;
            boton.textContent = 'Mostrar menos';
        } else {
            descripcion.classList.add('descripcion-corta');
            descripcion.style.maxHeight = '100px'; 
            boton.textContent = 'Mostrar más';
        }
    });
}

function obtenerDetallesLibro(libroId) {
    const libros = [
        { id: '1', titulo: 'Alas de Hierro', categoria: 'Fantasía', autor: 'Rebecca Yarros', precio: 780, descripcion: 'El segundo volumen de la serie Empíreo tras Alas de sangre. El fenómeno juvenil de fantasía del que todo el mundo habla.<br> Todos esperaban que Violet Sorrengail muriera durante su primer año en el Colegio de Guerra Basgiath, incluso ella misma. Pero la Trilla fue tan solo la primera de una serie de pruebas imposibles destinadas a deshacerse de los indignos y los desafortunados. <br> Ahora comienza el verdadero entrenamiento, y Violet no sabe cómo logrará superarlo. No solo porque es brutal y agotador o porque está diseñado para llevar al límite el umbral del dolor de los jinetes, sino porque el nuevo vicecomandante está empeñado en demostrarle lo débil que es, a menos que traicione al hombre al que ama. La voluntad de sobrevivir no será suficiente este año, porque Violet conoce el secreto que se oculta entre los muros del colegio, y nada, ni siquiera el fuego de dragón, será suficiente para salvarlos.', imagen: 'imagenes/alasdehierro.jpg'},
        { id: '2', titulo: 'El Principito', categoria: 'Infantil', autor: 'Antoine de Saint-Exupéry', precio: 300, descripcion: 'Fábula mítica y relato filosófico que interroga acerca de la relación  del ser humano con su prójimo y con el mundo, El Principito concentra, con maravillosa simplicidad, la constante reflexión de Saint-Exupery sobre la amistad, el amor, la responsabilidad y el sentido de la vida.Edición oficial del clásico de la literatura universal, El Principito. Uno de los clásicos más queridos de todos los tiempos,  ilustrado con las acuarelas del autor que han cautivado la imaginación  de grandes y pequeños durante generaciones. <br><br> "Viví así, solo, sin nadie con quien hablar verdaderamente, hasta que  tuve una avería en el desierto del Sahara, hace seis años. Algo se había  roto en mi motor. Y como no tenía conmigo ni mecánico ni pasajeros, me  dispuse a realizar, solo, una reparación difícil.  Era, para mí, cuestión de vida o muerte. Tenía agua apenas para ocho días.La primera noche dormí sobre la arena a mil millas de todatierra  habitada. Estaba más aislado que un náufrago sobre una balsa en medio  del oceano. Imaginaos, pues, mi sorpresa cuando, al romper el día, me despertó una extraña vocecita que decía: <br><br>-Por favor..., ¡dibújame un cordero! <br><br>-¿Eh!?-Dibújame un cordero..."', imagen: 'imagenes/principito.png'},
        { id: '3', titulo: 'Don Quijote de la Mancha', categoria: 'Sátira', autor: 'Miguel de Cervantes', precio: 400, descripcion: 'Una de las novelas más importantes de todos los tiempos y para muchos la obra definitiva de la literatura española. Escrita por Miguel de Cervantes (1547-1616) y publicada entre 1605 y 1615, narra las aventuras del ingenioso hidalgo Don Quijote de la Mancha (llamado realmente Alonso Quijano), en su misión personal de enmendar entuertos en donde los hubiere, acompañado de su fiel escudero, y amigo Sancho Panza. Nacida del amor de su autor por la novela caballeresca, Don Quijote se convirtió en una oda a ese particular estilo y en una crítica mordaz y humorística de la sociedad y el mundo de la época.', imagen: 'imagenes/donquijote.jpg' }
    ];

    return libros.find(libro => libro.id === libroId);
}
