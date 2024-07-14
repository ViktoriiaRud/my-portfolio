import React, { useEffect, useState } from 'react';
import { PreloaderWrapper, Container, Ring, LoadingText } from './pre-loader.styles';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (!loading) {
        return null;
    }

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