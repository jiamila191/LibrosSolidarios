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
    const libros =[
        { id: '1', titulo: 'Alas de Hierro', categoria: 'Fantasía', autor: 'Rebecca Yarros', precio: 780, descripcion: 'El segundo volumen de la serie Empíreo tras Alas de sangre. El fenómeno juvenil de fantasía del que todo el mundo habla.<br> Todos esperaban que Violet Sorrengail muriera durante su primer año en el Colegio de Guerra Basgiath, incluso ella misma. Pero la Trilla fue tan solo la primera de una serie de pruebas imposibles destinadas a deshacerse de los indignos y los desafortunados. <br> Ahora comienza el verdadero entrenamiento, y Violet no sabe cómo logrará superarlo. No solo porque es brutal y agotador o porque está diseñado para llevar al límite el umbral del dolor de los jinetes, sino porque el nuevo vicecomandante está empeñado en demostrarle lo débil que es, a menos que traicione al hombre al que ama. La voluntad de sobrevivir no será suficiente este año, porque Violet conoce el secreto que se oculta entre los muros del colegio, y nada, ni siquiera el fuego de dragón, será suficiente para salvarlos.', imagen: 'imagenes/alasdehierro.jpg'},
        { id: '2', titulo: 'El Principito', categoria: 'Infantil', autor: 'Antoine de Saint-Exupéry', precio: 300, descripcion: 'Fábula mítica y relato filosófico que interroga acerca de la relación  del ser humano con su prójimo y con el mundo, El Principito concentra, con maravillosa simplicidad, la constante reflexión de Saint-Exupery sobre la amistad, el amor, la responsabilidad y el sentido de la vida.Edición oficial del clásico de la literatura universal, El Principito. Uno de los clásicos más queridos de todos los tiempos,  ilustrado con las acuarelas del autor que han cautivado la imaginación  de grandes y pequeños durante generaciones. <br><br> "Viví así, solo, sin nadie con quien hablar verdaderamente, hasta que  tuve una avería en el desierto del Sahara, hace seis años. Algo se había  roto en mi motor. Y como no tenía conmigo ni mecánico ni pasajeros, me  dispuse a realizar, solo, una reparación difícil.  Era, para mí, cuestión de vida o muerte. Tenía agua apenas para ocho días.La primera noche dormí sobre la arena a mil millas de todatierra  habitada. Estaba más aislado que un náufrago sobre una balsa en medio  del oceano. Imaginaos, pues, mi sorpresa cuando, al romper el día, me despertó una extraña vocecita que decía: <br><br>-Por favor..., ¡dibújame un cordero! <br><br>-¿Eh!?-Dibújame un cordero..."', imagen: 'imagenes/principito.png'},
        { id: '3', titulo: 'Don Quijote de la Mancha', categoria: 'Sátira', autor: 'Miguel de Cervantes', precio: 400, descripcion: 'Una de las novelas más importantes de todos los tiempos y para muchos la obra definitiva de la literatura española. Escrita por Miguel de Cervantes (1547-1616) y publicada entre 1605 y 1615, narra las aventuras del ingenioso hidalgo Don Quijote de la Mancha (llamado realmente Alonso Quijano), en su misión personal de enmendar entuertos en donde los hubiere, acompañado de su fiel escudero, y amigo Sancho Panza. Nacida del amor de su autor por la novela caballeresca, Don Quijote se convirtió en una oda a ese particular estilo y en una crítica mordaz y humorística de la sociedad y el mundo de la época.', imagen: 'imagenes/donquijote.jpg' },
        { id: '4', titulo: 'Cien años de soledad', categoria: 'Realismo mágico', autor: 'Gabriel García Márquez', precio: 550, descripcion: 'Una obra maestra de la literatura latinoamericana que narra la historia de la familia Buendía en el pueblo ficticio de Macondo, explorando temas como el amor, la soledad y el paso del tiempo.', imagen: 'imagenes/cienaños.jpg' },
        { id: '5', titulo: 'El Hobbit', categoria: 'Fantasía épica', autor: 'J.R.R. Tolkien', precio: 680, descripcion: 'El preludio a la famosa trilogía de El Señor de los Anillos, sigue las aventuras de Bilbo Bolsón mientras se une a un grupo de enanos en una búsqueda para recuperar un tesoro protegido por el dragón Smaug.', imagen: 'imagenes/hobbit.jpg' },
        { id: '6', titulo: 'Crónica de una muerte anunciada', categoria: 'Realismo mágico', autor: 'Gabriel García Márquez', precio: 420, descripcion: 'La historia de un asesinato anunciado en un pequeño pueblo colombiano, contada desde múltiples perspectivas mientras se revelan los secretos y las motivaciones de los personajes.', imagen: 'imagenes/muerte.jpg' },
        { id: '7', titulo: 'Harry Potter y la piedra filosofal', categoria: 'Fantasía', autor: 'J.K. Rowling', precio: 620, descripcion: 'El primer libro de la serie de Harry Potter, que sigue al joven mago mientras descubre su verdadera identidad y se enfrenta a desafíos mágicos en la escuela de Hogwarts.', imagen: 'imagenes/harrypotter.jpg' },
        { id: '8', titulo: '1984', categoria: 'Ciencia ficción', autor: 'George Orwell', precio: 480, descripcion: 'Una novela distópica que presenta un mundo totalitario donde el gobierno controla todos los aspectos de la vida de las personas, explorando temas de vigilancia, manipulación y resistencia.', imagen: 'imagenes/1984.jpg' },
        { id: '9', titulo: 'El alquimista', categoria: 'Ficción espiritual', autor: 'Paulo Coelho', precio: 360, descripcion: 'La historia de Santiago, un joven pastor que emprende un viaje en busca de un tesoro oculto, aprendiendo lecciones de vida y descubriendo su propio destino en el camino.', imagen: 'imagenes/alquimista.jpg' },
        { id: '10', titulo: 'Orgullo y prejuicio', categoria: 'Novela romántica', autor: 'Jane Austen', precio: 410, descripcion: 'Una historia clásica de amor y desafíos sociales en la Inglaterra del siglo XIX, que sigue los encuentros y desencuentros entre Elizabeth Bennet y el arrogante Sr. Darcy.', imagen: 'imagenes/orgullo.jpg' },
        { id: '11', titulo: 'La sombra del viento', categoria: 'Misterio', autor: 'Carlos Ruiz Zafón', precio: 550, descripcion: 'En la Barcelona de la posguerra, un joven descubre un libro misterioso que lo lleva a desentrañar secretos oscuros y conexiones sorprendentes en la vida de su autor.', imagen: 'imagenes/sombra.jpg' },
        { id: '12', titulo: 'Los juegos del hambre', categoria: 'Ciencia ficción', autor: 'Suzanne Collins', precio: 690, descripcion: 'En un futuro distópico, jóvenes son seleccionados para luchar a muerte en un reality show televisado, desafiando al sistema opresivo y enfrentándose a dilemas éticos y personales.', imagen: 'imagenes/juegosdelhambre.png' },
        { id: '13', titulo: 'El código Da Vinci', categoria: 'Misterio', autor: 'Dan Brown', precio: 520, descripcion: 'Una intrincada trama de misterio y conspiraciones que sigue al experto en simbología Robert Langdon mientras investiga un asesinato en el Louvre y descubre secretos antiguos.', imagen: 'imagenes/codigo.jpg' },
        { id: '14', titulo: 'Moby Dick', categoria: 'Aventura', autor: 'Herman Melville', precio: 450, descripcion: 'La obsesiva búsqueda del capitán Ahab por vengarse de la ballena blanca Moby Dick, una epopeya marítima que explora temas de destino, obsesión y el poder de la naturaleza.', imagen: 'imagenes/moby.jpg'},
        { id: '15', titulo: 'El señor de los anillos', categoria: 'Fantasía épica', autor: 'J.R.R. Tolkien', precio: 850, descripcion: 'La trilogía épica que sigue la misión de Frodo Bolsón para destruir un poderoso anillo, enfrentándose a criaturas y desafíos en un viaje que determinará el destino de la Tierra Media.', imagen: 'imagenes/anillos.jpg' },
        { id: '16', titulo: 'Anna Karenina', categoria: 'Novela clásica', autor: 'León Tolstói', precio: 530, descripcion: 'Una obra maestra de la literatura rusa que explora las complejidades de las relaciones humanas, el amor prohibido y las consecuencias de las decisiones personales.', imagen: 'imagenes/ana.jpg' },
        { id: '17', titulo: 'El retrato de Dorian Gray', categoria: 'Ficción gótica', autor: 'Oscar Wilde', precio: 480, descripcion: 'La historia de un retrato mágico que envejece en lugar de su sujeto humano, explorando la vanidad, la moralidad y los límites del deseo.', imagen: 'imagenes/dorian.jpg' },
        { id: '18', titulo: 'La Odisea', categoria: 'Epopeya', autor: 'Homero', precio: 400, descripcion: 'El relato clásico de Odiseo (Ulises) en su viaje de regreso a casa después de la guerra de Troya, enfrentándose a dioses, monstruos y pruebas en su travesía.', imagen: 'imagenes/odisea.jpg' },
        { id: '19', titulo: 'Crimen y castigo', categoria: 'Novela psicológica', autor: 'Fiodor Dostoievski', precio: 590, descripcion: 'La historia de Rodion Raskólnikov, un estudiante que comete un crimen y enfrenta las consecuencias psicológicas y morales de sus acciones.', imagen: 'imagenes/crimen.jpg' },
        { id: '20', titulo: 'El perfume', categoria: 'Novela histórica', autor: 'Patrick Süskind', precio: 420, descripcion: 'La vida de Jean-Baptiste Grenouille, un asesino obsesionado por el sentido del olfato, en el París del siglo XVIII, explorando la búsqueda de la perfección y el poder de los sentidos.', imagen: 'imagenes/perfume.jpg' },
        { id: '21', titulo: 'La casa de los espíritus', categoria: 'Realismo mágico', autor: 'Isabel Allende', precio: 570, descripcion: 'La saga familiar de los Trueba, ambientada en un país latinoamericano no identificado, que abarca generaciones y eventos políticos, entrelazando lo sobrenatural con lo cotidiano.', imagen: 'imagenes/casadespiritus.jpg' },
    ];
    return libros.find(libro => libro.id === libroId);
}
