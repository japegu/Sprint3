        let registros = [];
        var nuevoSujeto= {}


//Arreglo con datos del formulario. IJPA

        function agregarRegistro(){
            var tipoDocumento = document.getElementById("tipo-documento");
            var numeroDocumento = document.getElementById("numero-documento");
            var correo= document.getElementById("correo");
            var contrasena = document.getElementById("contrasena");
            
            var nuevoSujeto={
                tipoDocumento: tipoDocumento.value,
                numeroDocumento: numeroDocumento.value,
                correo: correo.value,
                contrasena: contrasena.value
             };

            registros.push(nuevoSujeto);
            console.log(registros);
            
        }

// ordenar registros empezando por aquellos que tengan el numero pasaporte. IJPA

        function ordenarArreglo(arreglo){
            let pas = arreglo.sort((a, b) => 
                a.documentType !== 'P' ? 0 : a.num_document > b.num_document ? 1 : a.num_document < b.num_document ? -1 : 0);
                console.log(pas);
                return pas;
    }
    
// Modulos de exportación para todos los arreglos.    IJPA
    
                module.exports.registros = registros;
            module.exports.filtrarCorreo = filtrarCorreo;
            module.exports.obtenerRegPasaporte = obtenerRegPasaporte;
            module.exports.ordenarArreglo = ordenarArreglo;
            module.exports.agregarRegistro = agregarRegistro;
