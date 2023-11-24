import React from "react";
import { useAppSelector } from "../../../../redux/store/hooks";
import { RootState } from "../../../../redux/store/store";
import PlanetCard from "../PlanetCard/PlanetCard";
import { Box, Grid, Skeleton } from "@mui/material";

const PlanetList: React.FC = () => {
  const { planets, isloading } = useAppSelector(
    (state: RootState) => state.planetSlice
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {planets.map((planet) => (
          <Grid item xs={12} sm={8} md={4} key={planet.name}>
            {isloading ? (
              <Skeleton variant="rectangular" width={300} height={200} />
            ) : (
              <PlanetCard planet={planet} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlanetList;
