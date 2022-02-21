import * as React from 'react';
import { useEffect, useState } from 'react';
import Navigation from '../page/Navigation';
import { Content } from '../page/Content.styles';

type RiderProps = {
    name: string
    number: number
}

type RiderDTO = {
    id: number
    name: string
    number: number
}

const Rider: React.FC<RiderProps> = ({name, number}) => {
    return (<div>{number.toString().padStart(2, '0')} | {name}</div>)
}

const RIDERS_API_URL = "localhost:1234"

export const Riders: React.FC = () => {

    const [error, setError] = useState<{message: string} | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [riders, setRiders] = useState<RiderDTO[]>([]);

    useEffect(() => {
        fetch(`http://${RIDERS_API_URL}/v1/riders`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setRiders(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    let ridersComponent;
    if (error) {
        ridersComponent = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        ridersComponent = <div>Loading...</div>;
    } else {
        ridersComponent = <ul>
            {riders.map((rider) => <Rider key={rider.id} name={rider.name} number={rider.number}/>)}
        </ul>;
    }

    return (
        <>
            <Navigation/>
            <Content>
                <h2>Riders</h2>
                {ridersComponent}
            </Content>
        </>
        );
    
};

export default Riders