import { styled } from "../../stitches.config";

export const Container = styled("div", {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(30,30,30)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
});

export const Celular = styled("div", {
    height: "90%",
    width: "40rem",
    border: "3px solid #ffffff30",
    borderRadius: "5rem",
    position: "relative",
    background: "rgb(10,10,10)",

    ".row": {
        display: "flex",
        padding: "1rem 2.5rem",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4rem",
        width: "100%"
    },

    a: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
        textDecoration: "none",
        color: "White"
    },

    ".vazio": {
        width: "72px"
    },

    h1: {
        color: "white",
        fontSize: "2.5rem",
        textAlign: "center"
    },

    "@sm": {
        width: "100%",
        height: "100%",
        borderRadius: 0,
        border: "none"
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

export const Main = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    height: "calc(100% - 110px)",
    padding: "0rem 2.5rem",
    overflowY: "auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",

    img: {
        marginBottom: "1rem"
    }
});

export const Title = styled("h2", {
    color: "#aaaaaa",
    fontWeight: 700
});

export const Desc = styled("span", {
    color: "white",
    fontWeight: "100"
});

export const Info = styled("div", {
    marginBottom: "0rem",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem"
});