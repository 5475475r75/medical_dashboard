import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';

function Medicine(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let schema = yup.object().shape({
        name: yup.string().required("Please enter name."),
        price: yup.number().required("Please enter price").positive().integer(),
        quantity: yup.string().required("Please enter quantity"),
        expiry: yup.string().required("Please enter expiry"),
    });

    const handleData = (values) => {

        let localData = JSON.parse(localStorage.getItem("medicine"));

        if (localData === null) {
            localStorage.setItem("medicine", JSON.stringify([values]))
        } else {
            localData.push(values);
            localStorage.setItem("medicine", JSON.stringify(localData))
        }

        handleClose();
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            expiry: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            handleData(values);
        },
    });

    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'price', headerName: 'Price', width: 200 },
        { field: 'quantity', headerName: 'Quantity', width: 200 },
        { field: 'expiry', headerName: 'Expiry', width: 200 },
    ];

    const loadData = () => {

    }

    useEffect(() => {
        const medicine = localStorage.getItem(Date('key'));
        medicine(JSON.parse(Data));
    }, []);

    useEffect(() => {
        localStorage.setItem(
            Date('key'),
            JSON.stringify(Name, price, quantity, expiry)
        );
    });


    const { handleBlur, handleChange, handleSubmit, errors, touched } = formik;

    return (
        <div>
            <h1>Medicine</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add MedicineData
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Add MedicineData</DialogTitle>
                <Formik>
                    <Form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                name="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name ? <p className='Err'>{errors.name}</p> : ''}
                            <TextField
                                margin="dense"
                                name="price"
                                label="Price"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.price && touched.price ? <p className='Err'>{errors.price}</p> : ''}
                            <TextField
                                margin="dense"
                                name="quantity"
                                label="Quantity"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.quantity && touched.quantity ? <p className='Err'>{errors.quantity}</p> : ''}
                            <TextField
                                margin="dense"
                                name="expiry"
                                label="Expiry"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.expiry && touched.expiry ? <p className='Err'>{errors.expiry}</p> : ''}
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">Submit</Button>
                            </DialogActions>
                        </DialogContent>
                    </Form>
                </Formik>
            </Dialog>
        </div>

    );
}

export default Medicine;