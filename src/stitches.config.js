import { createStitches } from "@stitches/react";

export const { styled, css, keyframes } = createStitches({
    media: {
        sm: "(max-width: 370px)",
        md: "(max-width: 420px)",
        lg: "(min-width: 540px)",
    }
});