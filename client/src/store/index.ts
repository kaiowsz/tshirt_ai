import { proxy } from "valtio"

interface State {
    intro: boolean;
    isLogoTexture: boolean;
    isFullTexture: boolean;
    logoDecal: string;
    fullDecal: string;
    color: any;
}

const state: State = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./threejs.png",
    fullDecal: "./threejs.png"
})

export default state