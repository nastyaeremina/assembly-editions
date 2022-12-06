import Link from 'next/link'
import { React, useEffect, useState } from 'react'
import { ButtonContainer, Blur } from './style'

function myFunction(e) {
    e.target.style.setProperty("--cursor-x", (e.clientX - e.target.offsetLeft));
    e.target.style.setProperty("--cursor-y", (e.clientY - e.target.offsetTop - document.body.getBoundingClientRect().top));
}
export default function Button({ bgColor, hoverColor, borderColor, fontColor, href, text }) {

    return (
        <ButtonContainer onMouseMove={(e) => myFunction(e)} backgroundColor={bgColor} hoverColor={hoverColor} borderColor={borderColor} fontColor={fontColor}>
            <Link href={href}>{text}</Link>
        </ButtonContainer>
    )
}
