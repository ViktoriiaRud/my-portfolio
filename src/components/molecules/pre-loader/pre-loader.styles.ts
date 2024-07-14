import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const animate2 = keyframes`
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

export const PreloaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #111;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Ring = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    margin: -30px;
    border: 4px solid transparent;
    border-radius: 50%;
    border-top: 4px solid #24ecff;
    animation: ${animate} 4s linear infinite;

    &::before {
        content: '';
        position: absolute;
        top: 12px;
        right: 12px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: #24ecff;
        box-shadow: 0 0 0 5px #24ecff33,
        0 0 0 10px #24ecff22,
        0 0 0 20px #24ecff11,
        0 0 20px #24ecff,
        0 0 50px #24ecff;
    }

    &:nth-child(2) {
        animation: ${animate2} 4s linear infinite;
        animation-delay: -1s;
        border-left: 4px solid #93ff2d;
        border-top: 4px solid transparent;

        &::before {
            top: initial;
            bottom: 12px;
            left: 12px;
            background: #93ff2d;
            box-shadow: 0 0 0 5px #93ff2d33,
            0 0 0 10px #93ff2d22,
            0 0 0 20px #93ff2d11,
            0 0 20px #93ff2d,
            0 0 50px #93ff2d;
        }
    }

    &:nth-child(3) {
        animation: ${animate2} 4s linear infinite;
        animation-delay: -3s;
        position: absolute;
        top: -66.66px;
        border-top: 4px solid transparent;
        border-left: 4px solid #e41cf8;

        &::before {
            top: initial;
            bottom: 12px;
            left: 12px;
            background: #e41cf8;
            box-shadow: 0 0 0 5px #e41cf833,
            0 0 0 10px #e41cf822,
            0 0 0 20px #e41cf811,
            0 0 20px #e41cf8,
            0 0 50px #e41cf8;
        }
    }
`;

export const LoadingText = styled.p`
    position: absolute;
    color: #fff;
    font-size: 1.5em;
    font-family: ${({theme}) => theme.font3};
    bottom: -80px;
    letter-spacing: 0.15em;
`;