import Box from "@mui/material/Box"
import Grid from "./grid"

export default function Control() {

    return (
        <div className='px-20 mt-5'>
            <Box sx={{ height: 700, width: "100%" }}>
                <Grid />
            </Box>
        </div>
    )
}