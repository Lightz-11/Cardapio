import { Link } from "react-router-dom";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
    a: {
        display: "flex",
        width: "100%",
        height: "162px",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },

    img: {
        width: '100%',
        height: '162px',
        borderRadius: "2rem",
        objectFit: "cover",
    },

    '@lg': {
        a: {
            height: '324px'
        },

        img: {
            height: '324px'
        },
    },

    h1: {
        marginTop: "1rem",
        marginBottom: ".5rem",
        textTransform: "capitalize",
        fontSize: "1.8rem",
        fontWeight: 100,
        paddingLeft: "1rem",
        color: "grey"
    },

    span: {
        textTransform: "capitalize",
        fontSize: "1.6rem",
        fontWeight: 700,
        paddingLeft: "2rem",
        color: "white"
    }
});
