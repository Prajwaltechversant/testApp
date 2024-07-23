

export interface StyleProps {
    screenContext:any,
    width?:number,
    height?:number,
    colors?:any
}

export interface ScreenContextType {
    windowHeight: number;
    windowWidth: number;
    windowFontScale: number;
    windowScale: number;
    windowisPortrait: boolean;
    // isTabletType?: boolean;
  }