import styled from 'styled-components'
import React from "react";
import data from '../data.js'

const Wrapper = styled.div`
    display: flex;
    height: 400px;
    width: 100%;
`

const Thumbnail = styled.img`
  flex: 12;
`

const JamIntroduction = styled.div`
  background-color: rgb(32, 41, 61);
  flex: 12;
  padding: 50px;
  display: flex;
  flex-direction: column;
`

const JamTitle = styled.div`
  font-size: 40px;
  color: #fff;
`

const JamSubTitle = styled.div`
  font-size: 20px;
  color: rgb(145,133,183);
`

const CountdownLabel = styled.span`
  font-size: 17px;
  color: #fff;
  margin-top: 30px;
`

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const CountdownTimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(213, 213, 213);
  margin: 10px 5px;
`

const CountdownTimeValue = styled.div`
  font-size: 35px;
  font-weight: 300;
`

const CountdownTimeLabel = styled.div`
  font-size: 25px;
`

const CountdownStatsBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(213, 213, 213);
  align-items: center;
  margin: 10px 20px;
`

const JoinNowButton = styled.button`
  border-radius: 15px;
  width: 130px;
  height: 40px;
  text-transform: uppercase;
  background:  linear-gradient(45deg, rgb(48, 79, 254), rgb(170, 0, 255));
  border: 0;
  color: #fff;
  margin-top: 30px;
  font-weight: 600;
  margin-left: 250px;
  font-size: 14px;
  &:focus {
    outline: 0;
  }
`

const CircleGroup = styled.div`
  margin: 10px auto 0;
  width: 10%;
`

const Circle = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: inline-block;
  margin: 3px;
  background-color: rgb(62,79,112);
  ${props => props.active && `background-color: #fff;`}
`

const jam = data.bigFeaturedJam

export const FeaturedView = () => <>
    <Wrapper>
        <Thumbnail src={jam.thumbnailImageUrl}/>
        <JamIntroduction>
            <JamTitle>{jam.name.toUpperCase()}</JamTitle>
            <JamSubTitle>{jam.description}</JamSubTitle>
            <CountdownLabel>Starts in</CountdownLabel>
            <CountdownContainer>
                <CountdownTimeBlock>
                    <CountdownTimeValue>00</CountdownTimeValue>
                    <CountdownTimeLabel>days</CountdownTimeLabel>
                </CountdownTimeBlock>
                <CountdownTimeBlock>
                    <CountdownTimeValue>00</CountdownTimeValue>
                    <CountdownTimeLabel>hours</CountdownTimeLabel>
                </CountdownTimeBlock>
                <CountdownTimeBlock>
                    <CountdownTimeValue>00</CountdownTimeValue>
                    <CountdownTimeLabel>minutes</CountdownTimeLabel>
                </CountdownTimeBlock>
                <CountdownStatsBlock style={{marginLeft: '140px'}}>
                    <CountdownTimeValue>{jam.joinedCount}</CountdownTimeValue>
                    <CountdownTimeLabel>Joined</CountdownTimeLabel>
                </CountdownStatsBlock>
                <CountdownStatsBlock>
                    <CountdownTimeValue>{jam.submissionCount}</CountdownTimeValue>
                    <CountdownTimeLabel>Submissions</CountdownTimeLabel>
                </CountdownStatsBlock>
            </CountdownContainer>
            <JoinNowButton>Join now!</JoinNowButton>
        </JamIntroduction>
    </Wrapper>
    <CircleGroup>
        <Circle/>
        <Circle/>
        <Circle active/>
        <Circle/>
    </CircleGroup>
</>