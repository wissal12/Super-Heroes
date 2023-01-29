import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeroDetails } from "../../api/heroes";
import { FieldName } from "../../components/Hero/Hero.style";
import RadarChart from "../../components/RadarChart";
import { Loader } from "../Heroes/Heroes.style";
import {
  HeroContainer,
  TitleContainer,
  HeroImage,
  PageContentCenter,
  DetailsContent,
} from "./HeroDetails.style";

const HeroDetails = () => {
  const { id: heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    getHeroDetails(heroId).then(setHero);
  }, [heroId]);

  if (!hero) return <Loader />;

  return (
    <PageContentCenter>
      <HeroContainer container>
        <Grid item>
          <HeroImage
            src={hero.images.md}
            alt={hero.Title + " hero representation"}
          />
        </Grid>
        <Grid item>
          <RadarChart
            title={`${name} power stats`}
            indicators={Object.entries(hero.powerstats).map(
              ([powerStat, value]) => ({ label: powerStat, value })
            )}
          />
        </Grid>
        <DetailsContent item>
          <Grid container direction="column">
            <TitleContainer item>{hero.name} </TitleContainer>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              margin="10px"
            >
              <FieldName> Full name:</FieldName>
              <span> {hero.biography.fullName} </span>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              margin="10px"
            >
              <FieldName>Gender:</FieldName>
              <span> {hero.appearance.gender} </span>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              margin="10px"
            >
              <FieldName>place of birth:</FieldName>
              <span> {hero.biography.placeOfBirth} </span>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              margin="10px"
            >
              <FieldName>First appearance:</FieldName>
              <span> {hero.biography.firstAppearance} </span>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              margin="10px"
            >
              <FieldName>Gender:</FieldName>
              <span> {hero.appearance.gender} </span>
            </Typography>
          </Grid>
        </DetailsContent>
      </HeroContainer>
    </PageContentCenter>
  );
};

export default HeroDetails;
