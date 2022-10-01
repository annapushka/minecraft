import { TextureLoader } from 'three'
import {
    dirtImg,
    glassImg,
    grassImg,
    logImg,
    woodImg
} from './images'

const dirtTexture = new TextureLoader(dirtImg);
const glassTexture = new TextureLoader(glassImg);
const grassTexture = new TextureLoader(grassImg);
const logTexture = new TextureLoader(logImg);
const woodTexture = new TextureLoader(woodImg);
const groundTexture = new TextureLoader(grassImg);

export {
    dirtTexture,
    glassTexture,
    grassTexture,
    logTexture,
    woodTexture,
    groundTexture,
}