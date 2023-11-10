# Esta es mi tienda

### Las herramientas utilizadas son:

- React
- Sweetalert2
- Axios
- MaterialUI
- Firebase
- Formik
- Yup

![Logo de Vite en SVG](public/vite.svg)

Go-> [Babel](https://babeljs.io/)

```
npm install sweetalert2
```

```javascript
const vaciarCarrito = () => {
  Swal.fire({
    title: "¿Estás seguro de que deseas vaciar el carrito?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, vaciar carrito",
    cancelButtonText: "No, mantener los productos",
  }).then((result) => {
    if (result.isConfirmed) {
      emptyCart();
    }
  });
};
```
