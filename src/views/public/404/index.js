import { SharedImage } from "constants/image-constant";
import ImageWrapper from "components/image-wrapper";

const { Notfound } = SharedImage;
const ImageStyle = {
    marginTop:"100px",
    marginBottom:"100px"
}

export default function NowFoundPage () {
    return(
        <ImageWrapper style={ImageStyle} src={Notfound} alt="404"/>
    )
}