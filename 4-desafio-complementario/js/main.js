//Aplicacion Web: "Armonía familiar" - Lista de tareas: 

//Variables: 
let ingresoALaAplicacion;
let arrayTareas = [];
let arrayCompras = [];

const form = document.getElementById('formTarea');
let container = document.getElementById('tareas');
let divContainer = document.getElementById('divDeTareas');

const renderTareas = () => {
    //-----------DOM--------
    divContainer.innerHTML = '';
    arrayTareas = obtenerTareasLocalStorage();
    arrayTareas.forEach( tarea => {
        let divTarea = document.createElement('div');
        let { nombre, descripcion } = tarea;
        divTarea.classList.add('elementoLista');
        divTarea.innerHTML = `
        <p>Nombre de la tarea: ${nombre}.</p>
        <p>Descripcion  de la tarea: ${descripcion}.</p>
        <button class="btn btn-danger" name="delete" value="${nombre}">Borrar</button>
        `
        divContainer.appendChild(divTarea);
        container.appendChild(divContainer);
    });
     //-------------fin del DOM-------
}
//--------almacenar las listas en el local storage---------
const guardarTareasLocalStorage = (arrayTareas) => {
    localStorage.setItem('arrayTareas', JSON.stringify(arrayTareas));
};
//-----fin de almacenamiento en el localstorage---

///----obtener los datos en el local storage----
const obtenerTareasLocalStorage = () => {
    const tareaStorage = JSON.parse(localStorage.getItem('arrayTareas'));
    return tareaStorage || [];
};
//--------fin de la funcion obtener datos storage-----

//-------Obtener valores del formulario y mostrarlo----------

form.addEventListener('submit', valorFormulario);

function valorFormulario(e) {
    e.preventDefault();

    const formulario = new FormData(form);
    const nombre = formulario.get('nombreTarea');
    const descripcion = formulario.get('descripcion');
    
    arrayTareas.push(new Tarea(nombre, descripcion));
    guardarTareasLocalStorage(arrayTareas);
    renderTareas();
    //-------borra el texto que quedo en el formulario----
    form.reset();
    btnGuardarTarea.disabled = true;
}

renderTareas();

///--------agrego un evento click------
divContainer.addEventListener('click', (e) => {
    eliminarTarea(e.target.value);
});

//-----eliminar una tarea----------

const eliminarTarea = (nombre) => {
    arrayTareas.forEach((tarea, index) => {
        if(tarea.nombre === nombre){
            arrayTareas.splice(index, 1);
        }
        guardarTareasLocalStorage(arrayTareas);
    });
    renderTareas();
}

//-------validar form tareas-----------

const btnGuardarTarea = document.getElementById('btnGuardarTarea');
const inputNombreTarea = document.getElementById('tareaNombre');
const inputDescripcion = document.getElementById('descripcionTarea');

btnGuardarTarea.disabled = true;

const validarFormTarea = () => {
    const x = inputNombreTarea.value === '' ? true : false;
    const y = inputDescripcion.value === '' ? true : false;
    btnGuardarTarea.disabled = x || y;
}

///////------------se agrega un evento al form Tarea (validar form)-------------
form.addEventListener('keyup', validarFormTarea);

///-------fin de validacion del formulario-------------

///-----------------COMPRAS------------------

const renderCompras = () => {
    //-----------DOM-------
    divContainerCompra.innerHTML = '';
    arrayCompras = obtenerComprasLocalStorage();
    arrayCompras.forEach( compra => {
        let divCompra = document.createElement('div');
        let { producto, tipo } = compra;
        divCompra.classList.add('elementoLista');
        divCompra.innerHTML = `
        <p>Producto: ${producto}</p>
        <p>Tipo de producto: ${tipo}</p>
        <button class="btn btn-danger" name="delete" value="${producto}">Borrar</button>
        `
        divContainerCompra.appendChild(divCompra);
        containerCompra.appendChild(divContainerCompra);
    });
    //---------fin DOM ------
}

//--------almacenar las listas en el local storage---------
const guardarComprasLocalStorage = (arrayCompras) => {
    localStorage.setItem('arrayCompras', JSON.stringify(arrayCompras));
};
//----fin  de almacenamiento-------

///----obtener los datos en el local storage----
const obtenerComprasLocalStorage = () => {
    const compraStorage = JSON.parse(localStorage.getItem('arrayCompras'));
    return compraStorage || [];
};
//--------fin de la funcion obtener datos storage-----

///-----obtener el valor del formulario y mostrarlo------
const formCompra = document.getElementById('formCompra');
let containerCompra = document.getElementById('compras');
let divContainerCompra = document.getElementById('divDeCompras');

const valorFormularioCompra = (e) => {
    e.preventDefault();

    const formulario = new FormData(formCompra);
    const nombreProducto = formulario.get('nombreProducto');
    const tipoProducto = formulario.get('tipoProducto');

    arrayCompras.push(new Compras(nombreProducto, tipoProducto));
    guardarComprasLocalStorage(arrayCompras);
    renderCompras();
    //-------borra el texto que quedo en el formulario----
    formCompra.reset();
    btnGuardarCompra.disabled = true;
}

//------se agrega un evento al form----
formCompra.addEventListener('submit', valorFormularioCompra);
renderCompras();

///--------agrego un evento click------

divContainerCompra.addEventListener('click', (e) => {
    eliminarCompra(e.target.value);
});

//-----eliminar una Compra----------
const eliminarCompra = (producto) => {
    arrayCompras.forEach((compra, index) => {
        if(compra.producto === producto){
            arrayCompras.splice(index, 1);
        }
        guardarComprasLocalStorage(arrayCompras);
    });
    renderCompras();
};

//-------Validar form compra---------
const btnGuardarCompra = document.getElementById('btnGuardarCompra');
const inputNombreCompra = document.getElementById('inputNombreCompra');
const inputTipoProducto = document.getElementById('inputTipoProducto');

btnGuardarCompra.disabled = true;

const validarFormCompra = () => {
    
    const x = inputNombreCompra.value === '' ? true : false;
    const y = inputTipoProducto.value === '' ? true : false;
    btnGuardarCompra.disabled = x || y;
};

//-------------se agrega un evento al al form (validar formulario)---------
formCompra.addEventListener('keyup', validarFormCompra);