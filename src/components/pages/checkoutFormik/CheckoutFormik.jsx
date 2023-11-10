import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { handleChange, handleSubmit, handleReset, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      // password: "",
      // repeatPassword: "",
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
        .required("El campo es obligatorio")
        .min(5, "Debe tener al menos 5 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      apellido: Yup.string().required("El campo es obligatorio"),
      email: Yup.string()
        .email("El email no parece valido, debe contener @")
        .required("El campo es obligatorio"),
      // password: Yup.string()
      //   .required("El campo es obligatorio")
      //   .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
      //     message:
      //       "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un símbolo",
      //   }),
      // repeatPassword: Yup.string()
      //   .required("El campo es obligatorio")
      //   .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
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
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          {/* <FormControl
            sx={{ width: "100%", marginBottom: "10px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              error={errors.password ? true : false}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
            />
            {errors.password && (
              <Typography color="error">{errors.password}</Typography>
            )}
          </FormControl>

          <FormControl
            sx={{ width: "100%", marginBottom: "10px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-repeat-password">
              Repetir Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-repeat-password"
              type={showRepeatPassword ? "text" : "password"}
              name="repeatPassword"
              onChange={handleChange}
              error={errors.repeatPassword ? true : false}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle repeat password visibility"
                    onClick={handleClickShowRepeatPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Repetir Contraseña"
            />
            {errors.repeatPassword && (
              <Typography color="error">{errors.repeatPassword}</Typography>
            )}
          </FormControl> */}
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
                backgroundColor: "#4CAF50",
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
              }}
            >
              Cancelar
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutFormik;
