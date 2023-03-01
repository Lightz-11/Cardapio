import { styled } from "../../stitches.config";

export const ImgContainer = styled("body", {

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'

});

export const Container = styled('div', {

    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    padding: '2rem',

    backdropFilter: 'brightness(0.2)',

});

export const Header = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    flexDirection: 'column',
    gap: '1rem',

    a: {
        color: "white",
        fontSize: "1.8rem",
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        alignSelf: 'flex-start',
        gap: '0.5rem',
        fontWeight: 700,
        border: '2px solid transparent',
        padding: '.7rem .7rem .7rem .2rem',
        borderRadius: '10px',
        transition: '.4s ease'
    },

    'a:hover': {
        border: '2px solid white'
    },

    h1: {
        color: 'white',
        fontSize: '2.2rem',
        textAlign: 'center',
        marginTop: '1rem'
    },

    '.vazio': {
        width: '98px'
    }

});

export const Main = styled("div", {

    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    height: "calc(100% - 110px)",
    padding: "2rem 2.5rem",
    overflowY: "auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",

    h1: {
        color: "white",
        fontSize: "2.2rem",
        textAlign: 'center'
    },

    img: {
        marginBottom: "1rem"
    }
});

export const Title = styled("h2", {
    color: "white",
    fontWeight: 700
});

export const Desc = styled("span", {
    color: "white",
    fontWeight: 100
});

export const Info = styled("div", {
    marginBottom: "0rem",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem"
});
