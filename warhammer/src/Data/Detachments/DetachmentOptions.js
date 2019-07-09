const ReturnDetachmentOptions = (DetachmentId) => {
    let Options = [];

    //Troops 
    const Option1 = {
        id: 1,
		UnitRole: 1,
		MaxQuant: 3,
        MinQuant: 1,
        DetachmentIds: [3]
    };
    Options.push(Option1);

    const Option2 = {
        id: 2,
		UnitRole: 1,
		MaxQuant: 6,
		MinQuant: 3,
        DetachmentIds: [1]
    };
    Options.push(Option2);

    const Option3 = {
        id: 3,
		UnitRole: 1,
		MaxQuant: 12,
		MinQuant: 6,
        DetachmentIds: [4]
    };
    Options.push(Option3);

    const Option4 = {
        id: 4,
		UnitRole: 1,
		MaxQuant: 3,
		MinQuant: 0,
        DetachmentIds: [2,5,6]
    };
    Options.push(Option4);
    //=============

    //HQ
    const Option5 = {
        id: 5,
		UnitRole: 3,
		MaxQuant: 2,
		MinQuant: 1,
        DetachmentIds: [3,2,5,6]
    };
    Options.push(Option5);

    const Option6 = {
        id: 6,
		UnitRole: 3,
		MaxQuant: 3,
		MinQuant: 2,
        DetachmentIds: [1]
    };
    Options.push(Option6);

    const Option7 = {
        id: 7,
		UnitRole: 3,
		MaxQuant: 5,
		MinQuant: 3,
        DetachmentIds: [4,7]
    };
    Options.push(Option7);
    //=============

    //Elites
    const Option9 = {
        id: 9,
		UnitRole: 2,
		MaxQuant: 2,
		MinQuant: 0,
        DetachmentIds: [3,2,6]
    };
    Options.push(Option9);

    const Option10 = {
        id: 10,
		UnitRole: 2,
		MaxQuant: 6,
		MinQuant: 0,
        DetachmentIds: [1]
    };
    Options.push(Option10);

    const Option11 = {
        id: 11,
		UnitRole: 2,
		MaxQuant: 8,
		MinQuant: 3,
        DetachmentIds: [4]
    };
    Options.push(Option11);

    const Option12 = {
        id: 12,
		UnitRole: 2,
		MaxQuant: 6,
		MinQuant: 3,
        DetachmentIds: [5]
    };
    Options.push(Option12);

    const Option13 = {
        id: 13,
		UnitRole: 2,
		MaxQuant: 1,
		MinQuant: 0,
        DetachmentIds: [7]
    };
    Options.push(Option13);
    //=============

    //Fast Attack
    const Option14 = {
        id: 14,
		UnitRole: 4,
		MaxQuant: 2,
		MinQuant: 0,
        DetachmentIds: [3,5,2]
    };
    Options.push(Option14);

    const Option15 = {
        id: 15,
		UnitRole: 4,
		MaxQuant: 3,
		MinQuant: 0,
        DetachmentIds: [1]
    };
    Options.push(Option15);

    const Option16 = {
        id: 16,
		UnitRole: 4,
		MaxQuant: 5,
		MinQuant: 3,
        DetachmentIds: [4]
    };
    Options.push(Option16);

    const Option17 = {
        id: 17,
		UnitRole: 4,
		MaxQuant: 6,
		MinQuant: 3,
        DetachmentIds: [6]
    };
    Options.push(Option17);
    //=============

    //Heavy Support
    const Option18 = {
        id: 18,
		UnitRole: 5,
		MaxQuant: 2,
		MinQuant: 0,
        DetachmentIds: [3,5,6]
    };
    Options.push(Option18);

    const Option19 = {
        id: 19,
		UnitRole: 5,
		MaxQuant: 3,
		MinQuant: 0,
        DetachmentIds: [1]
    };
    Options.push(Option19);

    const Option20 = {
        id: 20,
		UnitRole: 5,
		MaxQuant: 5,
		MinQuant: 3,
        DetachmentIds: [4]
    };
    Options.push(Option20);

    const Option21 = {
        id: 21,
		UnitRole: 5,
		MaxQuant: 6,
		MinQuant: 3,
        DetachmentIds: [2]
    };
    Options.push(Option21);
    //=============

    //Flyers
    const Option22 = {
        id: 22,
		UnitRole: 7,
		MaxQuant: 2,
		MinQuant: 0,
        DetachmentIds: [1,2,3,4,5,6]
    };
    Options.push(Option22);

    const Option23 = {
        id: 23,
		UnitRole: 7,
		MaxQuant: 5,
		MinQuant: 3,
        DetachmentIds: [10]
    };
    Options.push(Option23);
    //=============

    //Dedicated Transport
    const Option24 = {
        id: 24,
		UnitRole: 6,
		MaxQuant: null,
		MinQuant: null,
        DetachmentIds: [1,2,3,4,5,6,7,12]
    };
    Options.push(Option24);
    //=============

    //Lords of War
    const Option25 = {
        id: 25,
		UnitRole: 9,
		MaxQuant: 1,
		MinQuant: 0,
        DetachmentIds: [7]
    };
    Options.push(Option25);

    const Option26 = {
        id: 26,
		UnitRole: 9,
		MaxQuant: 1,
		MinQuant: 1,
        DetachmentIds: [9]
    };
    Options.push(Option26);

    const Option27 = {
        id: 27,
		UnitRole: 9,
		MaxQuant: 5,
		MinQuant: 3,
        DetachmentIds: [8]
    };
    Options.push(Option27);
    //=============

    //Fortification
    const Option28 = {
        id: 28,
		UnitRole: 8,
		MaxQuant: 3,
		MinQuant: 1,
        DetachmentIds: [11]
    };
    Options.push(Option28);
    //=============

    return Options.filter((option) => !!option.DetachmentIds.find((id) => parseInt(id) == parseInt(DetachmentId)));
}

export default ReturnDetachmentOptions;