import Image from "next/image"
import testImage from "../public/testImage.jpg"

const ImageTest = () => (
	<Image src={testImage} alt="A stack of colorful cans" layout="fill" />
)

export default ImageTest