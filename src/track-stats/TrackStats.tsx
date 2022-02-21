import * as React from 'react';
import Navigation from '../page/Navigation';
import { Content } from '../page/Content.styles';
import { RiderPerformanceWrapper } from './TrackStats.styles';

type RiderPerformanceProps = {
    name: string,
    numberCurrentClassRaces: number,
    numberAllClassesRaces: number,
    averageCurrentClassPoints: number,
    averageAllClassesPoints: number
}

const RiderPerformance: React.FC<RiderPerformanceProps> = ({name, numberCurrentClassRaces, numberAllClassesRaces, averageCurrentClassPoints, averageAllClassesPoints}) => {
    return (
        <RiderPerformanceWrapper>
            <div>Name: {name}</div>
            <div>Number of races in current class: {numberCurrentClassRaces}</div>
            <div>number of races in all classes: {numberAllClassesRaces}</div>
            <div>Average points in current class: {averageCurrentClassPoints}</div>
            <div>Average points in all classes: {averageAllClassesPoints}</div>
        </RiderPerformanceWrapper>
    )
}

export const TrackStats: React.FC = () => {
    const trackName = 'Grand Prix of Qatar';
    return (
        <>
            <Navigation/>
            <Content>
                <h2>{trackName} Stats</h2>
                <RiderPerformance name='Liam Howe' numberCurrentClassRaces={10} numberAllClassesRaces={15} averageCurrentClassPoints={5.5} averageAllClassesPoints={2.3}/>
            </Content>
        </>
        );
    
};

export default TrackStats;