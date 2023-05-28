export const useRandomRgb = () => {
    function randomRGB() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let RGBColor = "rgb(" + x + "," + y + "," + z + ")";
        return RGBColor
    }


    return {randomRGB}
}