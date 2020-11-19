import styled from 'styled-components'
import React from "react";
import data from "../data";
import {ViewMoreBtn} from "../components/ViewMore";

const Game = styled.div`
  margin: 30px 40px 40px;
`

const Title = styled.span`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  font-size: 24px;
`

const Games = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
`

const GameCard = styled.div`
  margin: 20px 10px;
  width: 430px;
  border-radius: 20px;
  background-color: rgb(35,44,65);
`

const GameThumb = styled.img`
  border-radius: 20px;
  max-width: 430px;
`

const GameTitle = styled.div`
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
`
const Hashtag = styled.div`
  color: rgb(151,137,189);
  margin-top: 5px;
  font-size: 17px;
  font-weight: 500;
`

const GameContent = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`

export const GameList = () => <Game>
    <Title>Featured Games</Title>
    <Games>
        {data.games[0].data.filter(g => !!g.thumbnailImageUrl)/* filter invalid game from api */.map(game => <GameCard key={game.id + game.createAt+game.userId+game.jamId}>
            <GameThumb src={game.thumbnailImageUrl}/>
            <GameContent>
                <GameTitle>{game.name}</GameTitle>
                <Hashtag>#Action</Hashtag>
            </GameContent>
        </GameCard>)}
    </Games>
    <ViewMoreBtn>View more</ViewMoreBtn>
</Game>

