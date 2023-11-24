import { FC } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Planet } from "../../../../DTOs/planetTypes";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../../../redux/store/hooks";
import { filterByPlanet } from "../../../../redux/slices/planetSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  planet: Planet;
}
const PlanetCard: FC<Props> = ({ planet }) => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const showDetail = (value: string | number) => {
    dispath(filterByPlanet(value));
    navigate(`/details/${value}`);
  };
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        width: "80%",
        height: "80%",
        flexGrow: 1,
        backgroundColor: "#fff",
      }}
    >
      <Grid direction="column" container spacing={2}>
        <Grid item xs container direction="column">
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {`Name: ${planet.name}`}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {`Climate: ${planet.climate}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Population: ${planet.population} hab.`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Terrain: ${planet.terrain}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Gravity: ${planet.gravity}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Water Surfaces: ${planet.surface_water}`}
            </Typography>
            <Button onClick={() => showDetail(planet.name)} variant="outlined">
              <Typography variant="body2" color="text.secondary">
                Details
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PlanetCard;
