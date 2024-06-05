import { ImageSource, Loader } from "excalibur";
import logo from "./images/logo.png"
import logovertical from "./images/logoV.png"

export const Resources = {
  Logo: new ImageSource (logo),
  LogoV: new ImageSource (logovertical)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}

export enum AnimationStrategy {
  Loop = 'loop',
}



