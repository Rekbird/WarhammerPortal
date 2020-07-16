import BattalionImage from "./BatalionDetachment.png";
import SpearheadImage from "./SpearheadDetachment.png";
import PatrolImage from "./PatrolDetachment.png";
import BrigadeImage from "./BrigadeDetachment.png";
import VanguardImage from "./VanguardDetachment.png";
import OtriderImage from "./OutriderDetachment.png";
import SupremeCommandImage from "./SupremeCommandDetachment.png";
import SuperHeavyImage from "./Super-heavyDetachment.png";
import SuperHeavyAuxiliaryImage from "./Super-heavyAuxiliaryDetachment.png";
import AirWingImage from "./AirWingDetachment.png";
import FortificationNetworkImage from "./FortificationNetwork.png";
import AuxiliarySupportImage from "./AuxiliarySupportDetachment.png";

const ReturnDetachments = () => {
    let Detachments = [];
    const Detach1 = {
        id: 1,
        Name: "Batallion",
		CommandBenefit: 5,
		Restrictions: "",
		Image: BattalionImage
    };
    Detachments.push(Detach1);
    const Detach2 = {
        id: 2,
        Name: "Spearhead",
		CommandBenefit: 1,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach2);

    const Detach3 = {
        id: 3,
        Name: "Patrol",
		CommandBenefit: 0,
		Restrictions: "",
		Image: PatrolImage
    };
    Detachments.push(Detach3);

    const Detach4 = {
        id: 4,
        Name: "Brigade",
		CommandBenefit: 1,
		Restrictions: "",
		Image: BrigadeImage
    };
    Detachments.push(Detach4);

    const Detach5 = {
        id: 5,
        Name: "Vanguard",
		CommandBenefit: 1,
		Restrictions: "",
		Image: VanguardImage
    };
    Detachments.push(Detach5);

    const Detach6 = {
        id: 6,
        Name: "Outrider",
		CommandBenefit: 1,
		Restrictions: "",
		Image: OtriderImage
    };
    Detachments.push(Detach6);

    const Detach7 = {
        id: 7,
        Name: "Supreme Command",
		CommandBenefit: 1,
		Restrictions: "",
		Image: SupremeCommandImage
    };
    Detachments.push(Detach7);

    const Detach8 = {
        id: 8,
        Name: "Super Heavy",
		CommandBenefit: 3,
		Restrictions: "",
		Image: SuperHeavyImage
    };
    Detachments.push(Detach8);

    const Detach9 = {
        id: 9,
        Name: "Super Heavy Auxillary",
		CommandBenefit: 0,
		Restrictions: "",
		Image: SuperHeavyAuxiliaryImage
    };
    Detachments.push(Detach9);

    const Detach10 = {
        id: 10,
        Name: "Air Wing",
		CommandBenefit: 1,
		Restrictions: "",
		Image: AirWingImage
    };
    Detachments.push(Detach10);

    const Detach11 = {
        id: 11,
        Name: "Fortification Network",
		CommandBenefit: 0,
		Restrictions: "",
		Image: FortificationNetworkImage
    };
    Detachments.push(Detach11);

    const Detach12 = {
        id: 12,
        Name: "Auxillary Support",
		CommandBenefit: -1,
		Restrictions: "",
		Image: AuxiliarySupportImage
    };
    Detachments.push(Detach12);

    return Detachments;
} 

export default ReturnDetachments;