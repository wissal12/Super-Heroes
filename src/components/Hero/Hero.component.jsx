import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import { FieldName, HeroCard } from "./Hero.style";
import { useNavigate } from "react-router-dom";
import { getHeroDetailsURL } from "../../routes";

const UNKONWN_FIELD_VALUE = <span> - </span>;

const Hero = ({
  id,
  name,
  firstAppearnce,
  race,
  image,
  addToFavourites,
  isFavourite,
  removeFromFavourites,
}) => {
  const onFavouritesClick = addToFavourites
    ? addToFavourites
    : removeFromFavourites;
  const navigate = useNavigate();
  const onHeroClick = useCallback(
    () => navigate(getHeroDetailsURL(id)),
    [id, navigate]
  );
  return (
    <HeroCard onClick={onHeroClick}>
      <CardContent>
        <Typography fontWeight="bold" component="div" variant="h5">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <FieldName> Appeared in:</FieldName>
          {firstAppearnce ? <div>{firstAppearnce}</div> : UNKONWN_FIELD_VALUE}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <FieldName>race:</FieldName>
          {race ? <div>{race}</div> : UNKONWN_FIELD_VALUE}
        </Typography>
        <CardActions>
          <Button
            size="small"
            disabled={addToFavourites && isFavourite}
            data-testid="add-to-favourite"
            onClick={(evt) => {
              evt.stopPropagation();
              onFavouritesClick({ id, name, firstAppearnce, race, image });
            }}
          >
            {addToFavourites
              ? isFavourite
                ? "Added"
                : "Add to favourites"
              : "Remove"}
          </Button>
        </CardActions>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={image}
        alt={`representative image of the ${name} hero`}
      />
    </HeroCard>
  );
};

export default Hero;
