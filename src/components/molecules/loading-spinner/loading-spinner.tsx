import React from 'react';

import Container from '../../atoms/container';
import {StyledLoadingSpinner} from "./loading-spinner.styles";

const LoadingSpinner = () => {
    return (
        <Container>
            <StyledLoadingSpinner className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
                <p>Loading...</p>
            </StyledLoadingSpinner>
        </Container>
    );
};

export default LoadingSpinner;
