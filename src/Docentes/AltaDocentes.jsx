import React from 'react';

const AltaDocentes = () => {



    return (            
        <div className="contenedor-tablas">

            <table className="mi-tabla">

                <caption> FORMULARIOS DE INTERES </caption>

                <tr>
                    <td> Declaracion Jurada de datos Personales </td>
                    <td><a href='./Descargas/Docentes/Declaracion jurada de datos personales.pdf' target="_blank" className="linksD" ><button>Click Aca</button></a></td>
                </tr>

                <tr>
                    <td> Actualizacion Domicilio  </td>
                    <td> <a href='./Descargas/Docentes/Actualizacion de Domicilio.pdf' target="_blank" className="linksD" ><button>Click Aca</button></a></td>
                </tr>

                <tr>
                    <td> CIRCULAR 19 </td>
                    <td><a href='./Descargas/Docentes/CIRCULAR 19.pdf' target="_blank" className="linksD" ><button>Click Aca</button></a></td>
                </tr>

                <tr>
                    <td> Certificado de Antecedentes Penales </td>
                    <td><a href='https://www.argentina.gob.ar/justicia/reincidencia/antecedentespenales' target="_blank" className="linksD" ><button>Click Aca</button></a></td>
                </tr>

                <tr>
                    <td> Descargá tu constancia de CUIL </td>
                    <td><a href='https://www.argentina.gob.ar/descarga-constancia-cuil' target="_blank" className="linksD" ><button>Click Aca</button></a></td>
                </tr>

                <tr>
                    <td> REGISTRO DE INFRACTORES AL DEBER DE VOTAR  </td>
                    <td><a href='https://infractores.padron.gob.ar' target="_blank" className="linksD" ><button>Click Aca</button></a></td>
                </tr>
                
 

            </table>
        </div> 
    );
}

export default AltaDocentes;
