import React from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { setSorted } from "../../redux/slices/planetSlice";
import { useParams } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectFilter: React.FC = () => {
  const theme = useTheme();
  const [inputValue, setInputValue] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const { name } = useParams<string>();

  const handleChange = (event: SelectChangeEvent<typeof inputValue>) => {
    const {
      target: { value },
    } = event;
    setInputValue(value as string);
    dispatch(setSorted(value));
  };
  const planets = useAppSelector((state) => state.planetSlice.planets);
  const selectOptions =
    planets!.length > 0
      ? Object.keys(planets[0]).filter(
          (key) =>
            key === "name" ||
            key === "population" ||
            key === "gravity" ||
            key === "surface_water"
        )
      : [];
  return (
    <FormControl sx={{ m: 1, width: 200 }}>
      <InputLabel id="demo-multiple-name-label">Sort By</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={inputValue}
        onChange={handleChange}
        input={<OutlinedInput label="sortBy" />}
        MenuProps={MenuProps}
        disabled={!!name}
      >
        {selectOptions.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, inputValue, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;
