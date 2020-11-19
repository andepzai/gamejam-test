import styled from 'styled-components'
import React from "react";
import data from "../data";
import {ViewMoreBtn} from "../components/ViewMore";

const Jam = styled.div`
  margin: 30px 40px 40px;
`

const Title = styled.span`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  font-size: 24px;
`

const Jams = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
`

const JamCard = styled.div`
  margin: 20px 10px;
  width: 430px;
  border-radius: 20px;
  background-color: rgb(35,44,65);
`

const JamThumbnail = styled.img`
  border-radius: 20px;
  max-width: 430px;
`

const JamTitle = styled.div`
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
`
const JamSubTitle = styled.div`
  color: rgb(151,137,189);
  margin-top: 5px;
  font-size: 17px;
  font-weight: 500;
  min-height: 50px;
`

const JamContent = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`

const JamStartTime = styled.div`
  color: #fff;
  font-size: 15px;
  margin-top: 10px;
`

const ProgressBar = styled.div`
  background: rgba(255,255,255,0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  display: flex;
  height: 15px;
  margin-top: 10px;
  width: 100%;
`

const ProgressValue = styled.div`
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background:  linear-gradient(45deg, rgb(48, 79, 254), rgb(170, 0, 255));
  height: 15px;
  width: ${props => props.width + '%'};
`

const JamStat = styled.div`
  display: flex;
  color: #fff;
  & > * {
    &:first-child {
      margin-left: 0;
    }
    margin: 3px 7px;
  }
`

export const JamList = () => <Jam>
    <Title>Featured Jams</Title>
    <Jams>
        {data.jams.map(jam => <JamCard key={jam.id + jam.name + jam.createAt + jam.status}>
            <JamThumbnail src={jam.thumbnailImageUrl}/>
            <JamContent>
                <JamTitle>{jam.name}</JamTitle>
                <JamSubTitle>{jam.description}</JamSubTitle>
                <JamStartTime>Start in 14 days, 12 hours</JamStartTime>
                <ProgressBar>
                    <ProgressValue width={60}/>
                </ProgressBar>
                <JamStat>
                    <div>{jam.joinedCount} Joined</div>
                    <div>{jam.submissionCount} Submissions</div>
                </JamStat>
            </JamContent>
        </JamCard>)}
    </Jams>
    <ViewMoreBtn>View more</ViewMoreBtn>
</Jam>

