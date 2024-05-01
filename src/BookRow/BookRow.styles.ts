import styled from "styled-components";

export const Container = styled.div`
    z-index: 1;
    perspective: 3000px;

    .book {
        position: relative;
        display: block;
        width: 200px;
        height: 350px;
        margin: 5% auto;
        border-radius: 2px 4px 4px 2px;
        background: linear-gradient(45deg, #dad5dc 0%, #f2ebf4 100%);
        font-family: acumin-pro, sans-serif;
        box-shadow: 4px 4px 8px 0px rgba(151, 146, 153, 0.6);
        font-weight: 400;
        color: #2b2b2b;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }

    .book:hover {
        -webkit-transform: rotate3d(0, 1, 0, 35deg);
        -moz-transform: rotate3d(0, 1, 0, 35deg);
        transform: rotate3d(0, 1, 0, 35deg);
    }

    .book > div,
    .front > div {
        /* display: block; */
        position: absolute;
    }

    .front {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform-origin: 0% 50%;
        -moz-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        -webkit-transition: -webkit-transform 0.5s;
        -moz-transition: -moz-transform 0.5s;
        transition: transform 0.5s;
        -webkit-transform: translate3d(0, 0, 20px);
        -moz-transform: translate3d(0, 0, 20px);
        transform: translate3d(0, 0, 20px);
        z-index: 10;
    }

    .front > div {
        width: 200px;
        height: 350px;
    }

    .left-side {
        width: 40px;
        left: -20px;
        height: 350px;
        background-color: rgba(232, 229, 234);
        -webkit-transform: rotate3d(0, 1, 0, -90deg);
        -moz-transform: rotate3d(0, 1, 0, -90deg);
        transform: rotate3d(0, 1, 0, -90deg);
    }

    .cover .id {
        font-size: 10px;
    }

    .cover .price {
        font-size: 8pt;
    }

    .title {
        font-family: acumin-pro, sans-serif;
        font-weight: 400;
        width: 90%;
        opacity: 0.8;
        overflow-wrap: break-word;
    }

    .front > div {
        border-radius: 0 3px 3px 0;
        box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);
    }

    .front:after {
        content: "";
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: -1px;
        width: 1px;
    }

    .cover:after {
        content: "";
        position: absolute;
        top: 0;
        left: 10px;
        bottom: 0;
        width: 3px;
        background: rgba(0, 0, 0, 0.1);
        box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
    }

    h2 {
        width: 200px;
        height: 40px;
        color: #2b2b2b;
        font-size: 15px;
        line-height: 40px;
        padding-right: 10px;
        text-align: right;
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        transform-origin: 0 0;
        transform: rotate(90deg) translateY(-40px);
    }

    .cover {
        background: linear-gradient(45deg, #dad5dc 0%, #f2ebf4 100%);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }

    .left-side h2 {
        display: flex;
        width: 325px;
        justify-content: space-around;
    }

    .left-side h2 span:first-child {
        font-weight: 400;
        font-size: 15px;
        padding-right: 20px;
    }

    .left-side h2 span:last-child {
        font-size: 10px;
        font-family: acumin-pro, sans-serif;
    }
`;
