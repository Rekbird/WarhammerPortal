import WarhammerLogo from "../Data/1200px-Games_Workshop_logo.svg.png";
import WahapediaLogo from "../Data/Wahapedia-logo.png";

function GetUsefulLinks() {
    var WarhammerLink = {
        id: 1,
        logo : WarhammerLogo,
        link : "https://www.games-workshop.com"
    };
    var WahapediaLink = {
        id: 2,
        logo : WahapediaLogo,
        link : "http://wahapedia.ru"
    }
    return [WarhammerLink, WahapediaLink];
}

export default GetUsefulLinks;