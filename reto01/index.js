class Nodo {
    constructor(titulo, completada = false, siguiente) {
      this.titulo = titulo;
      this.completada = completada;
      this.siguiente = siguiente;
    }
  }

class ListaEnlazada {
    constructor() {
      this.head = null;
    }

    agregarTarea(titulo, completada){
        const node = new Nodo(titulo, completada, null);

        if (this.head === null) {
            this.head = node;
            return;
        }

        let currentNode = this.head;
        while (currentNode.siguiente !== null){
            currentNode = currentNode.siguiente;
        }

        currentNode.siguiente = node;

    }

    tareaCompletada(titulo) {
        let currentNode = this.head;

        while(currentNode !== null){
            if (currentNode.titulo == titulo){
                currentNode.completada = true;
                return;
            }
            currentNode = currentNode.siguiente;
        }
        return "Nodo no encontrado"
    }

    eliminarTarea(titulo){

        if (this.head.titulo == titulo){
            this.head = this.head.siguiente;
            return;
        }

        let currentNode = this.head;

        while (currentNode.siguiente) {
            if (currentNode.siguiente.titulo == titulo){
                currentNode.siguiente = currentNode.siguiente.siguiente;
                return;
            }
        }
    }

    listarTareas() {
        let currentNode = this.head;

        while (currentNode){
            console.log("Titulo de la tareas: "+currentNode.titulo+"\nTarea completada: "+currentNode.completada);
            currentNode = currentNode.siguiente;
        }
        console.log("__________")
    }
}


const lista = new ListaEnlazada()

lista.agregarTarea("hacer aseo")
lista.agregarTarea("hacer trabajo")
lista.agregarTarea("hacer tareas")

lista.eliminarTarea("hacer trabajo")
lista.tareaCompletada("hacer aseo")
lista.listarTareas()












