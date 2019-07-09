import BattalionImage from "./BatalionDetachment.png";
import SpearheadImage from "./SpearheadDetachment.png";

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
		Image: SpearheadImage
    };
    Detachments.push(Detach3);

    const Detach4 = {
        id: 4,
        Name: "Brigade",
		CommandBenefit: 1,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach4);

    const Detach5 = {
        id: 5,
        Name: "Vanguard",
		CommandBenefit: 1,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach5);

    const Detach6 = {
        id: 6,
        Name: "Outrider",
		CommandBenefit: 1,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach6);

    const Detach7 = {
        id: 7,
        Name: "Supreme Command",
		CommandBenefit: 1,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach7);

    const Detach8 = {
        id: 8,
        Name: "Super Heavy",
		CommandBenefit: 3,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach8);

    const Detach9 = {
        id: 9,
        Name: "Super Heavy Auxillary",
		CommandBenefit: 0,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach9);

    const Detach10 = {
        id: 10,
        Name: "Air Wing",
		CommandBenefit: 1,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach10);

    const Detach11 = {
        id: 11,
        Name: "Fortification",
		CommandBenefit: 0,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach11);

    const Detach12 = {
        id: 12,
        Name: "Auxillary Support",
		CommandBenefit: -1,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach12);

    return Detachments;
} 

export default ReturnDetachments;