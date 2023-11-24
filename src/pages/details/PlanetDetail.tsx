import { FC } from "react";
import Details from "./components/Details";
import { useAppSelector } from "../../redux/store/hooks";
import { RootState } from "../../redux/store/store";
import { Planet } from "../../DTOs/planetTypes";

const PlanetDetail: FC = () => {
  const { planetDetail } = useAppSelector(
    (state: RootState) => state.planetSlice
  );

  return <Details planet={planetDetail as Planet} />;
};

export default PlanetDetail;
