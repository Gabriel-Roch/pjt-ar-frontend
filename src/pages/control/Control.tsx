import Box from "@mui/material/Box"
import Grid from "./grid"
import Navbar from "../../components/navbar/Navbar"

export default function Control() {

    return (
        <div>
            <Navbar />
            <div className="px-10 py-5">
                <Box sx={{ height: 700, width: "100%" }}>
                    <Grid />
                </Box>
            </div>
        </div>
    )
}