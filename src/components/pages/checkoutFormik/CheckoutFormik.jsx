import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutFormik = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, getTotalPrice, emptyCart } = useContext(CartContext);
  const total = getTotalPrice();

  const { handleChange, handleSubmit, handleReset, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
    },

    onSubmit: async (data) => {
      try {
        const orderData = {
          buyer: data,
          items: cart,
          total: total,
          date: serverTimestamp(),
        };

        const ordersCollection = collection(db, "orders");
        const docRef = await addDoc(ordersCollection, orderData);

        setOrderId(docRef.id);

        cart.forEach(async (item) => {
          try {
            await updateDoc(doc(db, "products", item.id), {
              stock: item.stock - item.quantity,
            });
            console.log(`Stock actualizado para el producto con ID ${item.id}`);
          } catch (error) {
            console.error(
              `Error al actualizar el stock para el producto con ID ${item.id}:`,
              error
            );
          }
        });

        emptyCart();
      } catch (error) {
        console.error("Error al enviar el pedido:", error);
      }
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio.")
        .min(5, "Debe tener al menos 5 caracteres.")
        .max(20, "No debe superar los 20 caracteres.")
        .matches(
          /^[A-Za-z]+$/,
          "Solo se permiten caracteres alfabéticos en el nombre."
        ),
      apellido: Yup.string()
        .required("El campo es obligatorio.")
        .min(5, "Debe tener al menos 5 caracteres.")
        .max(20, "No debe superar los 20 caracteres.")
        .matches(
          /^[A-Za-z]+$/,
          "Solo se permiten caracteres alfabéticos en el apellido."
        ),
      telefono: Yup.string()
        .matches(/^[0-9]+$/, "El teléfono solo puede contener números")
        .min(8, "Debe tener al menos 8 dígitos")
        .max(15, "No debe superar los 15 dígitos")
        .required("El campo es obligatorio."),
      email: Yup.string()
        .email("El email no parece valido, debe contener @.")
        .required("El campo es obligatorio."),
    }),
  });
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="h5" gutterBottom>
        ¡Ingresa tus datos para la facturación!
      </Typography>
      {orderId ? (
        <div>
          <Typography variant="h5">
            Gracias por su compra. Su pedido quedó registrado como: ({orderId})
          </Typography>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          onReset={() => {
            handleReset();
            Object.keys(errors).forEach((field) => {
              errors[field] = "";
            });
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "450px",
            padding: "20px",
            backgroundColor: "#fff",
            border: "2px solid #ccc",
            borderRadius: "18px",
            boxShadow: "10px 10px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Mi Formulario
          </Typography>
          <TextField
            label="Nombre"
            variant="outlined"
            name="nombre"
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            name="apellido"
            onChange={handleChange}
            error={errors.apellido ? true : false}
            helperText={errors.apellido}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            name="telefono"
            onChange={handleChange}
            error={errors.telefono ? true : false}
            helperText={errors.telefono}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              style={{
                marginTop: "10px",
                backgroundColor: "#2CAF50",
                width: "32%",
              }}
            >
              Enviar
            </Button>
            <Button
              variant="contained"
              type="reset"
              style={{
                marginTop: "10px",
                backgroundColor: "steelblue",
                width: "32%",
              }}
            >
              Resetear
            </Button>
            <Button
              variant="contained"
              type="button"
              style={{
                marginTop: "10px",
                backgroundColor: "gray",
                width: "32%",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                Volver
              </Link>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutFormik;
