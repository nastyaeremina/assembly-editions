import Link from 'next/link'
import { React, useEffect, useState } from 'react'
import { ButtonContainer, Blur } from './style'

export default function Button({ bgColor, hoverColor, borderColor, fontColor, href, text }) {
    const [state, setState] = useState({
        left: 0,
        top: 0
    })
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setState({ left: (e.clientX - e.target.offsetLeft), top: (e.clientY - e.target.offsetTop) });
        }, [])
    })
    return (
        <ButtonContainer backgroundColor={bgColor} hoverColor={hoverColor} borderColor={borderColor} fontColor={fontColor}>
            <Link href={href}>{text}</Link>
            <Blur position={state}>Click</Blur>
        </ButtonContainer>
    )
}
