import {
    DataGrid,
    GridToolbar,
    GridColDef
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Get, Delete } from '../../util/fetch';
import { X } from "lucide-react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { Post } from '../../util/fetch';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const style = {
    position: 'absolute' as 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: '1px solid #f0000',
    boxShadow: 24,
    p: 4,
};

export default function Grid() {
    const [rawData, setRawData] = useState([])
    const [open, setOpen] = useState(false);
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'co2', headerName: 'co2', width: 150 },
        { field: 'pm25', headerName: 'pm25', width: 150 },
        { field: 'pm10', headerName: 'pm10', type: 'number', width: 150 },
        { field: 'umidade', headerName: 'Umidade', type: 'number', width: 150 },
        { field: 'vocs', headerName: 'vocS', type: 'number', width: 150 },
        { field: 'temp', headerName: 'Temperature', type: 'number', width: 150 },
        { field: 'renov_ar', headerName: 'air renewal', type: 'number', width: 150 },
        { field: 'radonio', headerName: 'radonio', type: 'number', width: 150 },
        { field: 'fungos_bact', headerName: 'bacteria', type: 'number', width: 150 },
        { field: 'dt_insert', headerName: 'date', type: 'number', width: 200 },
        {
            field: "action",
            headerName: "Action",
            renderCell: (params) => {
                return [
                    <X className='cursor-pointer' onClick={() => handleDeleteItem(params.row.id)} size={32} color="#ff0000" strokeWidth={3} />
                ]
            }
        }
    ];

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const frm_data = Object.fromEntries(formData)
        Post("/control", JSON.stringify(frm_data))
            .then(data => {
                attGrid()
                if (data.success) {
                    alert("Success!")
                } else {
                    alert("error, informe apenas numeros")
                }
            })
    }

    const handleDeleteItem = (id: number | string) => {
        Delete("/control", id)
            .then(data => {
                attGrid()
            })
    }

    const attGrid = () => {
        Get('/')
            .then(data => {
                setRawData(data.data)
            })
    }

    useEffect(() => {
        attGrid()
    }, [])

    return (
        <>
            <DataGrid
                disableDensitySelector={true}
                density={"compact"}
                columns={columns}
                rows={rawData}
                disableColumnFilter
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { showQuickFilter: true } }}
                sx={{
                    boxShadow: 10,
                    border: 0,
                    borderColor: 'dark.light',
                }}
            />
            <div>
                <button onClick={() => setOpen(true)} className="bg-blue-950 text-white px-2 py-1 border-2 rounded-lg hover:bg-blue-900 w-52 mt-2">Add</button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <p className='font-semibold text-2xl flex justify-center'>
                                New Item
                            </p>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={(event) => handleSubmit(event)}>
                                <div className='flex flex-col gap-5'>

                                    <div className='flex gap-3 justify-center'>
                                        <Tooltip title="Quantidade de Co2 presente no Ar">
                                            <TextField name="co2" type='text' id="outlined-basic" label="co2" variant="outlined" required={true} />
                                        </Tooltip>
                                        <Tooltip title="Quantidade de pm25 presente no Ar">
                                            <TextField name="pm25" type='text' id="outlined-basic" label="pm25" variant="outlined" required={true} />
                                        </Tooltip>
                                        <Tooltip title="Quantidade de pm10 presente no Ar">
                                            <TextField name="pm10" type='text' id="outlined-basic" label="pm10" variant="outlined" required={true} />
                                        </Tooltip>
                                    </div>
                                    <div className='flex gap-3 justify-center'>
                                        <Tooltip title="Quantidade de umidade presente no Ar">
                                            <TextField name="moisture" type='text' id="outlined-basic" label="moisture" variant="outlined" required={true} />
                                        </Tooltip>
                                        <TextField name="vocs" type='text' id="outlined-basic" label="vocS" variant="outlined" required={true} />
                                        <Tooltip title="Temperatura do Ar">
                                            <TextField name="temperature" type='text' id="outlined-basic" label="temperature" variant="outlined" required={true} />
                                        </Tooltip>
                                    </div>
                                    <div className='flex gap-3 justify-center'>
                                        <Tooltip title="Ar renovado">
                                            <TextField name="air_renewal" type='text' id="outlined-basic" label="air renewal" variant="outlined" required={true} />
                                        </Tooltip>
                                        <TextField name="radonio" type='text' id="outlined-basic" label="radonio" variant="outlined" required={true} />
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Bacteria</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    label="Bacteria"
                                                    name='bacteria'
                                                    required={true}
                                                >
                                                    <MenuItem value={1}>No</MenuItem>
                                                    <MenuItem value={0}>Yes</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                </div>
                                <div className='flex justify-center mt-3'>
                                    <button type='submit' className='bg-green-700 rounded-md text-white px-2 py-1 w-52 hover:bg-green-900'>
                                        Save
                                    </button>
                                </div>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
            </div >
        </>
    )
}