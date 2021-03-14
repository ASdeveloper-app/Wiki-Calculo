import React from 'react'

export default function test() {
    return (
        <>
        <div className='max-w-3xl mx-auto'>
            <div id='funcion'>
                <h4 className='text-xl font-bold mb-4'>¿Qué es una función?</h4>
                <p>
                Para poder comprender bien que es una función, es importante revisar primero que es una correspondencia, ya que esta tiene un papel fundamental en las relaciones y funciones. <br/>
                La correspondencia es equivalente a relación, es decir utilizamos “en relación a” su equivalente es “corresponde a”. <br/><br/>
                <span className='font-semibold'>Ejemplo:</span> <br/>
                En una tienda comercial, cada artículo está relacionado a un precio, ósea; a cada artículo le corresponde un precio.
                </p>
            </div>

            <section id='funcionImg'>
                <h4 className='text-xl font-bold my-4' >Relación y Función</h4>
                <p>
                Relación es la correspondencia de un primer conjunto, llamado Dominio, con un conjunto, llamada Rango o Recorrido. <br/>
                Función es una relación a la cual se le agrega la condición de que cada valor del Dominio le corresponde un solo valor del rango o recorrido. <br/>
                Dicho de otro modo, una función es una relación o correspondencia entre dos magnitudes, de manera que a cada valor de la primera le corresponde un único valor de la segunda (o ninguno). A la función de le suele designar por f y a la imagen por f(x), siendo x la variable independiente. <br/>
                <br/> 
                <span className='font-semibold'>Variable independiente:</span> la que se fija previamente. <br/>
                <span className='font-semibold'>Variable dependiente:</span> la que se deduce de la variable independiente.  <br/><br/>
                </p>
                <div className='flex my-4 justify-center'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Injection.svg/220px-Injection.svg.png' alt='funciones'/>
                </div>
                <p>
                Las funciones son como máquinas a las que se les introduce un elemento x y devuelven otro valor y, que también se designa por f(x). <br/><br/>
                <span className='font-semibold'>Ejemplo:</span> <br/>
                La función f(x) = 3x^2+1 es la que a cada número le asigna el cuadrado del número multiplicado por 3 y luego sumado 1. <br/>
                Así: f(2) = 3*2^2+1 = 3*4 + 1 = 12 + 1 = 13 <br/>
                </p>
            </section>

            <section id='funcionImg'>
                <h4 className='text-xl font-bold my-4'>Dominio y rango de una relación</h4>
                <p>
                El dominio de una función f(x) es el conjunto de todos los valores para los cuales la función está definida.<br/>
                El rango de la función es el conjunto de todos los valores que f toma.<br/><br/>
                <span className='font-semibold'>Ejemplo:</span> <br/>
                El dominio de la función: f (x) = 1/ x<br/>
                Es todos los números reales excepto el cero (ya que en x = 0, la función no está definida: ¡la división entre cero no está permitida!). <br/>
                El rango también es todos los números reales excepto el cero. Puede ver que hay algún punto en la curva para cada valor de y excepto para y = 0.
                </p>
                <div className='flex my-4 justify-center'>
                    <img src='https://www.varsitytutors.com/assets/vt-hotmath-legacy/hotmath_help/topics/domains/hyperbola.gif' alt='dominios'/>
                </div>
            </section>

            <div id='funcion'>
                <h4 className='text-xl font-bold my-4'>¿Cuáles son sus propiedades generales?</h4>
                <p>
                <span className='font-semibold'>Continuidad: </span> Si una función y=f(x) pude representarse en todo su dominio mediante un trazo continuo decimos que dicha función es continua. Es decir, si puedes dibujar la gráfica de la función sin levantar el lápiz dicha función es continua. <br/>
                En cambio, cuando tenemos que levantar el lápiz para trazar la gráfica de la función, se dice que es discontinua. Puede ocurrir que una función sea discontinua en su dominio para determinados puntos. <br/>
                <br/>
                <span className='font-semibold'>Monotonía: </span> Crecimiento o decrecimiento de la función, se analizará si la función crece o decrece según aumenta el valor de X. <br/>
                Una pendiente positiva de la recta significa que la recta sube. Por lo tanto, es una función creciente en todo su dominio. <br/>
                Una recta con pendiente negativa significa que la recta baja. Por lo tanto, es una función decreciente. <br/>
                <br/>
                <span className='font-semibold'>Simetría:</span> Matemáticamente lo que tenemos es que f(x) = f(-x). Es decir, que a la abscisa x &gt; 0 le va a corresponder la misma ordenada (o y) que a la abscisa x &lt; 0. Podemos encontrar también la denominada simetría respecto al origen. <br/>
                En este caso tenemos que f(x) = -f(-x). Gráficamente se observa que es como si la función se reflejara en la recta que divide en dos partes iguales a los cuadrantes 2 y 4, es decir, dicha recta es ahora el eje de simetría. <br/>
                Matemáticamente lo que tenemos es que, por ejemplo, si para x=1 la ordenada es y=1, tendremos que para la abscisa opuesta (x=-1), la ordenada es la opuesta también (y = -1). <br/>
                <br/>
                <span className='font-semibold'>Periodicidad: </span> Existen funciones que son periódicas, es decir, que sus valores se repiten siempre cada intervalo determinado del eje x. Ese intervalo es el período de la función. <br/>
                Ceros de una función: Los ceros de una función son los puntos en los que la gráfica corta al eje x. Donde una función toma el valor cero (0), también llamado «raíz».<br/>
                </p>
            </div>

            <div id='funcion'>
                <h4 className='text-xl font-bold my-4'>Función par e impar.</h4>
                <p>
                Una función f(x) es par si para cualquier x del dominio se verifica: f(x) = f(−x). Observemos que las funciones pares son simétricas respecto del eje vertical. <br/>
                Una función f(x) es impar si para cualquier x del dominio se verifica: f(x) = −f(−x). Observemos que las funciones pares son simétricas respecto del origen. <br/>
                <br/>
                <span className='font-semibold'>Ejemplo:</span> <br/>
                </p>
            </div>

            <section id='videoYoutube'>
                <div className='flex my-2 justify-center'>
                    <iframe className='my-2' width='560' height='315' src='https://www.youtube.com/embed/xGqo6bn2LtI' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                </div>
                <div className='flex my-2 justify-center'>
                    <iframe className='my-2'width='560' height='315' src='https://www.youtube.com/embed/wgA92eNuFbo' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                </div>
            </section>

            <div className='overflow-hidden' id='Referencias'>
                <h4 className='text-xl font-bold mt-8'>Referencias:</h4>
                <ul>
                    <li>Hernan Naranjo. (2016). Funciones. Conceptos y Propiedades. 2019, de Blog Sitio web: <a className='text-blue-700 underline' href='http://hnaranjo.com/blog/matematica-vi-2016-unidad-3-funciones/'>http://hnaranjo.com/blog/matematica-vi-2016-unidad-3-funciones/</a></li>
                    <li>Isabel Garcia Lopez. (2005). Concepto de Función. 2017, de Ministerio de Educación, Cultura y Deporte Sitio web: <a className='text-blue-700 underline' href='http://recursostic.educacion.es/descartes/web/materiales_didacticos/funciones_estudio_golbal_eda05/concepto_funcion.htm#:~:text=Las%20funciones%20son%20como%20m%C3%A1quinas,3%20y%20luego%20sumado%201.'> http://recursostic.educacion.es/descartes/web/materiales_didacticos/funciones_estudio_golbal_eda05/concepto_funcion.htm#:~:text=Las%20funciones%20son%20como%20m%C3%A1quinas,3%20y%20luego%20sumado%201.</a></li>
                    <li>Hotmath, math homework. (2007). El Dominio de una función, los valores que toma. 2021, de Varsity Tutors Sitio web: <a className='text-blue-700 underline' href='https://www.varsitytutors.com/hotmath/hotmath_help/spanish/topics/domain-and-range#:~:text=El%20dominio%20de%20una%20funci%C3%B3n,los%20valores%20que%20f%20toma.'>https://www.varsitytutors.com/hotmath/hotmath_help/spanish/topics/domain-and-range#:~:text=El%20dominio%20de%20una%20funci%C3%B3n,los%20valores%20que%20f%20toma</a></li>
                </ul>
            </div>
        </div>

            <h4 className='text-xl font-bold my-4'></h4>
            <p></p>
            <p><span className='font-bold'></span></p>
            <div className='flex my-2 justify-center'>
            </div>
            <div className='flex my-4 justify-center'>
            </div>
            <span className='font-semibold'>Ejemplo:</span> <br/>


    </>
    )
}
