import { styled } from "../../stitches.config";

export const Container = styled("div", {
    
    width: "100%",
    height: "100%",
    borderRadius: 0,
    border: "none",
    position: 'fixed',
    overflow: 'hidden',
    top: 0,
    left: 0,
});

export const Header = styled('div', {

    position: 'fixed',
    zIndex: 2,
    width: '100%',
    padding: "2rem 2.5rem 0rem 2.5rem",
    top: 0,

    h1: {
        color: "white",
        fontSize: "2.5rem",
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },

});

export const Main = styled("div", {

    padding: "12rem 2.5rem 2rem 2.5rem",
    height: "100%",
    width: '100%',
    overflow: "hidden",
    position: 'fixed'

});

export const Grid = styled("div", {

    display: "grid",
    gap: "2rem",
    maxHeight: "100%",
    borderRadius: "0rem 0rem 2rem 2rem",
    overflowY: "auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",

    h1: {
        color: "white",
        fontSize: "2.5rem"
    },

});
