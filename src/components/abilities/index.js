import { HabilityDiv, HabilityImg, HabilityTitle } from "./styles";

function Ability(props) {
    return (
        <HabilityDiv>
            <HabilityImg src={props.img} />
            <HabilityTitle>{props.title}</HabilityTitle>
        </HabilityDiv>
    );
};

export default Ability;