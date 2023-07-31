import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, FormControl } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useForm } from "react-hook-form";

const Form = () => {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [state, setState] = React.useState({
    open: false,
    successOpen: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open, successOpen } = state;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    console.log(target.value);
    if (name === "name") {
      setName(target.value);
    }
    if (name === "email") {
      setEmail(target.value);
    }
    if (name === "address") {
      setAddress(target.value);
    }
  };
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false, successOpen: false });
  };

  const submitData = () => {
    console.log("data submitted!");
    setState({ ...state, successOpen: true });
  };

  return (
    <Box
      sx={{
        width: `80%`,
        m: 4,
        p: 2,
      }}
    >
      <form onSubmit={handleSubmit(submitData)}>
        <FormControl sx={{ width: "100%", m: 2, p: 2 }}>
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            {...register("name", { required: true })}
            onChangeCapture={handleInputChange}
          />
          {errors.name && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </FormControl>
        <FormControl sx={{ width: "100%", m: 2, p: 2 }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            {...register("email", { required: true })}
            onChangeCapture={handleInputChange}
          />
          {errors.email && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </FormControl>
        <FormControl sx={{ width: "100%", m: 2, p: 2 }}>
          <TextField id="outlined-basic" label="Address" variant="outlined" />
        </FormControl>
        <FormControl sx={{ width: "50%", m: 2, p: 2 }}>
          <Button
            variant="contained"
            type="submit"
            onClick={handleClick({ vertical: "top", horizontal: "center" })}
          >
            Submit
          </Button>
        </FormControl>
        {/* <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="Please fill the form details"
          key={vertical + horizontal}
        /> */}
        <Snackbar
          open={successOpen}
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      </form>
    </Box>
  );
};

export default Form;
