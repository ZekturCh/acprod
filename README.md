# AC Producciones

Web para DJ, luces, sonido, horas locas, pasacalles y animación infantil en Lima, Perú.

Portada: https://acprod.web.app/
Redes: https://acprod.web.app/redes

Firebase: proyecto tesen-factory-admin, sitio independiente acprod.

Los archivos están en public/. Completar los contactos en public/app.js. TikTok y Facebook llevan provisionalmente a sus páginas principales; el contacto lleva a WhatsApp +51 931 505 279. El monograma AC es provisional hasta recibir el logo oficial.

Para publicar, con Node.js y acceso al proyecto:

    npx firebase-tools login
    npx firebase-tools deploy --only hosting --project tesen-factory-admin

La configuración apunta exclusivamente al sitio acprod. GitHub guarda el código; el despliegue se ejecuta manualmente. No se incluyen secretos ni base de datos.
