import React, { useEffect, useState } from 'react';
import { PreloaderWrapper, Container, Ring, LoadingText } from './pre-loader.styles';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    return (
        <PreloaderWrapper>
            <Container>
                <Ring className="ring"></Ring>
                <Ring className="ring"></Ring>
                <Ring className="ring"></Ring>
                <LoadingText>Loading...</LoadingText>
            </Container>
        </PreloaderWrapper>
    )
};

export default Preloader;