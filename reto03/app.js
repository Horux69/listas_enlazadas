class Nodo {
    constructor(titulo, autor, genero, siguiente) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.siguiente = siguiente;
    }
}

class ListaEnlazada {
    constructor() {
        this.head = null;
    }

    agregarLibro(titulo, autor, genero) {
        const node = new Nodo(titulo, autor, genero, null);

        if (this.head === null) {
            this.head = node;
            return;
        }

        let actualNodo = this.head;
        while (actualNodo.siguiente !== null) {
            actualNodo = actualNodo.siguiente;
        }
        actualNodo.siguiente = node;
    }

    eliminarLibro(titulo) {
        if (this.head.titulo === titulo) {
            this.head = this.head.siguiente;
            return;
        }

        let actualNodo = this.head;

        while (actualNodo.siguiente) {
            if (actualNodo.siguiente.titulo === titulo) {
                actualNodo.siguiente = actualNodo.siguiente.siguiente;
                return;
            }
            actualNodo = actualNodo.siguiente;
        }
    }

    buscarLibro(titulo) {
        let actualNodo = this.head;
        while (actualNodo) {
            if (actualNodo.titulo === titulo) {
                console.log("Titulo del libro: " + actualNodo.titulo + "\nAutor: " + actualNodo.autor + "\nGenero: " + actualNodo.genero);
                return;
            }
            actualNodo = actualNodo.siguiente;
        }
        console.log("Libro no encontrado");
    }

    mostrarLibros() {
        let actualNodo = this.head;

        while (actualNodo) {
            console.log("Titulo del libro: " + actualNodo.titulo + "\nAutor: " + actualNodo.autor + "\nGenero: " + actualNodo.genero);
            actualNodo = actualNodo.siguiente;
        }
        console.log("__________________");
    }

    invertirLista() {
        let anteriorNodo = null;
        let actualNodo = this.head;

        while (actualNodo) {
            const siguiente = actualNodo.siguiente;
            actualNodo.siguiente = anteriorNodo;

            anteriorNodo = actualNodo;
            actualNodo = siguiente;
        }

        this.head = anteriorNodo; 
    }
}

const libros = new ListaEnlazada();

libros.agregarLibro("100 años de soledad", "Gabriel Garcia", "Novela");
libros.agregarLibro("Cronica de una muerte anunciada", "Gabriel Garcia", "Novela");
libros.mostrarLibros();

console.log("Libros invertidos:");
libros.invertirLista();
libros.mostrarLibros();
