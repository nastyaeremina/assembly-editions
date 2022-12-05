import Link from 'next/link'
import { React, useEffect, useState } from 'react'
import { ButtonContainer, Blur } from './style'

export default function Button({ bgColor, hoverColor, borderColor, fontColor, href, text }) {
    return (
        <ButtonContainer onMouseMove={(e)=>myFunction(e)} backgroundColor={bgColor} hoverColor={hoverColor} borderColor={borderColor} fontColor={fontColor}>
            <Link href={href}>{text}</Link>
        </ButtonContainer>
    )
}
