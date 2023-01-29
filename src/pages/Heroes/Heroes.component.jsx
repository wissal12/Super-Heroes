import { Grid } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { getAllHeroes } from "../../api/heroes";
import SearchInput from "../../components/SearchInput";
import Hero from "../../components/Hero";
import List from "../../components/List";
import { ErrorContainer, Loader } from "./Heroes.style";
import {
  addToFavourites,
  getFavourites,
} from "../Favourites/Favourites.service";

const Heroes = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [heroes, setHeroes] = useState([]);
  const allHeroes = useRef();
  const [favourites, setFavourites] = useState();

  useEffect(() => {
    setFavourites(getFavourites().map((favourite) => favourite.id));
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllHeroes()
      .then((data) => {
        setHeroes(data);
        allHeroes.current = data;
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setError(
          "Something went wrong, our tech team is working hard on fixing it!"
        );
      });
  }, []);

  const onSearchInputChange = (searchValue) => {
    const initallyLoadedHeroes = allHeroes.current;
    if (!initallyLoadedHeroes) return;

    setLoading(true);
    if (searchValue === "") {
      setHeroes(initallyLoadedHeroes);
      setLoading(false);
      return;
    }
    setHeroes(
      initallyLoadedHeroes.filter((hero) =>
        hero.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setLoading(false);
  };

  const onSearchInputClear = () => setHeroes(allHeroes.current);

  if (loading || !heroes.length)
    return <Loader style={{ background: "blue" }} />;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <SearchInput
          onChange={onSearchInputChange}
          onClear={onSearchInputClear}
        />
      </Grid>
      <Grid item>
        {error && <ErrorContainer>{error}</ErrorContainer>}
        <Grid item>
          <List>
            {heroes.map((hero) => {
              const {
                id,
                name,
                biography: { firstAppearance },
                appearance: { race },
                images,
              } = hero;

              return (
                <Hero
                  key={id}
                  id={id}
                  name={name}
                  firstAppearnce={firstAppearance}
                  race={race}
                  image={images.sm}
                  isFavourite={favourites && favourites.includes(hero.id)}
                  addToFavourites={() => {
                    addToFavourites(hero);
                    setFavourites([...favourites, hero.id]);
                  }}
                />
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Heroes;
