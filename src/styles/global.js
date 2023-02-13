import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
    ":root": {
        fontSize: "62.5%",
        overflow: "hidden",
        "touch-action": 'none'
    },

    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontSize: "1.6rem",
        overflow: "hidden",
        "::-webkit-scrollbar": {
            backgroundColor: "#1d1d1d",
            //width: '7px',
            width: "0px",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px"
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: "#5b5b5b",
            borderRadius: "5px"
        }
    },

    body: {
        width: "100vw",
        minHeight: "100vh",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "rgb(10,10,10)",
        overflow: "hidden",
        "touch-action": 'none'
    },

    button: {
        cursor: "pointer"
    }

    // 'input:-webkit-autofill': {
    //   '-webkit-box-shadow': '0 0 0 30px rgb(27,27,27) inset'
    // },
});
