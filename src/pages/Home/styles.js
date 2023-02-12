import { styled } from "../../stitches.config";

export const Container = styled("div", {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(30,30,30)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
});

export const Celular = styled("div", {
    height: "90%",
    width: "40rem",
    border: "3px solid #ffffff30",
    borderRadius: "5rem",
    position: "relative",
    background: "rgb(10,10,10)",
    overflow: "hidden",

    "@sm": {
        width: "100%",
        height: "100%",
        borderRadius: 0,
        border: "none",
        position: 'fixed',
        top: 0,
        left: 0
    }
});

export const MenuSuperior = styled("div", {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    margin: "1.5rem 3rem",

    span: {
        color: "white",
        fontSize: "1.8rem",
        fontFamily: "monospace",
        position: "relative",
        bottom: 3
    },

    div: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem"
    }
});

export const MenuInferior = styled("div", {
    width: "15rem",
    height: ".5rem",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "3rem",
    background: "White",
    position: "absolute",
    bottom: 20
});

export const Header = styled('div', {

    position: 'fixed',
    width: '100%',
    padding: "2rem 2.5rem 0rem 2.5rem",
    top: 0,

    h1: {
        color: "white",
        fontSize: "2.5rem"
    },

});

export const Main = styled("div", {
    padding: "12rem 2.5rem 2rem 2.5rem",
    height: "100%",
    overflow: "hidden",

    h1: {
        color: "white",
        fontSize: "2.5rem"
    },

    "@sm": {
        height: "100%"
    }
});

export const Grid = styled("div", {
    display: "grid",
    gap: "2rem",
    maxHeight: "100%",
    borderRadius: "0rem 0rem 2rem 2rem",
    overflowY: "auto",
    paddingBottom: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"
});
