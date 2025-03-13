import { CSSProperties } from "react";
import { isMobile } from "react-device-detect";

//For whatever reason isMobile does not work in a ternary operator, so this function will have to do I guess.
export function MobileConditionalString(mobile: string, notMobile: string)
{
    if(!isMobile)
    {
        return notMobile;
    }

    return mobile;
}

export function MobileConditionalStyle(mobile: CSSProperties, notMobile: CSSProperties)
{
    if(!isMobile)
    {
        return notMobile;
    }

    return mobile;
}