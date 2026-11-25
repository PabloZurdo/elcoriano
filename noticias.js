window.EP = {
 "meta": {
  "actualizado": "2026-11-25",
  "ventana_dias": 30,
  "nota": "Archivo de datos de El Coriano (Coria del Río). Lo actualiza la tarea diaria a partir del Radar informativo (parte de CORIA DEL RÍO y, si afecta a Coria, VARIOS MUNICIPIOS), redactando cada pieza con la skill redaccion-el-coriano. Cada noticia: id único, sec (coria|sucesos|politica|economia|cultura|hermandades|deportes|rio|opinion), kicker, iso AAAA-MM-DD, src, fuente_url, firma, elaboracion (ia|ia_revisada|redaccion; por defecto ia), title, sub, caption, foto (archivo en fotos/), fotocredito, peso (opcional, 2 | 3 | 4: columnas que ocupa la noticia si va de apertura; por defecto 2; solo lo cambia la dirección), rel (opcional: ids de relacionadas para la apertura), hora (opcional: hora de actualización, solo si consta), ultima_hora (opcional, solo con peso 4: {hora, texto} para el cintillo), encuadre (opcional: 'contain' si la foto es un cartel o lleva texto, para que se vea entera sin recortes; o una posición CSS como 'center 22%' para no cortar caras; si falta, 'center'), claves (2-4 frases), body (300 a 750 palabras en total; un párrafo que empieza por '## ' es un ladillo; uno que empieza por <span class='howto'> es el recuadro práctico; enlaces internos con <a href='#id'>), seo [slug, título <=60, descripción 140-155, 4-8 etiquetas]. Opinión: autor, autor_cargo y, si es de prueba, ficticia: true."
 },
 "agenda": [
  {
   "cuando": "25 nov, 10.00",
   "que": "Marcha del 25N contra la violencia de género",
   "donde": "De la Plaza Santa Ángela de la Cruz al Ayuntamiento",
   "noticia": "25n-campana-ayuntamiento-2026",
   "hasta": "2026-11-25"
  },
  {
   "cuando": "26 nov, 18.00",
   "que": "Pasacalles, presentación de la programación (19.00) y encendido del alumbrado de Navidad (19.30)",
   "donde": "Del Paseo Tierno Galván al Ayuntamiento",
   "noticia": "encendido-alumbrado-navidad-coria-2026",
   "hasta": "2026-11-26"
  },
  {
   "cuando": "28 nov, 20.00",
   "que": "Jura y toma de posesión de la nueva Junta de Gobierno del Gran Poder",
   "donde": "Misa de las 20.00 de la Hermandad del Gran Poder",
   "noticia": "gran-poder-toma-posesion-junta-san-jose-igualas",
   "hasta": "2026-11-28"
  },
  {
   "cuando": "29 nov",
   "que": "Elecciones generales",
   "donde": "Colegios electorales de Coria",
   "hasta": "2026-11-29"
  },
  {
   "cuando": "Hasta el 3 dic",
   "que": "Solicitudes para la bolsa de auxiliares de ayuda a domicilio (diez días hábiles)",
   "donde": "Registro del Ayuntamiento o sede electrónica",
   "noticia": "bolsa-auxiliar-ayuda-domicilio-coria-2026",
   "hasta": "2026-12-03"
  },
  {
   "cuando": "Hasta el 9 dic",
   "que": "Inscripción en los cursos de Inserta2 para personas desempleadas",
   "donde": "Ayuntamiento de Coria del Río",
   "noticia": "inserta2-inscripcion-cursos-desempleados-9-diciembre",
   "hasta": "2026-12-09"
  },
  {
   "cuando": "11 dic, 21.00",
   "que": "Igualá de la cuadrilla de la Piedad (Hermandad de San José)",
   "donde": "Casa hermandad de San José, calle Pepe Hillo, 8",
   "noticia": "gran-poder-toma-posesion-junta-san-jose-igualas",
   "hasta": "2026-12-11"
  },
  {
   "cuando": "Hasta el 20 dic",
   "que": "Reserva del boletín cuaresmal de San José",
   "donde": "secretario@sanjosecoria.org",
   "noticia": "san-jose-nuevo-capataz-piedad",
   "hasta": "2026-12-20"
  },
  {
   "cuando": "27 dic",
   "que": "San Silvestre Coriana (5 km)",
   "donde": "Kiosco de la Música y Paseo Fluvial",
   "noticia": "san-silvestre-coriana-2026",
   "hasta": "2026-12-27"
  },
  {
   "cuando": "8 ene, 21.00",
   "que": "Igualá de costaleros de Jesús Cautivo",
   "donde": "Casa hermandad del Cautivo",
   "noticia": "cautivo-iguala-ensayos-costaleros-2027",
   "hasta": "2027-01-08"
  },
  {
   "cuando": "25 ene, 21.00",
   "que": "Igualá de la cuadrilla de la Virgen del Dulce Nombre (Hermandad del Cautivo)",
   "donde": "Casa hermandad del Cautivo",
   "noticia": "cautivo-dulce-nombre-iguala-costaleros-2027",
   "hasta": "2027-01-25"
  }
 ],
 "noticias": [
  {
   "id": "paro-octubre-2026-coria-2385",
   "sec": "economia",
   "kicker": "Empleo",
   "iso": "2026-11-25",
   "hora": "07:53",
   "src": "SEPE",
   "fuente_url": "https://sede.sepe.gob.es/es/portaltrabaja/resources/sede/datos_abiertos/datos/Paro_por_municipios_2026_csv.csv",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El paro baja en Coria del Río a 2.385 personas en octubre, un 10,7 % menos que hace un año",
   "sub": "Es la cifra de octubre más baja desde 2007 y una caída mayor que la de Camas, San Juan de Aznalfarache y el conjunto de la provincia de Sevilla",
   "caption": "Gráfico con el paro registrado en Coria del Río en cada mes de octubre desde 2006, según el SEPE.",
   "foto": "paro-octubre-2026-coria-2385-gfx.jpg",
   "fotocredito": "Gráfico El Coriano",
   "encuadre": "contain",
   "claves": [
    "Coria del Río tenía 2.385 parados registrados a final de octubre de 2026, 285 menos que un año antes (un 10,7 % menos), según el SEPE.",
    "Respecto a septiembre, el paro subió en 13 personas, un 0,5 %.",
    "En diez años, desde octubre de 2016, el paro registrado en Coria ha bajado un 38,9 %.",
    "El descenso interanual de Coria supera al de Camas (7,5 %), San Juan de Aznalfarache (4,7 %) y la provincia de Sevilla (9,8 %)."
   ],
   "body": [
    "Coria del Río cerró octubre de 2026 con 2.385 personas inscritas como paradas en las oficinas de empleo, 285 menos que en octubre de 2025, lo que supone un descenso del 10,7 %, según los datos abiertos de paro registrado por municipios del Servicio Público de Empleo Estatal (SEPE).",
    "En comparación con septiembre, cuando había 2.372 parados, la cifra subió en 13 personas, un 0,5 %.",
    "Es el dato de octubre más bajo desde 2007, cuando el municipio tenía 1.565 parados. Hace diez años, en octubre de 2016, la cifra era de 3.906, de modo que el paro registrado en Coria ha bajado desde entonces en 1.521 personas, un 38,9 %. En enero de 2013 llegó a haber 5.028 parados.",
    "## Más descenso que en el entorno",
    "La bajada interanual de Coria es mayor que la de los municipios vecinos. Camas terminó octubre con 2.580 parados, un 7,5 % menos que hace un año, y San Juan de Aznalfarache con 2.147, un 4,7 % menos. En el conjunto de la provincia de Sevilla, la suma de los 106 municipios da 131.745 parados, un 9,8 % menos que en octubre de 2025.",
    "En el último mes, Camas sumó 11 parados (un 0,4 % más) y San Juan restó 15 (un 0,7 % menos), mientras que la provincia bajó un 0,3 %. A diez años, el descenso de Coria es similar al de Camas (38,2 %) y la provincia (40,3 %) y mayor que el de San Juan (31,4 %).",
    "## Quién está en paro en Coria",
    "Las mujeres son 1.458 de los 2.385 parados, el 61,1 %; los hombres, 927. En el último año el paro femenino ha bajado en 221 personas y el masculino en 64. Los mayores de 45 años suman 1.277 parados, el 53,5 % del total, 190 menos que hace un año. Los menores de 25 son 220, cuatro más que en octubre de 2025.",
    "Por sectores, los servicios concentran 1.657 parados, el 69,5 %. Les siguen la construcción, con 210; la industria, con 150, y la agricultura, con 144. Otras 224 personas buscan su primer empleo. Todos los sectores tienen menos parados que hace un año.",
    "El paro registrado cuenta a las personas inscritas como demandantes de empleo sin trabajo en los servicios públicos de empleo. No es la tasa de paro de la Encuesta de Población Activa (EPA), que se calcula por encuesta y no se publica por municipios. Esta información no incluye la afiliación a la Seguridad Social por municipio. Los ficheros abiertos del SEPE no traen los meses de mayo a diciembre de 2013 ni diciembre de 2020.",
    "<span class='howto'><b>De dónde salen los datos.</b> SEPE, datos abiertos de paro registrado por municipios, octubre de 2026, con la serie desde 2006. Los datos de noviembre por municipios se publicarán en diciembre. Hay plazas abiertas hasta el 9 de diciembre en los <a href='#inserta2-inscripcion-cursos-desempleados-9-diciembre'>cursos de Inserta2 para personas desempleadas</a>.</span>"
   ],
   "seo": [
    "paro-coria-del-rio-octubre-2026-sepe",
    "Paro en Coria del Río: 2.385 personas en octubre de 2026",
    "El paro registrado en Coria del Río bajó en octubre de 2026 a 2.385 personas, un 10,7 % menos que un año antes y la cifra de octubre más baja desde 2007.",
    [
     "paro registrado",
     "SEPE",
     "empleo",
     "Camas",
     "San Juan de Aznalfarache",
     "provincia de Sevilla"
    ]
   ]
  },
  {
   "id": "gran-poder-toma-posesion-junta-san-jose-igualas",
   "sec": "hermandades",
   "kicker": "Juntas y cuadrillas",
   "iso": "2026-11-25",
   "hora": "07:58",
   "src": "Hermandad del Gran Poder (Facebook)",
   "fuente_url": "https://www.facebook.com/1603774695120649/posts/1614173630747422",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La nueva Junta de Gobierno del Gran Poder de Coria del Río toma posesión el sábado 28 de noviembre",
   "sub": "La Hermandad de San José fija para el 11 de diciembre y el 9 de enero las igualás de la Piedad y del palio de Gracia y Esperanza",
   "caption": "Nuestro Padre Jesús del Gran Poder de Coria del Río en su paso, en una imagen de archivo.",
   "foto": "gran-poder-coria-paso-of.jpg",
   "fotocredito": "Archivo El Coriano",
   "claves": [
    "La nueva Junta de Gobierno del Gran Poder de Coria del Río jura y toma posesión el sábado 28 de noviembre en la misa de las 20.00.",
    "La Hermandad de San José celebrará la igualá de la Piedad el viernes 11 de diciembre, ya con Álvaro Pastor Alés como capataz.",
    "La cuadrilla del palio de Gracia y Esperanza hará su igualá y primer ensayo el sábado 9 de enero de 2027."
   ],
   "body": [
    "La nueva Junta de Gobierno de la Hermandad de Nuestro Padre Jesús del Gran Poder y Nuestra Señora del Carmen, de Coria del Río, jurará sus cargos y tomará posesión el sábado 28 de noviembre durante la misa de las 20.00, según ha anunciado la propia hermandad en su perfil de Facebook.",
    "La corporación ha invitado a todos sus hermanos a acompañar a los nuevos oficiales en el acto, con el que comienza formalmente el mandato del equipo que dirigirá la hermandad en los próximos años. La publicación no detalla la composición de la nueva junta ni quién ocupará el cargo de hermano mayor.",
    "El Gran Poder cerró este mismo mes sus cultos de noviembre con la <a href='#gran-poder-requiem-difuntos-2026'>misa por sus hermanos difuntos</a>, celebrada el viernes 20 en la capilla de la hermandad.",
    "## San José fija el calendario de sus cuadrillas",
    "La Hermandad Sacramental de San José, que estrenó Junta de Gobierno el 13 de noviembre, ha hecho público en Facebook el calendario de igualás y ensayos de sus cuadrillas de costaleros para la Semana Santa de 2027.",
    "La cuadrilla de la Piedad del Santísimo Cristo de la Misericordia y Nuestra Señora de los Dolores, que sale el Sábado Santo, trabajará ya a las órdenes de su <a href='#san-jose-nuevo-capataz-piedad'>nuevo capataz, Álvaro Pastor Alés</a>. La igualá será el viernes 11 de diciembre a las 21.00, y los ensayos, los sábados 30 de enero y 13 de febrero a las 16.30 y el sábado 13 de marzo a las 17.30.",
    "El paso de palio de María Santísima de Gracia y Esperanza, que hará estación de penitencia el Martes Santo, empezará más tarde. La igualá y el primer ensayo coincidirán el sábado 9 de enero de 2027 a las 16.30; el segundo ensayo será el sábado 23 de enero y el tercero, el domingo 21 de febrero, ambos también a las 16.30. Todas las citas de las dos cuadrillas serán en la casa hermandad.",
    "San José ha convocado además a los hermanos interesados en formar parte del cuerpo de acólitos a una reunión el domingo 29 de noviembre a las 11.45 en el salón de juntas de la casa hermandad, en la calle Pepe Hillo, 8.",
    "Las cofradías de Coria encaran así el arranque de la preparación de la Cuaresma. El Cautivo ya había anunciado que los costaleros de la Virgen del Dulce Nombre tendrán <a href='#cautivo-dulce-nombre-iguala-costaleros-2027'>su igualá el 25 de enero</a>.",
    "<span class='howto'><b>Gran Poder.</b> Jura y toma de posesión de la nueva Junta de Gobierno: sábado 28 de noviembre, en la misa de las 20.00. <b>San José</b> (casa hermandad, calle Pepe Hillo, 8). Reunión del cuerpo de acólitos: domingo 29 de noviembre, 11.45. Piedad: igualá el viernes 11 de diciembre, 21.00; ensayos el 30 de enero y el 13 de febrero (16.30) y el 13 de marzo (17.30). Gracia y Esperanza: igualá y primer ensayo el sábado 9 de enero, 16.30; ensayos el 23 de enero y el 21 de febrero, 16.30.</span>"
   ],
   "seo": [
    "gran-poder-coria-toma-posesion-junta-san-jose-iguala",
    "Gran Poder de Coria: la nueva junta jura el sábado 28",
    "La nueva Junta de Gobierno del Gran Poder de Coria del Río toma posesión el 28 de noviembre; San José fija las igualás de la Piedad y de su palio.",
    [
     "Hermandad del Gran Poder",
     "Hermandad de San José",
     "Junta de Gobierno",
     "igualá",
     "costaleros",
     "Semana Santa 2027"
    ]
   ]
  },
  {
   "id": "arbol-navidad-ganchillo-coria-2026",
   "sec": "cultura",
   "kicker": "Navidad 2026",
   "iso": "2026-11-24",
   "hora": "23:01",
   "src": "El Coriano",
   "fuente_url": "https://www.youtube.com/watch?v=-nh4YP8VCsg&t=0s",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Vecinas de Coria del Río tejen a ganchillo un árbol de Navidad de cinco metros para el Ayuntamiento",
   "sub": "Colaboradoras de la Casa de Barrio y de la Asociación Victoria 10 preparan también un segundo árbol, de tres metros, y apuran el trabajo para el encendido del jueves 26",
   "caption": "Una de las vecinas que tejen el árbol de Navidad de ganchillo, en la Casa de Barrio.",
   "foto": "arbol-navidad-ganchillo-casa-barrio-tv.jpg",
   "fotocredito": "Coriavisión",
   "claves": [
    "Un grupo de vecinas de Coria del Río teje a ganchillo dos árboles de Navidad: uno de cinco metros para el Ayuntamiento y otro de tres para la Casa de Barrio.",
    "Participan colaboradoras de la Casa de Barrio y de la Asociación Victoria 10; el proyecto arrancó en mayo.",
    "El árbol del Ayuntamiento debe estar listo para el encendido del alumbrado, el jueves 26 de noviembre."
   ],
   "body": [
    "Un grupo de vecinas de Coria del Río está terminando a contrarreloj un árbol de Navidad de ganchillo de cinco metros de altura que se colocará en el Ayuntamiento y se inaugurará con el encendido del alumbrado navideño, previsto para la tarde del jueves 26 de noviembre. El trabajo se reparte entre la Casa de Barrio y la Asociación Victoria 10.",
    "No es el único. Las tejedoras preparan un segundo árbol, de tres metros, que quedará en la Casa de Barrio. La prioridad ahora es el del Ayuntamiento, explicaron a El Coriano, porque la estructura metálica sobre la que se monta llegó tarde y no pudieron empezar a coser las piezas sobre ella hasta esta misma semana.",
    "## De una idea en mayo a la estructura",
    "El proyecto empezó a fraguarse el pasado mes de mayo en la Asociación Victoria 10. Una de las colaboradoras de la Casa de Barrio recordó que entonces «era como un sueño» y que ahora se está «materializando» en la estructura que ya se levanta junto al edificio.",
    "El árbol se forma con cientos de cuadrados de ganchillo, los llamados granny, que las participantes miden, clasifican por tamaño y cosen uno a uno. Para que todos queden iguales, Toñi, una de las tejedoras, utiliza una tabla de madera con cuatro varillas de hierro: coloca los cuadrados encima, los humedece con un pulverizador y los deja secar apilados hasta que quedan con la misma medida.",
    "En el grupo hay tejedoras veteranas y otras que se han sumado hace pocas semanas. Algunas reconocían que les daba vergüenza acercarse al principio; otras, que llegan de otras aficiones y se han apuntado por gusto al ganchillo. Todas coinciden en que la labor «relaja» y en el ambiente de las tardes de costura.",
    "El encendido del alumbrado será el punto de partida de la <a href='#encendido-alumbrado-navidad-coria-2026'>programación navideña del Ayuntamiento</a>, que se dará a conocer en el mismo acto.",
    "<span class='howto'><b>Dónde verlo.</b> El árbol de cinco metros se inaugurará el jueves 26 de noviembre en el Ayuntamiento de Coria del Río (calle Cervantes, 69), dentro del acto de encendido del alumbrado: pasacalles a las 18.00, presentación de la programación a las 19.00 y encendido a las 19.30. El reportaje completo puede verse en el canal de YouTube de Coriavisión.</span>"
   ],
   "seo": [
    "arbol-navidad-ganchillo-coria-del-rio-ayuntamiento",
    "Árbol de Navidad de ganchillo de 5 metros en Coria del Río",
    "Vecinas de Coria del Río tejen a ganchillo un árbol de Navidad de cinco metros para el Ayuntamiento, que se estrena con el alumbrado del 26 de noviembre.",
    [
     "Navidad",
     "ganchillo",
     "árbol de Navidad",
     "Casa de Barrio",
     "Asociación Victoria 10",
     "Ayuntamiento de Coria del Río"
    ]
   ]
  },
  {
   "id": "pp-psoe-campana-29n-mercadillo-coria",
   "sec": "politica",
   "kicker": "Elecciones 29N",
   "iso": "2026-11-24",
   "hora": "23:01",
   "src": "El Coriano",
   "fuente_url": "https://www.youtube.com/watch?v=l6r2ZQBnO-s&t=0s",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "PP y PSOE piden el voto en el mercadillo de Coria del Río a cinco días de las generales",
   "sub": "Lourdes Fuster y Andrés Parrado, números 4 y 11 del PP al Congreso por Sevilla, defienden el «cambio»; los socialistas apelan a las pensiones y la vivienda",
   "caption": "Gráfico sobre la recta final de la campaña de las elecciones generales del 29 de noviembre en Coria del Río.",
   "foto": "campana-29n-mercadillo-coria-gfx.jpg",
   "fotocredito": "Gráfico El Coriano",
   "encuadre": "contain",
   "claves": [
    "El PP y el PSOE hicieron campaña este martes 24 de noviembre en el mercadillo de Coria del Río, a cinco días de las elecciones generales.",
    "Por el PP acudieron Lourdes Fuster Martínez y Andrés Parrado, números 4 y 11 de su lista al Congreso por Sevilla.",
    "El PSOE local pidió el voto con un mensaje centrado en las pensiones, los derechos sociales, la vivienda y la educación pública."
   ],
   "body": [
    "El Partido Popular (PP) y el PSOE han llevado este martes 24 de noviembre la campaña de las elecciones generales al mercadillo de Coria del Río, donde ambos partidos han pedido el voto a cinco días de la cita con las urnas del domingo 29.",
    "Por el PP estuvieron Lourdes Fuster Martínez, número 4 de su candidatura al Congreso de los Diputados por Sevilla, y Andrés Parrado, presidente y portavoz del partido en Coria y número 11 de la misma lista. En declaraciones a El Coriano, Fuster sostuvo que el domingo «nos jugamos nuestro país» y prometió, si su partido gobierna con Alberto Núñez Feijóo, «cambiar las mentiras por honradez» y «la propaganda por hechos».",
    "## Los ejes del PP",
    "Parrado resumió el programa de su partido en tres puntos: defender a las clases medias y a las familias trabajadoras ante la subida del coste de la vida, renovar las infraestructuras del país y, en sus palabras, derribar el «muro» que a su juicio ha levantado el Gobierno de Pedro Sánchez para tender «puentes de concordia». Entre las infraestructuras pendientes en Sevilla citó el puente del Centenario y el cierre de la SE-40.",
    "El dirigente local afirmó que el PP fue el partido más votado en Coria en las dos últimas elecciones autonómicas y se marcó como objetivo serlo también, por primera vez, en unas generales en el municipio y en la provincia.",
    "## El PSOE, en el mismo mercadillo",
    "El PSOE de Coria del Río también ha estado en el mercadillo este martes, según ha publicado en su perfil de Facebook. Los socialistas aseguran que han recorrido el pueblo para dar a conocer su programa y que en las elecciones del domingo se juegan «seguir revalorizando las pensiones», conquistar derechos sociales y afrontar retos como la vivienda. El partido se presenta como garante de una educación pública, universal y gratuita y critica las propuestas de la «ultraderecha y sus socios».",
    "Los resultados de las últimas convocatorias en Coria, sección a sección, pueden consultarse en el <a href='#coria-generales-secciones-2016-2023'>análisis de las generales de 2016 a 2023</a> que publicó este periódico.",
    "<span class='howto'><b>Elecciones generales.</b> Domingo 29 de noviembre. Los colegios electorales abren de 9.00 a 20.00. Para votar hay que llevar DNI, pasaporte o permiso de conducir originales y en vigor. Las declaraciones del PP pueden verse completas en el canal de YouTube de Coriavisión.</span>"
   ],
   "seo": [
    "campana-elecciones-29n-coria-del-rio-pp-psoe-mercadillo",
    "Elecciones 29N: PP y PSOE, en el mercadillo de Coria",
    "El PP y el PSOE pidieron el voto en el mercadillo de Coria del Río a cinco días de las elecciones generales del 29 de noviembre. Qué defendió cada partido.",
    [
     "elecciones generales",
     "29N",
     "PP",
     "PSOE",
     "Lourdes Fuster",
     "Andrés Parrado",
     "campaña electoral"
    ]
   ]
  },
  {
   "id": "cautivo-dulce-nombre-iguala-costaleros-2027",
   "sec": "hermandades",
   "kicker": "Lunes Santo",
   "iso": "2026-11-24",
   "hora": "23:01",
   "src": "Hermandad del Cautivo (Facebook)",
   "fuente_url": "https://www.facebook.com/1602534325242911/posts/1611174821045528",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Los costaleros de la Virgen del Dulce Nombre, del Cautivo, tendrán su igualá el 25 de enero",
   "sub": "El equipo de capataces de Héctor García Autor fija cuatro ensayos en febrero y marzo antes del Lunes Santo, que en 2027 cae el 22 de marzo",
   "caption": "Cartel de la igualá y los ensayos de la cuadrilla de costaleros de Nuestra Señora del Dulce Nombre.",
   "foto": "cautivo-dulce-nombre-iguala-2027-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad del Cautivo",
   "encuadre": "contain",
   "claves": [
    "La cuadrilla de costaleros de Nuestra Señora del Dulce Nombre de María, de la Hermandad del Cautivo de Coria del Río, tiene la igualá el lunes 25 de enero de 2027, a las 21.00, en la casa hermandad.",
    "Los ensayos serán los lunes 8 y 22 de febrero y 8 y 15 de marzo, a las 21.00.",
    "El equipo de capataces lo encabeza Héctor García Autor."
   ],
   "body": [
    "La Hermandad de Nuestro Padre Jesús Cautivo de Coria del Río ha convocado a la cuadrilla de costaleros de Nuestra Señora del Dulce Nombre de María a la igualá, que será el lunes 25 de enero de 2027, a las 21.00, en la casa hermandad. Así lo ha publicado la corporación en su perfil de Facebook.",
    "La convocatoria parte del equipo de capataces de la Virgen, que encabeza Héctor García Autor, y mira a la próxima salida procesional de la hermandad el Lunes Santo, que en 2027 se celebra el 22 de marzo.",
    "## Cuatro ensayos, todos en lunes",
    "Tras la igualá, en la que los capataces miden a los costaleros y les asignan su sitio bajo las trabajaderas, la cuadrilla tiene previstos cuatro ensayos: los lunes 8 y 22 de febrero y los lunes 8 y 15 de marzo. Todas las citas son a las 21.00. El último ensayo queda a una semana justa del Lunes Santo.",
    "El calendario de la Virgen se suma al que la hermandad ya había anunciado para el paso de su titular: los costaleros del Cautivo tienen <a href='#cautivo-iguala-ensayos-costaleros-2027'>su igualá el viernes 8 de enero</a> y tres ensayos en sábado, el 16 de enero, el 6 de febrero y el 13 de marzo. Así, las dos cuadrillas de la corporación ensayarán en días distintos de la semana.",
    "La hermandad no ha detallado en su publicación el punto de salida ni el recorrido de los ensayos.",
    "<span class='howto'><b>Calendario de la cuadrilla del Dulce Nombre.</b> Igualá: lunes 25 de enero de 2027, 21.00, casa hermandad. Ensayos: lunes 8 y 22 de febrero y lunes 8 y 15 de marzo de 2027, a las 21.00. Lunes Santo: 22 de marzo de 2027.</span>"
   ],
   "seo": [
    "dulce-nombre-cautivo-coria-iguala-ensayos-costaleros",
    "Dulce Nombre del Cautivo: igualá el 25 de enero en Coria",
    "Los costaleros del Dulce Nombre, de la Hermandad del Cautivo de Coria del Río, tienen igualá el 25 de enero y cuatro ensayos antes del Lunes Santo.",
    [
     "Hermandad del Cautivo",
     "Dulce Nombre de María",
     "costaleros",
     "igualá",
     "Lunes Santo",
     "Semana Santa 2027"
    ]
   ]
  },
  {
   "id": "coria-cf-montalbeno-santaella-29n",
   "sec": "deportes",
   "kicker": "Coria CF",
   "iso": "2026-11-24",
   "hora": "23:01",
   "src": "Coria CF (Facebook)",
   "fuente_url": "https://www.facebook.com/2069782470890433/posts/2080136159855064",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Coria CF jugará ante el Montalbeño el domingo 29 a las 17.00 en Santaella",
   "sub": "El equipo coriano, con 19 puntos tras el 0-0 ante La Palma, disputa la jornada 13 de División de Honor Sénior el mismo día de las elecciones generales",
   "caption": "Un jugador del Coria CF, de amarillo, en un partido de esta temporada, en una imagen difundida por el club.",
   "foto": "coria-cf-partido-of.jpg",
   "fotocredito": "Facebook del Coria CF",
   "claves": [
    "El Coria CF visitará al Montalbeño el domingo 29 de noviembre, a las 17.00, en la División de Honor Sénior.",
    "El partido se jugará en el campo municipal Virgen del Valle de Santaella (Córdoba), según el club.",
    "El Coria suma 19 puntos tras empatar 0-0 con La Palma CF en la jornada 12."
   ],
   "body": [
    "El Coria CF jugará su próximo partido de la División de Honor Sénior en el campo del Montalbeño el domingo 29 de noviembre, a las 17.00, según ha anunciado el club coriano en su perfil de Facebook. El encuentro se disputará en el campo municipal Virgen del Valle de Santaella, en la provincia de Córdoba.",
    "Hasta ahora el club solo había avanzado que el equipo visitaría Montalbán en esta jornada, sin día ni hora. El cartel publicado este martes concreta la cita y sitúa el partido en Santaella, localidad vecina de Montalbán de Córdoba. El club no explica en su publicación el motivo de jugar en ese campo.",
    "## Tras el empate con La Palma",
    "El equipo ribereño llega al partido con 19 puntos, después de <a href='#coria-cf-empata-la-palma'>empatar 0-0 con La Palma CF</a> el domingo 22 en el Estadio Guadalquivir, en un duelo de la zona alta de la tabla. Antes había ganado 0-2 en La Rinconada. La jornada coincide con el día de las elecciones generales, que se celebran ese mismo domingo.",
    "El Coria CF ha publicado también esta semana los resultados de su cantera del fin de semana del 20 al 22 de noviembre y ha enviado ánimos a un jugador de su equipo juvenil que se lesionó en el último partido.",
    "## La cantera del CB Coria, sin freno",
    "En baloncesto, el Club Baloncesto Coria ha celebrado en Facebook una nueva victoria de uno de sus equipos en el pabellón municipal, la cuarta de la temporada para ese conjunto, aunque no ha detallado rival ni marcador. El club ha destacado además los partidos de sus equipos premini masculino y babys durante el fin de semana. La semana pasada, su infantil masculino XL <a href='#cb-coria-cantera-cierre-primera-fase'>cerró la primera fase con cinco victorias en cinco partidos</a>.",
    "<span class='howto'><b>Próximo partido.</b> Montalbeño - Coria CF. División de Honor Sénior, jornada 13. Domingo 29 de noviembre, 17.00. Campo municipal Virgen del Valle, Santaella (Córdoba).</span>"
   ],
   "seo": [
    "coria-cf-montalbeno-santaella-division-honor-jornada-13",
    "Coria CF visita al Montalbeño el domingo 29 en Santaella",
    "El Coria CF juega ante el Montalbeño el domingo 29 de noviembre a las 17.00 en Santaella, en la jornada 13 de División de Honor Sénior, con 19 puntos.",
    [
     "Coria CF",
     "Montalbeño",
     "División de Honor Sénior",
     "Santaella",
     "fútbol",
     "Club Baloncesto Coria"
    ]
   ]
  },
  {
   "id": "encendido-alumbrado-navidad-coria-2026",
   "sec": "cultura",
   "kicker": "Navidad 2026",
   "iso": "2026-11-24",
   "hora": "08:03",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1464904202438912",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Coria del Río encenderá el alumbrado de Navidad el jueves 26 de noviembre tras un pasacalles",
   "sub": "El pasacalles saldrá a las 18.00 del Paseo Tierno Galván y el Ayuntamiento presentará a las 19.00 la programación, que irá hasta el 5 de enero",
   "caption": "Cartel de la programación de Navidad del Ayuntamiento de Coria del Río.",
   "foto": "navidad-coria-2026-programa-cartel-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "encuadre": "contain",
   "claves": [
    "El alumbrado navideño de Coria del Río se encenderá el jueves 26 de noviembre a las 19.30 en la puerta del Ayuntamiento.",
    "Antes, a las 18.00, saldrá un pasacalles desde el Paseo Tierno Galván, y a las 19.00 se presentará la programación.",
    "La Navidad municipal irá del 26 de noviembre al 5 de enero."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río encenderá el alumbrado de Navidad el jueves 26 de noviembre, a las 19.30, en la puerta de la Casa Consistorial, después de un pasacalles que saldrá a las 18.00 del Paseo Tierno Galván, junto al Centro de Salud Blas Infante. Así lo ha detallado el Consistorio en su perfil de Facebook este martes 24, tras un primer avance la noche del lunes 23.",
    "A las 19.00, antes del encendido, el Ayuntamiento presentará la programación de Navidad, que irá del 26 de noviembre al 5 de enero y de la que por ahora no ha avanzado actividades, horarios ni lugares. En el acto se inaugurará también el <a href='#arbol-navidad-ganchillo-coria-2026'>árbol de ganchillo de cinco metros</a> que tejen vecinas del municipio. El Consistorio acompaña sus anuncios de la etiqueta #Navidadcoriana2026.",
    "## Una semana con varias citas",
    "El encendido llega en una semana con otras convocatorias en la calle. El miércoles 25, a las 10.00, está prevista la marcha contra la violencia de género que organiza el Ayuntamiento con motivo del 25N, desde la plaza Santa Ángela de la Cruz hasta la Casa Consistorial, dentro de <a href='#25n-campana-ayuntamiento-2026'>la programación municipal por el Día Internacional para la Eliminación de la Violencia contra la Mujer</a>. El domingo 29 se celebran elecciones generales, con los colegios electorales abiertos en todo el municipio.",
    "La Navidad ha tenido ya presencia coriana fuera del pueblo: la cantante <a href='#pastora-soler-encendido-navidad-madrid'>Pastora Soler interpretó «Quédate conmigo» en el encendido de las luces de Madrid</a> el sábado 21 de noviembre.",
    "Según la última previsión de la Agencia Estatal de Meteorología (AEMET) para Coria del Río, el jueves 26 estará poco nuboso, con una máxima de 18 grados, una mínima de 7 y sin probabilidad de lluvia.",
    "<span class='howto'>Encendido del alumbrado navideño de Coria del Río. Cuándo: jueves 26 de noviembre. Pasacalles: 18.00, desde el Paseo Tierno Galván (junto al Centro de Salud Blas Infante). Presentación de la programación: 19.00. Encendido: 19.30. Dónde: puerta del Ayuntamiento, calle Cervantes, 69. La programación navideña se extenderá hasta el 5 de enero. Acceso libre.</span>"
   ],
   "seo": [
    "encendido-alumbrado-navidad-coria-del-rio-2026",
    "Alumbrado de Navidad en Coria del Río: jueves 26, 19.30",
    "Coria del Río encenderá su alumbrado navideño el jueves 26 de noviembre a las 19.30, tras un pasacalles a las 18.00; la Navidad irá hasta el 5 de enero.",
    [
     "Navidad",
     "alumbrado navideño",
     "Ayuntamiento de Coria del Río",
     "pasacalles",
     "Navidad coriana 2026"
    ]
   ],
   "actualizada": "2026-11-24T23:01"
  },
  {
   "id": "nombramiento-asesora-gabinete-alcaldia-bop",
   "sec": "politica",
   "kicker": "Personal eventual",
   "iso": "2026-11-24",
   "hora": "08:03",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/export/sites/bop/.galleries/Documentos-Anuncios-en-PDF/firmado-1795478431537-final-39611915.pdf",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El alcalde de Coria del Río nombra a una asesora de gabinete con un sueldo de 30.750 euros brutos al año",
   "sub": "El BOP publica la resolución del 18 de noviembre que nombra personal eventual a Alejandra Blázquez González, en una de las siete plazas que creó el Pleno en 2023",
   "caption": "Retribución anual bruta del puesto de asesor de gabinete, según la resolución publicada en el BOP de Sevilla.",
   "foto": "nombramiento-asesora-gabinete-alcaldia-bop-gfx.jpg",
   "fotocredito": "Gráfico El Coriano",
   "encuadre": "contain",
   "claves": [
    "El alcalde, Modesto González Márquez, nombró el 18 de noviembre a Alejandra Blázquez González asesora de gabinete, como personal eventual.",
    "El puesto tiene una retribución bruta de 30.750,02 euros al año en 14 pagas.",
    "La plaza es una de las siete de asesor de gabinete que creó el Pleno el 29 de junio de 2023.",
    "El cargo es de libre designación y cesa, como máximo, cuando termine el mandato del alcalde."
   ],
   "body": [
    "El alcalde de Coria del Río, Modesto González Márquez, ha nombrado a Alejandra Blázquez González asesora de gabinete del Ayuntamiento, como personal eventual de confianza, con una retribución bruta de 30.750,02 euros al año, según la resolución que publica este martes 24 de noviembre el Boletín Oficial de la Provincia (BOP) de Sevilla.",
    "La resolución, con el número 3952/2026, está fechada el 18 de noviembre y firmada por el alcalde. El sueldo se reparte en 14 mensualidades, con pagas dobles en junio y diciembre, y el texto prevé que se le apliquen las subidas salariales que fijen el Real Decreto 14/2025, de 2 de diciembre, y las normas posteriores.",
    "## Una de siete plazas",
    "El nombramiento ocupa una de las siete plazas de personal eventual de asesores de gabinete que creó el Pleno municipal en la sesión del 29 de junio de 2023, al modificar la relación de puestos de trabajo, en el área de Alcaldía, y la plantilla. Todas son a jornada completa y tienen la misma retribución, según el texto de la resolución.",
    "El personal eventual es la figura que la Ley Reguladora de las Bases del Régimen Local, en su artículo 104, reserva a los puestos de confianza o asesoramiento especial. No se cubre por oposición: lo nombra y lo cesa libremente el alcalde, y su cese es automático cuando termina el mandato de la autoridad a la que asesora. La resolución fija un plazo de diez días desde la notificación para la toma de posesión y ordena dar cuenta al Pleno en su primera sesión ordinaria.",
    "El mismo número del BOP publica el cese de otra asesora de Gabinete de Alcaldía, María Teresa Estévez Franco, por la resolución 3886/2026, de 11 de noviembre, firmada por la teniente de alcalde delegada de Recursos Humanos, Régimen Interior y Limpieza, Silvia Gracia Galán. El cese tiene efectos desde ese mismo 11 de noviembre y el anuncio no indica el motivo. Días después, Teresa Estévez juró su cargo de concejala del Ayuntamiento.",
    "<span class='howto'>Dónde consultarlo: BOP de Sevilla número 227, del martes 24 de noviembre de 2026, sección de Ayuntamientos, Coria del Río. El anuncio del nombramiento está en bopsevilla.dipusevilla.es. La resolución se dará a conocer al Pleno en su próxima sesión ordinaria.</span>"
   ],
   "seo": [
    "nombramiento-asesora-gabinete-ayuntamiento-coria",
    "Coria del Río nombra una asesora de gabinete en el BOP",
    "El alcalde de Coria del Río nombra a Alejandra Blázquez asesora de gabinete, con 30.750 euros brutos al año, según publica el BOP de Sevilla.",
    [
     "Ayuntamiento de Coria del Río",
     "personal eventual",
     "asesores de gabinete",
     "Modesto González Márquez",
     "BOP de Sevilla",
     "plantilla municipal"
    ]
   ],
   "actualizada": "2026-11-24T23:01"
  },
  {
   "id": "semillas-igualdad-exposicion-huerta-rita",
   "sec": "cultura",
   "kicker": "Semillas de Igualdad",
   "iso": "2026-11-23",
   "hora": "23:03",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1463861445876521",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La exposición «Semillas de Igualdad» llega a Coria del Río con ocho paneles sobre mujeres que abrieron camino",
   "sub": "La muestra itinerante de UGT, con la Diputación y el Ayuntamiento, puede verse en el Centro de Servicios Sociales Huerta Rita e incluye a las corianas Clara Grima y Aída Platero.",
   "caption": "Visitantes en la exposición itinerante «Semillas de Igualdad».",
   "foto": "semillas-igualdad-exposicion-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río inauguró el lunes 23 de noviembre la exposición itinerante «Semillas de Igualdad».",
    "La muestra tiene ocho paneles y está en el pasillo del Centro de Servicios Sociales Huerta Rita.",
    "La promueve UGT, con la colaboración de la Diputación de Sevilla y del Ayuntamiento.",
    "Entre las mujeres que recoge están las corianas Clara Grima y Aída Platero."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río inauguró el lunes 23 de noviembre la exposición itinerante «Semillas de Igualdad», una muestra de ocho paneles sobre mujeres que han contribuido a transformar la sociedad. Puede visitarse desde ese día en el pasillo del Centro de Servicios Sociales Huerta Rita, según ha publicado el Consistorio en su perfil de Facebook.",
    "La iniciativa la promueve el sindicato UGT, con la colaboración de la Diputación de Sevilla y del propio Ayuntamiento. Según el Consistorio, el objetivo es visibilizar el papel de mujeres que, en ámbitos distintos, abrieron camino y derribaron barreras.",
    "Al acto inaugural asistieron el alcalde, Modesto González, y las delegadas municipales Almudena Bizcocho y María José Cantón. Por parte de UGT acudieron Puri Gil, secretaria de Igualdad, Mujer y Diversidad, y Juan Bautista, en representación de la Secretaría General provincial del sindicato.",
    "## Dos corianas en los paneles",
    "La muestra pone el foco también en mujeres de Coria del Río. El Ayuntamiento cita a dos: Clara Grima, profesora de Matemáticas Aplicadas de la Universidad de Sevilla, y Aída Platero, investigadora del Instituto de Biomedicina de Sevilla.",
    "Según el Consistorio, la exposición invita a mirar al pasado, cuando el trabajo de muchas mujeres quedó silenciado; a reconocer los avances del presente, y a reflexionar sobre lo que falta para que las oportunidades sean iguales y no haya desigualdades por razón de género.",
    "La muestra abre la semana del 25 de noviembre, Día Internacional de la Eliminación de la Violencia contra la Mujer, para la que el Ayuntamiento ha preparado <a href='#25n-campana-ayuntamiento-2026'>una campaña y una marcha</a> con el Centro Municipal de Información a la Mujer. En octubre, el Consistorio aprobó por unanimidad su <a href='#plan-igualdad-ayuntamiento-2026'>primer Plan de Igualdad municipal</a>.",
    "<span class='howto'><b>Semillas de Igualdad.</b> Exposición itinerante de ocho paneles. Pasillo del Centro de Servicios Sociales Huerta Rita, Coria del Río, desde el lunes 23 de noviembre. Horario y fecha de clausura: el Ayuntamiento no los ha detallado. <b>Marcha del 25N:</b> miércoles 25 de noviembre, 10.00, desde la Plaza Santa Ángela de la Cruz hasta el Ayuntamiento.</span>"
   ],
   "seo": [
    "semillas-igualdad-exposicion-coria-del-rio-huerta-rita",
    "«Semillas de Igualdad», exposición en Coria del Río",
    "La muestra itinerante «Semillas de Igualdad», de UGT, abre en Coria del Río con ocho paneles en Huerta Rita y las corianas Clara Grima y Aída Platero.",
    [
     "Semillas de Igualdad",
     "UGT",
     "Diputación de Sevilla",
     "Clara Grima",
     "Aída Platero",
     "25N",
     "Huerta Rita"
    ]
   ]
  },
  {
   "id": "psoe-paseo-maritimo-financiacion-mas-sevilla",
   "sec": "politica",
   "kicker": "Paseo Marítimo",
   "iso": "2026-11-23",
   "hora": "23:03",
   "src": "PSOE de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/reel/4474672919449180/",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El PSOE de Coria sostiene que la reforma del Paseo Marítimo se paga con el Plan Más Sevilla de la Diputación",
   "sub": "El Ayuntamiento presentó en octubre la obra como una inversión municipal de un millón de euros, la mayor en el paseo desde su creación hace más de 30 años.",
   "caption": "Fotograma del vídeo del PSOE de Coria del Río sobre la financiación del paseo marítimo.",
   "foto": "psoe-paseo-maritimo-video-of.jpg",
   "fotocredito": "Facebook del PSOE de Coria del Río",
   "claves": [
    "El PSOE de Coria del Río afirma que la reforma del Paseo Marítimo se financia con el Plan Más Sevilla de la Diputación de Sevilla.",
    "El Ayuntamiento anunció el 9 de octubre la obra como una inversión municipal de un millón de euros.",
    "Las obras renuevan más de 7.000 metros cuadrados en tres tramos, con un plazo previsto de seis meses."
   ],
   "body": [
    "El PSOE de Coria del Río sostiene que la renovación del Paseo Marítimo se financia con el Plan Más Sevilla de la Diputación de Sevilla y no con dinero municipal, como defiende el Ayuntamiento. Lo afirma su portavoz, David Díaz, en un vídeo que el partido publicó el lunes 23 de noviembre en su perfil de Facebook.",
    "«El Ayuntamiento está diciendo que este dinero sale de las arcas municipales y no es así», asegura Díaz en la grabación. «Esto viene de una financiación de la Diputación de Sevilla a través del plan Más Sevilla», añade.",
    "En el mismo vídeo, el portavoz socialista recuerda que el paseo lo impulsaron gobiernos socialistas y sostiene que en la última década se ha deteriorado «sin que haya recibido nunca la gestión y la atención necesaria». El partido acompaña la grabación con un mensaje en el que acusa al alcalde, Modesto González (Andalucía por Sí), de intentar «ponerse medallas» con la obra.",
    "Díaz afirma que su partido defenderá las inversiones que mejoren el municipio, pero reclama que los vecinos sepan de dónde sale el dinero de cada actuación.",
    "## La versión del Ayuntamiento",
    "El Ayuntamiento anunció el 9 de octubre el inicio de los trabajos con una <a href='https://www.ayto-coriadelrio.es/es/actualidad/noticias/Comienzan-las-obras-de-renovacion-integral-del-Paseo-Maritimo-de-Coria-del-Rio/' target='_blank' rel='noopener'>nota</a> en la que habla de una «inversión municipal de un millón de euros», la mayor actuación en el paseo desde su creación, hace más de 30 años. Según esa nota, la obra afecta a más de 7.000 metros cuadrados y tiene un plazo de ejecución de seis meses.",
    "El Consistorio explicó entonces que el paseo pertenece al Dominio Público Marítimo-Terrestre y que, tras años de reclamaciones ante el Ministerio competente, obtuvo autorización para ejecutar la obra directamente y asumió su financiación. «No podemos dejar que nuestro paseo se siga deteriorando», dijo el alcalde al anunciar el proyecto.",
    "Ninguna de las dos partes ha publicado el documento que acredite el origen de los fondos. La Diputación sí ha concedido este mes a Coria, dentro de otra línea del mismo plan, Más Sevilla Turístico, <a href='#mas-sevilla-turistico-coria-dehesa-atalaya'>500.000 euros para infraestructuras de turismo activo en la dehesa La Atalaya</a>, según el Boletín Oficial de la Provincia.",
    "## Tres tramos",
    "Las obras se dividen en tres tramos: del restaurante Esturión al cruce de la calle Batán con la avenida de Andalucía; de la calle Batán al embarcadero, y del embarcadero a la desembocadura del arroyo Riopudio. Incluyen nueva solería, una barandilla de acero inoxidable en lugar de la balaustrada, bancos nuevos, mejoras en la evacuación de las aguas pluviales y arquetas para el alumbrado de la Feria.",
    "<span class='howto'><b>Obra del Paseo Marítimo.</b> Inicio: 9 de octubre de 2026, según el Ayuntamiento. Plazo de ejecución previsto: seis meses. Superficie: más de 7.000 metros cuadrados. Importe anunciado: un millón de euros.</span>"
   ],
   "seo": [
    "psoe-paseo-maritimo-coria-plan-mas-sevilla-financiacion",
    "Paseo Marítimo de Coria: el PSOE señala al Plan Más Sevilla",
    "El PSOE de Coria del Río afirma que el Plan Más Sevilla paga la obra del Paseo Marítimo; el Ayuntamiento la presentó como inversión municipal de un millón.",
    [
     "Paseo Marítimo",
     "PSOE",
     "David Díaz",
     "Plan Más Sevilla",
     "Diputación de Sevilla",
     "Modesto González",
     "Andalucía por Sí"
    ]
   ]
  },
  {
   "id": "soledad-entrega-jarrillo-soleaero-fernando-rasero",
   "sec": "hermandades",
   "kicker": "Jarrillo Soleaero",
   "iso": "2026-11-23",
   "hora": "23:03",
   "src": "Hermandad de la Soledad (Facebook)",
   "fuente_url": "https://www.facebook.com/1568403328657029/posts/1576234994540529",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Soledad de Coria entrega el V Jarrillo Soleaero a Fernando Rasero, vestidor de la Virgen",
   "sub": "La hermandad reconoce su trabajo en el taller de bordados y su labor como vestidor de Nuestra Señora de la Soledad Coronada.",
   "caption": "Entrega del V Jarrillo Soleaero en la capilla de la Hermandad de la Soledad.",
   "foto": "soledad-jarrillo-soleaero-entrega-of.jpg",
   "fotocredito": "Facebook de la Hermandad de la Soledad",
   "claves": [
    "La Hermandad de la Soledad de Coria del Río entregó el sábado 21 de noviembre el V Jarrillo Soleaero a Fernando Rasero Pérez.",
    "La hermandad destaca su entrega al taller de bordados y su labor como vestidor de la Virgen de la Soledad.",
    "El acto se celebró en la capilla de la hermandad."
   ],
   "body": [
    "La Hermandad de la Soledad de Coria del Río entregó el sábado 21 de noviembre el V Jarrillo Soleaero a su hermano Fernando Rasero Pérez, en un acto celebrado en la capilla de la hermandad. Así lo ha contado la corporación en su perfil de Facebook, donde ha publicado imágenes de la entrega.",
    "El Jarrillo Soleaero es la distinción con la que la hermandad reconoce a hermanos que, según su descripción, han hecho de su vida un ejemplo de fe y de entrega a sus titulares. Esta es su quinta edición. La concesión la acordó la Junta de Gobierno en cabildo de oficiales, como <a href='#soledad-jarrillo-soleaero-2026-fernando-rasero'>anunció la hermandad la semana pasada</a>.",
    "En su mensaje, la Soledad detalla ahora la trayectoria del distinguido: su entrega al taller de bordados de la hermandad y su labor como vestidor de Nuestra Señora de la Soledad Coronada. La corporación destaca también que ha transmitido a su familia la devoción a la Soledad.",
    "La hermandad presenta el reconocimiento como una muestra de gratitud por «tantos años de entrega y fidelidad» y traslada a Rasero su enhorabuena.",
    "## Semanas de actividad",
    "La entrega cierra unas semanas de actividad para la hermandad del Barrio de la Soledad. A mediados de noviembre, su Diputación de Caridad colaboró en la Gran Recogida del Banco de Alimentos y <a href='#soledad-caridad-banco-alimentos-brigada-nocturna'>donó mantas y ropa de abrigo a La Brigada Nocturna</a>. La corporación ha recuperado además <a href='#soledad-restaura-caliz-plata'>un antiguo cáliz de plata</a>, que volvió a usar el 15 de noviembre en la Función Principal al Santísimo Cristo Yacente.",
    "<span class='howto'><b>Hermandad de la Soledad.</b> Capilla de Nuestra Señora de la Soledad, Barrio de la Soledad, Coria del Río. La hermandad informa de sus actos en su perfil de Facebook.</span>"
   ],
   "seo": [
    "jarrillo-soleaero-fernando-rasero-hermandad-soledad-coria",
    "V Jarrillo Soleaero para Fernando Rasero en Coria",
    "La Hermandad de la Soledad de Coria del Río entregó el sábado el V Jarrillo Soleaero a Fernando Rasero Pérez por su labor en bordados y como vestidor.",
    [
     "Hermandad de la Soledad",
     "Jarrillo Soleaero",
     "Fernando Rasero Pérez",
     "Virgen de la Soledad",
     "bordados"
    ]
   ]
  },
  {
   "id": "cb-coria-cantera-cierre-primera-fase",
   "sec": "deportes",
   "kicker": "Baloncesto base",
   "iso": "2026-11-23",
   "hora": "23:03",
   "src": "Club Baloncesto Coria (Facebook)",
   "fuente_url": "https://www.facebook.com/1805624228234571/posts/1815208330609494",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El infantil masculino del CB Coria cierra la primera fase con cinco victorias en cinco partidos",
   "sub": "El mini femenino XL también termina invicto, con cuatro de cuatro, y el infantil femenino gana a Estepa y es segundo de su grupo.",
   "caption": "Jugadores del equipo infantil del Club Baloncesto Coria.",
   "foto": "cb-coria-infantil-equipo-of.jpg",
   "fotocredito": "Facebook del Club Baloncesto Coria",
   "claves": [
    "El infantil masculino XL del Club Baloncesto Coria cierra la primera fase con cinco victorias en cinco partidos.",
    "El mini femenino XL termina también invicto, con cuatro victorias.",
    "El infantil femenino ganó a Estepa y es segundo de su grupo."
   ],
   "body": [
    "El equipo infantil masculino XL del Club Baloncesto Coria, de Coria del Río, ha cerrado la primera fase de su competición con cinco victorias en cinco partidos, según ha publicado el club en su perfil de Facebook este lunes 23 de noviembre. No es el único equipo de la cantera que termina la fase sin perder.",
    "El mini femenino XL acaba también invicto, con cuatro victorias en cuatro partidos, y el club anima a sus jugadoras a «seguir trabajando». El infantil femenino, por su parte, ganó su partido del fin de semana ante Estepa y es segundo de su grupo al terminar la primera vuelta. El club no ha publicado los marcadores.",
    "Hace una semana, la entidad ya había destacado que su infantil masculino <a href='#cb-coria-infantil-lider-invicto'>cerraba la primera vuelta líder y sin derrotas</a>. Entre los mayores, el N1 masculino <a href='#cb-coria-n1-masculino-gana-huelva'>ganó 91-45 al Huelva La Luz</a> el 15 de noviembre y es segundo de su grupo.",
    "El sénior masculino tenía programado para este lunes 23, a las 20.30, el partido ante el Club Baloncesto Los Palacios en el pabellón municipal de Coria.",
    "## El Coria CF, a Montalbán",
    "En fútbol, el Coria CF, que el domingo 22 <a href='#coria-cf-empata-la-palma'>empató 0-0 con La Palma CF</a> en el Estadio Guadalquivir en un duelo de la parte alta de la tabla, visitará Montalbán en la próxima jornada, según ha anunciado el club. La entidad ha publicado también en sus redes los resultados de su cantera del fin de semana del 20 al 22 de noviembre.",
    "<span class='howto'><b>Próximo partido del Coria CF.</b> Visita a Montalbán en la próxima jornada de la División de Honor Sénior. El club no ha anunciado todavía el día ni la hora.</span>"
   ],
   "seo": [
    "cb-coria-cantera-infantil-mini-invictos-primera-fase",
    "CB Coria: infantil y mini, invictos en la primera fase",
    "El infantil masculino XL del Club Baloncesto Coria cierra la primera fase con 5 de 5 y el mini femenino XL acaba invicto; el Coria CF visitará Montalbán.",
    [
     "Club Baloncesto Coria",
     "baloncesto base",
     "infantil masculino",
     "mini femenino",
     "Coria CF",
     "Montalbán"
    ]
   ]
  },
  {
   "id": "coria-generales-secciones-2016-2023",
   "sec": "politica",
   "kicker": "Elecciones generales",
   "iso": "2026-11-23",
   "hora": "07:40",
   "src": "Ministerio del Interior",
   "fuente_url": "https://infoelectoral.interior.gob.es/es/elecciones-celebradas/area-de-descargas/",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El PSOE ganó en Coria del Río las cuatro últimas generales y el PP fue primero en cinco secciones en 2023",
   "sub": "La participación cayó al 63,4 % en 2023, la más baja de las cuatro citas, según los resultados por mesa del Ministerio del Interior",
   "caption": "Voto válido del PSOE, el PP y Vox en Coria del Río en las generales de 2016, abril de 2019, noviembre de 2019 y 2023. El PSOE fue primero en las cuatro.",
   "foto": "coria-generales-secciones-2016-2023-gfx3.jpg",
   "fotocredito": "Gráfico El Coriano",
   "encuadre": "contain",
   "claves": [
    "El PSOE fue el partido más votado en Coria del Río en las generales de 2016, abril de 2019, noviembre de 2019 y 2023, siempre por encima del 39 % del voto válido.",
    "En 2023 el PP fue primero en cinco de las 18 secciones censales de Coria; en las dos elecciones de 2019 no ganó ninguna.",
    "La participación en Coria fue del 63,4 % en 2023, frente al 70,3 % de abril de 2019.",
    "Los datos salen de los resultados por mesa del Ministerio del Interior y no incluyen el voto de los residentes en el extranjero."
   ],
   "body": [
    "El PSOE fue el partido más votado en Coria del Río en las cuatro elecciones generales celebradas entre 2016 y 2023, siempre con más del 39 % del voto válido. En julio de 2023 el PP fue primero en cinco de las 18 secciones censales del municipio, según los resultados por mesa del Ministerio del Interior analizados por El Coriano.",
    "El análisis llega a seis días de las generales del domingo 29 de noviembre. Una sección censal agrupa a los electores de unas calles concretas, que votan en una o varias mesas. Coria tuvo 18 secciones en las cuatro elecciones.",
    "## El voto en el conjunto de Coria",
    "En 2016 el PSOE logró el 40,8 % en Coria, por delante del PP (22,0 %), la candidatura de Podemos e IU (20,2 %) y Ciudadanos (13,5 %). En abril de 2019 subió al 42,3 %, con Ciudadanos (15,2 %) como segunda fuerza. En noviembre de 2019 obtuvo el 39,9 % y Vox quedó segundo con el 19,2 %.",
    "En 2023 el PSOE sumó el 41,6 %. El PP subió al 26,4 %, desde el 12,3 % de noviembre de 2019. Vox logró el 15,8 % y Sumar, el 13,0 %. Ciudadanos no se presentó.",
    "Andalucía por Sí (AxSí), el partido del alcalde, Modesto González Márquez, solo concurrió a las generales en las dos elecciones de 2019. En abril obtuvo en Coria 242 votos, el 1,5 % del voto válido, y en noviembre, 453 votos, el 3,0 %. En las dos fue la sexta candidatura más votada del municipio. No se presentó en 2016 ni en 2023.",
    "## El mapa por secciones",
    "El PSOE ganó en 15 secciones en 2016, en las 18 en abril de 2019, en 17 en noviembre de 2019 y en 13 en 2023. El PP fue primero en dos secciones en 2016 y en cinco en 2023. Ciudadanos ganó una en 2016 y Vox, una en noviembre de 2019.",
    "Las cinco secciones donde ganó el PP en 2023 lo hicieron por márgenes estrechos. Su mejor resultado, el 39,4 %, fue en la sección de la avenida de Andalucía y las calles Batán y Jesús y María, donde el PSOE obtuvo el 35,5 %. También fue primero en la de la Barriada de Fátima (38,0 %) y en la de las calles Canalejas, Caura y Colón (38,4 %).",
    "El mejor dato del PSOE en 2023, el 53,6 %, se dio en la sección de las calles Antonio Gutiérrez, Francisco Gutiérrez y Martinete. Vox alcanzó su máximo, el 22,0 %, en la de la Gran Avenida y las calles Esclusa e Isleta.",
    "## Menos participación",
    "En 2023 votaron 15.156 de los 23.905 electores residentes en Coria, el 63,4 %. Fue la participación más baja de las cuatro generales: el 64,2 % en 2016, el 70,3 % en abril de 2019 y el 65,6 % en noviembre de 2019. Por secciones, osciló entre el 71,9 % de la de la avenida de Andalucía y el 56,1 % de la de la calle Antonio Gutiérrez.",
    "<span class='howto'>Datos: resultados por mesa de las generales de junio de 2016, abril de 2019, noviembre de 2019 y julio de 2023 (Ministerio del Interior, Infoelectoral). Las calles de cada sección salen del callejero del censo electoral del INE de julio de 2023. Porcentajes sobre voto válido; participación sobre el censo de residentes en España, sin el voto desde el extranjero. Los límites de algunas secciones cambian entre elecciones. Los colegios abren el domingo 29 de noviembre de 9.00 a 20.00.</span>"
   ],
   "seo": [
    "voto-secciones-coria-del-rio-generales",
    "Voto por secciones en Coria del Río: generales 2016-2023",
    "El PSOE ganó en Coria del Río las generales de 2016 a 2023 y el PP fue primero en cinco de sus 18 secciones censales en 2023, según Interior.",
    [
     "elecciones generales",
     "secciones censales",
     "participación electoral",
     "PSOE",
     "PP",
     "Vox",
     "Ministerio del Interior"
    ]
   ]
  },
  {
   "id": "accidentes-trafico-coria-2025-dgt",
   "sec": "sucesos",
   "kicker": "Seguridad vial",
   "iso": "2026-11-23",
   "hora": "07:40",
   "src": "DGT",
   "fuente_url": "https://www.dgt.es/menusecundario/dgt-en-cifras/dgt-en-cifras-resultados/dgt-en-cifras-detalle/Ficheros-de-microdatos-de-accidentes-con-victimas-2025/",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Coria del Río registra 49 accidentes con víctimas en 2025, el máximo desde 2016, por los siniestros urbanos",
   "sub": "La DGT anota 31 accidentes en las calles de Coria, cuando hasta 2023 contaba entre cero y cuatro al año; en carretera hubo 18",
   "caption": "Accidentes de tráfico con víctimas en Coria del Río entre 2016 y 2025, separados por vías urbanas e interurbanas, según la DGT.",
   "foto": "accidentes-trafico-coria-2025-dgt-gfx.jpg",
   "fotocredito": "Gráfico El Coriano",
   "encuadre": "contain",
   "claves": [
    "Coria del Río registró 49 accidentes de tráfico con víctimas en 2025, frente a 33 en 2024 y 22 en 2016.",
    "31 de los 49 accidentes de 2025 fueron en vías urbanas; entre 2016 y 2023 la DGT anotaba entre cero y cuatro al año en el casco urbano.",
    "Los accidentes de 2025 dejaron 65 víctimas, ninguna mortal, y tres heridos hospitalizados.",
    "La A-8058 fue la carretera con más accidentes con víctimas en el término de Coria en 2025, con 10."
   ],
   "body": [
    "Coria del Río registró 49 accidentes de tráfico con víctimas en 2025, la cifra más alta desde 2016, según los microdatos de la Dirección General de Tráfico (DGT) publicados en octubre de 2026. Fueron 33 en 2024. La subida se concentra en las calles del municipio: 31 de los 49 accidentes ocurrieron en vías urbanas.",
    "Entre 2016 y 2023, la estadística de la DGT anotaba en Coria entre cero y cuatro accidentes urbanos con víctimas al año. En 2024 recogió 19 y en 2025, 31. Los accidentes urbanos llegan a la estadística a través de los partes que la Policía Local envía a la DGT, y con estos datos no se puede saber si antes de 2024 hubo menos siniestros en las calles o si se comunicaron menos.",
    "## En carretera, cifras estables",
    "En las vías interurbanas del término hubo 18 accidentes con víctimas en 2025, cuatro más que en 2024. La serie se ha movido entre siete (2022) y 21 (2016) en la última década. La A-8058 sumó 10 accidentes en 2025, la SE-3206, cinco, y la A-8051, tres.",
    "Los 49 accidentes de 2025 dejaron 65 víctimas: ningún fallecido, tres heridos que necesitaron hospitalización y 62 heridos leves. En 2024 hubo 42 víctimas y un fallecido, en un atropello en una vía urbana en enero. Entre 2016 y 2025, la estadística recoge tres muertes por accidentes de tráfico en el término de Coria.",
    "## Atropellos, el tipo más frecuente",
    "El tipo de accidente más repetido en Coria en 2025 fue el atropello a personas, con 11 casos, seguido de las colisiones fronto-laterales (10) y laterales (siete).",
    "En los municipios vecinos, Camas pasó de 69 accidentes con víctimas en 2024 a 94 en 2025, y San Juan de Aznalfarache, de 19 a 28. En el conjunto de la provincia de Sevilla la subida fue del 4,2 %, hasta 4.946 accidentes.",
    "La estadística solo incluye los accidentes con al menos un herido o fallecido, no los que causan solo daños materiales. Los fallecidos se cuentan hasta 30 días después del accidente. Cada siniestro se asigna al municipio donde ocurre, no al domicilio de los implicados.",
    "<span class='howto'>Datos: microdatos de accidentes con víctimas de la DGT, años 2016 a 2025 (el de 2025 se publicó el 20 de octubre de 2026). Accidente urbano o interurbano según la vía. La DGT publica cada otoño los datos del año anterior: los de 2026 saldrán previsiblemente en el otoño de 2027.</span>"
   ],
   "seo": [
    "accidentes-trafico-coria-del-rio-2025-dgt",
    "Accidentes de tráfico en Coria del Río: 49 en 2025",
    "Coria del Río registró 49 accidentes de tráfico con víctimas en 2025, el máximo desde 2016, con 31 en vías urbanas, según los microdatos de la DGT.",
    [
     "accidentes de tráfico",
     "DGT",
     "seguridad vial",
     "A-8058",
     "atropellos",
     "Policía Local de Coria del Río"
    ]
   ]
  },
  {
   "id": "sociedades-creadas-coria-2026-borme",
   "sec": "economia",
   "kicker": "Empresas",
   "iso": "2026-11-23",
   "hora": "07:40",
   "src": "BORME",
   "fuente_url": "https://www.boe.es/diario_borme/",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Coria del Río suma 62 sociedades nuevas en 2026, un 37,8 % más que el año pasado",
   "sub": "El BORME publicó hasta el 20 de noviembre 17 constituciones más que en el mismo periodo de 2025; la provincia de Sevilla crece un 10,8 %",
   "caption": "Sociedades mercantiles constituidas por cada 10.000 habitantes en Coria del Río, Camas, San Juan de Aznalfarache y la provincia de Sevilla en 2026.",
   "foto": "sociedades-creadas-coria-2026-borme-gfx.jpg",
   "fotocredito": "Gráfico El Coriano",
   "encuadre": "contain",
   "claves": [
    "El BORME publicó entre el 1 de enero y el 20 de noviembre de 2026 la constitución de 62 sociedades con domicilio en Coria del Río, frente a 45 en el mismo periodo de 2025.",
    "Coria registra 19,8 sociedades nuevas por cada 10.000 habitantes, por debajo de la media de la provincia de Sevilla, de 23,6.",
    "En la provincia se constituyeron 4.669 sociedades, un 10,8 % más que en 2025.",
    "48 de las 62 sociedades de Coria se crearon con 3.000 euros de capital o menos."
   ],
   "body": [
    "El Boletín Oficial del Registro Mercantil (BORME) publicó entre el 1 de enero y el 20 de noviembre de 2026 la constitución de 62 sociedades con domicilio social en Coria del Río, un 37,8 % más que las 45 del mismo periodo de 2025, según el recuento de El Coriano.",
    "El crecimiento de Coria supera al de la provincia de Sevilla, donde se constituyeron 4.669 sociedades, un 10,8 % más que las 4.215 del año anterior. Coria es el municipio número 14 de la provincia por número de sociedades nuevas.",
    "## Por debajo de la media en relación con la población",
    "Pese a la subida, Coria sigue por debajo de la media provincial si se tiene en cuenta su población. Con el padrón del INE a 1 de enero de 2025, suma 19,8 sociedades nuevas por cada 10.000 habitantes, frente a 23,6 en el conjunto de la provincia.",
    "Entre los municipios vecinos, Camas pasó de 56 a 75 sociedades nuevas y alcanza 25,8 por cada 10.000 habitantes. San Juan de Aznalfarache bajó de 28 a 26, con 11,1 por cada 10.000.",
    "## Empresas pequeñas",
    "La mayoría de las sociedades de Coria nace con poco capital. De las 62, 48 declararon 3.000 euros o menos. Solo dos superaron los 60.000 euros, y la mayor se constituyó con 141.000. Desde la Ley 18/2022, de creación y crecimiento de empresas, una sociedad limitada puede constituirse con un euro, pero ninguna de las de Coria declaró menos de 3.000.",
    "La construcción y la actividad inmobiliaria aparecen en el objeto social de 15 de las nuevas sociedades, y la hostelería, en ocho. Muchas empresas declaran varias actividades a la vez, por lo que estas cifras no suman el total.",
    "El recuento no mide toda la actividad emprendedora: no incluye a los trabajadores autónomos, que no se inscriben en el Registro Mercantil, ni descuenta las sociedades que se disuelven. El domicilio social es el que figura en la escritura de constitución y no siempre coincide con el lugar donde la empresa trabaja.",
    "<span class='howto'>Datos: anuncios de constitución publicados en la sección primera del BORME (Registro Mercantil de Sevilla) del 1 de enero al 20 de noviembre de 2025 y de 2026, contados por el municipio del domicilio social. Población: padrón continuo del INE a 1 de enero de 2025. El Coriano actualizará el recuento con el año completo en enero.</span>"
   ],
   "seo": [
    "sociedades-creadas-coria-del-rio-2026",
    "Sociedades creadas en Coria del Río en 2026: 62",
    "El BORME publicó hasta el 20 de noviembre 62 sociedades nuevas con domicilio en Coria del Río, un 37,8 % más que en 2025; la provincia creció un 10,8 %.",
    [
     "creación de empresas",
     "BORME",
     "Registro Mercantil de Sevilla",
     "sociedades limitadas",
     "emprendimiento",
     "Camas"
    ]
   ]
  },
  {
   "id": "borriquita-celebra-xxv-aniversario-cristo-salud",
   "sec": "hermandades",
   "kicker": "Cristo de la Salud",
   "iso": "2026-11-22",
   "hora": "22:58",
   "src": "El Coriano",
   "fuente_url": "https://www.facebook.com/reel/1431772895788646/",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Borriquita celebra en San José los 25 años del Cristo de la Salud con misa e himno del Coro Chico",
   "sub": "El párroco José Iván Martín Pascual presidió la eucaristía de Cristo Rey, en la que también intervino el hermano mayor Joaquín Carrabeo.",
   "caption": "El párroco de San José, José Iván Martín Pascual, en el altar durante la misa por el XXV aniversario del Cristo de la Salud.",
   "foto": "borriquita-xxv-misa-tv.jpg",
   "fotocredito": "Coriavisión",
   "claves": [
    "La Hermandad de la Borriquita celebró el domingo 22 de noviembre, festividad de Cristo Rey, el XXV aniversario del Santísimo Cristo de la Salud en la Parroquia de San José.",
    "La misa la presidió el párroco de San José, José Iván Martín Pascual, y el Coro Chico interpretó el himno al Cristo de la Salud.",
    "En el acto intervino también el hermano mayor Joaquín Carrabeo."
   ],
   "body": [
    "La Hermandad de la Borriquita de Coria del Río celebró el domingo 22 de noviembre, festividad de Cristo Rey, el XXV aniversario de la llegada a Coria de su titular, el Santísimo Cristo de la Salud en su Sagrada Entrada en Jerusalén, con una misa en la Parroquia de San José a la que se sumó la comunidad parroquial.",
    "La eucaristía, prevista para las 12.00, la presidió el párroco de San José, José Iván Martín Pascual, que pronunció la homilía del aniversario. Como estaba anunciado, la celebración sirvió para dar gracias por los 25 años de culto a la imagen.",
    "## El himno, a cargo del Coro Chico",
    "El Coro Chico interpretó durante la celebración el himno al Cristo de la Salud. También tomó la palabra el hermano mayor Joaquín Carrabeo, que dedicó su intervención a los 25 años de la imagen en Coria.",
    "La Hermandad Sacramental de San José, que había anunciado su colaboración en el aniversario, organizaba después de la misa una convivencia en su nueva casa hermandad, abierta a la comunidad parroquial, como se recogió en la <a href='#borriquita-xxv-aniversario-cristo-salud'>previa de la efeméride</a>.",
    "## Una semana de cultos en Coria",
    "El aniversario del Señor de la Salud cerró una semana con varias citas en las hermandades corianas. La Hermandad de la Estrella, patrona de Coria del Río, eligió nuevo hermano mayor a <a href='#estrella-martin-cano-hermano-mayor'>José Manuel Martín Cano</a>, y el Gran Poder celebró el viernes 20 su <a href='#gran-poder-requiem-difuntos-2026'>misa de réquiem por los hermanos difuntos</a>.",
    "La Borriquita felicitó además ese mismo domingo a las bandas y coros que acompañan a sus titulares con motivo de Santa Cecilia, patrona de los músicos, entre ellos el Coro Chico y la Banda Municipal de Música de Coria del Río.",
    "<span class='howto'><b>Dónde verlo.</b> La homilía del párroco, las palabras del hermano mayor y el himno interpretado por el Coro Chico pueden verse completos en el perfil de Facebook de Coriavisión.</span>"
   ],
   "seo": [
    "borriquita-xxv-aniversario-cristo-de-la-salud-coria",
    "Borriquita: 25 años del Cristo de la Salud en Coria",
    "La Borriquita celebró en la Parroquia de San José de Coria del Río el XXV aniversario del Cristo de la Salud con misa e himno del Coro Chico.",
    [
     "Hermandad de la Borriquita",
     "Cristo de la Salud",
     "Parroquia de San José",
     "Coro Chico",
     "Cristo Rey",
     "hermandades de Coria"
    ]
   ]
  },
  {
   "id": "coria-cf-empata-la-palma",
   "sec": "deportes",
   "kicker": "Coria CF",
   "iso": "2026-11-22",
   "hora": "22:58",
   "src": "Coria CF (Facebook)",
   "fuente_url": "https://www.facebook.com/2069782470890433/posts/2077596196775727",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Coria CF empata 0-0 con La Palma en el Estadio Guadalquivir y sigue a tres puntos de su rival",
   "sub": "Los porteros evitaron el gol en un partido igualado; Andrés Terán y Angelma tuvieron las ocasiones más claras del equipo coriano.",
   "caption": "Cartel del Coria CF con el resultado final del partido ante La Palma CF.",
   "foto": "coria-cf-la-palma-empate-of.jpg",
   "fotocredito": "Facebook del Coria CF",
   "encuadre": "contain",
   "claves": [
    "El Coria CF y La Palma CF empataron 0-0 el domingo 22 de noviembre en el Estadio Guadalquivir, en la jornada 12 de División de Honor Sénior.",
    "Con el empate, el Coria pasa de 18 a 19 puntos y La Palma, de 21 a 22.",
    "El próximo partido del Coria CF es a domicilio, en Montalbán."
   ],
   "body": [
    "El Coria CF empató 0-0 con La Palma CF el domingo 22 de noviembre en el Estadio Guadalquivir de Coria del Río, en la duodécima jornada de la División de Honor Sénior. El club ha dado el resultado en su perfil de Facebook, donde describe el encuentro como muy igualado entre dos equipos que aspiran a subir de categoría.",
    "Según el Coria CF, los dos conjuntos tuvieron ocasiones para desempatar, pero los porteros evitaron el gol en ambas áreas. Por parte coriana, las oportunidades más claras fueron de Andrés Terán y Angelma, señala el club.",
    "## Tres puntos de distancia",
    "El partido enfrentaba a dos equipos de la zona alta. El Coria llegaba con 18 puntos y La Palma, con 21, de modo que una victoria local habría igualado a los dos en la clasificación, como se adelantó en la <a href='#coria-cf-la-palma-domingo-guadalquivir'>previa de la jornada</a>. Con el empate, el conjunto ribereño suma 19 puntos y el visitante, 22: la distancia entre ambos sigue siendo de tres puntos.",
    "El Coria venía de <a href='#coria-cf-gana-rinconada'>ganar 0-2 en La Rinconada</a> el domingo 15 de noviembre. Tras el empate, el club insiste en que el objetivo es seguir peleando por los puestos altos de la tabla.",
    "## Próxima jornada en Montalbán",
    "El equipo jugará la próxima jornada fuera de casa, en Montalbán. El club no ha detallado todavía el día ni la hora del encuentro.",
    "<span class='howto'><b>Resultado.</b> Coria CF 0 - La Palma CF 0 (División de Honor Sénior, jornada 12). Domingo 22 de noviembre, Estadio Guadalquivir. Próximo partido: en Montalbán.</span>"
   ],
   "seo": [
    "coria-cf-empate-la-palma-division-honor-jornada-12",
    "Coria CF 0-0 La Palma en el Estadio Guadalquivir",
    "El Coria CF empató 0-0 con La Palma CF en Coria del Río en la jornada 12 de División de Honor Sénior y se queda con 19 puntos, a tres del equipo onubense.",
    [
     "Coria CF",
     "La Palma CF",
     "Estadio Guadalquivir",
     "División de Honor Sénior",
     "Andrés Terán",
     "fútbol"
    ]
   ]
  },
  {
   "id": "ayuntamiento-actuaciones-avispas-coria",
   "sec": "coria",
   "kicker": "Control de plagas",
   "iso": "2026-11-22",
   "hora": "22:58",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1462666745995991",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Ayuntamiento de Coria del Río actúa en varios puntos del municipio por el aumento de avispas",
   "sub": "Los trabajos los hace una empresa de control de plagas a partir de los avisos de los vecinos en la aplicación Línea Verde y en Medio Ambiente.",
   "caption": "Un operario trata el arbolado de una zona verde de Coria del Río durante las actuaciones contra las avispas.",
   "foto": "avispas-control-plagas-coria-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río ha hecho en las últimas semanas actuaciones contra las avispas en distintos puntos del municipio.",
    "Los trabajos los realiza una empresa especializada en control de plagas.",
    "Las actuaciones responden a avisos de vecinos recibidos por la aplicación Línea Verde y por la Delegación de Medio Ambiente."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río ha llevado a cabo en las últimas semanas actuaciones en distintos puntos del municipio ante el aumento de la presencia de avispas. Así lo ha publicado el Consistorio en su perfil de Facebook el domingo 22 de noviembre.",
    "Los trabajos los realiza una empresa especializada en control de plagas. Según el Ayuntamiento, han servido para atender las solicitudes y los avisos que los vecinos han trasladado a través de la aplicación Línea Verde y de la Delegación de Medio Ambiente.",
    "## Avisos de los vecinos",
    "Las imágenes difundidas por el Consistorio muestran a un operario con equipo de protección tratando el arbolado de una zona verde.",
    "El Ayuntamiento no ha detallado en qué calles o zonas se ha actuado ni cuántos avisos ha recibido. Sí asegura que seguirá atendiendo las necesidades de los vecinos.",
    "Las actuaciones se suman a otros trabajos municipales de mantenimiento del espacio público de las últimas semanas, como la <a href='#retirada-escombros-alhambra-virgen-salud'>retirada de escombros entre las calles Alhambra y Virgen de la Salud</a>.",
    "<span class='howto'><b>Cómo avisar.</b> Los vecinos que detecten avisperos o una presencia anómala de avispas pueden comunicarlo al Ayuntamiento de Coria del Río a través de la aplicación Línea Verde o de la Delegación de Medio Ambiente. Teléfono del Ayuntamiento: 954 77 00 50.</span>"
   ],
   "seo": [
    "avispas-coria-del-rio-control-plagas-linea-verde",
    "Avispas en Coria del Río: actuaciones del Ayuntamiento",
    "El Ayuntamiento de Coria del Río ha tratado varios puntos del municipio por el aumento de avispas, con una empresa de plagas y tras avisos vecinales.",
    [
     "avispas",
     "control de plagas",
     "Línea Verde",
     "Medio Ambiente",
     "Ayuntamiento de Coria del Río"
    ]
   ]
  },
  {
   "id": "pastora-soler-encendido-navidad-madrid",
   "sec": "cultura",
   "kicker": "Pastora Soler",
   "iso": "2026-11-22",
   "hora": "08:00",
   "src": "El Coriano",
   "fuente_url": "https://www.youtube.com/watch?v=JQQc1UHtl1o&t=0s",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La coriana Pastora Soler canta «Quédate conmigo» en el encendido de las luces de Navidad de Madrid",
   "sub": "La artista actuó el sábado 21 de noviembre en la plaza de Cibeles, en la ceremonia que da paso al alumbrado navideño de la capital.",
   "caption": "Pastora Soler, durante su actuación en el encendido de las luces de Navidad en la plaza de Cibeles de Madrid.",
   "foto": "pastora-soler-encendido-navidad-madrid-tv.jpg",
   "fotocredito": "Coriavisión",
   "claves": [
    "Pastora Soler, natural de Coria del Río, cantó «Quédate conmigo» el sábado 21 de noviembre en el encendido de las luces de Navidad de Madrid.",
    "La ceremonia se celebró a las 19.00 en la plaza de Cibeles y la presentó el humorista Carlos Latre.",
    "Con «Quédate conmigo» la artista representó a España en el Festival de Eurovisión de 2012."
   ],
   "body": [
    "La cantante coriana Pastora Soler interpretó «Quédate conmigo» el sábado 21 de noviembre en la ceremonia de encendido de las luces de Navidad de Madrid, celebrada a las 19.00 en la plaza de Cibeles. La artista de Coria del Río fue la principal voz invitada de un acto que abre el alumbrado navideño de la capital.",
    "En la grabación de la actuación se ve a Pastora Soler, con un vestido rojo, cantar primero en solitario y después acompañada por un coro vestido de blanco. «Quédate conmigo» es la canción con la que representó a España en el Festival de Eurovisión de 2012, celebrado en Bakú.",
    "## Un acto con drones y fuegos artificiales",
    "Según el programa difundido por el Ayuntamiento de Madrid, el humorista Carlos Latre condujo la ceremonia, en la que también participaron el Coro Talía y jóvenes cantantes de Crescendo: Creamos Ópera, un programa de la Fundación Amigos del Teatro Real. El momento del encendido correspondió a cinco niños de Ceuta, con los que la capital quiso mostrar su apoyo a la ciudad autónoma.",
    "La celebración incluyó una exhibición de 500 drones, la primera de ese tipo en el centro de Madrid según el Ayuntamiento, y un castillo de fuegos artificiales. El alumbrado suma más de 14 millones de bombillas led en más de 250 puntos de los 21 distritos y estará encendido hasta el 6 de enero de 2027.",
    "## Una vecina con nombre propio en Coria",
    "Pastora Soler da nombre al Centro Cultural de la Villa de Coria, el principal escenario municipal, donde el 12 y el 13 de diciembre se celebrarán los <a href='#concierto-solidario-orfeon-sevilla-coria'>conciertos solidarios del Orfeón de Sevilla</a>. Su actuación en Madrid coincide con una semana de flamenco en el pueblo, que celebró el viernes su <a href='#noche-blanca-flamenco-coria-2026'>Noche Blanca del Flamenco</a>.",
    "<span class='howto'>La actuación completa de Pastora Soler en Cibeles se puede ver en el canal de YouTube de Coriavisión. Las luces de Navidad de Madrid se encienden cada día a las 18.00 hasta el 6 de enero de 2027.</span>"
   ],
   "seo": [
    "pastora-soler-quedate-conmigo-encendido-luces-navidad-madrid",
    "Pastora Soler canta en el encendido de Navidad de Madrid",
    "La coriana Pastora Soler cantó «Quédate conmigo» el 21 de noviembre en Cibeles, en el encendido de las luces de Navidad de Madrid, con Carlos Latre.",
    [
     "Pastora Soler",
     "Quédate conmigo",
     "luces de Navidad",
     "Madrid",
     "Cibeles",
     "Eurovisión"
    ]
   ]
  },
  {
   "id": "mas-sevilla-turistico-coria-dehesa-atalaya",
   "sec": "coria",
   "kicker": "Turismo activo",
   "iso": "2026-11-22",
   "hora": "08:00",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Concesion-definitiva-de-subvenciones-en-regimen-de-concurrencia-competitiva-a-municipios-salvo-la-capital-y-los-Ayuntamientos-beneficiarios-de-la-convocatoria-2025-para-el-programa-MAS-Sevilla-Tu/",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Diputación concede 500.000 euros a Coria del Río para infraestructuras de turismo activo en la dehesa La Atalaya",
   "sub": "Es la cantidad máxima del programa Más Sevilla Turístico 2026, que reparte 19,5 millones entre 44 ayuntamientos y adelanta el pago completo.",
   "caption": "Principales cifras de la subvención del programa Más Sevilla Turístico 2026 para Coria del Río.",
   "foto": "mas-sevilla-turistico-atalaya-gfx.jpg",
   "fotocredito": "Gráfico El Coriano",
   "encuadre": "contain",
   "claves": [
    "La Diputación de Sevilla ha concedido de forma definitiva 500.000 euros al Ayuntamiento de Coria del Río dentro del programa Más Sevilla Turístico 2026.",
    "El dinero es para el proyecto básico de construcción de infraestructuras de turismo activo en la dehesa La Atalaya.",
    "El programa reparte 19.515.830,40 euros entre 44 ayuntamientos de los 59 que lo pidieron.",
    "La Diputación pagará por adelantado el 100 % de cada subvención tras publicarse la concesión."
   ],
   "body": [
    "La Diputación de Sevilla ha concedido de forma definitiva 500.000 euros al Ayuntamiento de Coria del Río para el proyecto básico de construcción de infraestructuras de turismo activo en la dehesa La Atalaya. La ayuda forma parte del programa Más Sevilla Turístico 2026 y el acuerdo se ha publicado en el Boletín Oficial de la Provincia (BOP) del viernes 20 de noviembre.",
    "La concesión la aprobó el Pleno de la Diputación en su sesión ordinaria del 5 de noviembre. Coria recibe la cantidad máxima que permitían las bases, que fijaban un tope de 500.000 euros por entidad local y cubren el 100 % del presupuesto solicitado para cada actuación.",
    "## Qué financia el programa",
    "Más Sevilla Turístico 2026 subvenciona inversiones municipales que impulsen el turismo en tres líneas: alojamientos turísticos (hoteles, albergues, apartamentos, campings o casas rurales), áreas de pernocta para autocaravanas e infraestructuras de turismo activo que puedan atraer visitantes. El proyecto de Coria está incluido en esta última línea, la tercera.",
    "La convocatoria estaba abierta a todos los ayuntamientos y entidades locales autónomas de la provincia salvo la capital y los municipios que ya obtuvieron ayuda en la edición de 2025. El plazo de solicitud corrió del 15 de junio al 3 de julio y se presentaron 59 peticiones de otros tantos ayuntamientos.",
    "La Diputación reparte en total 19.515.830,40 euros entre 44 ayuntamientos. De las solicitudes restantes, siete fueron excluidas por no cumplir los requisitos y ocho se quedaron sin ayuda por falta de crédito, entre ellas las de los municipios vecinos de Gelves y Camas. La Puebla del Río obtiene 237.048,68 euros para un área de pernocta de autocaravanas.",
    "## Pago por adelantado",
    "En septiembre, el Pleno provincial cambió las bases para sustituir el pago fraccionado previsto al principio por un anticipo del 100 % de la subvención. Las transferencias a los ayuntamientos se harán efectivas tras la publicación de la concesión definitiva. La Diputación justifica el cambio en la necesidad de garantizar la suficiencia financiera de los municipios desde el inicio de los proyectos y de impulsar la ejecución inmediata de las inversiones.",
    "El anuncio del BOP identifica la actuación como un proyecto básico, pero no detalla qué instalaciones se construirán en la dehesa ni el calendario de las obras. El turismo es una de las líneas que el Ayuntamiento vincula a su agenda cultural, como recordó al firmar el <a href='#convenio-subvencion-asociacion-hasekura-2026'>convenio anual con la Asociación Hasekura</a>.",
    "<span class='howto'><b>Más Sevilla Turístico 2026.</b> Subvención para Coria del Río: 500.000 euros. Proyecto: infraestructuras de turismo activo en la dehesa La Atalaya. Publicado en el BOP de Sevilla número 225, del 20 de noviembre de 2026 (código BOP-SE-2026-225006). Contra el acuerdo cabe recurso de reposición en un mes o contencioso-administrativo en dos meses.</span>"
   ],
   "seo": [
    "diputacion-500000-euros-coria-del-rio-turismo-activo-dehesa-atalaya",
    "Coria del Río recibe 500.000 euros para turismo activo",
    "La Diputación de Sevilla concede 500.000 euros a Coria del Río para infraestructuras de turismo activo en la dehesa La Atalaya, con pago anticipado.",
    [
     "Diputación de Sevilla",
     "Más Sevilla Turístico",
     "turismo activo",
     "dehesa La Atalaya",
     "subvenciones",
     "BOP de Sevilla"
    ]
   ]
  },
  {
   "id": "noche-blanca-flamenco-coria-2026",
   "sec": "cultura",
   "kicker": "Noche Blanca del Flamenco",
   "iso": "2026-11-21",
   "hora": "22:59",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1461700716092594",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Noche Blanca del Flamenco recorre Coria del Río del Kiosco de la Música a la escalera del Cerro",
   "sub": "Una pasarela de complementos con alumnas del CEPER, el cante de Antonio Sánchez «El Cipri» y la guitarra del Conservatorio Pedro Gámez Laserna marcaron la cita del viernes 20.",
   "caption": "Participantes en la pasarela de complementos flamencos de la Noche Blanca del Flamenco, bajo la carpa de Protección Civil.",
   "foto": "noche-blanca-flamenco-coria-2026-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "La Noche Blanca del Flamenco se celebró el viernes 20 de noviembre de 2026 en varios espacios de Coria del Río.",
    "Arrancó en el Kiosco de la Música con una pasarela de complementos flamencos de Complementos Berila protagonizada por alumnas del CEPER Ribera del Guadalquivir.",
    "Antonio Sánchez «El Cipri» cantó en la puerta del Ayuntamiento por bulerías, soleares y fandangos.",
    "La jornada terminó en la escalera del Cerro con alumnos de guitarra del Conservatorio Pedro Gámez Laserna."
   ],
   "body": [
    "Coria del Río celebró el viernes 20 de noviembre la Noche Blanca del Flamenco, un recorrido por varios espacios del municipio con moda flamenca, cante y guitarra que empezó en el Kiosco de la Música y terminó en la escalera del Cerro. Así lo ha contado el Ayuntamiento en su perfil de Facebook.",
    "## Pasarela en el Kiosco de la Música",
    "La primera parada fue una pasarela de complementos flamencos montada en el Kiosco de la Música con la colaboración de la firma Complementos Berila. Desfilaron por la alfombra roja alumnas del CEPER Ribera del Guadalquivir, el centro de educación permanente de Coria. Protección Civil instaló una carpa para que las participantes pudieran resguardarse del sol y prepararse antes de salir, según la publicación municipal.",
    "## Cante en la puerta del Ayuntamiento",
    "El recorrido siguió en la puerta del Ayuntamiento, donde actuó el cantaor Antonio Sánchez, «El Cipri». Su repertorio pasó por bulerías, soleares y fandangos, de acuerdo con el Consistorio, que destaca la respuesta del público.",
    "El cierre, organizado por el CEPER de Coria del Río, fue en la escalera del Cerro. Allí, alumnos de guitarra del Conservatorio Pedro Gámez Laserna interpretaron varias piezas dedicadas a la Generación del 27, el grupo de poetas de los años veinte en el que figuran Federico García Lorca, Rafael Alberti y Luis Cernuda, entre otros.",
    "El Ayuntamiento presenta la cita como una celebración de una de las señas de identidad del pueblo y agradece su participación a las personas, entidades y colaboradores que la hicieron posible. No ha detallado cuánta gente asistió a cada parada.",
    "## Más flamenco la próxima semana",
    "La programación flamenca continúa el martes 24 de noviembre con la conferencia cantada <a href='#conferencia-fandangos-kiko-valle'>«Por un puñao de fandangos», de Kiko Valle</a>, en el Centro Cultural de la Villa Pastora Soler, con Antonio Moya a la guitarra y entrada libre.",
    "<span class='howto'>Próxima cita flamenca: conferencia «Por un puñao de fandangos», de Kiko Valle. Martes 24 de noviembre, 20.00, Centro Cultural de la Villa Pastora Soler. Entrada libre.</span>"
   ],
   "seo": [
    "noche-blanca-flamenco-coria-del-rio-2026",
    "Noche Blanca del Flamenco en Coria del Río: pasarela y cante",
    "Coria del Río celebró la Noche Blanca del Flamenco con pasarela de complementos, cante de El Cipri y guitarra en la escalera del Cerro el 20 de noviembre.",
    [
     "Noche Blanca del Flamenco",
     "flamenco",
     "CEPER Ribera del Guadalquivir",
     "El Cipri",
     "Conservatorio Pedro Gámez Laserna",
     "Kiosco de la Música"
    ]
   ]
  },
  {
   "id": "coria-cf-la-palma-domingo-guadalquivir",
   "sec": "deportes",
   "kicker": "Coria CF",
   "iso": "2026-11-21",
   "hora": "22:59",
   "src": "Coria CF (Facebook)",
   "fuente_url": "https://www.facebook.com/2069782470890433/posts/2076378070230873",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Coria CF recibe a La Palma, segunda, en un domingo con cuatro partidos en el Estadio Guadalquivir",
   "sub": "El Puebla CF jugará también en Coria su partido de liga porque su estadio de San Sebastián está en resiembra.",
   "caption": "Cartel del Coria CF para el partido ante La Palma CF del domingo 22 de noviembre.",
   "foto": "coria-cf-la-palma-cartel-of.jpg",
   "fotocredito": "Facebook del Coria CF",
   "encuadre": "contain",
   "claves": [
    "El Coria CF recibe a La Palma CF el domingo 22 de noviembre a las 12.00 en el Estadio Guadalquivir, en la jornada 12 de División de Honor Sénior.",
    "El Coria suma 18 puntos y La Palma, 21.",
    "El Estadio Guadalquivir acoge ese día otros tres partidos, entre ellos el Puebla CF-Villanueva, por la resiembra del estadio de La Puebla del Río."
   ],
   "body": [
    "El Coria CF recibe el domingo 22 de noviembre, a las 12.00, a La Palma CF en el Estadio Guadalquivir de Coria del Río, en la duodécima jornada de la División de Honor Sénior. El club, que ha anunciado la jornada en su perfil de Facebook, presenta el partido como relevante en la pelea por la cabeza de la liga.",
    "El partido terminó con <a href='#coria-cf-empata-la-palma'>empate a cero</a>: el Coria suma 19 puntos y La Palma, 22.",
    "El conjunto ribereño llega con 18 puntos y el visitante, con 21. Una victoria coriana dejaría a los dos equipos empatados en la clasificación. El Coria viene de <a href='#coria-cf-gana-rinconada'>ganar 0-2 en La Rinconada</a> el domingo 15 de noviembre, con goles de Carlos Rojas y Segua.",
    "## Cuatro partidos en el Guadalquivir",
    "El del primer equipo no es el único encuentro del día en el estadio coriano. A las 14.15, el Infantil B del Coria CF juega en Tercera Andaluza ante el tercer clasificado de su grupo. Según el club, el equipo encadena tres jornadas seguidas sin perder.",
    "A las 17.30 se disputa en Coria un partido de Segunda Andaluza Sénior en el que no participa ningún equipo local: el Puebla CF-Villanueva. El club de La Puebla del Río juega esta jornada en el Estadio Guadalquivir porque el césped de su campo, el Estadio San Sebastián, está en resiembra, explica el Coria CF.",
    "Cierra el día, a las 19.30, el Juvenil B del Coria CF, que recibe al CD Colegio Claret en Segunda Andaluza Juvenil. El equipo que entrena Mario Sales suma ocho puntos, por seis de su rival, al que el club considera un competidor directo.",
    "El fin de semana deportivo en Coria incluye también baloncesto: el Club Baloncesto Coria abrió gratis el partido de Tercera FEB de este sábado dentro de su <a href='#cb-coria-recogida-alimentos-entrada-gratis'>campaña de recogida de alimentos</a>.",
    "<span class='howto'>Domingo 22 de noviembre, Estadio Guadalquivir. 12.00: Coria CF-La Palma CF (División de Honor Sénior). 14.15: Coria CF Infantil B (Tercera Andaluza Infantil). 17.30: Puebla CF-Villanueva (Segunda Andaluza Sénior). 19.30: Coria CF Juvenil B-CD Colegio Claret (Segunda Andaluza Juvenil).</span>"
   ],
   "seo": [
    "coria-cf-la-palma-estadio-guadalquivir-jornada-12",
    "Coria CF-La Palma: duelo por arriba en el Guadalquivir",
    "El Coria CF, con 18 puntos, recibe a La Palma CF, con 21, el domingo 22 a las 12.00. El Puebla CF también juega en el Guadalquivir por la resiembra.",
    [
     "Coria CF",
     "La Palma CF",
     "Estadio Guadalquivir",
     "División de Honor Sénior",
     "Puebla CF",
     "fútbol base"
    ]
   ],
   "actualizada": "2026-11-22T22:58"
  },
  {
   "id": "convenio-subvencion-asociacion-hasekura-2026",
   "sec": "cultura",
   "kicker": "Coria y Japón",
   "iso": "2026-11-21",
   "hora": "22:59",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1461635659432433",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Ayuntamiento de Coria del Río firma con la Asociación Hasekura su convenio anual de subvención",
   "sub": "El alcalde, Modesto González, y el delegado de Cultura y Turismo, Victoriano Cancelo, rubricaron el acuerdo con la entidad que difunde la cultura japonesa.",
   "caption": "Firma del convenio de subvención entre el Ayuntamiento de Coria del Río y la Asociación Hasekura.",
   "foto": "convenio-hasekura-2026-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río y la Asociación Hasekura han firmado el convenio de subvención anual de la entidad.",
    "Firmaron por el Ayuntamiento el alcalde, Modesto González, y el delegado de Cultura y Turismo, Victoriano Cancelo.",
    "La Asociación Hasekura se dedica a difundir en Coria la cultura japonesa, vinculada a la escala de la embajada de Hasekura Tsunenaga en 1614."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río ha firmado con la Asociación Hasekura el convenio de subvención anual que financia parte de la actividad de esta entidad, dedicada a difundir la cultura japonesa en el municipio. Lo ha anunciado el Consistorio en su perfil de Facebook este sábado 21 de noviembre.",
    "Por parte municipal firmaron el alcalde, Modesto González, y el delegado de Cultura y Turismo, Victoriano Cancelo. El Ayuntamiento no ha detallado el importe de la subvención ni las actividades concretas que cubre el convenio.",
    "## Cultura y turismo",
    "Según el Consistorio, el acuerdo responde a su interés por difundir la cultura japonesa, que considera parte de la historia y la identidad de Coria, y sirve además para reforzar la agenda cultural local y el turismo internacional, porque atrae cada año a visitantes de otros países.",
    "El vínculo de Coria con Japón se remonta a 1614, cuando la embajada de Hasekura Tsunenaga hizo escala en el municipio. Parte de la comitiva se quedó a vivir en Coria y el apellido Japón es hoy frecuente entre sus vecinos.",
    "La firma llega pocas semanas después de que el municipio celebrara la decimonovena Semana de la Cultura Japonesa y días después de la <a href='#minamishimabara-visita-coria'>visita de una delegación de la ciudad japonesa de Minamishimabara</a>, encabezada por su alcalde, Aikawa Taketoshi, a la que también recibieron Modesto González y Victoriano Cancelo."
   ],
   "seo": [
    "convenio-subvencion-asociacion-hasekura-coria-2026",
    "Coria firma su convenio anual con la Asociación Hasekura",
    "El alcalde Modesto González y el delegado Victoriano Cancelo firman la subvención anual a la Asociación Hasekura, que difunde la cultura japonesa en Coria.",
    [
     "Asociación Hasekura",
     "Coria y Japón",
     "Hasekura Tsunenaga",
     "Victoriano Cancelo",
     "Modesto González",
     "subvenciones"
    ]
   ]
  },
  {
   "id": "concierto-solidario-orfeon-sevilla-coria",
   "sec": "cultura",
   "kicker": "Concierto solidario",
   "iso": "2026-11-21",
   "hora": "22:59",
   "src": "Club Baloncesto Coria (Facebook)",
   "fuente_url": "https://www.facebook.com/1805624228234571/posts/1812984827498511",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Orfeón de Sevilla dará dos conciertos en Coria del Río el 12 y 13 de diciembre a beneficio de la AECC",
   "sub": "Los organiza el Club Baloncesto Coria en el Centro Cultural de la Villa Pastora Soler, con entradas a 15 euros.",
   "caption": "Cartel del concierto solidario del Orfeón de Sevilla en el Centro Cultural de la Villa Pastora Soler.",
   "foto": "concierto-solidario-orfeon-sevilla-coria-cartel-of.jpg",
   "fotocredito": "Facebook del Club Baloncesto Coria",
   "encuadre": "contain",
   "claves": [
    "El Orfeón de Sevilla actuará en el Centro Cultural de la Villa Pastora Soler de Coria del Río el sábado 12 de diciembre a las 20.00 y el domingo 13 a las 19.00.",
    "Lo organiza el Club Baloncesto Coria, con la colaboración del Ayuntamiento, a beneficio de la Asociación Española Contra el Cáncer.",
    "La entrada general cuesta 15 euros y se vende en entradium.com."
   ],
   "body": [
    "El Orfeón de Sevilla ofrecerá dos conciertos solidarios en el Centro Cultural de la Villa Pastora Soler de Coria del Río, el sábado 12 de diciembre a las 20.00 y el domingo 13 a las 19.00. La recaudación será para la Asociación Española Contra el Cáncer (AECC), según ha anunciado el Club Baloncesto Coria, que organiza la cita, en su perfil de Facebook.",
    "El club ha trasladado la convocatoria a sus socios y les anima a participar. En el cartel figuran como colaboradores el Ayuntamiento de Coria del Río y el propio Orfeón de Sevilla.",
    "## Artistas invitados",
    "Junto al coro actuarán varios músicos invitados: Emilio Bautista al piano, Luis Salto al contrabajo, Antonio Alcántara a la batería y Marta del Pozo como voz, con Elena Gauna en la dirección. El cartel anuncia además una participación especial de Ehapo Santander como voz.",
    "La entrada general cuesta 15 euros y se compra en la plataforma Entradium. El club no ha detallado si habrá venta en taquilla el día del concierto.",
    "El concierto se suma a otra iniciativa solidaria del Club Baloncesto Coria en estas semanas: la <a href='#cb-coria-recogida-alimentos-entrada-gratis'>recogida de alimentos</a> que la entidad mantiene abierta hasta el 14 de diciembre. En su mensaje, el club vincula ambas acciones con los valores del deporte fuera de la cancha.",
    "<span class='howto'>Concierto solidario del Orfeón de Sevilla. Sábado 12 de diciembre, 20.00, y domingo 13 de diciembre, 19.00. Centro Cultural de la Villa Pastora Soler, Coria del Río. Entrada general: 15 euros en entradium.com. A beneficio de la Asociación Española Contra el Cáncer.</span>"
   ],
   "seo": [
    "concierto-solidario-orfeon-sevilla-coria-aecc",
    "Orfeón de Sevilla: concierto solidario en Coria del Río",
    "El Orfeón de Sevilla actúa el 12 y 13 de diciembre en el Centro Cultural Pastora Soler de Coria a beneficio de la AECC. Entradas a 15 euros en Entradium.",
    [
     "Orfeón de Sevilla",
     "Club Baloncesto Coria",
     "AECC",
     "Centro Cultural de la Villa Pastora Soler",
     "concierto solidario",
     "Navidad"
    ]
   ]
  },
  {
   "id": "estrella-martin-cano-hermano-mayor",
   "sec": "hermandades",
   "kicker": "Hermandad de la Estrella",
   "iso": "2026-11-21",
   "hora": "07:58",
   "src": "Hermandad Sacramental de San José (Facebook)",
   "fuente_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02ArPQxvkXRkikRfGxW4wJTtFtRjogE8H3ewZmSWkwg1vfeXKfG7X44pxqinzwFT9hl&id=61551796482920",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "José Manuel Martín Cano, elegido hermano mayor de la Hermandad de la Estrella, patrona de Coria del Río",
   "sub": "Encabezaba la única candidatura presentada al cabildo del jueves 19 y seguirá como secretario primero de la Hermandad de San José.",
   "caption": "José Manuel Martín Cano, nuevo hermano mayor, en una imagen difundida por la hermandad.",
   "foto": "estrella-martin-cano-hermano-mayor-of.jpg",
   "fotocredito": "Facebook de la Hermandad Sacramental de San José",
   "encuadre": "center 22%",
   "claves": [
    "José Manuel Martín Cano ha sido elegido hermano mayor de la Hermandad Sacramental de Nuestra Señora de la Estrella Coronada, patrona de Coria del Río.",
    "El cabildo general de elecciones se celebró el jueves 19 de noviembre, de 19.00 a 21.30, en la casa hermandad.",
    "Su candidatura fue la única presentada, según comunicó la Hermandad de la Estrella el día 18.",
    "Martín Cano es secretario primero de la Hermandad Sacramental de San José y mantendrá ese cargo."
   ],
   "body": [
    "José Manuel Martín Cano ha sido elegido hermano mayor de la Hermandad Sacramental de Nuestra Señora de la Estrella Coronada, patrona de Coria del Río, en el cabildo general de elecciones que la corporación celebró el jueves 19 de noviembre en su casa hermandad. Así lo ha comunicado la Hermandad Sacramental de San José en su perfil de Facebook.",
    "La Hermandad de San José ha felicitado públicamente a Martín Cano porque forma parte de su Junta de Gobierno, en la que ocupa el cargo de secretario primero. Según su publicación, del viernes 20, seguirá desempeñando esa responsabilidad en la corporación de la Parroquia de San José a la vez que asume la dirección de la hermandad de la patrona.",
    "## Una sola candidatura",
    "La elección no tuvo competencia. La Hermandad de la Estrella informó en su perfil de Facebook el miércoles 18, una vez cerrado el plazo de presentación, de que solo se había registrado una candidatura, la encabezada por Martín Cano. En ese comunicado la hermandad precisó que la lista estaba pendiente de la aprobación de la autoridad eclesiástica y convocó el cabildo para el jueves 19, de 19.00 a 21.30, en la casa hermandad.",
    "El cabildo, que El Coriano <a href='#borriquita-xxv-aniversario-cristo-salud'>incluyó el miércoles en su agenda cofrade</a>, coincidió con una semana de movimientos en las juntas y los cargos de las hermandades de Coria. La propia Hermandad de San José <a href='#san-jose-renueva-vestidores-capataces'>renovó el miércoles a sus vestidores y a dos de sus capataces</a>, días después de nombrar a un <a href='#san-jose-nuevo-capataz-piedad'>nuevo capataz para el paso de la Piedad</a>.",
    "La Hermandad de la Estrella no había detallado en sus redes, a primera hora del sábado 21, el resultado de la votación ni la composición completa de la nueva junta de gobierno.",
    "## Agradecimiento del nuevo hermano mayor",
    "Martín Cano ha respondido a la felicitación en la misma publicación de la Hermandad de San José. «Me siento profundamente agradecido por tantas palabras de afecto y buenos deseos», escribió el nuevo hermano mayor, que dio las gracias a la corporación y a quienes le han hecho llegar su enhorabuena."
   ],
   "seo": [
    "jose-manuel-martin-cano-hermano-mayor-estrella-coria",
    "Martín Cano, hermano mayor de la Estrella de Coria del Río",
    "La Hermandad de la Estrella, patrona de Coria del Río, elige hermano mayor a José Manuel Martín Cano, cabeza de la única candidatura del cabildo del 19.",
    [
     "Hermandad de la Estrella",
     "José Manuel Martín Cano",
     "hermano mayor",
     "Hermandad de San José",
     "cabildo de elecciones",
     "patrona de Coria"
    ]
   ]
  },
  {
   "id": "aldi-abre-supermercado-coria-del-rio",
   "sec": "economia",
   "kicker": "Nuevo supermercado",
   "iso": "2026-11-20",
   "hora": "08:01",
   "src": "El Coriano",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Aldi abre este viernes en Coria del Río un supermercado de más de 1.000 metros cuadrados con 15 trabajadores",
   "sub": "Ocho de los empleados son vecinos del municipio; la tienda está en la continuación de la calle Córdoba y tiene 78 plazas de aparcamiento.",
   "caption": "Principales cifras del nuevo supermercado de Aldi en Coria del Río.",
   "foto": "aldi-coria-del-rio-apertura-gfx.jpg",
   "fotocredito": "Gráfico El Coriano",
   "claves": [
    "Aldi abre el viernes 20 de noviembre de 2026 su primer supermercado en Coria del Río, en la continuación de la calle Córdoba, sin número.",
    "La tienda tiene más de 1.000 metros cuadrados de sala de ventas y 78 plazas de aparcamiento.",
    "La plantilla es de 15 personas, ocho de ellas vecinas de Coria.",
    "Abre de lunes a sábado, de 9.00 a 21.30."
   ],
   "body": [
    "La cadena de supermercados Aldi abre este viernes 20 de noviembre su primera tienda en Coria del Río. El establecimiento está en la continuación de la calle Córdoba, sin número, tiene una sala de ventas de más de 1.000 metros cuadrados y un aparcamiento de 78 plazas, y empieza a funcionar con una plantilla de 15 trabajadores.",
    "De esos 15 empleados, ocho son vecinos de Coria, según los datos que ha difundido la empresa con motivo de la apertura. El horario será de lunes a sábado, de 9.00 a 21.30.",
    "## Ofertas de apertura",
    "La compañía anuncia promociones y descuentos en una selección de productos durante las primeras semanas, con más de 100 ofertas especiales repartidas a lo largo de los tres primeros meses.",
    "Según la propia cadena, nueve de cada diez productos que vende son de marca propia y ocho de cada diez proceden de proveedores nacionales. La empresa atribuye a ese modelo un ahorro para las familias de más de 2.400 euros al año en la cesta de la compra, una cifra que es su estimación comercial.",
    "## La cadena en la provincia",
    "Con la tienda de Coria, Aldi suma cerca de 30 supermercados en la provincia de Sevilla, donde trabajan más de 600 personas, según la compañía. En Andalucía supera los 115 establecimientos y los 1.700 empleados, contando sus oficinas centrales y la plataforma logística que tiene en Dos Hermanas. Andalucía es la comunidad autónoma con más tiendas de la marca en España, a la que llegó en 2002.",
    "La apertura se produce en una semana de noticias de empleo en el municipio. El Ayuntamiento mantiene abierta hasta el 9 de diciembre la <a href='#inserta2-inscripcion-cursos-desempleados-9-diciembre'>inscripción en los cursos de Inserta2</a> para personas desempleadas y ha publicado en el Boletín Oficial de la Provincia las bases de una <a href='#bolsa-auxiliar-ayuda-domicilio-coria-2026'>bolsa de empleo de auxiliares de ayuda a domicilio</a>.",
    "<span class='howto'><b>Nuevo Aldi de Coria del Río.</b> Continuación de la calle Córdoba, s/n. Abre desde el viernes 20 de noviembre de 2026, de lunes a sábado, de 9.00 a 21.30. Aparcamiento de 78 plazas.</span>"
   ],
   "seo": [
    "aldi-abre-supermercado-coria-del-rio-calle-cordoba",
    "Aldi abre supermercado en Coria del Río con 15 empleos",
    "Aldi abre el 20 de noviembre en la calle Córdoba de Coria del Río una tienda de más de 1.000 metros cuadrados, con 15 trabajadores y 78 plazas de parking.",
    [
     "Aldi",
     "supermercado",
     "empleo",
     "comercio",
     "calle Córdoba",
     "aperturas"
    ]
   ]
  },
  {
   "id": "vencejos-cajas-nido-apadrinamiento-coria",
   "sec": "coria",
   "kicker": "Biodiversidad urbana",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1460506472878685",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Ayuntamiento de Coria del Río abre hasta el 4 de diciembre el apadrinamiento de cajas nido para vencejos",
   "sub": "Los vecinos y comercios interesados deben pedirlo por correo electrónico; se dará una caja por vivienda o local, por orden de llegada.",
   "caption": "Cartel de la campaña de apadrinamiento de cajas nido de vencejos.",
   "foto": "vencejos-cajas-nido-cartel-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río ofrece a vecinos y comercios apadrinar cajas nido de vencejos.",
    "Las solicitudes se envían a medioambiente@coriadelrio.es hasta el 4 de diciembre de 2026.",
    "Se adjudica una caja por vivienda o local, por orden de llegada, y se coloca en un lugar visible desde la calle.",
    "La campaña forma parte del Plan de Biodiversidad Urbana municipal."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río ha abierto una campaña para que vecinos y comercios apadrinen cajas nido de vencejos en sus viviendas y locales. Las solicitudes se pueden enviar hasta el 4 de diciembre de 2026, según ha publicado el Ayuntamiento en su perfil de Facebook.",
    "La iniciativa forma parte del Plan de Biodiversidad Urbana del Ayuntamiento, que según la publicación municipal reúne acciones para proteger y fomentar la fauna autóctona en el casco urbano. El Ayuntamiento justifica la campaña en el papel de los vencejos como aves insectívoras: sostiene que cada una puede consumir más de mil insectos al día, mosquitos incluidos.",
    "## Cómo pedir una caja",
    "Para participar hay que escribir a la dirección medioambiente@coriadelrio.es con el asunto «Campaña de apadrinamiento de cajas nido de vencejos». En el mensaje se deben indicar el nombre completo, la dirección de la vivienda o del local y un teléfono de contacto.",
    "Los vencejos son aves migratorias que pasan en la península la primavera y el verano, y crían en huecos de edificios y tejados. Las cajas nido les ofrecen un lugar para anidar en el casco urbano.",
    "Los vencejos son aves migratorias que pasan en la península la primavera y el verano, y anidan en huecos de edificios. Las cajas nido les ofrecen un lugar para criar en zonas urbanas.",
    "La campaña se suma a otras iniciativas ambientales municipales de las últimas semanas, como las <a href='#patrullas-verdes-coria'>Patrullas Verdes formadas por vecinos</a>.",
    "<span class='howto'>Plazo: hasta el 4 de diciembre de 2026. Solicitud: correo a medioambiente@coriadelrio.es con el asunto «Campaña de apadrinamiento de cajas nido de vencejos», indicando nombre completo, dirección y teléfono. Una caja por vivienda o local, por orden de llegada.</span>"
   ],
   "seo": [
    "vencejos-cajas-nido-apadrinamiento-coria-del-rio",
    "Cajas nido de vencejos en Coria del Río: cómo pedirlas",
    "El Ayuntamiento de Coria del Río abre hasta el 4 de diciembre el apadrinamiento de cajas nido de vencejos: una por vivienda o local, por orden de llegada.",
    [
     "vencejos",
     "cajas nido",
     "biodiversidad urbana",
     "medio ambiente",
     "Ayuntamiento de Coria del Río",
     "mosquitos"
    ]
   ],
   "iso": "2026-11-20",
   "hora": "22:58",
   "encuadre": "contain"
  },
  {
   "id": "cb-coria-recogida-alimentos-entrada-gratis",
   "sec": "deportes",
   "kicker": "Club Baloncesto Coria",
   "src": "Club Baloncesto Coria (Facebook)",
   "fuente_url": "https://www.facebook.com/1805624228234571/posts/1811789644284696",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Club Baloncesto Coria recoge alimentos y abre gratis el partido de Tercera FEB del sábado",
   "sub": "La campaña dura hasta el 14 de diciembre; el domingo el Primera Nacional recibe a Labradores y el Coria CF se mide a La Palma en el Guadalquivir.",
   "caption": "Cartel de la campaña de recogida de alimentos del Club Baloncesto Coria.",
   "foto": "cb-coria-recogida-alimentos-cartel-of.jpg",
   "fotocredito": "Facebook del Club Baloncesto Coria",
   "claves": [
    "El Club Baloncesto Coria recoge alimentos del 21 de noviembre al 14 de diciembre.",
    "La entrada al partido de Tercera FEB del sábado 21 de noviembre es gratuita y se invita a llevar un alimento.",
    "El club organiza el I Torneo de Navidad U12 los días 26, 27 y 28 de diciembre.",
    "El Coria CF recibe a La Palma CF a las 12.00 en el Estadio Guadalquivir en su próximo partido."
   ],
   "body": [
    "El Club Baloncesto Coria, de Coria del Río, inicia este sábado 21 de noviembre una recogida de alimentos que durará hasta el 14 de diciembre. Para arrancarla, la entrada al partido de su equipo de Tercera FEB de ese día será gratuita y el club pide a los aficionados que acudan con un alimento.",
    "El club lo ha comunicado en su perfil de Facebook, donde explica que lo recogido irá destinado a personas que lo necesitan. No ha detallado a qué entidad entregará los alimentos ni los puntos de recogida además del pabellón.",
    "## Un fin de semana con tres equipos en pista",
    "El partido del sábado corresponde a la octava jornada de Tercera FEB, en la que el equipo coriano busca su cuarta victoria, según el club. El domingo 22 juega en casa el equipo de Primera Nacional masculino, que recibe a Labradores en un encuentro que el club presenta como de los que «marcan el camino». Ese equipo viene de <a href='#cb-coria-n1-masculino-gana-huelva'>ganar 91-45 al Huelva La Luz</a>. El equipo femenino, por su parte, juega fuera este fin de semana, en Gines.",
    "El Club Baloncesto Coria también ha presentado el I Torneo de Navidad U12, que se disputará los días 26, 27 y 28 de diciembre. El club anuncia que quedan las últimas plazas y que irá dando a conocer en las próximas semanas los equipos participantes, los horarios y las actividades.",
    "## El Coria CF, ante La Palma",
    "En fútbol, el Coria CF juega su próximo partido en el Estadio Guadalquivir a las 12.00 ante La Palma CF, al que el club presenta en sus redes como un rival directo de la parte alta de la clasificación. El equipo llega tras <a href='#coria-cf-gana-rinconada'>ganar 0-2 en La Rinconada</a>.",
    "<span class='howto'>Recogida de alimentos del Club Baloncesto Coria: del 21 de noviembre al 14 de diciembre. Partido de Tercera FEB del sábado 21: entrada gratuita, con alimento solidario. I Torneo de Navidad U12: 26, 27 y 28 de diciembre, inscripción a través del club. Coria CF-La Palma CF: 12.00, Estadio Guadalquivir.</span>"
   ],
   "seo": [
    "club-baloncesto-coria-recogida-alimentos-tercera-feb",
    "CB Coria: recogida de alimentos y entrada gratis el sábado",
    "El Club Baloncesto Coria recoge alimentos hasta el 14 de diciembre y abre gratis el partido de Tercera FEB del sábado. El Coria CF recibe a La Palma CF.",
    [
     "Club Baloncesto Coria",
     "Tercera FEB",
     "recogida de alimentos",
     "Coria CF",
     "La Palma CF",
     "Torneo de Navidad U12"
    ]
   ],
   "iso": "2026-11-20",
   "hora": "22:58",
   "encuadre": "contain"
  },
  {
   "id": "ies-rodrigo-caro-plogging-ribera-guadalquivir",
   "sec": "rio",
   "kicker": "Ribera del Guadalquivir",
   "src": "El Coriano",
   "fuente_url": "https://www.youtube.com/watch?v=qQFze6mws-s&t=0s",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Alumnos de primero de ESO del IES Rodrigo Caro recogen basura en la ribera del Guadalquivir en Coria",
   "sub": "La actividad, organizada por los departamentos de Educación Física y Plástica, combina caminata, reciclaje y material para clase.",
   "caption": "Alumnos del IES Rodrigo Caro, durante la jornada de recogida de basura en la ribera del Guadalquivir.",
   "foto": "ies-rodrigo-caro-plogging-tv.jpg",
   "fotocredito": "Coriavisión",
   "claves": [
    "Alumnos de primero de ESO del IES Rodrigo Caro recogieron residuos en la ribera del Guadalquivir el viernes 20 de noviembre.",
    "La actividad, llamada plogging, une caminata o carrera con la recogida de basura y la organizan los departamentos de Educación Física y Plástica.",
    "Los alumnos separaron los residuos en bolsas amarilla, azul y negra con pinzas proporcionadas por el Ayuntamiento.",
    "El alcalde, Modesto González, y cuatro delegados municipales participaron en la jornada."
   ],
   "body": [
    "Los alumnos de primero de ESO del IES Rodrigo Caro de Coria del Río salieron el viernes 20 de noviembre a recoger basura en la ribera del Guadalquivir. La jornada, organizada por los departamentos de Educación Física y Plástica del instituto, sigue el formato del plogging: caminar o correr mientras se retiran residuos del entorno.",
    "Uno de los docentes que la han preparado explicó a El Coriano que el plogging es una actividad física en la que se camina o se corre y, a la vez, se recogen residuos del entorno. El centro eligió a los alumnos de primero porque son los más jóvenes del instituto: «Queremos concienciarlos desde su entrada en el instituto», señaló. Añadió que la basura tirada en el suelo es un problema que no se limita a Coria.",
    "## Tres bolsas y unas pinzas",
    "Los estudiantes separaron lo que encontraban en tres bolsas, amarilla, azul y negra, según el tipo de residuo. Para llegar a los plásticos enganchados en los matorrales usaron pinzas que ha proporcionado el Ayuntamiento de Coria del Río, lo que también evita mancharse las manos. Entre los restos aparecieron envases, plásticos y hasta un trozo de corcho.",
    "La actividad tiene una segunda parte en el aula. Además de basura, los alumnos recogieron hojas secas que el departamento de Plástica prensará para usarlas como soporte en sus trabajos de otoño.",
    "Los propios alumnos reconocieron que el problema empieza dentro del instituto, donde también se recoge mucha basura del suelo pese a que hay papeleras. «Las papeleras no están de decoración, están para tirar las cosas», resumió uno de ellos, que pidió al resto de compañeros del Rodrigo Caro que colaboren porque los residuos acaban en las pistas donde se dan las clases de Educación Física.",
    "## Presencia municipal",
    "El Ayuntamiento ha difundido la jornada en su perfil de Facebook. Según su publicación, en ella participaron el alcalde, Modesto González, y los delegados María José Cantón, Silvia Gracia, Juan Manuel Cordero y Teresa Estévez, que recogieron con los jóvenes «decenas de bolsas de basura» de la ribera. El Ayuntamiento atribuye la suciedad del río a la basura que se arroja en ese espacio y defiende la concienciación como herramienta contra el incivismo.",
    "La actividad coincide con otras actuaciones municipales contra los vertidos, como la <a href='#retirada-escombros-alhambra-virgen-salud'>retirada de escombros entre las calles Alhambra y Virgen de la Salud</a> de esta misma semana y la creación de las <a href='#patrullas-verdes-coria'>Patrullas Verdes de vecinos</a>.",
    "<span class='howto'>El reportaje completo de la jornada se puede ver en el canal de YouTube de Coriavisión. Para deshacerse de muebles y enseres sin dejarlos en la calle, el Ayuntamiento ofrece recogida gratuita a domicilio en el 955 891 091.</span>"
   ],
   "seo": [
    "ies-rodrigo-caro-plogging-ribera-guadalquivir-coria",
    "Plogging del IES Rodrigo Caro en la ribera de Coria",
    "Alumnos de primero de ESO del IES Rodrigo Caro recogen basura en la ribera del Guadalquivir en Coria del Río con una actividad de plogging y reciclaje.",
    [
     "IES Rodrigo Caro",
     "plogging",
     "Guadalquivir",
     "reciclaje",
     "educación ambiental",
     "incivismo"
    ]
   ],
   "iso": "2026-11-20",
   "hora": "22:58"
  },
  {
   "id": "soledad-restaura-caliz-plata",
   "sec": "hermandades",
   "kicker": "Patrimonio cofrade",
   "iso": "2026-11-20",
   "hora": "08:01",
   "src": "Hermandad de la Soledad (Facebook)",
   "fuente_url": "https://www.facebook.com/1568403328657029/posts/1571965474967481",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Hermandad de la Soledad de Coria recupera un antiguo cáliz de plata y lo vuelve a usar en la misa",
   "sub": "La pieza, una donación de hace años, no servía para la liturgia por su deterioro y se estrenó restaurada en la función al Cristo Yacente.",
   "caption": "El cáliz de plata recuperado por la Hermandad de la Soledad, en una imagen difundida por la hermandad.",
   "foto": "soledad-caliz-plata-of.jpg",
   "fotocredito": "Facebook de la Hermandad de la Soledad",
   "claves": [
    "La Hermandad de la Soledad de Coria del Río ha restaurado un antiguo cáliz de plata de ley destinado al culto.",
    "La pieza se estrenó el domingo 15 de noviembre en la Función Principal de los cultos al Santísimo Cristo Yacente.",
    "El cáliz llegó a la hermandad como donación hace varios años y su deterioro impedía usarlo en la liturgia."
   ],
   "body": [
    "La Hermandad de la Soledad de Coria del Río ha recuperado un antiguo cáliz de plata de ley, que vuelve a utilizarse en la misa tras su restauración. La corporación lo estrenó el domingo 15 de noviembre, durante la Función Principal de los cultos en honor al Santísimo Cristo Yacente, según ha publicado en su perfil de Facebook.",
    "El cáliz llegó a la hermandad como una donación hace varios años, pero su estado de deterioro impedía usarlo en las celebraciones litúrgicas. Tras el proceso de restauración, la pieza recupera su función en el altar. La hermandad no ha detallado en su publicación quién se ha encargado del trabajo ni cuánto ha costado.",
    "En su mensaje, la corporación del Barrio de la Soledad presenta la intervención como una forma de poner en valor una pieza de su historia y de asegurar su conservación para que siga al servicio del culto. La hermandad ha acompañado el anuncio con imágenes del fotógrafo Pedro Sánchez.",
    "## Una semana de actos en la Soledad",
    "La Función Principal del domingo 15, en la que se estrenó el cáliz, cerró los cultos al Cristo Yacente y la presidió Antonio Santos Moreno, párroco de Santa María de la Estrella y director espiritual de la hermandad. Ese mismo fin de semana, voluntarios de la corporación <a href='#soledad-caridad-banco-alimentos-brigada-nocturna'>colaboraron en la Gran Recogida del Banco de Alimentos</a> y su Diputación de Caridad entregó mantas y ropa de abrigo a La Brigada Nocturna.",
    "La próxima cita es el sábado 21 de noviembre, a las 12.00, en la capilla de Nuestra Señora de la Soledad, donde la hermandad <a href='#soledad-jarrillo-soleaero-2026-fernando-rasero'>entregará el V Jarrillo Soleaero a Fernando Rasero Pérez</a>. Después del acto, la casa hermandad quedará abierta para una convivencia con los asistentes.",
    "<span class='howto'><b>Próximo acto.</b> Entrega del V Jarrillo Soleaero: sábado 21 de noviembre de 2026, a las 12.00, en la capilla de Nuestra Señora de la Soledad (Coria del Río).</span>"
   ],
   "seo": [
    "soledad-coria-restaura-caliz-plata-cristo-yacente",
    "La Soledad de Coria restaura un antiguo cáliz de plata",
    "La Hermandad de la Soledad de Coria del Río estrenó el 15 de noviembre, en la función al Cristo Yacente, un antiguo cáliz de plata restaurado.",
    [
     "Hermandad de la Soledad",
     "Cristo Yacente",
     "patrimonio cofrade",
     "cáliz",
     "Barrio de la Soledad"
    ]
   ]
  },
  {
   "id": "bolsa-auxiliar-ayuda-domicilio-coria-2026",
   "sec": "economia",
   "kicker": "Bolsa de empleo",
   "iso": "2026-11-19",
   "hora": "23:00",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/export/sites/bop/.galleries/Documentos-Anuncios-en-PDF/firmado-1795046436467-final-747bb4ce.pdf",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Ayuntamiento de Coria del Río abre una bolsa de empleo de auxiliares de ayuda a domicilio",
   "sub": "Las solicitudes se presentan en diez días hábiles desde el 20 de noviembre y la selección es por concurso de méritos, sin examen.",
   "caption": "Gráfico con los datos principales de la bolsa de Auxiliar del Servicio de Ayuda a Domicilio.",
   "foto": "bolsa-auxiliar-ayuda-domicilio-coria-2026-gfx.jpg",
   "fotocredito": "Gráfico El Coriano",
   "encuadre": "contain",
   "claves": [
    "El Ayuntamiento de Coria del Río crea una bolsa para contratar de forma temporal a auxiliares del Servicio de Ayuda a Domicilio, según las bases publicadas el 19 de noviembre en el BOP de Sevilla.",
    "El plazo de solicitud es de diez días hábiles a contar desde el 20 de noviembre.",
    "Se exige el título de ESO o equivalente y una cualificación sociosanitaria, y la tasa es de 30 euros.",
    "La selección es por concurso: hasta 70 puntos por experiencia y 30 por formación."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río ha convocado una bolsa de trabajo para contratar como personal laboral temporal a auxiliares del Servicio de Ayuda a Domicilio. Las bases se publicaron el jueves 19 de noviembre en el Boletín Oficial de la Provincia (BOP) de Sevilla, y el plazo para presentar solicitudes es de diez días hábiles desde el día siguiente.",
    "La bolsa servirá para cubrir necesidades temporales del servicio, como sustituciones o vacantes mientras se resuelve un proceso de selección. Las plazas son de categoría C2. Las bases dejan claro que no es una vía para ocupar puestos definitivos y que figurar en ella no da derecho por sí mismo a un contrato. La jornada y el salario se remiten al convenio colectivo del personal laboral del Ayuntamiento.",
    "## Requisitos",
    "Las personas aspirantes deben tener al menos 16 años, el título de Graduado en Educación Secundaria Obligatoria (ESO) o equivalente y una cualificación profesional del ámbito sociosanitario. Valen, entre otros, los títulos de Técnico en Cuidados Auxiliares de Enfermería o de Técnico en Atención a Personas en Situación de Dependencia, los certificados de profesionalidad de atención sociosanitaria a personas en el domicilio o en instituciones y la habilitación excepcional o provisional que concede la Junta de Andalucía. Las bases no admiten sustituir el título por experiencia.",
    "## Cómo se puntúa",
    "No hay examen. La selección es un concurso de méritos con un máximo de 100 puntos. La experiencia suma hasta 70: 0,50 puntos por mes completo como auxiliar de ayuda a domicilio en una administración pública, 0,30 en otras entidades del sector público, 0,20 en empresas privadas y 0,15 en puestos de funciones parecidas, como gerocultor o auxiliar de enfermería. La formación suma hasta 30 puntos, según la duración de cada curso; los de menos de 25 horas no cuentan.",
    "La tasa es de 30 euros. Están exentas, entre otras, las personas demandantes de empleo que cumplan los requisitos de la ordenanza fiscal y las que tengan una discapacidad igual o superior al 33 %. Las familias numerosas de categoría general pagan la mitad, 15 euros, y las de categoría especial no pagan.",
    "Firma la resolución, del 16 de noviembre, la teniente de alcalde delegada de Recursos Humanos, Régimen Interior y Limpieza, Silvia Gracia Galán. Las listas de admitidos y de puntuaciones se publicarán en el tablón de la sede electrónica municipal, con cinco días hábiles para reclamar.",
    "<span class='howto'><b>Cómo presentarse.</b> Solicitud (anexo I) y autobaremación (anexo II) dirigidas al alcalde, con la titulación, los méritos y el justificante de la tasa. En el Registro General del Ayuntamiento (calle Cervantes, 69), en la sede electrónica (sede.coriadelrio.es) o por los medios de la Ley 39/2015. Plazo: diez días hábiles desde el 20 de noviembre; si no hay días inhábiles intermedios, termina el jueves 3 de diciembre. Tasa: 30 euros por transferencia, con el concepto «TASA BOLSA SAD 2026», el DNI o NIE y el nombre.</span>"
   ],
   "seo": [
    "bolsa-auxiliar-ayuda-domicilio-coria-del-rio",
    "Bolsa de ayuda a domicilio en Coria del Río: requisitos",
    "El Ayuntamiento de Coria del Río abre una bolsa de auxiliares de ayuda a domicilio: diez días hábiles desde el 20 de noviembre y concurso de méritos.",
    [
     "Servicio de Ayuda a Domicilio",
     "bolsa de empleo",
     "Ayuntamiento de Coria del Río",
     "BOP de Sevilla",
     "empleo público",
     "dependencia"
    ]
   ]
  },
  {
   "id": "retirada-escombros-alhambra-virgen-salud",
   "sec": "coria",
   "kicker": "Limpieza viaria",
   "iso": "2026-11-19",
   "hora": "23:00",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1459667589629240",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Ayuntamiento de Coria del Río retira escombros y basura del tramo entre las calles Alhambra y Virgen de la Salud",
   "sub": "El Consistorio recuerda que la recogida de muebles y enseres en la puerta de casa es gratuita y se pide en el 955 891 091.",
   "caption": "Restos acumulados antes de la limpieza, en una imagen difundida por el Ayuntamiento.",
   "foto": "retirada-escombros-alhambra-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río retiró el jueves 19 de noviembre escombros y basura del tramo que une las calles Alhambra y Virgen de la Salud.",
    "Según el Consistorio, algunas personas usan ese espacio como vertedero.",
    "La recogida de muebles y enseres en la puerta de casa es gratuita y se solicita en el teléfono 955 891 091."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río retiró el jueves 19 de noviembre escombros y basura acumulados en el tramo que conecta las calles Alhambra y Virgen de la Salud. Así lo ha publicado el Consistorio en su perfil de Facebook, donde explica que ese enclave «suele ser usado como vertedero» por algunas personas.",
    "El Ayuntamiento no ha detallado el volumen de residuos retirado ni cuántos trabajadores y vehículos participaron. Sí afirma que no es la primera vez que interviene en ese punto: habla de «una nueva retirada».",
    "## Muebles, latas y asientos de coche",
    "El alcalde, Modesto González Márquez, ha difundido en su perfil de Facebook un vídeo de la limpieza. En el mensaje que lo acompaña define el tramo como un «punto negro» de la limpieza del municipio y enumera lo que se ha encontrado: desde latas y botellas hasta asientos de vehículos y muebles.",
    "Según el Ayuntamiento, estos vertidos perjudican la salubridad, la imagen del municipio y el medio ambiente. El Consistorio atribuye el problema a que no se deposita la basura en su sitio ni se pide la recogida de los objetos voluminosos, un servicio que el propio Ayuntamiento presta sin coste.",
    "## Un servicio gratuito",
    "Los vecinos que quieran deshacerse de muebles o enseres pueden llamar al teléfono municipal 955 891 091 para que se los recojan en la puerta de casa. El Consistorio acompaña sus publicaciones sobre limpieza con las etiquetas #OletuCoriadelRio y #Coriacomounapatena.",
    "La actuación coincide con otras iniciativas municipales sobre el cuidado del espacio público, como las <a href='#patrullas-verdes-coria'>Patrullas Verdes</a>, un grupo de vecinos voluntarios que el Ayuntamiento presentó el lunes 16 de noviembre y que tiene una jornada formativa el martes 24 en la Casa de Barrio.",
    "<span class='howto'><b>Recogida de muebles y enseres.</b> Servicio municipal gratuito, en la puerta de casa. Se solicita en el teléfono 955 891 091.</span>"
   ],
   "seo": [
    "retirada-escombros-calle-alhambra-virgen-salud-coria",
    "Escombros en Coria del Río: limpieza en calle Alhambra",
    "El Ayuntamiento de Coria del Río retira escombros y basura entre las calles Alhambra y Virgen de la Salud y recuerda la recogida gratuita de enseres.",
    [
     "limpieza viaria",
     "vertidos ilegales",
     "calle Alhambra",
     "calle Virgen de la Salud",
     "recogida de enseres",
     "Modesto González Márquez"
    ]
   ]
  },
  {
   "id": "inserta2-inscripcion-cursos-desempleados-9-diciembre",
   "sec": "economia",
   "kicker": "Inserta2",
   "iso": "2026-11-19",
   "hora": "07:57",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1458996129696386",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Coria del Río abre hasta el 9 de diciembre la inscripción en los cursos de Inserta2 para personas desempleadas",
   "sub": "Los cursos son presenciales y se financian con el Fondo Social Europeo Plus dentro del programa estatal ÉFESO",
   "caption": "Cartel de los cursos gratuitos del proyecto Inserta2.",
   "foto": "inserta2-cursos-cartel-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "encuadre": "contain",
   "claves": [
    "El Ayuntamiento de Coria del Río ha abierto la inscripción en los cursos presenciales del proyecto Inserta2 para personas desempleadas.",
    "El plazo para inscribirse termina el miércoles 9 de diciembre de 2026.",
    "Inserta2-Coria del Río se financia con el Fondo Social Europeo Plus a través del Programa de Empleo, Educación, Formación y Economía Social (ÉFESO)."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río ha abierto hasta el miércoles 9 de diciembre de 2026 el plazo de inscripción en los cursos presenciales para personas desempleadas del proyecto Inserta2-Coria del Río. Lo ha anunciado este miércoles, 18 de noviembre, en su perfil de Facebook.",
    "Es la primera fecha de cierre que se conoce para la nueva tanda de formación del proyecto. El extracto de la <a href='#inserta2-septima-convocatoria'>séptima convocatoria de Inserta2</a>, publicado en el Boletín Oficial de la Provincia (BOP) de Sevilla del lunes 16 de noviembre, fijaba el inicio de la recogida de solicitudes ese mismo día, pero no indicaba cuándo terminaba.",
    "## Qué ofrece la última convocatoria",
    "La publicación municipal no detalla qué cursos incluye esta inscripción. La séptima convocatoria, la última que ha aparecido en el boletín provincial, recoge cuatro itinerarios: socorrismo en instalaciones acuáticas, operaciones básicas de albañilería y dos ediciones de atención sociosanitaria a personas dependientes en instituciones sociales, la formación que habilita para trabajar como auxiliar en residencias y centros de día.",
    "Según ese extracto, quienes ya pidieron plaza en alguno de estos itinerarios dentro de la quinta convocatoria no tienen que volver a hacerlo, porque sus solicitudes siguen siendo válidas. Las bases completas están en la <a href='https://www.infosubvenciones.es/bdnstrans/GE/es/convocatoria/822544'>Base de Datos Nacional de Subvenciones (BDNS), con el código 822544</a>.",
    "## Fondos europeos",
    "Inserta2 se financia con el Fondo Social Europeo Plus (FSE+) del periodo 2021-2027, a través del Programa de Empleo, Educación, Formación y Economía Social (ÉFESO). Es el proyecto con el que el Ayuntamiento ofrece itinerarios de formación e inserción laboral a vecinos sin empleo, con especial atención a los colectivos más alejados del mercado de trabajo.",
    "<span class='howto'><b>Inserta2-Coria del Río.</b> Cursos presenciales para personas desempleadas. Inscripción abierta hasta el miércoles 9 de diciembre de 2026. Bases y requisitos: BDNS 822544 y Ayuntamiento de Coria del Río.</span>"
   ],
   "seo": [
    "inserta2-coria-del-rio-inscripcion-cursos-desempleados",
    "Inserta2 Coria del Río: inscripción hasta el 9 de diciembre",
    "El Ayuntamiento de Coria del Río abre hasta el 9 de diciembre la inscripción en los cursos presenciales de Inserta2 para personas desempleadas.",
    [
     "Inserta2",
     "empleo",
     "personas desempleadas",
     "Fondo Social Europeo Plus",
     "programa ÉFESO",
     "formación"
    ]
   ]
  },
  {
   "id": "san-jose-renueva-vestidores-capataces",
   "sec": "hermandades",
   "kicker": "Hermandad de San José",
   "iso": "2026-11-19",
   "hora": "07:57",
   "src": "Hermandad Sacramental de San José (Facebook)",
   "fuente_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid021dhASdntQdeaiqNh6qmUVFacLCHDF7VPfiF2Le74Ma6ccfUwxqRuhQfJMHk2BXqhl&id=61551796482920",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Hermandad de San José de Coria renueva a sus dos vestidores y a los capataces del palio y del Señor de la Paz",
   "sub": "Leandro González, Rafael López, Mario Álvarez y Miguel Ángel Pérez seguirán en sus cargos con la nueva Junta de Gobierno",
   "caption": "Comunicado de la Hermandad Sacramental de San José sobre la renovación de sus cargos de confianza.",
   "foto": "san-jose-vestidores-capataces-of.jpg",
   "fotocredito": "Facebook de la Hermandad Sacramental de San José",
   "claves": [
    "La Junta de Gobierno de la Hermandad Sacramental de San José ha renovado cuatro cargos de confianza.",
    "Leandro González Ruiz y Rafael López Tello siguen como vestidores; Mario Álvarez Abad y Miguel Ángel Pérez Pascual, como capataces.",
    "La renovación llega dos días después del nombramiento de Álvaro Pastor Alés como nuevo capataz del paso de la Piedad."
   ],
   "body": [
    "La Junta de Gobierno de la Hermandad Sacramental de San José de Coria del Río ha renovado a las cuatro personas que ocupaban los cargos de confianza ligados al cuidado de sus titulares y a la dirección de dos de sus pasos. La hermandad lo ha comunicado este miércoles, 18 de noviembre, en su perfil de Facebook.",
    "Los renovados son los dos vestidores de las imágenes y los capataces del paso de palio y del paso de misterio del Señor de la Paz. La decisión la ha adoptado la nueva Junta de Gobierno, presidida por el hermano mayor, José Gómez Alfaro, que tomó posesión el viernes 13 de noviembre.",
    "## Quién sigue en cada cargo",
    "Leandro González Ruiz continúa como vestidor de María Santísima de Gracia y Esperanza y de Nuestra Señora de los Dolores. Rafael López Tello seguirá vistiendo a Nuestro Padre Jesús de la Paz en su Presentación al Pueblo.",
    "En los pasos, Mario Álvarez Abad, hermano de la corporación, mantiene la dirección del paso de palio de María Santísima de Gracia y Esperanza. Miguel Ángel Pérez Pascual seguirá como capataz del paso de Nuestro Padre Jesús de la Paz en su Presentación al Pueblo.",
    "Según la hermandad, la renovación busca dar continuidad a quienes ya venían ejerciendo estas responsabilidades. La Junta de Gobierno les ha agradecido públicamente su trabajo y su disposición a seguir.",
    "## El nuevo capataz de la Piedad",
    "El único relevo en los martillos se produjo dos días antes. El lunes 16 de noviembre la hermandad <a href='#san-jose-nuevo-capataz-piedad'>nombró a Álvaro Pastor Alés capataz del paso de la Piedad</a> del Santísimo Cristo de la Misericordia y Nuestra Señora de los Dolores, en sustitución de Javier Jiménez.",
    "La Parroquia de San José acogerá además el domingo 22 de noviembre, a las 12.00, la misa por el <a href='#borriquita-xxv-aniversario-cristo-salud'>XXV aniversario del Santísimo Cristo de la Salud</a>, titular de la Hermandad de la Borriquita, seguida de una convivencia en la nueva casa hermandad de San José.",
    "<span class='howto'><b>Hermandad Sacramental de San José.</b> Misa por el XXV aniversario del Cristo de la Salud (Borriquita): domingo 22 de noviembre, 12.00, Parroquia de San José. Reserva del boletín cuaresmal 2027: hasta el 20 de diciembre en secretario@sanjosecoria.org.</span>"
   ],
   "seo": [
    "hermandad-san-jose-coria-renueva-vestidores-capataces",
    "San José de Coria renueva a sus vestidores y capataces",
    "La Hermandad Sacramental de San José de Coria del Río renueva a sus dos vestidores y a los capataces del palio y del paso de Jesús de la Paz.",
    [
     "Hermandad Sacramental de San José",
     "capataces",
     "vestidores",
     "Jesús de la Paz",
     "Gracia y Esperanza",
     "Semana Santa 2027"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "25n-campana-ayuntamiento-2026",
   "sec": "coria",
   "kicker": "25N",
   "iso": "2026-11-18",
   "hora": "07:59",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1457813323148000",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Ayuntamiento de Coria del Río presenta su campaña del 25N con un cartel que imita una prueba de la vista",
   "sub": "La jornada central será el miércoles 25 de noviembre, con una marcha a las 10.00 desde la Plaza Santa Ángela de la Cruz hasta el Ayuntamiento.",
   "caption": "Cartel de la campaña municipal del 25N «Coria del Río mira de frente a la violencia de género».",
   "foto": "25n-campana-ayuntamiento-2026-cartel-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río ha presentado el martes 17 de noviembre su campaña por el 25N, Día Internacional de la Eliminación de la Violencia contra la Mujer.",
    "El cartel usa la imagen de una prueba oftalmológica para pedir a los vecinos que aprendan a identificar violencias poco visibles.",
    "El miércoles 25 de noviembre habrá una marcha a las 10.00 desde la Plaza Santa Ángela de la Cruz hasta el Ayuntamiento, con acto institucional y un Punto Violeta.",
    "El Centro Municipal de Información a la Mujer ha programado charlas, talleres y exposiciones entre noviembre y diciembre."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río ha presentado este martes, 17 de noviembre, su campaña con motivo del 25 de noviembre, Día Internacional de la Eliminación de la Violencia contra la Mujer. Lo ha hecho en su perfil de Facebook con un cartel que reproduce una prueba de la vista y con el lema «Coria del Río mira de frente a la violencia de género».",
    "El Consistorio ha completado la campaña con una programación de actividades organizada por el Centro Municipal de Información a la Mujer (CMIM) entre noviembre y diciembre, con charlas, talleres, exposiciones y actividades educativas. La jornada central será el miércoles 25 de noviembre, con una marcha que saldrá a las 10.00 de la Plaza Santa Ángela de la Cruz y terminará en el Ayuntamiento, donde se celebrará el acto institucional y se instalará un Punto Violeta.",
    "La idea del cartel, según explica el Consistorio, parte de una comparación: igual que hace falta graduar la vista para distinguir las letras más pequeñas de un optotipo, hace falta entrenar la mirada para detectar conductas que pasan inadvertidas por cotidianas.",
    "## Las violencias menos visibles",
    "El Ayuntamiento enumera en su mensaje varias de esas conductas: los micromachismos, los celos, los chantajes, el aislamiento y la desvalorización. Frente a ellas sitúa las formas de violencia que sí se ven a simple vista, como los asesinatos, las agresiones, las violaciones, los golpes y los abusos.",
    "La campaña termina con un llamamiento a la ciudadanía: «No apartemos la mirada. Aprendamos a reconocer todas las violencias». El Consistorio afirma que la fecha sirve para renovar su compromiso con la prevención, la sensibilización, la educación y la protección de las mujeres.",
    "La campaña llega un mes después de que el Ayuntamiento aprobara por unanimidad su <a href='#plan-igualdad-ayuntamiento-2026'>primer Plan de Igualdad municipal</a>, centrado en la igualdad de oportunidades y la no discriminación dentro de la plantilla del Consistorio.",
    "El 25 de noviembre fue declarado Día Internacional de la Eliminación de la Violencia contra la Mujer por la Asamblea General de las Naciones Unidas en 1999.",
    "<span class='howto'><b>Marcha del 25N.</b> Miércoles 25 de noviembre, 10.00, desde la Plaza Santa Ángela de la Cruz hasta el Ayuntamiento, con acto institucional y Punto Violeta. <b>Ayuda y atención.</b> Teléfono 016, gratuito y disponible las 24 horas; no deja rastro en la factura. También por WhatsApp en el 600 000 016 y por correo electrónico en 016-online@igualdad.gob.es. Teléfono del Instituto Andaluz de la Mujer: 900 200 999. En una emergencia, llama al 112.</span>"
   ],
   "seo": [
    "25n-coria-del-rio-campana-violencia-genero-2026",
    "25N en Coria del Río: campaña contra la violencia de género",
    "Coria del Río presenta su campaña del 25N y convoca una marcha el 25 de noviembre a las 10.00 desde la Plaza Santa Ángela de la Cruz al Ayuntamiento.",
    [
     "25N",
     "violencia de género",
     "Ayuntamiento de Coria del Río",
     "igualdad",
     "micromachismos",
     "016",
     "Punto Violeta"
    ]
   ],
   "encuadre": "contain",
   "actualizada": "2026-11-18T23:00"
  },
  {
   "id": "juzgados-coria-humedades-junta",
   "sec": "coria",
   "kicker": "Juzgados",
   "iso": "2026-11-18",
   "hora": "23:00",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1459052193024113",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Ayuntamiento de Coria del Río pide a la Junta que repare las humedades del edificio de los juzgados",
   "sub": "El alcalde visitó el miércoles las instalaciones a petición de las juezas y del personal, que reclaman obras desde 2024.",
   "caption": "El edificio de los juzgados de Coria del Río, en el vídeo difundido por el Ayuntamiento tras la visita.",
   "foto": "juzgados-coria-humedades-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El alcalde de Coria del Río, Modesto González Márquez, visitó el miércoles 18 de noviembre el edificio de los juzgados junto a varias concejalas del gobierno municipal.",
    "La visita se hizo a petición de las juezas y del personal, que denuncian filtraciones de agua, humedades y malos olores.",
    "El Ayuntamiento insta a la Junta de Andalucía a acometer las obras y sitúa las reclamaciones en 2024."
   ],
   "body": [
    "El alcalde de Coria del Río, Modesto González Márquez, visitó el miércoles 18 de noviembre el edificio de los juzgados de la localidad, acompañado por varias concejalas del gobierno municipal, para conocer los desperfectos que denuncian quienes trabajan en él. Según ha publicado el Ayuntamiento en su perfil de Facebook, la visita se hizo a petición de las juezas y del personal del juzgado.",
    "Los problemas que describe el Consistorio son filtraciones de agua, humedades y malos olores, que afectan tanto a los profesionales como a los ciudadanos que acuden a las dependencias judiciales. El Ayuntamiento afirma que el edificio arrastra estas deficiencias desde hace tiempo.",
    "## Quejas desde 2024",
    "En el vídeo que acompaña la publicación se califica el estado de las instalaciones de «realmente lamentable» y se sitúan en 2024 las primeras reclamaciones por la entrada de humedades. Según ese mensaje, los daños se concentran en las zonas más sensibles del edificio y hacen «prácticamente imposible» trabajar con normalidad.",
    "El Ayuntamiento pide a la Junta de Andalucía que «aborde de una vez por todas» la situación y que haga las obras necesarias. La comunidad autónoma es la administración que tiene transferidos desde 1997 los medios materiales de la Administración de Justicia en Andalucía, entre ellos el mantenimiento de los edificios judiciales.",
    "La publicación municipal no detalla qué actuaciones concretas reclama ni si se ha remitido una petición formal a la Consejería competente. Tampoco consta, por ahora, una respuesta pública de la Junta.",
    "El Consistorio cierra su mensaje con una reivindicación: que quienes trabajan en la justicia y quienes necesitan sus servicios dispongan de unas instalaciones adecuadas. Coria del Río es cabeza de partido judicial, por lo que sus juzgados atienden también a vecinos de otros municipios de la comarca."
   ],
   "seo": [
    "juzgados-coria-del-rio-humedades-filtraciones-junta",
    "Juzgados de Coria del Río: el Ayuntamiento pide obras",
    "El alcalde de Coria del Río visita los juzgados a petición de las juezas por filtraciones, humedades y malos olores y pide a la Junta que haga las obras.",
    [
     "juzgados",
     "Junta de Andalucía",
     "Modesto González Márquez",
     "Administración de Justicia",
     "humedades",
     "edificios públicos"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "ovac-oficina-virtual-atencion-ciudadania",
   "sec": "coria",
   "kicker": "Atención al vecino",
   "iso": "2026-11-18",
   "hora": "23:00",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1459054049690594",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Coria del Río abrirá una oficina virtual para atender a los vecinos por videollamada con cita previa",
   "sub": "El Ayuntamiento presentó la herramienta en la XIII Feria de la Innovación y Nuevas Tecnologías, en el Pabellón de la Navegación de Sevilla.",
   "caption": "Imagen difundida por el Ayuntamiento de Coria del Río con el anuncio de la oficina virtual.",
   "foto": "ovac-oficina-virtual-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río pondrá en marcha en los próximos días la Oficina Virtual de Atención a la Ciudadanía (OVAC).",
    "Los vecinos podrán pedir cita y ser atendidos por un empleado municipal mediante una videollamada, sin desplazarse.",
    "La delegada de Régimen Interior, Silvia Gracia, presentó el servicio en la XIII Feria de la Innovación y Nuevas Tecnologías de Sevilla."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río pondrá en marcha en los próximos días la Oficina Virtual de Atención a la Ciudadanía (OVAC), un servicio para que los vecinos puedan ser atendidos por un empleado municipal mediante videollamada, sin acudir a las dependencias municipales. Así lo ha anunciado el Consistorio en su perfil de Facebook.",
    "El funcionamiento que describe el Ayuntamiento tiene tres pasos: el vecino pide cita, atiende la videollamada a la hora fijada y recibe en ella el asesoramiento o la información que necesita. La publicación no concreta qué trámites se podrán resolver por esta vía, el horario de atención ni la fecha exacta de estreno.",
    "## Presentación en Sevilla",
    "El Consistorio presentó la herramienta en la XIII Feria de la Innovación y Nuevas Tecnologías, celebrada en el Pabellón de la Navegación de Sevilla, un encuentro dedicado a compartir experiencias sobre la transformación digital de los servicios públicos.",
    "La encargada de explicarla fue la delegada de Régimen Interior, Silvia Gracia. Según el Ayuntamiento, la oficina virtual combina el uso de las nuevas tecnologías con el trato personal, porque la atención la presta un trabajador municipal y no un sistema automático.",
    "El servicio se suma a la atención presencial en las dependencias municipales. Su diferencia, según la descripción del Ayuntamiento, es que permite hablar cara a cara con un empleado sin tener que desplazarse.",
    "<span class='howto'><b>Oficina Virtual de Atención a la Ciudadanía (OVAC).</b> Atención por videollamada con un empleado municipal, previa cita. Entrará en funcionamiento en los próximos días, según el Ayuntamiento de Coria del Río. El procedimiento de cita se anunciará en los canales municipales.</span>"
   ],
   "seo": [
    "oficina-virtual-atencion-ciudadania-coria-del-rio-videollamada",
    "Coria del Río abrirá una oficina virtual por videollamada",
    "El Ayuntamiento de Coria del Río estrenará en días la OVAC, una oficina virtual para atender a los vecinos por videollamada con cita previa.",
    [
     "OVAC",
     "atención ciudadana",
     "administración electrónica",
     "Silvia Gracia",
     "Ayuntamiento de Coria del Río",
     "Feria de la Innovación"
    ]
   ]
  },
  {
   "id": "escuela-tamborileros-manriqueno",
   "sec": "cultura",
   "kicker": "Tamborileros",
   "iso": "2026-11-18",
   "hora": "23:00",
   "src": "El Coriano",
   "fuente_url": "https://www.youtube.com/watch?v=D0_ROVBZnQg&t=0s",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La escuela de tamborileros de «el Manriqueño» enseña en Coria a tocar la gaita rociera y el tamboril",
   "sub": "La familia lleva cuatro generaciones tocando; dos hermanos dan las clases desde 2019 y animan a las mujeres a apuntarse.",
   "caption": "Un tamboril en la sede de la escuela de tamborileros de «el Manriqueño».",
   "foto": "escuela-tamborileros-manriqueno-tv.jpg",
   "fotocredito": "Coriavisión",
   "claves": [
    "La escuela de tamborileros de Antonio Díaz «el Manriqueño» enseña en Coria del Río a tocar la gaita rociera y el tamboril.",
    "La tradición familiar empezó con el bisabuelo; desde 2019 las clases las dan dos hermanos que recogieron el testigo de su abuelo.",
    "La escuela proporciona los instrumentos: las gaitas, de un fabricante de Coria, y los tambores, de elaboración propia."
   ],
   "body": [
    "La escuela de tamborileros de Antonio Díaz «el Manriqueño» enseña en Coria del Río a tocar la gaita rociera y el tamboril, los instrumentos que acompañan a las hermandades en las romerías, las ofrendas, la Navidad y otras fiestas del pueblo. La escuela abrió sus puertas a El Coriano para mostrar cómo se forma a los nuevos tamborileros.",
    "La tradición pasa de una generación a otra en la misma familia. Empezó el bisabuelo, siguió el abuelo y hoy dan las clases dos hermanos. Uno de ellos explicó a El Coriano que, hacia 2019, su abuelo, ya mayor, le ofreció quedarse con la escuela. Desde entonces la llevan los dos hermanos, que suman siete años al frente de las clases.",
    "## Tres agujeros y nueve notas",
    "La gaita rociera, o flauta rociera, tiene tres agujeros, según detalló el profesor. Con ellos se sacan nueve notas: tres bajas, tres medias y tres altas. «Con estas notas se toca todo»: bulerías, fandangos, sevillanas o villancicos. La habilidad del tamborilero, añadió, no está solo en tocar, sino en saber cómo funcionan sus instrumentos.",
    "El tamboril exige cuidado: con la humedad del invierno el parche se afloja y hay que tensarlo, y con el calor del camino se aprieta tanto que se puede romper. Por eso, insistió, hace falta buen oído también para comprobar que la cuerda vibra en su sitio.",
    "Los alumnos que hablaron con El Coriano coinciden en el origen de la afición: ver de pequeños a los tamborileros en la romería de San Lucas, en el Rocío o por las calles de Coria. Uno de ellos señaló como lo más difícil el ritmo de la rumba; otro describió los ensayos como una forma de desconectar de la semana.",
    "## Una invitación a las mujeres",
    "Aunque ahora los alumnos son hombres, por la escuela han pasado varias mujeres, que la fueron dejando con los años. Desde la escuela lanzan un mensaje para que se apunten: «Todas las mujeres estáis invitadas a venir aquí a probar un día».",
    "La escuela facilita los instrumentos a quien empieza. Las gaitas las compra a un fabricante de Coria y los tambores los hace el propio profesor.",
    "<span class='howto'><b>Vídeo completo.</b> El reportaje sobre la escuela de tamborileros puede verse en el canal de YouTube de Coriavisión, en el programa Coria al Día.</span>"
   ],
   "seo": [
    "escuela-tamborileros-manriqueno-coria-del-rio-gaita-rociera",
    "Escuela de tamborileros de Coria: la gaita del Manriqueño",
    "La escuela de tamborileros de Antonio Díaz «el Manriqueño» enseña gaita rociera y tamboril en Coria del Río y anima a las mujeres a sumarse a las clases.",
    [
     "tamborileros",
     "gaita rociera",
     "tamboril",
     "el Manriqueño",
     "romería de San Lucas",
     "Rocío",
     "tradiciones"
    ]
   ]
  },
  {
   "id": "san-silvestre-coriana-2026",
   "sec": "deportes",
   "kicker": "San Silvestre Coriana",
   "iso": "2026-11-18",
   "hora": "23:00",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1458654586397207",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La San Silvestre Coriana se correrá el domingo 27 de diciembre con cinco kilómetros por el Paseo Fluvial",
   "sub": "La inscripción cuesta 3 euros y habrá trofeos para los tres primeros de cada categoría y premios de 50 y 100 euros a los mejores disfraces.",
   "caption": "Presentación de la San Silvestre Coriana 2026 en el Ayuntamiento.",
   "foto": "san-silvestre-coriana-presentacion-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "La San Silvestre Coriana se celebrará el domingo 27 de diciembre con un recorrido de cinco kilómetros de ida y vuelta por el Paseo Fluvial.",
    "La organiza el Club Atletismo Coria con la colaboración del Ayuntamiento de Coria del Río.",
    "La inscripción cuesta 3 euros y se paga el día de la prueba; hay premios de 50 y 100 euros a los mejores disfraces."
   ],
   "body": [
    "Coria del Río celebrará el domingo 27 de diciembre una nueva edición de la San Silvestre Coriana, una carrera de cinco kilómetros de ida y vuelta por el Paseo Fluvial para despedir el año. La organiza el Club Atletismo Coria con la colaboración del Ayuntamiento, que ha dado a conocer los detalles de la prueba en su perfil de Facebook.",
    "El cartel anunciador se presentó el martes 17 de noviembre en el Salón de Plenos del Ayuntamiento, en un acto con el alcalde, Modesto González Márquez, y el delegado municipal de Deportes, Juan Manuel Cordero.",
    "## Salida en el Kiosco de la Música",
    "La salida y la recogida de dorsales serán en el Kiosco de la Música. Desde allí, los participantes recorrerán el Paseo Fluvial hasta el punto de giro y volverán por el mismo camino. La prueba admite tanto a quienes quieran correr como a quienes prefieran hacer el recorrido caminando, según el Ayuntamiento, que la plantea como una cita para participar en familia o con amigos.",
    "La inscripción cuesta 3 euros, que se pagan el mismo día de la carrera. El dorsal se puede reservar con el código QR del cartel o hasta dos horas antes de la salida. La publicación municipal no indica la hora de inicio de la prueba.",
    "## Trofeos y premios al disfraz",
    "Los tres primeros clasificados de las categorías masculina y femenina recibirán un trofeo. Como en otras San Silvestres, el disfraz también tiene premio: 50 euros para el mejor disfraz individual y 100 euros para el mejor disfraz de grupo, que debe estar formado por al menos cuatro personas con una misma temática.",
    "El Club Atletismo Coria es la entidad que forma a los corredores de la localidad y organiza la prueba junto al área municipal de Deportes.",
    "<span class='howto'><b>San Silvestre Coriana 2026.</b> Domingo 27 de diciembre. Salida y dorsales: Kiosco de la Música. Recorrido: 5 kilómetros de ida y vuelta por el Paseo Fluvial. Inscripción: 3 euros, el día de la prueba; reserva de dorsal con el QR del cartel o hasta dos horas antes de la salida. Premios: trofeos a los tres primeros de cada categoría; 50 euros al mejor disfraz individual y 100 euros al mejor de grupo (mínimo cuatro personas).</span>"
   ],
   "seo": [
    "san-silvestre-coriana-2026-coria-del-rio-27-diciembre",
    "San Silvestre Coriana 2026: 5 km el 27 de diciembre",
    "La San Silvestre Coriana se corre el domingo 27 de diciembre en Coria del Río: 5 km por el Paseo Fluvial, inscripción de 3 euros y premios al disfraz.",
    [
     "San Silvestre Coriana",
     "Club Atletismo Coria",
     "atletismo",
     "carrera popular",
     "Paseo Fluvial",
     "Juan Manuel Cordero",
     "Navidad"
    ]
   ]
  },
  {
   "id": "soledad-jarrillo-soleaero-2026-fernando-rasero",
   "sec": "hermandades",
   "kicker": "Jarrillo Soleaero",
   "iso": "2026-11-18",
   "hora": "23:00",
   "src": "Hermandad de la Soledad (Facebook)",
   "fuente_url": "https://www.facebook.com/1568403328657029/posts/1570582705105758",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Hermandad de la Soledad de Coria entrega el sábado 21 el V Jarrillo Soleaero a Fernando Rasero Pérez",
   "sub": "El acto será a las 12.00 en la capilla de la Virgen de la Soledad y terminará con una convivencia en la casa hermandad.",
   "caption": "Cartel del V Jarrillo Soleaero, que la Hermandad de la Soledad entrega a Fernando Rasero Pérez.",
   "foto": "soledad-jarrillo-soleaero-2026-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad de la Soledad",
   "claves": [
    "La Junta de Gobierno de la Hermandad de la Soledad de Coria del Río ha concedido el Jarrillo Soleaero 2026 a su hermano Fernando Rasero Pérez.",
    "Es la quinta edición de este reconocimiento, con el que la hermandad premia la trayectoria cofrade y el compromiso con la corporación.",
    "La entrega será el sábado 21 de noviembre a las 12.00 en la capilla de Nuestra Señora de la Soledad."
   ],
   "body": [
    "La Hermandad de la Soledad de Coria del Río entregará el sábado 21 de noviembre, a las 12.00, el V Jarrillo Soleaero a su hermano Fernando Rasero Pérez. El acto tendrá lugar en la capilla de Nuestra Señora de la Soledad, según ha anunciado la hermandad en su perfil de Facebook.",
    "La concesión la acordó la Junta de Gobierno reunida en cabildo de oficiales. Con este galardón, que llega a su quinta edición, la hermandad reconoce a hermanos con una trayectoria cofrade destacada y con dedicación a la corporación. En el caso de Rasero, la hermandad destaca su esfuerzo y su compromiso continuados.",
    "Al terminar la entrega, la casa hermandad quedará abierta para una convivencia con todos los asistentes.",
    "## Semanas de actividad en la Soledad",
    "El reconocimiento llega en unas semanas de actividad para la hermandad del Barrio de la Soledad. El fin de semana del 14 y 15 de noviembre, hermanos, devotos y miembros del Grupo Joven participaron como voluntarios en la Gran Recogida del Banco de Alimentos de Sevilla, y su Diputación de Caridad <a href='#soledad-caridad-banco-alimentos-brigada-nocturna'>donó mantas y ropa de abrigo a La Brigada Nocturna</a> para repartir entre personas sin hogar.",
    "Este miércoles 18 de noviembre, además, la casa hermandad acogió de 17.00 a 21.00 una campaña de donación de sangre.",
    "La hermandad no ha detallado en su anuncio la trayectoria de Fernando Rasero Pérez ni los cargos que ha ocupado en la corporación.",
    "<span class='howto'><b>V Jarrillo Soleaero.</b> Sábado 21 de noviembre, 12.00. Capilla de Nuestra Señora de la Soledad, Coria del Río. Después, convivencia en la casa hermandad, abierta a todos los asistentes.</span>"
   ],
   "seo": [
    "jarrillo-soleaero-2026-fernando-rasero-hermandad-soledad-coria",
    "Jarrillo Soleaero 2026 para Fernando Rasero en Coria",
    "La Hermandad de la Soledad de Coria del Río entrega el V Jarrillo Soleaero a Fernando Rasero Pérez el sábado 21 de noviembre a las 12.00 en su capilla.",
    [
     "Hermandad de la Soledad",
     "Jarrillo Soleaero",
     "Fernando Rasero Pérez",
     "reconocimientos cofrades",
     "Barrio de la Soledad",
     "casa hermandad"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "conferencia-fandangos-kiko-valle",
   "sec": "cultura",
   "kicker": "Flamenco",
   "iso": "2026-11-18",
   "hora": "23:00",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1458845143044818",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Kiko Valle da el martes 24 en Coria del Río la conferencia cantada «Por un puñao de fandangos»",
   "sub": "La cita será a las 20.00 en el Centro Cultural de la Villa Pastora Soler, con la guitarra de Antonio Moya y entrada libre.",
   "caption": "Cartel de la conferencia cantada «Por un puñao de fandangos», de Kiko Valle.",
   "foto": "conferencia-fandangos-kiko-valle-cartel-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Centro Cultural de la Villa Pastora Soler acoge el martes 24 de noviembre, a las 20.00, la conferencia «Por un puñao de fandangos».",
    "La imparte Kiko Valle con el subtítulo «Conferencia ilustrada al cante por un crítico osado», con Antonio Moya a la guitarra.",
    "La entrada es libre."
   ],
   "body": [
    "El Centro Cultural de la Villa Pastora Soler de Coria del Río acogerá el martes 24 de noviembre, a las 20.00, la conferencia «Por un puñao de fandangos», a cargo de Kiko Valle. La entrada es libre, según ha anunciado el Ayuntamiento en su perfil de Facebook.",
    "La propuesta lleva el subtítulo de «Conferencia ilustrada al cante por un crítico osado»: una charla sobre el fandango en la que la explicación se alterna con el cante. A la guitarra acompañará Antonio Moya.",
    "## El fandango, en el centro",
    "El Ayuntamiento presenta la velada como un acercamiento al flamenco desde una perspectiva distinta y centrada en el fandango, uno de los palos con más arraigo en la tradición local, según el Consistorio. La convocatoria se enmarca, añade, en la programación cultural que reivindica el flamenco como parte del patrimonio del municipio.",
    "El fandango es uno de los estilos flamencos más extendidos en Andalucía occidental, con numerosas variantes locales, especialmente en la provincia de Huelva, y está presente en romerías y fiestas de toda la comarca.",
    "<span class='howto'><b>«Por un puñao de fandangos».</b> Martes 24 de noviembre, 20.00. Centro Cultural de la Villa Pastora Soler, Coria del Río. Conferencia ilustrada al cante de Kiko Valle, con Antonio Moya a la guitarra. Entrada libre.</span>"
   ],
   "seo": [
    "por-un-punao-de-fandangos-kiko-valle-coria-del-rio",
    "Fandangos en Coria del Río: conferencia de Kiko Valle",
    "Kiko Valle ofrece el martes 24 de noviembre en el Centro Cultural Pastora Soler de Coria del Río una conferencia cantada sobre el fandango. Entrada libre.",
    [
     "flamenco",
     "fandango",
     "Kiko Valle",
     "Antonio Moya",
     "Centro Cultural de la Villa Pastora Soler",
     "conferencias"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "cb-coria-n1-masculino-gana-huelva",
   "sec": "deportes",
   "kicker": "Club Baloncesto Coria",
   "iso": "2026-11-18",
   "hora": "07:59",
   "src": "Club Baloncesto Coria",
   "fuente_url": "https://www.clubbaloncestocoria.es/web/resultados-partidos.aspx",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El N1 masculino del Club Baloncesto Coria gana 91-45 al Huelva La Luz y es segundo de su grupo",
   "sub": "El sénior masculino suma dos victorias en tres días y el N1 femenino cae ante el CB Ciudad de Dos Hermanas por 30-80.",
   "caption": "Ilustración genérica de la sección Deportes.",
   "foto": "generica-deportes.jpg",
   "fotocredito": "Archivo El Coriano",
   "claves": [
    "El equipo masculino del Club Baloncesto Coria en la Liga Nacional N1 ganó 91-45 al CD Baloncesto Huelva La Luz el domingo 15 de noviembre.",
    "Según el club, el equipo es segundo de su grupo tras la sexta jornada.",
    "El sénior masculino ganó 97-44 al CD Colegio Claret y 56-51 en la pista de Maristas Maxi.",
    "El N1 masculino juega el domingo 22 de noviembre a las 12.30 ante el Real Círculo de Labradores."
   ],
   "body": [
    "El equipo masculino del Club Baloncesto Coria en la Liga Nacional N1 ganó el domingo 15 de noviembre por 91-45 al CD Baloncesto Huelva La Luz, según los resultados que publica el club de Coria del Río en su web. La entidad ha informado en su perfil de Facebook de que el equipo es segundo de su grupo tras disputarse la sexta jornada.",
    "En la misma competición, el equipo femenino perdió ese domingo por 30-80 ante el CB Ciudad de Dos Hermanas.",
    "## Dos victorias del sénior masculino",
    "El sénior masculino cerró la semana con dos triunfos. El jueves 12 de noviembre ganó por 51-56 en la pista de Maristas Maxi y el sábado 14 se impuso por 97-44 al CD Colegio Claret. El club celebró además en sus redes una «nueva victoria» de su equipo de Tercera FEB, la tercera seguida según su mensaje, sin detallar el marcador.",
    "La cantera también dejó resultados amplios. El junior masculino XL ganó 133-30 al Círculo Mercantil e Industrial; el cadete femenino XL, 103-15 a Transportes Hijos de González La Vega, y el cadete masculino XL, 96-37 al CB Ciudad de Dos Hermanas Blanco. El infantil masculino, como ya contó El Coriano, <a href='#cb-coria-infantil-lider-invicto'>cerró la primera vuelta líder e invicto</a>.",
    "## Próximos partidos",
    "El N1 masculino visita el domingo 22 de noviembre, a las 12.30, al Real Círculo de Labradores en el CD Mar de Plata de Sevilla. El N1 femenino juega ese mismo día, a las 17.00, en el Pabellón Municipal de Gines ante el CD Gines Baloncesto.",
    "El sénior masculino tiene dos partidos seguidos: el domingo 22, a las 11.15, ante el Grupo Optik El Reverso CB en el pabellón del CD Bellavista, y el lunes 23, a las 20.30, recibe al Club Baloncesto Los Palacios en el pabellón municipal de Coria.",
    "El fin de semana deportivo en Coria lo completa el Coria CF, que tras <a href='#coria-cf-gana-rinconada'>ganar 0-2 en La Rinconada</a> recibe a La Palma CF en el Estadio Guadalquivir, según ha anunciado el club.",
    "<span class='howto'><b>Próximos partidos.</b> Domingo 22 de noviembre: Real Círculo de Labradores - CB Coria (N1 masculino), 12.30, CD Mar de Plata; CD Gines Baloncesto - CB Coria (N1 femenino), 17.00, Pabellón Municipal de Gines; Grupo Optik El Reverso CB - CB Coria (sénior masculino), 11.15, CD Bellavista. Lunes 23: CB Coria - CB Los Palacios (sénior masculino), 20.30, pabellón municipal de Coria.</span>"
   ],
   "seo": [
    "club-baloncesto-coria-n1-masculino-huelva-la-luz",
    "Club Baloncesto Coria: el N1 gana 91-45 y es segundo",
    "El N1 masculino del Club Baloncesto Coria gana 91-45 al Huelva La Luz y es segundo de grupo; el sénior suma dos victorias y la cantera golea.",
    [
     "Club Baloncesto Coria",
     "Liga Nacional N1",
     "baloncesto",
     "Huelva La Luz",
     "Tercera FEB",
     "deporte base"
    ]
   ]
  },
  {
   "id": "borriquita-xxv-aniversario-cristo-salud",
   "sec": "hermandades",
   "kicker": "Hermandad de la Borriquita",
   "iso": "2026-11-18",
   "hora": "07:59",
   "src": "Hermandad Sacramental de San José (Facebook)",
   "fuente_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02J1bteCqVXWsqwmRKQW1dyRWySWei4wTmAJzwzuu4kJfLExRPjEs4LnFcPQcMoEsHl&id=61551796482920",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Borriquita celebra el domingo 22 en la Parroquia de San José los 25 años del Cristo de la Salud",
   "sub": "La hermandad se une a la misa parroquial de las 12.00 por la festividad de Cristo Rey y después habrá una convivencia abierta en la casa hermandad de San José.",
   "caption": "Imagen difundida por la Hermandad de San José para anunciar el aniversario del Señor de la Salud.",
   "foto": "borriquita-xxv-aniversario-cristo-salud-of.jpg",
   "fotocredito": "Facebook de la Hermandad Sacramental de San José",
   "claves": [
    "La Hermandad de la Borriquita de Coria del Río celebra el domingo 22 de noviembre el XXV aniversario del Santísimo Cristo de la Salud en su Sagrada Entrada en Jerusalén.",
    "Se unirá a la misa parroquial de las 12.00 en la Parroquia de San José, en la festividad de Cristo Rey.",
    "Tras la misa habrá una convivencia abierta a la comunidad parroquial en la nueva casa hermandad de San José."
   ],
   "body": [
    "La Hermandad de la Borriquita de Coria del Río celebrará el domingo 22 de noviembre, festividad de Cristo Rey, el XXV aniversario de su titular, el Santísimo Cristo de la Salud en su Sagrada Entrada en Jerusalén. Lo hará en la Parroquia de San José, según ha publicado la Hermandad Sacramental de San José en su perfil de Facebook.",
    "La corporación se sumará a la misa parroquial de las 12.00, en la que se darán gracias por los 25 años de culto a la imagen y se recordará a las personas que han contribuido en este tiempo a su culto y a la vida de la hermandad.",
    "## Convivencia en la casa hermandad",
    "Al terminar la misa, la Hermandad Sacramental de San José organiza una convivencia en su nueva casa hermandad. Será un encuentro abierto a toda la comunidad parroquial, en el que los hermanos de San José compartirán la jornada con los de la Borriquita.",
    "La Hermandad de San José, que <a href='#san-jose-nuevo-capataz-piedad'>estrenó Junta de Gobierno y nombró nuevo capataz para el paso de la Piedad</a> la semana pasada, presenta su colaboración en el aniversario como una forma de estrechar los lazos entre ambas corporaciones y la parroquia.",
    "## Agenda cofrade de la semana",
    "El aniversario cierra una semana con otras citas en las hermandades de Coria. La Hermandad de la Estrella, patrona de Coria del Río, celebra el jueves 19 de noviembre su cabildo general de elecciones, de 19.00 a 21.30, en la casa hermandad, según el aviso publicado en su web.",
    "Al día siguiente, el viernes 20, la Hermandad del Gran Poder celebra a las 20.45 en su capilla la <a href='#gran-poder-requiem-difuntos-2026'>misa de réquiem por sus hermanos difuntos</a>.",
    "<span class='howto'><b>XXV aniversario del Cristo de la Salud.</b> Domingo 22 de noviembre, a las 12.00, misa en la Parroquia de San José de Coria del Río. Después, convivencia abierta a la comunidad parroquial en la casa hermandad de San José. Cabildo de elecciones de la Estrella: jueves 19, de 19.00 a 21.30, casa hermandad.</span>"
   ],
   "seo": [
    "borriquita-coria-xxv-aniversario-cristo-salud",
    "Borriquita de Coria: 25 años del Cristo de la Salud",
    "La Hermandad de la Borriquita de Coria del Río celebra el domingo 22 de noviembre, a las 12.00, el XXV aniversario del Cristo de la Salud en San José.",
    [
     "Hermandad de la Borriquita",
     "Cristo de la Salud",
     "Parroquia de San José",
     "Cristo Rey",
     "Hermandad de la Estrella",
     "Gran Poder"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "pgom-avance-territorio-ciudad",
   "sec": "coria",
   "kicker": "Plan General",
   "iso": "2026-11-17",
   "hora": "23:00",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1458011553128177",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Ayuntamiento de Coria del Río prevé recibir antes de fin de año el Avance del nuevo Plan General",
   "sub": "La empresa redactora, Territorio y Ciudad, ha presentado el diagnóstico territorial y la planimetría que delimitará los tipos de suelo del término",
   "caption": "Reunión de trabajo sobre el Avance del Plan General, en una imagen difundida por el Ayuntamiento.",
   "foto": "pgom-avance-reunion-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río se reunió el martes 17 de noviembre de 2026 con Territorio y Ciudad, la empresa que redacta el nuevo Plan General de Ordenación Municipal (PGOM).",
    "El equipo redactor presentó el diagnóstico territorial y la planimetría que servirá para delimitar los tipos de suelo del término municipal.",
    "El objetivo es que la empresa presente la propuesta de Avance del PGOM antes de que termine 2026.",
    "El gobierno municipal quiere llevar el Avance al Pleno y abrirlo después a sugerencias de los vecinos, aunque ese trámite no es obligatorio."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río se reunió el martes 17 de noviembre con Territorio y Ciudad, la empresa encargada de redactar el nuevo Plan General de Ordenación Municipal (PGOM), para revisar el estado de los trabajos. Según ha publicado el Ayuntamiento en su perfil de Facebook, el objetivo es que la empresa presente la propuesta de Avance del plan antes de que acabe el año.",
    "El PGOM es el documento que ordena el suelo de todo el término municipal: dónde se puede construir, qué terrenos quedan protegidos y hacia dónde puede crecer el pueblo. Es la herramienta que fija las reglas del urbanismo coriano para los próximos años.",
    "## Diagnóstico y áreas de oportunidad",
    "En la reunión, el equipo redactor presentó el diagnóstico territorial y la planimetría ya elaborada. Ese trabajo permitirá delimitar las distintas tipologías de suelo conforme a la legislación vigente y a las normas urbanísticas aplicables, según la nota municipal.",
    "Uno de los puntos centrales del documento será la identificación de las futuras zonas de expansión de Coria, lo que en la jerga urbanística se denominan áreas de oportunidad. Son los espacios en los que se estudiará cómo puede crecer la localidad de forma ordenada.",
    "El Ayuntamiento señala que el término está condicionado por importantes espacios de protección ligados al dominio público del Guadalquivir y por factores climatológicos y naturales que, a su juicio, exigen cautela a la hora de definir los usos del suelo. La nota no detalla cuáles son esas áreas de oportunidad ni su superficie.",
    "## Un Avance que irá al Pleno",
    "El Avance es una fase previa del plan. Según el Ayuntamiento, este trámite no es preceptivo ni obligatorio, pero el gobierno municipal, que preside el alcalde Modesto González Márquez (Andalucía por Sí), plantea llevar el documento a aprobación en el Pleno.",
    "Después, siempre según la nota municipal, el Avance se abriría al conocimiento de los vecinos para que puedan presentar sugerencias y aportaciones antes de que el plan siga su tramitación.",
    "<span class='howto'><b>Próximo paso.</b> Presentación de la propuesta de Avance del PGOM por parte de Territorio y Ciudad, prevista antes de que termine 2026. El Ayuntamiento quiere llevarla al Pleno y abrir después un periodo de sugerencias de los vecinos, cuyas fechas aún no ha anunciado.</span>"
   ],
   "seo": [
    "pgom-coria-del-rio-avance-territorio-ciudad",
    "Plan General de Coria del Río: Avance antes de fin de año",
    "El Ayuntamiento de Coria del Río revisa con Territorio y Ciudad el nuevo Plan General y prevé tener el Avance antes de fin de año para llevarlo al Pleno.",
    [
     "PGOM",
     "Plan General de Ordenación Municipal",
     "urbanismo",
     "Territorio y Ciudad",
     "Guadalquivir",
     "Pleno"
    ]
   ]
  },
  {
   "id": "soledad-caridad-banco-alimentos-brigada-nocturna",
   "sec": "hermandades",
   "kicker": "Caridad",
   "iso": "2026-11-17",
   "hora": "23:00",
   "src": "Hermandad de la Soledad (Facebook)",
   "fuente_url": "https://www.facebook.com/1568403328657029/posts/1569458778551484",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Hermandad de la Soledad de Coria del Río colabora en la Gran Recogida y dona mantas a La Brigada Nocturna",
   "sub": "Hermanos, devotos y el Grupo Joven hicieron de voluntarios en los supermercados del pueblo el pasado fin de semana",
   "caption": "Voluntarias de la Hermandad de la Soledad, con alimentos de la Gran Recogida en un supermercado de Coria.",
   "foto": "soledad-caridad-banco-alimentos-brigada-nocturna-of.jpg",
   "fotocredito": "Facebook de la Hermandad de la Soledad",
   "claves": [
    "La Hermandad de la Soledad de Coria del Río participó el fin de semana del 14 y 15 de noviembre en la Gran Recogida del Banco de Alimentos de Sevilla.",
    "Hermanos, devotos y miembros del Grupo Joven atendieron como voluntarios los supermercados de la localidad.",
    "Su Diputación de Caridad recogió mantas y ropa de abrigo que ha donado a La Brigada Nocturna para su reparto entre personas sin hogar."
   ],
   "body": [
    "La Hermandad de la Soledad de Coria del Río colaboró el pasado fin de semana con el Banco de Alimentos de Sevilla en su Gran Recogida de Alimentos, con voluntarios en los distintos supermercados de la localidad. Así lo ha publicado la hermandad en su perfil de Facebook este martes 17 de noviembre.",
    "Según la corporación, participaron hermanos, devotos y miembros de su Grupo Joven, que se repartieron por los establecimientos para recoger los productos que donaban los clientes. La recogida está destinada a familias que atraviesan dificultades económicas. La hermandad no ha facilitado cuántos kilos se reunieron en Coria.",
    "## Mantas para personas sin hogar",
    "Además, la Diputación de Caridad de la Soledad ha organizado una campaña de recogida de mantas y ropa de abrigo. Todo lo reunido se ha entregado a La Brigada Nocturna, una entidad que reparte ayuda por la noche entre personas sin hogar y que se ha encargado de su distribución.",
    "La hermandad ha agradecido en su publicación la participación de voluntarios y donantes.",
    "La Soledad cerró también el domingo 15 de noviembre los cultos en honor al Santísimo Cristo Yacente con su Función Principal, que presidió Antonio Santos Moreno, párroco de Santa María de la Estrella y director espiritual de la hermandad, según ha difundido la propia corporación."
   ],
   "seo": [
    "soledad-coria-gran-recogida-banco-alimentos-brigada-nocturna",
    "La Soledad de Coria, con la Gran Recogida y los sin hogar",
    "La Hermandad de la Soledad de Coria del Río fue voluntaria en la Gran Recogida del Banco de Alimentos y donó mantas y ropa de abrigo a La Brigada Nocturna.",
    [
     "Hermandad de la Soledad",
     "Banco de Alimentos de Sevilla",
     "Gran Recogida",
     "La Brigada Nocturna",
     "caridad",
     "Grupo Joven"
    ]
   ]
  },
  {
   "id": "cautivo-iguala-ensayos-costaleros-2027",
   "sec": "hermandades",
   "kicker": "Lunes Santo",
   "iso": "2026-11-17",
   "hora": "23:00",
   "src": "Hermandad del Cautivo (Facebook)",
   "fuente_url": "https://www.facebook.com/1602534325242911/posts/1603564091806601",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Hermandad del Cautivo de Coria del Río cita a sus costaleros a la igualá el 8 de enero",
   "sub": "Los capataces de Nuestro Padre Jesús Cautivo fijan tres ensayos, el 16 de enero, el 6 de febrero y el 13 de marzo, de cara al Lunes Santo",
   "caption": "Cartel de la igualá y los ensayos de la cuadrilla de costaleros de Nuestro Padre Jesús Cautivo.",
   "foto": "cautivo-iguala-ensayos-costaleros-2027-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad del Cautivo",
   "claves": [
    "La Hermandad de Nuestro Padre Jesús Cautivo de Coria del Río celebrará la igualá de su cuadrilla de costaleros el viernes 8 de enero de 2027, a las 21.00, en la casa hermandad.",
    "Los ensayos serán los sábados 16 de enero, 6 de febrero y 13 de marzo de 2027, a las 16.30.",
    "La convocatoria es del equipo de capataces, de cara a la salida del Lunes Santo."
   ],
   "body": [
    "La Hermandad de Nuestro Padre Jesús Cautivo de Coria del Río ha convocado la igualá de la cuadrilla de costaleros de su titular para el viernes 8 de enero de 2027, a las 21.00, en la casa hermandad. Así lo ha publicado la corporación en su perfil de Facebook, donde ha difundido también el calendario de ensayos.",
    "La convocatoria la firma el equipo de capataces del Cautivo y mira a la próxima salida procesional de la hermandad, el Lunes Santo, que en 2027 cae el 22 de marzo.",
    "## Tres ensayos antes de la Semana Santa",
    "Tras la igualá, en la que los capataces miden a los costaleros y les asignan su sitio bajo el paso, la cuadrilla tiene previstos tres ensayos. Serán el sábado 16 de enero, el sábado 6 de febrero y el sábado 13 de marzo, todos a las 16.30.",
    "El último ensayo queda a nueve días del Lunes Santo. La hermandad no ha detallado en su publicación el recorrido de los ensayos ni el punto de salida.",
    "<span class='howto'><b>Calendario de la cuadrilla.</b> Igualá: viernes 8 de enero de 2027, 21.00, casa hermandad. Ensayos: sábados 16 de enero, 6 de febrero y 13 de marzo de 2027, a las 16.30.</span>"
   ],
   "seo": [
    "cautivo-coria-iguala-ensayos-costaleros-lunes-santo",
    "Cautivo de Coria: igualá de costaleros el 8 de enero",
    "La Hermandad del Cautivo de Coria del Río cita a sus costaleros a la igualá el 8 de enero de 2027 y fija tres ensayos antes del Lunes Santo, 22 de marzo.",
    [
     "Hermandad del Cautivo",
     "costaleros",
     "igualá",
     "Lunes Santo",
     "Semana Santa 2027",
     "capataces"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "gran-poder-requiem-difuntos-2026",
   "sec": "hermandades",
   "kicker": "Cultos de noviembre",
   "iso": "2026-11-17",
   "hora": "07:57",
   "src": "Hermandad del Gran Poder (Facebook)",
   "fuente_url": "https://www.facebook.com/1603774695120649/posts/1603799418451510",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "La Hermandad del Gran Poder de Coria del Río celebra el viernes 20 su misa por los hermanos difuntos",
   "sub": "La Soledad celebró el domingo la función principal al Cristo Yacente, presidida por el párroco Antonio Santos Moreno.",
   "caption": "Cartel de la misa de réquiem por los hermanos difuntos.",
   "foto": "gran-poder-requiem-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad del Gran Poder",
   "claves": [
    "La Hermandad del Gran Poder celebra el viernes 20 de noviembre, a las 20.45, una misa por sus hermanos difuntos en su capilla.",
    "La Hermandad de la Soledad celebró el domingo 15 de noviembre la función principal al Santísimo Cristo Yacente.",
    "La Borriquita conmemora el domingo 22 de noviembre, a las 12.00, el XXV aniversario del Cristo de la Salud en la Parroquia de San José."
   ],
   "body": [
    "La Hermandad de Nuestro Padre Jesús del Gran Poder y Nuestra Señora del Carmen, de Coria del Río, celebrará el viernes 20 de noviembre, a las 20.45, una misa por el eterno descanso de sus hermanos difuntos en la capilla de la hermandad, según ha publicado la corporación en su perfil de Facebook.",
    "La Junta de Gobierno pide a los hermanos que acudan al acto con la medalla de la hermandad, como disponen sus reglas. Las misas de réquiem por los hermanos fallecidos se concentran en noviembre, el mes que la Iglesia católica dedica a la memoria de los difuntos.",
    "## La Soledad, con el Cristo Yacente",
    "La Hermandad de la Soledad celebró el domingo 15 de noviembre la función principal de los cultos en honor al Santísimo Cristo Yacente, según ha contado la propia hermandad en sus redes sociales, donde ha publicado una crónica gráfica del acto firmada por el fotógrafo Pedro Sánchez.",
    "La función la presidió Antonio Santos Moreno, párroco de Santa María de la Estrella y director espiritual de la Soledad. La hermandad ha agradecido en esa publicación la colaboración de quienes hicieron posible la celebración.",
    "La Hermandad Sacramental de San José, por su parte, celebró su misa de réquiem el viernes 13 de noviembre. Al terminar, tomó posesión su nueva Junta de Gobierno, presidida por el hermano mayor José Gómez Alfaro, como <a href='#san-jose-nuevo-capataz-piedad'>contó El Coriano</a> al informar del nombramiento del nuevo capataz de la Piedad.",
    "## Aniversario del Señor de la Salud",
    "El domingo 22 de noviembre, solemnidad de Cristo Rey, la Hermandad de la Borriquita se sumará a la misa parroquial de las 12.00 en la Parroquia de San José para conmemorar el XXV aniversario del Santísimo Cristo de la Salud en su Sagrada Entrada en Jerusalén, su titular, según ha publicado la Hermandad Sacramental de San José en Facebook.",
    "Tras la misa habrá una convivencia en la nueva casa hermandad de San José, abierta a toda la comunidad parroquial y compartida por las dos corporaciones.",
    "<span class='howto'>Misa por los hermanos difuntos del Gran Poder: viernes 20 de noviembre, 20.45, capilla de la hermandad, con medalla. Misa por el XXV aniversario del Señor de la Salud (Borriquita): domingo 22 de noviembre, 12.00, Parroquia de San José, con convivencia posterior en la casa hermandad de San José.</span>"
   ],
   "seo": [
    "gran-poder-coria-misa-difuntos-soledad-cristo-yacente",
    "Gran Poder de Coria: misa por los difuntos el viernes 20",
    "La Hermandad del Gran Poder de Coria del Río celebra el viernes 20 a las 20.45 su misa por los difuntos; la Soledad ya honró al Cristo Yacente.",
    [
     "Hermandad del Gran Poder",
     "Hermandad de la Soledad",
     "Cristo Yacente",
     "Hermandad de la Borriquita",
     "Parroquia de San José",
     "Cultos"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "cb-coria-infantil-lider-invicto",
   "sec": "deportes",
   "kicker": "Baloncesto base",
   "iso": "2026-11-17",
   "hora": "07:57",
   "src": "Club Baloncesto Coria (Facebook)",
   "fuente_url": "https://www.facebook.com/1805624228234571/posts/1806152088181785",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El infantil masculino del Club Baloncesto Coria cierra la primera vuelta líder e invicto",
   "sub": "El equipo Maxi masculino estrena la liga con victoria y otros cuatro equipos del club ganan el fin de semana.",
   "caption": "El equipo infantil masculino del Club Baloncesto Coria.",
   "foto": "cb-coria-infantil-of.jpg",
   "fotocredito": "Facebook del Club Baloncesto Coria",
   "claves": [
    "El infantil masculino del Club Baloncesto Coria termina la primera vuelta como líder de su grupo y sin derrotas.",
    "El Maxi masculino ganó su partido de la primera jornada de liga.",
    "El Mini femenino XL, el infantil femenino XL, el preinfantil masculino XL y las infantiles que compiten en cadete también ganaron."
   ],
   "body": [
    "El equipo infantil masculino del Club Baloncesto Coria, de Coria del Río, ha cerrado la primera vuelta de su competición como líder de grupo y sin conocer la derrota, tras ganar su partido del fin de semana del 14 y 15 de noviembre. Así lo ha publicado el club en su perfil de Facebook, donde ha repasado los resultados de sus equipos.",
    "El club no ha detallado en sus publicaciones los rivales ni los marcadores de esos encuentros. Sí ha destacado del infantil masculino «el trabajo, la constancia y la ambición» de un grupo que, según la entidad, «sigue creciendo».",
    "## Estreno con victoria del Maxi",
    "El equipo Maxi masculino disputó la primera jornada de su liga y la cerró con su primera victoria de la temporada. El club lo ha resumido en sus redes como el «mejor estreno» posible.",
    "Otros cuatro equipos del club ganaron el fin de semana: el Mini femenino XL, el infantil femenino XL, que según la entidad sigue «avanzando en la competición», el preinfantil masculino XL y las jugadoras infantiles que compiten en la categoría cadete, un escalón por encima de su edad.",
    "En las categorías más pequeñas, el premini masculino se midió al CD Gines Baloncesto en un partido que el club califica de «partidazo», sin dar el resultado, y el premini femenino sigue, según la entidad, «disfrutando del baloncesto» y creciendo partido a partido.",
    "El fútbol coriano también sumó el fin de semana: el Coria CF logró una <a href='#coria-cf-gana-rinconada'>victoria por 0-2 en La Rinconada</a> y recibirá a La Palma CF el domingo 22 de noviembre a las 12.00 en el Estadio Guadalquivir, según ha anunciado el club en sus redes."
   ],
   "seo": [
    "club-baloncesto-coria-infantil-lider-invicto",
    "Club Baloncesto Coria: el infantil, líder e invicto",
    "El infantil masculino del Club Baloncesto Coria cierra la primera vuelta líder e invicto y el Maxi masculino gana en su estreno liguero en Coria del Río.",
    [
     "Club Baloncesto Coria",
     "Baloncesto",
     "Deporte base",
     "Coria CF",
     "Cantera"
    ]
   ]
  },
  {
   "id": "inserta2-septima-convocatoria",
   "sec": "economia",
   "kicker": "Empleo",
   "iso": "2026-11-16",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/export/sites/bop/.galleries/Documentos-BOPs-en-PDF/bop-16_11_2026-7e0d80bf-e0e6-11f1-9250-0050569ff69d-1794787269725.pdf",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Coria del Río abre la séptima convocatoria de Inserta2 con cursos de albañilería, socorrismo y dependencia",
   "sub": "El plazo para pedir plaza en los cuatro itinerarios de inserción laboral empezó este lunes; las solicitudes de la quinta convocatoria siguen valiendo",
   "caption": "Fachada del Ayuntamiento de Coria del Río, en una imagen de archivo.",
   "foto": "inserta2-of.jpg",
   "fotocredito": "CarlosVdeHabsburgo / Wikimedia Commons (CC BY-SA 4.0)",
   "claves": [
    "El BOP de Sevilla del 16 de noviembre de 2026 publica la séptima convocatoria del proyecto de empleo Inserta2-Coria del Río.",
    "Ofrece cuatro itinerarios: socorrismo en instalaciones acuáticas, operaciones básicas de albañilería y dos ediciones de atención sociosanitaria a personas dependientes en instituciones sociales.",
    "La recogida de solicitudes empezó el 16 de noviembre en los cuatro itinerarios.",
    "El programa se financia con el Fondo Social Europeo Plus a través del programa ÉFESO."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río ha abierto la séptima convocatoria de Inserta2, su proyecto de formación e inserción laboral, con cuatro itinerarios: socorrismo en instalaciones acuáticas, operaciones básicas de albañilería y dos ediciones de atención sociosanitaria a personas dependientes. El extracto aparece en el Boletín Oficial de la Provincia (BOP) de Sevilla número 221, del lunes 16 de noviembre.",
    "El plazo de recogida de solicitudes empezó ese mismo lunes, 16 de noviembre, en los cuatro itinerarios. El extracto lo firma el alcalde, Modesto González Márquez, con fecha del 10 de noviembre.",
    "## Cuatro itinerarios",
    "El primero es el de socorrismo en instalaciones acuáticas, que corresponde al certificado de profesionalidad AFDP0109. El segundo, la segunda edición de operaciones básicas de albañilería, está dirigido a los colectivos más alejados del mercado laboral.",
    "Los otros dos son la quinta y la sexta edición del itinerario de atención sociosanitaria a personas dependientes en instituciones sociales (certificado SSCS0208), también pensado para personas más alejadas del mercado de trabajo. Es la formación que habilita para trabajar como auxiliar en residencias y centros de día.",
    "Quienes ya pidieron plaza en alguno de estos itinerarios dentro de la quinta convocatoria no tienen que volver a hacerlo: según el extracto, sus solicitudes mantienen su vigencia y se suman a este nuevo procedimiento.",
    "## Fondos europeos",
    "Inserta2 se financia con el Fondo Social Europeo Plus (FSE+) del periodo 2021-2027, dentro del Programa de Empleo, Educación, Formación y Economía Social (ÉFESO), al amparo de una resolución del 17 de octubre de 2023. El extracto no recoge el número de plazas, los requisitos de los participantes, si hay ayuda económica ni la fecha de cierre del plazo, y remite al texto completo en la <a href='https://www.infosubvenciones.es/bdnstrans/GE/es/convocatoria/822544'>Base de Datos Nacional de Subvenciones (BDNS), con el código 822544</a>.",
    "La convocatoria anterior, la sexta, se publicó en el BOP del 13 de octubre con tres itinerarios ligados al deporte: sala de entrenamiento polivalente, instalaciones deportivas y socorrismo acuático.",
    "<span class='howto'><b>Inserta2, séptima convocatoria.</b> Solicitudes desde el lunes 16 de noviembre de 2026. Itinerarios: socorrismo en instalaciones acuáticas; operaciones básicas de albañilería; atención sociosanitaria a personas dependientes en instituciones sociales (dos ediciones). Bases y requisitos: BDNS 822544 y Ayuntamiento de Coria del Río.</span>"
   ],
   "seo": [
    "inserta2-coria-del-rio-septima-convocatoria-empleo",
    "Inserta2 Coria del Río: séptima convocatoria de empleo",
    "Coria del Río abre la séptima convocatoria de Inserta2: socorrismo, albañilería y atención a dependientes, con solicitudes desde el 16 de noviembre.",
    [
     "Inserta2",
     "empleo",
     "Fondo Social Europeo Plus",
     "programa ÉFESO",
     "atención sociosanitaria",
     "albañilería",
     "socorrismo"
    ]
   ],
   "hora": "14:15"
  },
  {
   "id": "minamishimabara-visita-coria",
   "sec": "cultura",
   "kicker": "Coria y Japón",
   "iso": "2026-11-16",
   "hora": "22:58",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1457193726543293",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Una delegación de Minamishimabara encabezada por su alcalde, Aikawa Taketoshi, visita Coria del Río",
   "sub": "El alcalde Modesto González y el delegado de Turismo y Cultura, Victoriano Cancelo, recibieron a la comitiva japonesa en el Ayuntamiento",
   "caption": "Saludo entre representantes municipales y la delegación de Minamishimabara.",
   "foto": "minamishimabara-visita-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "Una delegación institucional de la ciudad japonesa de Minamishimabara, encabezada por su alcalde, Aikawa Taketoshi, visitó el Ayuntamiento de Coria del Río el lunes 16 de noviembre de 2026.",
    "La recibieron el alcalde, Modesto González, y el delegado municipal de Turismo y Cultura, Victoriano Cancelo.",
    "En la reunión se habló del Tōrō Nagashi, la Embajada Keicho, la figura de Hasekura Tsunenaga y posibles colaboraciones en cultura, turismo, deporte y economía, con atención al cultivo del arroz en las marismas."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río recibió en la mañana del lunes 16 de noviembre a una delegación de Minamishimabara, en la prefectura japonesa de Nagasaki, encabezada por su alcalde, Aikawa Taketoshi. Así lo ha publicado el Consistorio en su perfil de Facebook, donde explica que el objetivo del encuentro era reforzar los vínculos entre ambos municipios y estudiar vías de colaboración.",
    "La comitiva fue recibida por el alcalde de Coria del Río, Modesto González Márquez, y por el delegado municipal de Turismo y Cultura, Victoriano Cancelo. Según la nota municipal, en la reunión se repasaron los puntos de conexión entre las dos localidades, desde su pasado histórico hasta posibles líneas de cooperación cultural, turística y económica.",
    "## Del Tōrō Nagashi a la Embajada Keicho",
    "Uno de los asuntos que el Ayuntamiento destaca es el Tōrō Nagashi, la ceremonia japonesa de farolillos flotantes que Coria ha incorporado a su calendario cultural. También se habló de la Embajada Keicho y de la figura de Hasekura Tsunenaga, cuya comitiva hizo escala en Coria del Río en 1614 y dejó parte de sus miembros en el municipio, origen del apellido Japón que hoy llevan muchos corianos.",
    "La agenda incluyó además la Semana de la Cultura Japonesa, cuya decimonovena edición se inauguró en octubre, las actividades de la Asociación Hasekura y la posibilidad de colaborar en el ámbito deportivo.",
    "## Turismo, agricultura y arroz",
    "El Consistorio señala que las dos delegaciones compartieron experiencias en turismo, agricultura y economía local, con especial atención a la producción y la cultura del arroz en las marismas del Guadalquivir, su gastronomía y el paisaje que forma este cultivo en el entorno de Coria. La nota no concreta ningún acuerdo firmado ni fechas para próximos encuentros.",
    "Como recuerdo de la visita, Modesto González entregó al alcalde japonés varios libros sobre la historia de Coria del Río y su relación con Japón, un licor elaborado en la localidad y una pieza de cerámica con la imagen del municipio. El Ayuntamiento presenta la visita como una oportunidad para mantener viva esa historia compartida y abrir nuevas vías de intercambio entre Coria y Japón."
   ],
   "seo": [
    "minamishimabara-alcalde-visita-coria-del-rio-japon",
    "Minamishimabara visita Coria del Río: lazos con Japón",
    "El alcalde de Minamishimabara, Aikawa Taketoshi, visitó el Ayuntamiento de Coria del Río para reforzar los lazos con Japón y explorar vías de cooperación.",
    [
     "Coria y Japón",
     "Minamishimabara",
     "Aikawa Taketoshi",
     "Modesto González",
     "Victoriano Cancelo",
     "Hasekura Tsunenaga",
     "Tōrō Nagashi"
    ]
   ]
  },
  {
   "id": "gala-leyendas-futbol-coriano",
   "sec": "deportes",
   "kicker": "Gala de Leyendas",
   "iso": "2026-11-16",
   "hora": "22:58",
   "src": "El Coriano",
   "fuente_url": "https://www.youtube.com/watch?v=HAGdgqphHjE&t=0s",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Coria del Río celebra su primera Gala de Leyendas del fútbol coriano, organizada por el PSOE local",
   "sub": "Los organizadores anuncian nuevas ediciones tras recibir decenas de mensajes con nombres de futbolistas que no fueron homenajeados",
   "caption": "Una de las homenajeadas levanta su reconocimiento durante la gala.",
   "foto": "gala-leyendas-futbol-coriano-tv.jpg",
   "fotocredito": "Coriavisión",
   "claves": [
    "Coria del Río ha celebrado la primera Gala de Leyendas del fútbol coriano, organizada por el PSOE de Coria del Río.",
    "La gala reconoció a futbolistas corianos de varias generaciones, algunos de los cuales llegaron a jugar en Primera División.",
    "Los organizadores quieren convertirla en una serie de galas para homenajear a más jugadores."
   ],
   "body": [
    "Coria del Río ha celebrado la primera Gala de Leyendas del fútbol coriano, un acto de reconocimiento a futbolistas de la localidad organizado por el PSOE de Coria del Río. El partido ha felicitado en su perfil de Facebook a los galardonados, a los que llama «leyenda del fútbol coriano», y ha agradecido la asistencia a la jornada.",
    "En el acto se subrayó que el homenaje no era solo deportivo, sino a personas que llevaron el nombre de Coria por campos de toda España. Algunos de los homenajeados llegaron a jugar en Primera División; otros se quedaron donde el fútbol les permitió y otros dedicaron su carrera a un solo club e incluso a un barrio.",
    "## Una idea de hace dos años",
    "Uno de los organizadores explicó a El Coriano que la idea llevaba un par de años sobre la mesa y que arrancó a raíz de una conversación con Antonio Cordero, conocido como el Arnao. «Hoy es el primer evento, primera gala, y espero y deseo que no sea la última», afirmó.",
    "Entre los premiados hubo reconocimientos a título póstumo. Antonia recogió el de su hermano, que, según contó a El Coriano, vivía para el fútbol: «Me ha hecho muy feliz, y a mis hermanas también». También subió al escenario un matrimonio en el que ambos fueron jugadores y que, según relataron, se conoció en el instituto y suma cerca de 60 años de vida en común.",
    "## Más galas en camino",
    "La organización da por hecho que habrá continuación. Otro de los organizadores contó que en los días previos recibió «decenas y decenas de mensajes» con nombres de futbolistas que no estaban en la lista. «Hay muchos futbolistas en Coria que merecen ese homenaje», señaló, y presentó esta edición como el inicio de una serie de galas para llegar al mayor número posible de personas que han dedicado su vida al fútbol y a Coria del Río.",
    "<span class='howto'><b>Vídeo.</b> El reportaje completo de la gala puede verse en el canal de YouTube de Coriavisión.</span>"
   ],
   "seo": [
    "gala-leyendas-futbol-coriano-coria-del-rio",
    "Gala de Leyendas del fútbol coriano en Coria del Río",
    "Coria del Río celebra la primera Gala de Leyendas del fútbol coriano, organizada por el PSOE local, que homenajea a jugadores de varias generaciones.",
    [
     "Gala de Leyendas",
     "fútbol coriano",
     "PSOE de Coria del Río",
     "homenaje",
     "futbolistas corianos"
    ]
   ]
  },
  {
   "id": "coria-cf-gana-rinconada",
   "sec": "deportes",
   "kicker": "Fútbol",
   "iso": "2026-11-16",
   "src": "Coria CF (Facebook)",
   "fuente_url": "https://www.facebook.com/2069782470890433/posts/2068308761037804",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Coria CF gana 0-2 en La Rinconada con goles de Carlos Rojas y Segua",
   "sub": "El equipo de Dioni Arroyo, sexto con 18 puntos, recibe el domingo 22 de noviembre a La Palma, segunda con 21, en el Estadio Guadalquivir",
   "caption": "Un partido del Coria CF en el Estadio Guadalquivir, en una imagen de archivo.",
   "foto": "coria-cf-club.jpg",
   "fotocredito": "Facebook del Coria CF",
   "claves": [
    "El Coria CF ganó 0-2 a la UD Rinconada el domingo 15 de noviembre de 2026 en el estadio Leonardo Ramos.",
    "Los goles fueron de Carlos Rojas y Segua.",
    "El próximo partido es el domingo 22 de noviembre, a las 12.00, en el Estadio Guadalquivir, contra La Palma CF, segunda con 21 puntos; el Coria es sexto con 18."
   ],
   "body": [
    "El Coria CF ganó 0-2 a la UD Rinconada el domingo 15 de noviembre en el estadio Leonardo Ramos, en La Rinconada, en un partido de liga que empezó a las 12.00. Así lo ha publicado el club coriano en su perfil de Facebook, donde define la actuación del equipo como «seria y solvente».",
    "Los goles del conjunto ribereño los marcaron Carlos Rojas y Segua. El club no ha detallado en qué minutos llegaron. El encuentro se prolongó hasta el minuto 94, según el parte final publicado por la entidad.",
    "## Declaraciones tras el partido",
    "El entrenador del Coria, Dioni Arroyo, atendió a los medios locales de La Rinconada al acabar el encuentro, y el jugador Andrés Terán también hizo declaraciones tras el pitido final. El club ha difundido los dos vídeos en sus redes sociales.",
    "Con esta victoria a domicilio, el equipo suma tres puntos antes de volver a casa. El Coria también ha publicado este lunes los resultados de su cantera en los partidos disputados entre el viernes 13 y el domingo 15 de noviembre.",
    "## Cita en el Guadalquivir",
    "El próximo compromiso es en el Estadio Guadalquivir. El Coria CF, sexto clasificado con 18 puntos, recibe el domingo 22 de noviembre, a las 12.00, a La Palma CF, segunda con 21 puntos, según ha publicado el club este martes. Una victoria dejaría al Coria a la misma puntuación que su rival.",
    "<span class='howto'><b>Próximo partido.</b> Coria CF - La Palma, domingo 22 de noviembre de 2026, a las 12.00, en el Estadio Guadalquivir de Coria del Río.</span>"
   ],
   "seo": [
    "coria-cf-gana-rinconada-carlos-rojas-segua",
    "El Coria CF gana 0-2 en La Rinconada",
    "El Coria CF gana 0-2 a la UD Rinconada con goles de Carlos Rojas y Segua y recibe a La Palma el domingo 22 de noviembre en el Estadio Guadalquivir.",
    [
     "Coria CF",
     "UD Rinconada",
     "Dioni Arroyo",
     "Estadio Guadalquivir",
     "La Palma",
     "fútbol andaluz"
    ]
   ],
   "hora": "14:15",
   "actualizada": "2026-11-17T23:00"
  },
  {
   "id": "san-jose-nuevo-capataz-piedad",
   "sec": "hermandades",
   "kicker": "Hermandad de San José",
   "iso": "2026-11-16",
   "src": "Hermandad Sacramental de San José (Facebook)",
   "fuente_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0pQafrd9Fx1wKrk2D5mcMHPuMqZPVXnTK1vAavwKSpK8ihKG1V36hiWYKqgFZcX2al&id=61551796482920",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Álvaro Pastor Alés, nuevo capataz del paso de la Piedad de la Hermandad de San José de Coria",
   "sub": "Sustituye a Javier Jiménez tres días después de que la nueva Junta de Gobierno, presidida por José Gómez Alfaro, tomara posesión",
   "caption": "Álvaro Pastor Alés, nuevo capataz del paso de la Piedad.",
   "foto": "san-jose-capataz-piedad-of.jpg",
   "fotocredito": "Facebook de la Hermandad de San José",
   "claves": [
    "La Hermandad Sacramental de San José ha nombrado a Álvaro Pastor Alés capataz del paso de la Piedad del Santísimo Cristo de la Misericordia y Nuestra Señora de los Dolores.",
    "Sustituye a Javier Jiménez, capataz saliente.",
    "La nueva Junta de Gobierno, presidida por el hermano mayor José Gómez Alfaro, tomó posesión el viernes 13 de noviembre en la Parroquia de San José."
   ],
   "body": [
    "La Hermandad Sacramental de San José de Coria del Río ha nombrado a Álvaro Pastor Alés nuevo capataz del paso de la Piedad del Santísimo Cristo de la Misericordia y Nuestra Señora de los Dolores. La decisión la ha tomado su Junta de Gobierno y la hermandad la ha anunciado este lunes, 16 de noviembre, en su perfil de Facebook.",
    "Pastor Alés, natural de Coria, dirigirá a la cuadrilla de costaleros del paso. Sustituye a Javier Jiménez, a quien la hermandad agradece públicamente su trabajo durante los años en que ha estado al frente de la cuadrilla.",
    "## Trayectoria del nuevo capataz",
    "Según la corporación, el nuevo capataz fue costalero de Nuestra Señora de la Estrella Coronada, patrona de Coria del Río, y durante cuatro años ejerció como capataz de su paso. También ha sido costalero en Sevilla y forma parte de la Junta de Gobierno de la Hermandad de Madre de Dios del Rosario de Triana, patrona de capataces y costaleros de la capital, donde ocupa el cargo de diputado mayor de gobierno.",
    "## Nueva Junta de Gobierno",
    "El nombramiento llega tres días después de la toma de posesión de la nueva Junta de Gobierno de San José, presidida por el hermano mayor, José Gómez Alfaro. El acto se celebró el viernes 13 de noviembre en la Parroquia de San José, al terminar la misa de réquiem por los hermanos difuntos. Los miembros de la junta juraron sus cargos ante los titulares de la hermandad, con la asistencia del Consejo General de Hermandades y Cofradías, y la jornada terminó con una convivencia en la casa hermandad.",
    "La hermandad tiene abierto, además, hasta el 20 de diciembre el plazo para reservar el boletín cuaresmal de 2027. Los hermanos deben pedirlo por correo electrónico con su nombre, apellidos y DNI. Los mayores de 60 años lo recibirán en casa sin necesidad de reserva.",
    "La Parroquia de San José acogerá también el domingo 22 de noviembre, festividad de Cristo Rey, a las 12.00, una misa de acción de gracias por el XXV aniversario del Señor de la Hermandad de la Borriquita junto a la comunidad parroquial, según ha publicado esa hermandad en sus redes. La presidirá el párroco de San José, José Iván Martín Pascual.",
    "<span class='howto'><b>Boletín cuaresmal 2027.</b> Reserva hasta el 20 de diciembre de 2026 por correo electrónico a secretario@sanjosecoria.org, indicando nombre, apellidos y DNI. Recogida en la casa hermandad, en fechas por anunciar. Mayores de 60 años: envío a domicilio sin reserva.</span>"
   ],
   "seo": [
    "alvaro-pastor-ales-capataz-piedad-san-jose-coria",
    "Álvaro Pastor Alés, nuevo capataz de la Piedad en Coria",
    "La Hermandad Sacramental de San José de Coria del Río nombra a Álvaro Pastor Alés capataz del paso de la Piedad tras la toma de posesión de su junta.",
    [
     "Hermandad Sacramental de San José",
     "Álvaro Pastor Alés",
     "capataz",
     "Cristo de la Misericordia",
     "José Gómez Alfaro",
     "Semana Santa 2027"
    ]
   ],
   "hora": "14:15",
   "encuadre": "center 22%"
  },
  {
   "id": "patrullas-verdes-coria",
   "sec": "coria",
   "kicker": "Medio ambiente",
   "iso": "2026-11-16",
   "src": "Ayuntamiento de Coria del Río (Facebook)",
   "fuente_url": "https://www.facebook.com/1456808846581781/posts/1456774326585233",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "El Ayuntamiento de Coria del Río crea Patrullas Verdes de vecinos y las forma el 24 de noviembre",
   "sub": "La jornada formativa será a las 16.30 en la Casa de Barrio; el grupo se dedicará a reciclaje, parques y limpieza",
   "caption": "Cartel informativo de las Patrullas Verdes.",
   "foto": "patrullas-verdes-cartel-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río ha presentado las Patrullas Verdes, un grupo de participación ciudadana para el cuidado del entorno.",
    "La jornada formativa es el martes 24 de noviembre de 2026, a las 16.30, en la Casa de Barrio.",
    "Sus objetivos son promover el reciclaje, cuidar parques y jardines y sensibilizar sobre la limpieza del municipio."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río ha presentado este lunes, 16 de noviembre, las Patrullas Verdes, una iniciativa de participación ciudadana para que los vecinos colaboren en el cuidado de los barrios, los parques y los espacios públicos. Así lo ha anunciado en su perfil de Facebook, donde convoca una jornada formativa el martes 24 de noviembre.",
    "La sesión será a las 16.30 en la Casa de Barrio de Coria del Río. El Consistorio invita a acudir a quienes quieran sumarse al grupo.",
    "## Cuatro objetivos",
    "Según la publicación municipal, las Patrullas Verdes tendrán cuatro tareas: promover el reciclaje y las buenas prácticas ambientales; cuidar parques, jardines y zonas comunes; sensibilizar a los vecinos sobre la importancia de mantener limpio el municipio, e implicar al conjunto de la ciudadanía en el cuidado de Coria.",
    "El Ayuntamiento enmarca la iniciativa en la Agenda 2030 y sostiene que un pueblo más limpio y sostenible empieza con pequeños gestos. El anuncio no detalla cuántas personas pueden participar, si hace falta inscribirse antes, qué delegación municipal coordinará el grupo ni con qué frecuencia actuarán las patrullas una vez formadas.",
    "La convocatoria se suma a otras iniciativas municipales de participación vecinal de este otoño, como los caminos escolares del Barrio del Lucero contra el absentismo.",
    "<span class='howto'><b>Patrullas Verdes.</b> Jornada formativa el martes 24 de noviembre de 2026, a las 16.30, en la Casa de Barrio de Coria del Río. Abierta a los vecinos que quieran participar. Información: Ayuntamiento de Coria del Río.</span>"
   ],
   "seo": [
    "patrullas-verdes-coria-del-rio-jornada-formativa",
    "Patrullas Verdes de Coria: formación el 24 de noviembre",
    "El Ayuntamiento de Coria del Río crea las Patrullas Verdes para cuidar parques y fomentar el reciclaje; la jornada formativa es el 24 de noviembre.",
    [
     "Patrullas Verdes",
     "medio ambiente",
     "reciclaje",
     "participación ciudadana",
     "Casa de Barrio",
     "Agenda 2030"
    ]
   ],
   "hora": "14:15",
   "encuadre": "contain"
  },
  {
   "id": "plan-igualdad-ayuntamiento-2026",
   "sec": "coria",
   "kicker": "Igualdad municipal",
   "iso": "2026-10-27",
   "src": "Ayuntamiento de Coria del Río",
   "fuente_url": "https://www.ayto-coriadelrio.es/es/actualidad/noticias/Coria-del-Rio-aprueba-por-unanimidad-su-primer-Plan-de-Igualdad-para-garantizar-una-administracion-sin-discriminacion/",
   "firma": "Redacción El Coriano",
   "elaboracion": "ia",
   "title": "Coria del Río aprueba por unanimidad su primer Plan de Igualdad municipal",
   "sub": "El documento fija un marco para la igualdad salarial y la no discriminación en la plantilla del Ayuntamiento",
   "caption": "Presentación del I Plan de Igualdad del Ayuntamiento de Coria del Río.",
   "foto": "plan-igualdad-ayuntamiento-2026-of.jpg",
   "fotocredito": "Ayuntamiento de Coria del Río",
   "claves": [
    "El Ayuntamiento de Coria del Río ha aprobado por unanimidad su primer Plan de Igualdad, anunciado el 26 de octubre de 2026.",
    "El plan establece un marco para la igualdad de oportunidades, la equidad salarial y la no discriminación en la plantilla municipal.",
    "El alcalde, Modesto González Márquez, lo ha calificado de logro colectivo fruto del diálogo con los trabajadores."
   ],
   "body": [
    "El Ayuntamiento de Coria del Río ha aprobado por unanimidad su primer Plan de Igualdad, un documento que fija un marco de actuación para la igualdad de oportunidades, la equidad salarial y la protección de los derechos de toda la plantilla municipal. Lo anuncia el propio Consistorio en una nota de prensa del 26 de octubre de 2026.",
    "Según el comunicado, el plan busca que hombres y mujeres cuenten con las mismas oportunidades en la administración municipal y que se garantice la igualdad salarial, sin discriminación por razón de género. También recoge la defensa de los derechos de todos los colectivos y el impulso de un entorno laboral basado en el respeto, la inclusión y la igualdad de trato.",
    "## Desarrollo profesional y condiciones",
    "El documento apuesta por el desarrollo profesional según las competencias, las capacidades y los méritos de cada persona. Su objetivo es que no existan exclusiones ni diferencias injustificadas en las condiciones laborales de los empleados municipales.",
    "La nota no detalla medidas concretas, plazos ni presupuesto del plan. Tampoco indica cuándo empezará a aplicarse cada una de sus partes.",
    "## Negociación con la plantilla",
    "El alcalde, Modesto González Márquez, ha destacado el diálogo entre el Ayuntamiento, los trabajadores municipales y sus representantes para llegar al acuerdo. «Este Plan de Igualdad es un logro colectivo y un motivo de satisfacción para Coria del Río», ha señalado. Según el comunicado, es la primera vez que el Consistorio cuenta con una herramienta de estas características.",
    "El regidor ha añadido que «la igualdad no puede quedarse en una declaración de intenciones». Para él, el plan debe traducirse en medidas y compromisos concretos. El Ayuntamiento agradece en la nota la implicación de la plantilla y de sus representantes.",
    "<span class='howto'><b>Qué se ha aprobado.</b> El primer Plan de Igualdad del Ayuntamiento de Coria del Río, aprobado por unanimidad y anunciado el 26 de octubre de 2026. Afecta a la plantilla municipal. El texto completo del plan no figura en la nota de prensa.</span>"
   ],
   "seo": [
    "plan-igualdad-ayuntamiento-coria-del-rio",
    "Coria aprueba su primer Plan de Igualdad municipal",
    "El Ayuntamiento de Coria del Río aprueba por unanimidad su primer Plan de Igualdad para su plantilla, con igualdad salarial y no discriminación.",
    [
     "Coria del Río",
     "Plan de Igualdad",
     "Ayuntamiento de Coria",
     "igualdad salarial",
     "plantilla municipal"
    ]
   ]
  },
  {
   "id": "opinion-paseo",
   "sec": "opinion",
   "kicker": "Tribuna",
   "iso": "2026-10-10",
   "autor": "Lucía Orilla Martín",
   "autor_cargo": "Vecina de Coria del Río y profesora jubilada (firma ficticia)",
   "ficticia": true,
   "firma": "Lucía Orilla Martín",
   "elaboracion": "ia",
   "title": "El río no es un decorado",
   "sub": "Renovar el Paseo Marítimo está bien. Pensar qué queremos hacer junto al Guadalquivir el resto del año, mejor",
   "caption": "El Guadalquivir a su paso por Coria del Río.",
   "foto": "generica-rio.jpg",
   "fotocredito": "Archivo El Coriano",
   "body": [
    "Cada vez que en Coria se habla del río se habla del paseo. Es lógico: es donde paseamos, donde nos sentamos y donde montamos la Feria. Que por fin se cambie la solería y esa balaustrada que se caía a trozos es una buena noticia, y hay que reconocer al Ayuntamiento que haya pagado de su bolsillo una obra que durante años no quiso hacer quien era dueño del terreno.",
    "Pero el paseo es la orilla, no el río. Y el río, durante once meses al año, apenas entra en nuestra vida. Lo miramos el día de las cucañas, el día que pasan las hermandades camino del Rocío y la noche de las linternas japonesas. El resto del tiempo es un fondo bonito para las fotos.",
    "## Lo que el río fue",
    "No siempre fue así. Generaciones de corianos vivieron de pescar, de cruzar a la otra orilla, de construir y reparar barcas. Algo queda: la barca sigue cruzando, todavía hay quien pesca y la carpintería de ribera conserva sus paredes, ahora con murales. Es poco para un pueblo que lleva el río en el nombre.",
    "Me gustaría que, además de nuevas barandillas, se hablara de un embarcadero que sirva para algo más que para mirar, de clubes de remo y piragua con instalaciones dignas, de rutas por el estuario y de una escuela de oficios del río antes de que se jubile el último que los sabe.",
    "## Una pregunta para la campaña",
    "Dentro de unos meses habrá elecciones municipales y todos los partidos se acordarán del Guadalquivir. Les pediría una cosa: que no lo traten como un decorado. Que digan qué piensan hacer con él, cuánto cuesta y quién lo paga.",
    "El paseo estará listo, si todo va bien, en primavera. Ojalá para entonces sepamos también qué queremos que pase al otro lado de la barandilla.",
    "<span class='howto'><b>Texto de prueba.</b> Esta columna se ha escrito para probar la sección de Opinión de El Coriano. La firma es ficticia y no corresponde a ninguna persona real.</span>"
   ],
   "seo": [
    "opinion-rio-guadalquivir-paseo-maritimo-coria",
    "El río no es un decorado | Opinión",
    "Tribuna de opinión de prueba sobre la renovación del Paseo Marítimo de Coria del Río y el papel del Guadalquivir en la vida del pueblo. Firma ficticia.",
    [
     "opinión",
     "Guadalquivir",
     "Paseo Marítimo",
     "Coria del Río",
     "tribuna"
    ]
   ]
  }
 ]
};
