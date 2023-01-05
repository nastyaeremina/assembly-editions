import React from "react";
import {
    IconView,
    IconWithoutView,
    Icon
} from "./styles";
import Image from "next/image";

export default function Iconview({className}) {
    return (
        <>
       
            <IconView className={className}>
            <div className="icon-inner">
                <IconWithoutView className="icon default-state"></IconWithoutView>
                <Icon className="icon loading-state">
                    <div>
                    <Image src='/images/Ellipse-1018.png' width={20} height={20} alt='process-icon' />
                    </div>
                </Icon>
                <Image className="icon done-state" src='/images/true-icon.svg' width={20} height={20} alt='link-icon' />
                </div>
            </IconView>
        
        </>
    )
}


