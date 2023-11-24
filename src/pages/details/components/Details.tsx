import { FC } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Planet } from "../../../DTOs/planetTypes";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  planet: Planet;
}

const Details: FC<Props> = ({ planet }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate("/");
  };
  return (
    <Paper
      sx={{
        margin: "auto",
        width: "50vw",
        height: "45vh",
        flexGrow: 1,
        backgroundColor: "#fff",
        opacity: 0.9,
      }}
    >
      <Grid direction="column" container spacing={2}>
        <Grid item xs container direction="column" spacing={4}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {`Name: ${planet.name}`}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              {`Climate: ${planet.climate}`}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" color="text.secondary">
              {`Population: ${planet.population} hab.`}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" color="text.secondary">
              {`Terrain: ${planet.terrain}`}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" color="text.secondary">
              {`Gravity: ${planet.gravity}`}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" color="text.secondary">
              {`Water Surfaces: ${planet.surface_water}`}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" color="text.secondary">
              {`url: ${planet.url}`}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" color="text.secondary">
              {`Rotation: ${planet.rotation_period}`}
            </Typography>
          </Grid>
          <Grid item xs>
            <Button
              onClick={() => showDetail()}
              color="primary"
              variant="contained"
            >
              <Typography variant="body2" color="text.secondary">
                Back
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Details;
