Este proyecto fue realizado para el curso ReactJS de Coderhouse.

# Acerca del proyecto
**Weracer** es un e-commerce de sillas gamers y de oficina.

El proyecto principal era sólo para sillas gamers, pero luego surgió la necesidad de agregar una nueva categoría por requisitos del curso.

# Dependencias
## [React Bootstrap](https://react-bootstrap.github.io/)
Elegí este framework ya que me permite trabajar con componentes de bootstrap de una manera mas rápida y sencilla.
```bash
npm i react-bootstrap
```

## [React Icons](https://react-icons.github.io/react-icons/)
Componente que contiene varios íconos, de los cuales elegí Material Design Icons.
```bash
npm i react-icons
```

## [React Spinners](https://www.davidhu.io/react-spinners/)
Utilicé este componente para el loading de las páginas.
```bash
npm i react-spinners
```

## [Bootswatch](https://bootswatch.com/lux/)
CSS compatible con clases de bootstrap.
```bash
npm i bootswatch
```

# Instalación
Clonar el proyecto y entrar en el directorio:
```bash
git clone https://github.com/arizaseba/ReactDesafios.git
cd ReactDesafios
```
Instalar las dependencias:
```bash
npm install
```
Iniciar el servidor local:
```bash
npm start
```

# Consideraciones internas
Para publicar los productos con mayor facilidad a Firestore, desarrollé la página **/admin**. La cual no se encuentra accesible desde la interfaz del usuario, se debe escribir manualmente. Posteriormente, se puede implementar un login para esta función.

En **admin** se encuentra un formulario para publicar nuevos productos. Las imágenes y el detalle del producto se separa entre líneas, lo que generará dos arrays dentro del producto, uno de imágenes y otro de detalles.

## Producto
- **title** (string)
- **color** (string)
- **stock** (number)
- **img** (array)
    - Se genera un array para las fotos del producto que se compone de los campos:
        - **src** (string): url de la foto.
        - **alt** (string): nombre de producto.
- **price** (number)
- **desc** (array)
    - Detalle del producto. Decidí generarlo como array para luego mapearlo en un listado de ítems.
- **category** (string).
    - La categoría puede ser *office* o *gamer*.

## Orden de compra
- **name** (string)
- **phone** (string)
- **email** (string)
- **date** (date)
    - Fecha y hora del pedido.
- **items** (array)
    - Productos comprados.
- **total** (number)
    - Importe total de la compra.

# Estado del proyecto
Este desarrollo se realizó exclusivamente para el curso de Coderhouse, no se encuentra en producción.

El emprendimiento **Weracer** existe realmente y tiene su propia web, realizada con Mercado Shops (https://www.weracer.com.ar/)