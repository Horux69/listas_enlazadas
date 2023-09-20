class Nodo {
    constructor(nombre, telefono, correo, siguiente){
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.siguiente = siguiente;
    }
}

class ListaEnlazada {
    constructor(){
        this.head = null;
    }

    agregarContacto(nombre, telefono, correo){
        const node = new Nodo(nombre, telefono, correo, null)

        if(this.head === null){
            this.head = node;
            return
        }

        let actualNodo = this.head;
        while(actualNodo.siguiente !== null){
            actualNodo = actualNodo.siguiente;
        }
        actualNodo.siguiente = node;
    }

    eliminarContacto(nombre){
        if (this.head.nombre == nombre){
            this.head = this.head.siguiente;
            return
        }

        let actualNodo = this.head;

        while(actualNodo.siguiente){
            if (actualNodo.siguiente.nombre == nombre){
                actualNodo.siguiente = actualNodo.siguiente.siguiente;
                return
            }
        }
    }

    mostrarContactos(){
        let actualNodo = this.head;

        while(actualNodo){
            console.log("Nombre del contacto: "+actualNodo.nombre+"\nTelefono: "+actualNodo.telefono+"\nCorreo: "+actualNodo.correo);
            actualNodo = actualNodo.siguiente;
        }
        console.log("__________________");
    }

    buscarContacto(nombre){
        if (this.head.nombre === nombre){
            console.log("Contacto: "+this.head.nombre+"\nTelefono: "+this.head.telefono+"\nCorreo: "+this.head.correo);
            return
        }
        let actualNodo = this.head;
        while(actualNodo.siguiente){
            if (actualNodo.siguiente.nombre == nombre){
                console.log("Contacto: "+this.head.nombre+"\nTelefono: "+this.head.telefono+"\nCorreo: "+this.head.correo);
                return
            }
        }
    }

    editarContacto(nombreBuscado, nuevoNombre, nuevoTelefono, nuevoCorreo){
        let actualNodo = this.head; 

        while(actualNodo !== null){
            if(actualNodo.nombre === nombreBuscado) {
                actualNodo.nombre = nuevoNombre;
                actualNodo.telefono = nuevoTelefono;
                actualNodo.correo = nuevoCorreo;
                return
            }
            actualNodo = actualNodo.siguiente;
        }
        return "El contacto no se encontro"
    }

    eliminarPosicion(){
        
    }
}