import { NavigationWrapper, NavLink } from "./Navigation.styles"

export const Navigation: React.FC = () => {
    return (
        <>
            <NavigationWrapper>
                <NavLink to="/">Home</NavLink> |{" "}
                <NavLink to="/riders">Riders</NavLink> |{" "}
                <NavLink to="/track-stats">Track Stats</NavLink>
            </NavigationWrapper>
        </>
        );
    
};

export default Navigation;