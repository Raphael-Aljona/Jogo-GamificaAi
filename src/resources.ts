import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import logo from "./images/logo.png"
import logovertical from "./images/logoV.png"
import bgGamificacao from "./images/gamificacao.png"
import aprender from "./images/aprender.png"
import reciclagem from "./images/reciclagem.png"
import comida from "./images/comida.png"

// Audio
import ritmadaBGM from "./sounds/ritmada_zelda.mp3"

import { TiledResource } from "@excaliburjs/plugin-tiled";

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"
import tsxParedesPath from "./maps/tileset_paredes.tsx?url"
import tsxGenericPath from "./maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./maps/tileset_biblioteca.tsx?url"


import tmxMapaPath from "./maps/showroom_map.tmx?url"

import playerSpritePath from "./sprites/Player.png"
import npcASpritePath from "./sprites/npcA.png"
import npcBSpritePath from "./sprites/npcB.png"
import npcCSpritepath from "./sprites/npcC.png"

export const Resources = {
  Logo: new ImageSource (logo),
  LogoV: new ImageSource (logovertical),
  bgGamificacao: new ImageSource (bgGamificacao),

  Aprender: new ImageSource (aprender),
  Reciclagem: new ImageSource (reciclagem),
  Comida: new ImageSource (comida),

  PlayerSpriteSheet: new ImageSource (playerSpritePath, {filtering: ImageFiltering.Pixel}),
  npcASpriteSheet: new ImageSource (npcASpritePath, {filtering:ImageFiltering.Pixel} ),
  npcBSpriteSheet: new ImageSource (npcBSpritePath, {filtering:ImageFiltering.Pixel} ),
  npcCSpriteSheet: new ImageSource (npcCSpritepath, {filtering:ImageFiltering.Pixel} ),

  musicaBGM: new Sound(ritmadaBGM),

  Mapa: new TiledResource (tmxMapaPath, {
    pathMap: [
      { path: "showroom_map.tmx", output: tmxMapaPath },
      {path: "Room_Builder_32x32.png", output: pngTilesetPath},
      {path:"tileset_paredes.tsx", output: tsxParedesPath},
      {path: "tileset_generic.tsx", output: tsxGenericPath},
      {path: "tileset_estoque.tsx", output: tsxEstoquePath},
      {path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath},
    ]
  }),
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}

export enum AnimationStrategy {
  Loop = 'loop',
}



