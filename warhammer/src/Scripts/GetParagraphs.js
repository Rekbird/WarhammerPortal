//import ReturnParagraphs from "../Data/paragraphs/Paragraphs.js"


function GetParagraphs(section) {
    var ReceivedParagraphs = [];

    var Paragraph1 = {
        id:1,
        category: "Правила",
        section: "Общие правила",
        header: "Playing This Game",
        body: "Welcome to the rules section of Warhammer 40,000 – a guide to playing games in the war-torn galaxy of the Dark Millennium. As well as including the core rules for engaging in tabletop warfare with your miniatures, this section is packed with different ways to enjoy games of Warhammer 40,000, crammed with inspiration and brimming with battles.",
        style: "none"
    };
    var ReturnParagraphs = [Paragraph1];
    for(var i=0;i<ReturnParagraphs.length;i++) {
        if(ReturnParagraphs[i].section == section) {
            ReceivedParagraphs.push(ReturnParagraphs[i]);
        }
    }
    //return ReceivedParagraphs;
    return ReturnParagraphs;
}

export default GetParagraphs;